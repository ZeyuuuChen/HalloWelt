// ============================================================
// GAME ENGINE
// ============================================================

const STORAGE_KEY = 'munich_progress';
const STUDY_DEFAULTS = {
  participantId: '',
  condition: 'full',
  logs: [],
  assessments: {},
  survey: {},
  startedAt: null
};

const Game = {
  currentScene: null,
  currentVocabId: null,
  currentVocabType: 'word',
  currentDialogue: null,
  outputChallenge: null,
  pendingMapReturn: false,
  graphSelectedId: null,
  mapMode: 'munich',
  assessmentState: null,
  knowledgeTab: 'words',
  knowledgeFilter: 'all',

  // ── Progress ─────────────────────────────────────────────
  loadProgress() {
    const blank = { words: {}, phrases: {}, scenes: [], completedOutputs: {}, study: { ...STUDY_DEFAULTS } };
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || blank;
      data.words = data.words || {};
      data.phrases = data.phrases || {};
      data.scenes = data.scenes || [];
      data.completedOutputs = data.completedOutputs || {};
      data.study = { ...STUDY_DEFAULTS, ...(data.study || {}) };
      data.study.logs = data.study.logs || [];
      data.study.assessments = data.study.assessments || {};
      data.study.survey = data.study.survey || {};
      return data;
    }
    catch { return blank; }
  },
  saveProgress(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); },
  getStudy() { return this.loadProgress().study; },
  updateStudy(patch) {
    const p = this.loadProgress();
    p.study = { ...STUDY_DEFAULTS, ...(p.study || {}), ...patch };
    this.saveProgress(p);
    return p.study;
  },
  logEvent(type, details = {}) {
    const p = this.loadProgress();
    p.study = { ...STUDY_DEFAULTS, ...(p.study || {}) };
    const entry = {
      ts: new Date().toISOString(),
      elapsedMs: p.study.startedAt ? Date.now() - p.study.startedAt : 0,
      participantId: p.study.participantId || '',
      condition: p.study.condition || 'full',
      scene: this.currentScene || '',
      type,
      details
    };
    p.study.logs = [...(p.study.logs || []), entry].slice(-2000);
    this.saveProgress(p);
  },
  hasMechanism(name) {
    const condition = this.getStudy().condition || 'full';
    const cfg = EXPERIMENT_CONDITIONS[condition] || EXPERIMENT_CONDITIONS.full;
    return cfg.mechanisms.includes(name);
  },
  markSeen(id, type) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    if (!s[id]) s[id] = this._newKnowledgeEntry('new');
    s[id].lastSeenAt = Date.now();
    this.saveProgress(p);
  },
  setStatus(id, type, status) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    const old = s[id] || this._newKnowledgeEntry('new');
    const quality = { learned: 5, fuzzy: 3, unknown: 1 }[status] || 3;
    const review = this.nextReview(quality, old.easeFactor || 2.5, old.interval || 1);
    s[id] = {
      ...old,
      status,
      seenAt: old.seenAt || Date.now(),
      lastSeenAt: Date.now(),
      interval: review.interval,
      easeFactor: review.ef,
      dueAt: Date.now() + review.interval * 86400000,
      reviewCount: (old.reviewCount || 0) + 1,
      quality
    };
    this.saveProgress(p);
    this.updateKnowledgeBadge();
    this.renderAdaptivePanel();
    this.renderReviewDock();
    if (this.mapMode === 'level') this.renderMap();
  },
  getStatus(id, type) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    return (s[id] || {}).status || 'new';
  },
  _newKnowledgeEntry(status) {
    return {
      status,
      seenAt: Date.now(),
      lastSeenAt: Date.now(),
      interval: 1,
      easeFactor: 2.5,
      dueAt: Date.now(),
      reviewCount: 0,
      quality: 0
    };
  },
  nextReview(quality, easeFactor, interval) {
    if (quality < 3) return { interval: 1, ef: easeFactor };
    const newEF = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    const newInterval = interval === 1 ? 6 : Math.round(interval * newEF);
    return { interval: newInterval, ef: Math.max(1.3, newEF) };
  },

  // ── Screens ──────────────────────────────────────────────
  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  },
  start() {
    const study = this.getStudy();
    if (!study.startedAt) this.updateStudy({ startedAt: Date.now() });
    this.logEvent('game_start', { condition: this.getStudy().condition });
    this.showScreen('screen-map');
    this.updateKnowledgeBadge();
    this.renderReviewDock();
    this.renderMap();
  },
  goToMap() {
    if (this.currentScene && this.needsOutputChallenge(this.currentScene)) {
      this.startOutputChallenge(this.currentScene);
      return;
    }
    Player.destroy();
    this.currentScene = null;
    this.showScreen('screen-map');
    this.updateKnowledgeBadge();
    this.renderReviewDock();
    this.renderMap();
  },

  renderMap() {
    const el = document.getElementById('map-svg-wrapper');
    if (!el) return;
    el.innerHTML = this.mapMode === 'level' ? this.buildLevelMapSVG() : MAP_SVG;
    if (this.mapMode === 'munich') this.ensureHauptbahnhofPin();
    const btn = document.getElementById('map-mode-btn');
    if (btn) btn.textContent = this.mapMode === 'level' ? 'Munich Map' : 'Level Map';
  },
  ensureHauptbahnhofPin() {
    const svg = document.querySelector('#map-svg-wrapper .munich-map-svg');
    if (!svg) return;
    const old = svg.querySelector('#pin-hauptbahnhof');
    if (old) old.remove();
    svg.insertAdjacentHTML('beforeend', `
      <g id="pin-hauptbahnhof" class="map-pin" onclick="Game.enterScene('hauptbahnhof')" style="cursor:pointer" transform="translate(250,395)">
        <circle r="58" fill="#455A64" opacity="0">
          <animate attributeName="r" values="38;58;38" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.26;0;0.26" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <ellipse cx="0" cy="44" rx="38" ry="10" fill="rgba(0,0,0,0.28)"/>
        <circle r="38" fill="white" stroke="#455A64" stroke-width="5" filter="url(#mSh)"/>
        <g>
          <circle r="33" fill="#ECEFF1"/>
          <rect x="-25" y="-20" width="50" height="34" fill="#78909C" rx="3"/>
          <rect x="-20" y="-15" width="10" height="10" fill="#B3E5FC"/>
          <rect x="-5" y="-15" width="10" height="10" fill="#B3E5FC"/>
          <rect x="10" y="-15" width="10" height="10" fill="#B3E5FC"/>
          <rect x="-18" y="2" width="36" height="12" fill="#ECEFF1"/>
          <text x="0" y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="#263238" font-family="Arial">Hbf</text>
          <path d="M -28,23 H28" stroke="#455A64" stroke-width="5"/>
          <path d="M -22,28 H22" stroke="#263238" stroke-width="3"/>
        </g>
        <circle r="38" fill="none" stroke="#90A4AE" stroke-width="2.5"/>
        <circle cx="0" cy="-38" r="3.5" fill="#455A64"/><circle cx="38" cy="0" r="3.5" fill="#455A64"/>
        <circle cx="0" cy="38" r="3.5" fill="#455A64"/><circle cx="-38" cy="0" r="3.5" fill="#455A64"/>
        <g transform="translate(0, 52)">
          <rect x="-62" y="-13" width="124" height="26" fill="#455A64" rx="12"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="white" font-family="Arial">Hauptbahnhof</text>
        </g>
      </g>`);
  },
  toggleMapMode() {
    this.mapMode = this.mapMode === 'level' ? 'munich' : 'level';
    this.renderMap();
  },

  // ── Scene Loading ─────────────────────────────────────────
  enterScene(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) return;
    Player.destroy();
    this.currentScene = sceneId;
    this.logEvent('scene_enter', { sceneId });

    const p = this.loadProgress();
    if (!p.scenes.includes(sceneId)) { p.scenes.push(sceneId); this.saveProgress(p); }

    document.getElementById('scene-title').textContent =
      LANG.current === 'zh'
        ? `${scene.nameChinese} · ${scene.name}`
        : `${scene.name} · ${scene.nameChinese}`;

    this.renderScene(scene);
    this.showScreen('screen-scene');

    // Start player
    const cfg = SCENE_LAYOUT[sceneId] || {};
    Player.init(cfg.worldW || 1800, cfg.worldH || 480, cfg.groundY || 340, cfg.startX || 180);

    // Update hint
    document.getElementById('scene-hint').textContent = t('scene_hint');
    this.renderAdaptivePanel();
  },

  renderScene(scene) {
    const canvas = document.getElementById('scene-canvas');
    canvas.innerHTML = '';

    // World layer (scrolls with camera)
    const world = document.createElement('div');
    world.className = 'scene-world';

    const cfg = SCENE_LAYOUT[scene.id] || {};
    const worldW = cfg.worldW || 1800;
    world.style.width  = worldW + 'px';
    world.style.height = '100%';

    // Background SVG
    world.insertAdjacentHTML('beforeend', this.buildBgSVG(scene));

    // Objects
    world.insertAdjacentHTML('beforeend', this.buildObjects(scene));

    // NPCs
    world.insertAdjacentHTML('beforeend', this.buildNPCSprites(scene));

    canvas.appendChild(world);
  },

  buildBgSVG(scene) {
    const w = (SCENE_LAYOUT[scene.id] || {}).worldW || 1800;
    const svg = (typeof SCENE_SVGS !== 'undefined' && SCENE_SVGS[scene.id]) || this.buildSceneFallbackSVG(scene.id);
    return `<div class="scene-svg-wrapper" style="width:${w}px;height:100%">${svg}</div>`;
  },
  buildSceneFallbackSVG(sceneId) {
    if (sceneId !== 'hauptbahnhof') return '';
    return `
      <svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="1800" height="480" fill="#D8ECF8"/>
        <rect x="0" y="95" width="1800" height="250" fill="#CFD8DC"/>
        <path d="M0 120 Q450 30 900 110 T1800 120 V160 H0Z" fill="#ECEFF1"/>
        <rect x="0" y="340" width="1800" height="140" fill="#7A8790"/>
        <g transform="translate(470,300)">
          <rect x="-230" y="-60" width="460" height="92" rx="18" fill="#F5F7F9" stroke="#78909C" stroke-width="5"/>
          <rect x="-210" y="-48" width="410" height="32" rx="10" fill="#B3E5FC"/>
          <path d="M-225 8 H225" stroke="#C62828" stroke-width="8"/>
          <circle cx="-150" cy="36" r="18" fill="#37474F"/><circle cx="150" cy="36" r="18" fill="#37474F"/>
          <text x="-196" y="1" font-size="18" font-weight="900" fill="#263238" font-family="Arial">ICE</text>
        </g>
        <g transform="translate(1360,145)">
          <rect x="-115" y="-58" width="230" height="116" rx="8" fill="#202B33"/>
          <text x="-90" y="-28" font-size="16" font-weight="900" fill="#F5C842" font-family="Arial">Abfahrt</text>
          <text x="18" y="-28" font-size="16" font-weight="900" fill="#8FD6FF" font-family="Arial">Ankunft</text>
          <text x="-90" y="4" font-size="12" fill="#E8F4FD" font-family="Arial">10:04 Nürnberg</text>
          <text x="18" y="4" font-size="12" fill="#E8F4FD" font-family="Arial">10:12 Salzburg</text>
        </g>
        <rect x="640" y="205" width="115" height="42" rx="8" fill="#263238"/>
        <text x="697" y="232" text-anchor="middle" font-size="21" font-weight="900" fill="white" font-family="Arial">Gleis 5</text>
      </svg>`;
  },

  buildObjects(scene) {
    const recommended = new Set(this.getRecommendedWords(scene.id).map(item => item.id));
    const due = new Set(this.getDueWords(scene.id).map(item => item.id));
    return scene.objects.map(obj => {
      const wx = obj.worldX, wy = obj.worldY, ww = obj.worldW || 80, wh = obj.worldH || 80;
      const flags = [
        this.hasMechanism('graph') && recommended.has(obj.vocabId) ? '<div class="world-object-de">i+1</div>' : '',
        due.has(obj.vocabId) ? '<div class="world-object-de due">review</div>' : ''
      ].join('');
      return `
        <div class="world-object"
             style="left:${wx}px;top:${wy - wh}px;width:${ww}px;height:${wh}px"
             onclick="Game.openVocab('${obj.vocabId}')">
          <div class="world-object-icon">${obj.emoji}</div>
          <div class="world-object-label">${obj.label}</div>
          ${flags}
        </div>`;
    }).join('');
  },

  buildNPCSprites(scene) {
    return scene.npcs.map(npc => `
      <div class="world-npc"
           style="left:${npc.worldX - 28}px;top:${npc.worldY - 72}px;background:${npc.color}"
           onclick="Game.openDialogue('${npc.dialogueId}','${npc.id}')">
        <div class="world-npc-bubble">💬</div>
        <div class="world-npc-emoji">${npc.emoji}</div>
        <div class="world-npc-name">${npc.label}</div>
      </div>`).join('');
  },

  getWordEntry(id) {
    const p = this.loadProgress();
    return p.words[id] || null;
  },
  isMastered(id) {
    const entry = this.getWordEntry(id);
    return entry && entry.status === 'learned';
  },
  getDueWords(sceneId) {
    const now = Date.now();
    const scene = SCENES[sceneId];
    if (!scene) return [];
    return scene.objects
      .map(o => ({ id: o.vocabId, entry: this.getWordEntry(o.vocabId) }))
      .filter(item => item.entry && item.entry.dueAt && item.entry.dueAt <= now)
      .map(item => ({ ...VOCAB[item.id], entry: item.entry }));
  },
  getRecommendedWords(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) return [];
    const dueIds = new Set(this.getDueWords(sceneId).map(w => w.id));
    const candidates = scene.objects.map(o => o.vocabId).filter(id => !dueIds.has(id));
    const scored = candidates.map(id => {
      const graph = VOCAB_GRAPH[id] || { level: 1, prerequisites: [] };
      const entry = this.getWordEntry(id);
      const prereq = graph.prerequisites || [];
      const learnedPrereq = prereq.filter(pid => this.isMastered(pid)).length;
      const ready = prereq.length === 0 || learnedPrereq >= prereq.length;
      const cefr = this.getWordLevel(id);
      const levelLocked = cefr === 'A2' && !this.isA2Unlocked();
      const seenPenalty = entry && entry.status === 'learned' ? 10 : entry ? 3 : 0;
      const level = graph.level || 1;
      return { id, ready, score: (ready ? 0 : 5) + (levelLocked ? 20 : 0) + seenPenalty + level / 10, level };
    });
    return scored
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map(item => ({ ...VOCAB[item.id], level: item.level }));
  },
  getWordLevel(id) {
    return CEFR_WORD_LEVELS[id] || 'A1';
  },
  getLevelStats() {
    const p = this.loadProgress();
    return ['A1', 'A2'].reduce((acc, level) => {
      const ids = Object.keys(VOCAB).filter(id => this.getWordLevel(id) === level);
      const seen = ids.filter(id => p.words[id]).length;
      const learned = ids.filter(id => (p.words[id] || {}).status === 'learned').length;
      acc[level] = { ids, total: ids.length, seen, learned, pct: ids.length ? Math.round((learned / ids.length) * 100) : 0 };
      return acc;
    }, {});
  },
  isA2Unlocked() {
    const stats = this.getLevelStats();
    return stats.A1.learned >= A2_UNLOCK_A1_LEARNED;
  },
  buildLevelMapSVG() {
    const stats = this.getLevelStats();
    const a2Unlocked = this.isA2Unlocked();
    const makeNode = (id, x, y) => {
      const v = VOCAB[id];
      const level = this.getWordLevel(id);
      const status = this.getStatus(id, 'word');
      const locked = level === 'A2' && !a2Unlocked;
      return `
        <g class="level-node ${level.toLowerCase()} ${status} ${locked ? 'locked' : ''}" onclick="${locked ? '' : `Game.openVocab('${id}')`}" transform="translate(${x},${y})">
          <circle r="24"></circle>
          <text y="-2" text-anchor="middle">${this.escapeSvg(v.word)}</text>
          <text y="13" text-anchor="middle">${level}</text>
        </g>`;
    };
    const a1Ids = Object.keys(VOCAB).filter(id => this.getWordLevel(id) === 'A1');
    const a2Ids = Object.keys(VOCAB).filter(id => this.getWordLevel(id) === 'A2');
    const a1Nodes = a1Ids.map((id, i) => makeNode(id, 80 + (i % 7) * 82, 155 + Math.floor(i / 7) * 56)).join('');
    const a2Nodes = a2Ids.map((id, i) => makeNode(id, 80 + (i % 7) * 82, 405 + Math.floor(i / 7) * 50)).join('');
    const sceneButtons = Object.keys(SCENES).map((sid, i) => {
      const sc = SCENES[sid];
      return `
        <g class="level-scene-pin" onclick="Game.enterScene('${sid}')" transform="translate(${700 + (i % 2) * 95},${165 + Math.floor(i / 2) * 85})">
          <rect x="-42" y="-24" width="84" height="48" rx="12"></rect>
          <text y="-2" text-anchor="middle">${sc.emoji} ${this.escapeSvg(sc.name.split(' ')[0])}</text>
          <text y="13" text-anchor="middle">scene</text>
        </g>`;
    }).join('');
    return `
      <svg viewBox="0 0 900 580" xmlns="http://www.w3.org/2000/svg" class="level-map-svg">
        <defs>
          <linearGradient id="lmBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fbff"/>
            <stop offset="100%" stop-color="#e9f4ec"/>
          </linearGradient>
        </defs>
        <rect width="900" height="580" fill="url(#lmBg)"/>
        <path d="M70 292 H830" stroke="#8fa3b7" stroke-width="4" stroke-dasharray="10 10"/>
        <text x="70" y="55" class="level-map-title">Progressive CEFR Route · A1 → A2</text>
        <text x="70" y="78" class="level-map-subtitle">A2 opens after ${A2_UNLOCK_A1_LEARNED} A1 words are marked known. Current A1 known: ${stats.A1.learned}/${stats.A1.total}</text>
        <g class="level-band a1-band">
          <rect x="45" y="105" width="610" height="195" rx="18"></rect>
          <text x="70" y="132" class="level-band-title">A1 Survival Munich · ${stats.A1.learned}/${stats.A1.total} known</text>
          <rect x="370" y="118" width="240" height="10" rx="5" class="level-progress-bg"></rect>
          <rect x="370" y="118" width="${Math.max(4, stats.A1.pct * 2.4)}" height="10" rx="5" class="level-progress-fill"></rect>
        </g>
        <g class="level-band a2-band ${a2Unlocked ? '' : 'locked'}">
          <rect x="45" y="360" width="610" height="205" rx="18"></rect>
          <text x="70" y="387" class="level-band-title">A2 Situated Actions · ${a2Unlocked ? `${stats.A2.learned}/${stats.A2.total} known` : 'locked'}</text>
          <rect x="370" y="373" width="240" height="10" rx="5" class="level-progress-bg"></rect>
          <rect x="370" y="373" width="${Math.max(4, stats.A2.pct * 2.4)}" height="10" rx="5" class="level-progress-fill"></rect>
        </g>
        <g class="level-map-scenes">
          <text x="695" y="118" class="level-band-title">Practice Scenes</text>
          ${sceneButtons}
        </g>
        ${a1Nodes}
        ${a2Nodes}
        <g class="level-gate ${a2Unlocked ? 'open' : ''}" transform="translate(450,292)">
          <circle r="34"></circle>
          <text y="-3" text-anchor="middle">${a2Unlocked ? 'A2 open' : 'A2 gate'}</text>
          <text y="13" text-anchor="middle">${stats.A1.learned}/${A2_UNLOCK_A1_LEARNED}</text>
        </g>
      </svg>`;
  },
  renderAdaptivePanel() {
    const el = document.getElementById('adaptive-panel');
    if (!el || !this.currentScene) return;
    const due = this.getDueWords(this.currentScene);
    const rec = this.getRecommendedWords(this.currentScene);
    const chips = [
      ...due.slice(0, 3).map(w => `<span class="adaptive-chip due">${w.german}</span>`),
      ...rec.slice(0, 3).map(w => `<span class="adaptive-chip">${w.german}</span>`)
    ].join('');
    el.innerHTML = `
      <button class="mini-card-close" onclick="Game.dismissAdaptivePanel()">✕</button>
      <div class="adaptive-title">Adaptive input · i+1 · CEFR route</div>
      <div class="adaptive-line">${due.length ? `${due.length} due review item(s) first.` : this.getProgressiveHint()}</div>
      <div class="adaptive-chips">${chips}</div>
      ${this.renderMissionPreview(this.currentScene)}`;
  },
  dismissAdaptivePanel() {
    const el = document.getElementById('adaptive-panel');
    if (el) el.innerHTML = '';
  },
  getProgressiveHint() {
    const stats = this.getLevelStats();
    return this.isA2Unlocked()
      ? `A2 route open. Recommended words now mix A1 review with A2 situated actions.`
      : `A1 foundation first: ${stats.A1.learned}/${A2_UNLOCK_A1_LEARNED} known before A2 opens.`;
  },
  renderMissionPreview(sceneId) {
    const missions = SCENE_MISSIONS[sceneId] || [];
    if (!missions.length) return '';
    const p = this.loadProgress();
    const mission = missions[(p.scenes.indexOf(sceneId) + Object.keys(p.words).length) % missions.length];
    return `
      <div class="mission-preview">
        <div class="mission-title">${mission.title} · ${mission.zh}</div>
        <div class="mission-steps">${mission.steps.map(step => `<span>${step}</span>`).join('')}</div>
        <div class="mission-theory">${mission.theory.map(id => `<b>${id}</b>`).join('')}</div>
      </div>`;
  },
  renderReviewDock() {
    const el = document.getElementById('review-dock');
    if (!el) return;
    const due = Object.keys(VOCAB)
      .map(id => ({ ...VOCAB[id], entry: this.getWordEntry(id) }))
      .filter(w => w.entry && w.entry.dueAt && w.entry.dueAt <= Date.now())
      .slice(0, 6);
    if (!due.length) { el.innerHTML = ''; return; }
    el.innerHTML = `
      <button class="mini-card-close" onclick="Game.dismissReviewDock()">✕</button>
      <div class="review-title">Today&apos;s spaced review</div>
      <div class="review-text">These words are due before new input, using SM-2 scheduling.</div>
      <div class="review-list">${due.map(w => `<span class="review-chip">${w.german}</span>`).join('')}</div>`;
  },
  dismissReviewDock() {
    const el = document.getElementById('review-dock');
    if (el) el.innerHTML = '';
  },

  // ── Knowledge Graph & Theory ──────────────────────────────
  openGraph() {
    if (!this.hasMechanism('graph')) {
      this.openStudyMessage('Graph is disabled in this study condition.');
      return;
    }
    this.logEvent('graph_open');
    this.renderKnowledgeGraph();
    this.showOverlay('overlay-graph');
  },
  closeGraph() { this.hideOverlay('overlay-graph'); },
  openTheory() {
    this.logEvent('theory_open');
    this.renderTheory();
    this.showOverlay('overlay-theory');
  },
  closeTheory() { this.hideOverlay('overlay-theory'); },
  renderTheory() {
    const el = document.getElementById('theory-list');
    if (!el) return;
    el.innerHTML = LEARNING_THEORY.map(item => `
      <div class="theory-card">
        <div class="theory-card-top">
          <span class="theory-id">${item.id}</span>
          <span class="theory-card-title">${item.title}</span>
          <span class="theory-zh">${item.zh}</span>
        </div>
        <div class="theory-claim">${item.claim}</div>
        <div class="theory-row"><strong>Game mechanic</strong><span>${item.design}</span></div>
        <div class="theory-row"><strong>Observable data</strong><span>${item.evidence}</span></div>
      </div>
    `).join('');
  },
  renderKnowledgeGraph() {
    const el = document.getElementById('graph-body');
    if (!el) return;
    const positions = this.getGraphPositions();
    const recommended = new Set(Object.keys(SCENES).flatMap(sceneId => this.getRecommendedWords(sceneId).map(w => w.id)));
    const edges = [];
    Object.keys(VOCAB_GRAPH).forEach(id => {
      (VOCAB_GRAPH[id].prerequisites || []).forEach(pre => {
        if (positions[pre] && positions[id]) edges.push({ from: pre, to: id });
      });
    });
    const edgeSvg = edges.map(edge => {
      const a = positions[edge.from], b = positions[edge.to];
      return `<line class="graph-edge" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"></line>`;
    }).join('');
    const nodeSvg = Object.keys(positions).map(id => {
      const pos = positions[id];
      const v = VOCAB[id];
      const status = this.getStatus(id, 'word');
      const graph = VOCAB_GRAPH[id] || {};
      const rec = recommended.has(id) ? ' recommended' : '';
      return `
        <g class="graph-node ${status}${rec}" data-node-id="${id}" onclick="Game.selectGraphNode('${id}')">
          <circle cx="${pos.x}" cy="${pos.y}" r="24"></circle>
          <text class="graph-node-word" x="${pos.x}" y="${pos.y - 2}" text-anchor="middle">${this.escapeSvg(v.word)}</text>
          <text class="graph-node-level" x="${pos.x}" y="${pos.y + 12}" text-anchor="middle">${this.getWordLevel(id)} · L${graph.level || 1}</text>
        </g>`;
    }).join('');
    const familyLabels = this.getGraphFamilies().map(f => `
      <text class="graph-family-label" x="${f.x}" y="${f.y}">${this.escapeSvg(f.label)}</text>
    `).join('');
    el.innerHTML = `
      <svg viewBox="0 0 980 620" class="knowledge-graph-svg" role="img">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#7b8794"></path>
          </marker>
        </defs>
        ${familyLabels}
        <g>${edgeSvg}</g>
        <g>${nodeSvg}</g>
      </svg>`;
    this.selectGraphNode(this.graphSelectedId || Object.keys(positions)[0], true);
  },
  getGraphFamilies() {
    return [
      { label: 'Marienplatz city words', x: 42, y: 42 },
      { label: 'TUM campus words', x: 530, y: 42 },
      { label: 'Englischer Garten route', x: 42, y: 335 },
      { label: 'Hauptbahnhof transport', x: 530, y: 285 },
      { label: 'Hofbräuhaus table talk', x: 530, y: 385 }
    ];
  },
  getGraphPositions() {
    return {
      kirche: { x: 70, y: 95 }, rathaus: { x: 175, y: 95 }, uhr: { x: 280, y: 95 },
      markt: { x: 70, y: 190 }, blumenladen: { x: 180, y: 180 }, cafe: { x: 285, y: 190 },
      brunnen: { x: 390, y: 95 }, taube: { x: 390, y: 190 },
      buch: { x: 560, y: 95 }, bibliothek: { x: 670, y: 95 }, universitaet: { x: 790, y: 95 }, hoersaal: { x: 900, y: 95 },
      rucksack: { x: 560, y: 190 }, laptop: { x: 670, y: 190 }, mensa: { x: 790, y: 190 }, fahrrad: { x: 900, y: 190 },
      baum: { x: 70, y: 390 }, blume: { x: 175, y: 390 }, fluss: { x: 70, y: 495 }, bruecke: { x: 185, y: 495 },
      surfer: { x: 300, y: 460 }, hund: { x: 400, y: 390 }, pagode: { x: 405, y: 500 },
      bahnhof: { x: 560, y: 335 }, zug: { x: 665, y: 335 }, gleis: { x: 770, y: 335 }, fahrplan: { x: 885, y: 335 },
      fahrkarte: { x: 560, y: 420 }, automat: { x: 665, y: 420 }, koffer: { x: 885, y: 420 },
      abfahrt: { x: 770, y: 420 }, ankunft: { x: 885, y: 500 },
      tisch: { x: 560, y: 500 }, stuhl: { x: 665, y: 500 }, bier: { x: 560, y: 585 }, masskrug: { x: 690, y: 585 },
      brezel: { x: 810, y: 585 }, akkordeon: { x: 920, y: 585 }, wand: { x: 920, y: 500 }
    };
  },
  selectGraphNode(id, silent) {
    if (!VOCAB[id]) return;
    this.graphSelectedId = id;
    const inspector = document.getElementById('graph-inspector');
    if (!inspector) return;
    const v = VOCAB[id];
    const graph = VOCAB_GRAPH[id] || { prerequisites: [], unlocks: [], level: 1 };
    const status = this.getStatus(id, 'word');
    const locked = (graph.prerequisites || []).filter(pid => !this.isMastered(pid));
    const culture = CULTURE_SCAFFOLDS[id];
    inspector.innerHTML = `
      <div class="graph-inspector-main">
        <div class="graph-inspector-word">${v.german}</div>
        <div class="graph-inspector-meaning">${v.chinese} · ${v.english}</div>
        <div class="graph-inspector-meta">
          <span>Status: ${status}</span>
          <span>Graph L${graph.level || 1}</span>
          <span>CEFR ${this.getWordLevel(id)}</span>
          <span>Family: ${graph.family || 'core'}</span>
        </div>
        <div class="graph-path">
          <strong>Prerequisites</strong>
          <span>${(graph.prerequisites || []).map(pid => VOCAB[pid].german).join(' → ') || 'Start node'}</span>
        </div>
        <div class="graph-path">
          <strong>Unlocks</strong>
          <span>${(graph.unlocks || []).map(pid => VOCAB[pid].german).join(', ') || 'No direct unlocks'}</span>
        </div>
        ${locked.length ? `<div class="graph-lock">Locked until mastered: ${locked.map(pid => VOCAB[pid].german).join(', ')}</div>` : '<div class="graph-ready">Ready for i+1 input</div>'}
        ${culture ? `<div class="graph-culture">${culture.principle}</div>` : ''}
      </div>
      <button class="graph-open-card" onclick="Game.openVocabFromGraph('${id}')">Open card</button>`;
    document.querySelectorAll('.graph-node').forEach(n => n.classList.remove('selected'));
    const node = document.querySelector(`.graph-node[data-node-id="${id}"]`);
    if (node) node.classList.add('selected');
  },
  openVocabFromGraph(id) {
    this.closeGraph();
    setTimeout(() => this.openVocab(id), 120);
  },

  // ── Vocabulary Card ───────────────────────────────────────
  openVocab(vocabId) {
    const v = VOCAB[vocabId];
    if (!v) return;
    this.currentVocabId = vocabId;
    this.currentVocabType = 'word';
    this.markSeen(vocabId, 'word');
    this.logEvent('vocab_open', { vocabId, cefr: this.getWordLevel(vocabId), scene: VOCAB[vocabId].scene });

    const articleColor = { der: '#4A90D9', die: '#E8507A', das: '#27AE60' }[v.article] || '#888';
    document.getElementById('vocab-article').textContent = v.article;
    document.getElementById('vocab-article').style.color = articleColor;
    document.getElementById('vocab-word').textContent = v.word;
    document.getElementById('vocab-pronunciation').textContent = `/ ${v.pronunciation} /`;
    document.getElementById('vocab-chinese').textContent = v.chinese;
    document.getElementById('vocab-english').textContent = v.english;
    document.getElementById('vocab-example-de').textContent = v.example || '';
    document.getElementById('vocab-example-zh').textContent = v.exampleChinese || '';
    const exBox = document.getElementById('vocab-example-container');
    if (exBox) exBox.style.display = v.example ? '' : 'none';
    this.renderLevelCue(vocabId);
    if (this.hasMechanism('situated-input')) this.renderCultureCue(vocabId);
    else {
      const cue = document.getElementById('culture-cue');
      if (cue) { cue.classList.remove('visible'); cue.innerHTML = ''; }
    }
    this.renderSrsCue(vocabId, 'word');

    const status = this.getStatus(vocabId, 'word');
    this._syncStatusBtns(status);
    this.showOverlay('overlay-vocab');
    this.updateKnowledgeBadge();
  },

  closeVocab() { this.hideOverlay('overlay-vocab'); this.currentVocabId = null; },

  renderCultureCue(vocabId) {
    const el = document.getElementById('culture-cue');
    if (!el) return;
    const cue = CULTURE_SCAFFOLDS[vocabId];
    if (!cue) {
      el.classList.remove('visible');
      el.innerHTML = '';
      return;
    }
    el.classList.add('visible');
    el.innerHTML = `
      <div class="culture-cue-title">Context before translation</div>
      <div class="culture-cue-de">${cue.setup}</div>
      <div class="culture-cue-zh">${LANG.current === 'zh' ? cue.zh : cue.en}</div>
      <div class="culture-cue-meta">${cue.principle}</div>`;
  },
  renderSrsCue(id, type) {
    const el = document.getElementById('srs-cue');
    if (!el) return;
    const p = this.loadProgress();
    const entry = (type === 'phrase' ? p.phrases : p.words)[id];
    if (!entry || !entry.dueAt) {
      el.textContent = 'SRS: first exposure, choose a confidence level to schedule review.';
      return;
    }
    const days = Math.max(0, Math.ceil((entry.dueAt - Date.now()) / 86400000));
    el.textContent = days === 0
      ? `SRS: due today · interval ${entry.interval || 1} day(s) · EF ${(entry.easeFactor || 2.5).toFixed(2)}`
      : `SRS: next review in ${days} day(s) · interval ${entry.interval || 1} · EF ${(entry.easeFactor || 2.5).toFixed(2)}`;
  },
  renderLevelCue(id) {
    const tag = document.getElementById('vocab-category');
    if (!tag || !VOCAB[id]) return;
    const level = this.getWordLevel(id);
    const locked = level === 'A2' && !this.isA2Unlocked();
    tag.innerHTML = `${this.escapeHtml(t('cat_' + VOCAB[id].category))} <span class="cefr-inline ${level.toLowerCase()}">${level}</span>${locked ? ' <span class="cefr-inline locked">preview</span>' : ''}`;
  },

  markVocab(status) {
    if (!this.currentVocabId) return;
    const type = this.currentVocabType || 'word';
    this.logEvent('vocab_status', { id: this.currentVocabId, type, status });
    this.setStatus(this.currentVocabId, type, status);
    this._syncStatusBtns(status);
    setTimeout(() => this.closeVocab(), 350);
  },

  _syncStatusBtns(status) {
    document.querySelectorAll('.status-btn').forEach(b => b.classList.toggle('active', b.dataset.status === status));
  },

  // ── Dialogue ──────────────────────────────────────────────
  openDialogue(dialogueId, npcId) {
    const dlg = DIALOGUES[dialogueId];
    if (!dlg) return;
    this.currentDialogue = dlg;
    this.logEvent('dialogue_open', { dialogueId, npcId });

    const scene = SCENES[this.currentScene];
    const npcInfo = scene && scene.npcs.find(n => n.id === npcId);

    const emojiEl = document.getElementById('npc-emoji');
    emojiEl.textContent = npcInfo ? npcInfo.emoji : '🧑';
    if (npcInfo) emojiEl.style.background = npcInfo.color;
    document.getElementById('npc-name-dlg').textContent = npcInfo ? npcInfo.label : '';
    document.getElementById('npc-role-dlg').textContent = npcInfo ? npcInfo.role : '';

    this.showNode(dlg.start);
    this.showOverlay('overlay-dialogue');
  },

  showNode(nodeId) {
    const node = this.currentDialogue.nodes[nodeId];
    if (!node) return;

    if (node.learnPhrase) {
      (Array.isArray(node.learnPhrase) ? node.learnPhrase : [node.learnPhrase])
        .forEach(pid => pid && this.markSeen(pid, 'phrase'));
    }

    const tag = node.negotiation ? `<span class="negotiation-tag">${node.negotiation}</span>` : '';
    document.getElementById('dlg-german').innerHTML  = `${tag}${this.escapeHtml(node.german)}`;
    document.getElementById('dlg-chinese').textContent = node.chinese;
    document.getElementById('dlg-english').textContent = node.english || '';

    const optEl = document.getElementById('dlg-options');
    optEl.innerHTML = '';

    if (node.end || !node.options || node.options.length === 0) {
      const btn = document.createElement('button');
      btn.className = 'dlg-option-btn dlg-end-btn';
      btn.textContent = t('dlg_end_btn');
      btn.onclick = () => this.closeDialogue();
      optEl.appendChild(btn);
    } else {
      node.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'dlg-option-btn';
        btn.innerHTML = `${opt.functionTag ? `<span class="opt-function">[${opt.functionTag}]</span>` : ''}
                         <span class="opt-de">${this.escapeHtml(opt.text)}</span>
                         <span class="opt-zh">${this.escapeHtml(opt.textChinese || '')}</span>`;
        btn.onclick = () => {
          if (opt.learnPhrase) this.markSeen(opt.learnPhrase, 'phrase');
          this.logEvent('dialogue_choice', {
            dialogueId: this.currentDialogue && this.currentDialogue.npcId,
            next: opt.next,
            functionTag: opt.functionTag || '',
            text: opt.text
          });
          this.showNode(opt.next);
        };
        optEl.appendChild(btn);
      });
    }
  },

  closeDialogue() {
    this.hideOverlay('overlay-dialogue');
    this.currentDialogue = null;
    this.updateKnowledgeBadge();
  },

  // ── Output Challenge ──────────────────────────────────────
  needsOutputChallenge(sceneId) {
    if (!this.hasMechanism('output')) return false;
    const p = this.loadProgress();
    const seenInScene = (SCENES[sceneId] || { objects: [] }).objects
      .filter(o => p.words[o.vocabId]).length;
    return seenInScene >= 2 && !p.completedOutputs[sceneId];
  },
  startOutputChallenge(sceneId) {
    const items = OUTPUT_CHALLENGES[sceneId] || [];
    if (!items.length) return this.forceGoToMap();
    const p = this.loadProgress();
    const idx = (p.scenes.indexOf(sceneId) + Object.keys(p.words).length) % items.length;
    this.outputChallenge = { sceneId, item: items[idx] };
    this.logEvent('output_start', { sceneId, prompt: items[idx].prompt });
    this.pendingMapReturn = true;
    const item = this.outputChallenge.item;
    this._setText('output-prompt', item.prompt);
    this._setText('output-target', LANG.current === 'zh' ? item.zh : item.prompt);
    const bank = document.getElementById('output-word-bank');
    const answer = document.getElementById('output-answer');
    const feedback = document.getElementById('output-feedback');
    if (feedback) { feedback.textContent = ''; feedback.className = 'output-feedback'; }
    if (answer) answer.value = '';
    if (bank) {
      bank.innerHTML = item.blanks.map(word => `<button onclick="Game.addOutputWord('${this.escapeAttr(word)}')">${this.escapeHtml(word)}</button>`).join('');
    }
    this.showOverlay('overlay-output');
    if (answer) setTimeout(() => answer.focus(), 80);
  },
  addOutputWord(word) {
    const input = document.getElementById('output-answer');
    if (!input) return;
    input.value = `${input.value}${input.value.trim() ? ' ' : ''}${word}`;
    input.focus();
  },
  checkOutputChallenge() {
    if (!this.outputChallenge) return;
    const input = document.getElementById('output-answer');
    const feedback = document.getElementById('output-feedback');
    const raw = input ? input.value : '';
    const normalized = this.normalizeAnswer(raw);
    const item = this.outputChallenge.item;
    const ok = item.accepted.some(ans => normalized === this.normalizeAnswer(ans));
    if (!feedback) return;
    if (!ok) {
      this.logEvent('output_attempt', { sceneId: this.outputChallenge.sceneId, correct: false, answer: raw });
      feedback.textContent = `Try again. Target pattern: ${item.answer}`;
      feedback.className = 'output-feedback bad';
      return;
    }
    const p = this.loadProgress();
    this.logEvent('output_attempt', { sceneId: this.outputChallenge.sceneId, correct: true, answer: raw });
    p.completedOutputs[this.outputChallenge.sceneId] = { completedAt: Date.now(), answer: raw };
    this.saveProgress(p);
    feedback.textContent = 'Correct. Output recorded.';
    feedback.className = 'output-feedback good';
    setTimeout(() => {
      this.hideOverlay('overlay-output');
      this.outputChallenge = null;
      this.forceGoToMap();
    }, 450);
  },
  cancelOutputChallenge() {
    this.hideOverlay('overlay-output');
    this.outputChallenge = null;
    this.pendingMapReturn = false;
  },
  forceGoToMap() {
    Player.destroy();
    this.currentScene = null;
    this.showScreen('screen-map');
    this.updateKnowledgeBadge();
    this.renderReviewDock();
  },
  normalizeAnswer(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/[!?.,;:]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // ── Knowledge Base ────────────────────────────────────────
  openKnowledge() { this.logEvent('knowledge_open'); this.renderKnowledge(); this.showOverlay('overlay-knowledge'); },
  closeKnowledge() { this.hideOverlay('overlay-knowledge'); },

  setKnowledgeTab(tab) {
    this.knowledgeTab = tab;
    document.querySelectorAll('.kb-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.getElementById('kb-tab-words').textContent = t('kb_tab_words');
    document.getElementById('kb-tab-phrases').textContent = t('kb_tab_phrases');
    this.renderKnowledge();
  },

  setKnowledgeFilter(f) {
    this.knowledgeFilter = f;
    document.querySelectorAll('.kb-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    this.renderKnowledgeList();
  },

  renderKnowledge() { this.renderStats(); this.renderKnowledgeList(); },

  renderStats() {
    const p = this.loadProgress();
    const aw = Object.keys(VOCAB), ap = Object.keys(PHRASES);
    const ws = aw.filter(id => p.words[id]).length;
    const wl = aw.filter(id => (p.words[id] || {}).status === 'learned').length;
    const ps = ap.filter(id => p.phrases[id]).length;
    const pl = ap.filter(id => (p.phrases[id] || {}).status === 'learned').length;

    this._setText('stat-words-seen', ws);
    this._setText('stat-words-total', aw.length);
    this._setText('stat-phrases-seen', ps);
    this._setText('stat-phrases-total', ap.length);
    this._setText('stat-learned', wl + pl);
    this._setText('stat-words-label', t('kb_words_seen'));
    this._setText('stat-phrases-label', t('kb_phrases_seen'));
    this._setText('stat-mastered-label', t('kb_mastered'));

    const total = aw.length + ap.length;
    const pct = total ? Math.round(((wl + pl) / total) * 100) : 0;
    document.getElementById('progress-bar-fill').style.width = pct + '%';
    this._setText('progress-pct', pct + '%');
    const levelStats = this.getLevelStats();

    document.getElementById('scene-progress').innerHTML = Object.keys(SCENES).map(sid => {
      const sc = SCENES[sid];
      const ids = sc.objects.map(o => o.vocabId);
      const seen    = ids.filter(id => p.words[id]).length;
      const learned = ids.filter(id => (p.words[id] || {}).status === 'learned').length;
      const outputDone = p.completedOutputs && p.completedOutputs[sid];
      const pct2 = ids.length ? Math.round((learned / ids.length) * 100) : 0;
      return `<div class="scene-stat">
        <span class="scene-stat-name">${sc.emoji} ${LANG.current === 'zh' ? sc.nameChinese : sc.name}</span>
        <span class="scene-stat-count">${seen}/${ids.length} seen · ${learned} learned · output ${outputDone ? 'done' : 'open'}</span>
        <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct2}%"></div></div>
      </div>`;
    }).join('') + `
      <div class="scene-stat level-stat">
        <span class="scene-stat-name">A1 foundation</span>
        <span class="scene-stat-count">${levelStats.A1.learned}/${levelStats.A1.total} known · gate ${levelStats.A1.learned}/${A2_UNLOCK_A1_LEARNED}</span>
        <div class="mini-bar"><div class="mini-bar-fill" style="width:${levelStats.A1.pct}%"></div></div>
      </div>
      <div class="scene-stat level-stat">
        <span class="scene-stat-name">A2 route</span>
        <span class="scene-stat-count">${this.isA2Unlocked() ? `${levelStats.A2.learned}/${levelStats.A2.total} known` : 'locked until A1 gate opens'}</span>
        <div class="mini-bar"><div class="mini-bar-fill" style="width:${levelStats.A2.pct}%"></div></div>
      </div>`;
  },

  renderKnowledgeList() {
    const p = this.loadProgress();
    const tab = this.knowledgeTab, filter = this.knowledgeFilter;

    let items = tab === 'words'
      ? Object.keys(VOCAB).map(id => {
          const e = p.words[id];
          return e ? { ...VOCAB[id], type: 'word', status: e.status, seenAt: e.seenAt, dueAt: e.dueAt, interval: e.interval, cefr: this.getWordLevel(id) } : null;
        }).filter(Boolean)
      : Object.keys(PHRASES).map(id => {
          const e = p.phrases[id];
          return e ? { ...PHRASES[id], type: 'phrase', status: e.status, seenAt: e.seenAt, dueAt: e.dueAt, interval: e.interval } : null;
        }).filter(Boolean);

    if (filter !== 'all') items = items.filter(i => i.status === filter);
    items.sort((a, b) => (b.seenAt || 0) - (a.seenAt || 0));

    const list = document.getElementById('kb-list');
    if (!items.length) {
      list.innerHTML = `<div class="kb-empty">${t(filter === 'all' ? 'kb_empty_all' : 'kb_empty_filter').replace('\n','<br>')}</div>`;
      return;
    }

    const sLabel = { learned: t('status_learned'), fuzzy: t('status_fuzzy'), unknown: t('status_unknown'), new: '👁 Seen' };

    list.innerHTML = items.map(item => {
      const sc = item.status;
      const sl = sLabel[sc] || sc;
      const due = item.dueAt && item.dueAt <= Date.now();
      const srsMeta = due ? 'Due today' : item.interval ? `Review in ${Math.max(0, Math.ceil((item.dueAt - Date.now()) / 86400000))}d` : '';
      if (item.type === 'word') return `
        <div class="kb-item status-${sc}" onclick="Game.openVocabFromKb('${item.id}')">
          <div class="kb-item-main">
            <span class="kb-german">${item.german}</span>
            <span class="kb-chinese">${item.chinese}</span>
            <span class="kb-english">${item.english}</span>
          </div>
          <div class="kb-item-meta">
            <span class="kb-cat">${t('cat_' + item.category)}</span>
            <span class="kb-cefr ${item.cefr.toLowerCase()}">${item.cefr}</span>
            <span class="kb-status-badge status-${sc}">${sl}</span>
            <span class="kb-srs ${due ? 'due' : ''}">${srsMeta}</span>
          </div>
        </div>`;
      return `
        <div class="kb-item phrase-item status-${sc}" onclick="Game.openPhraseCard('${item.id}')">
          <div class="kb-item-main">
            <span class="kb-german">${item.german}</span>
            <span class="kb-chinese">${item.chinese}</span>
            <span class="kb-english">${item.english}</span>
          </div>
          <div class="kb-item-meta">
            <span class="kb-cat">${t('phrase_' + item.category)}</span>
            <span class="kb-status-badge status-${sc}">${sl}</span>
            <span class="kb-srs ${due ? 'due' : ''}">${srsMeta}</span>
          </div>
        </div>`;
    }).join('');
  },

  openVocabFromKb(id) {
    this.hideOverlay('overlay-knowledge');
    setTimeout(() => this.openVocab(id), 120);
  },

  openPhraseCard(id) {
    const ph = PHRASES[id];
    if (!ph) return;
    this.currentVocabId = id;
    this.currentVocabType = 'phrase';

    document.getElementById('vocab-article').textContent = '🗣';
    document.getElementById('vocab-article').style.color = '#9B59B6';
    document.getElementById('vocab-word').textContent = ph.german;
    document.getElementById('vocab-pronunciation').textContent = t('phrase_' + ph.category);
    document.getElementById('vocab-chinese').textContent = ph.chinese;
    document.getElementById('vocab-english').textContent = ph.english;
    document.getElementById('vocab-example-de').textContent = '';
    document.getElementById('vocab-example-zh').textContent = '';
    const exBox = document.getElementById('vocab-example-container');
    if (exBox) exBox.style.display = 'none';
    document.getElementById('vocab-category').textContent = '💬 Phrase';
    const cue = document.getElementById('culture-cue');
    if (cue) { cue.classList.remove('visible'); cue.innerHTML = ''; }
    this.renderSrsCue(id, 'phrase');

    this._syncStatusBtns(this.getStatus(id, 'phrase'));
    this.hideOverlay('overlay-knowledge');
    setTimeout(() => this.showOverlay('overlay-vocab'), 120);
  },

  updateKnowledgeBadge() {
    const p = this.loadProgress();
    const n = Object.keys(p.words).length + Object.keys(p.phrases).length;
    const txt = n > 0 ? String(n) : '';
    ['knowledge-badge', 'knowledge-badge-map'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = txt;
    });
  },

  // ── Study Console ────────────────────────────────────────
  openStudy() {
    this.renderStudy();
    this.showOverlay('overlay-study');
    this.logEvent('study_open');
  },
  closeStudy() { this.hideOverlay('overlay-study'); },
  openStudyMessage(message) {
    this.renderStudy(`<div class="study-message">${this.escapeHtml(message)}</div>`);
    this.showOverlay('overlay-study');
  },
  renderStudy(extra = '') {
    const body = document.getElementById('study-body');
    if (!body) return;
    const study = this.getStudy();
    const condition = EXPERIMENT_CONDITIONS[study.condition] || EXPERIMENT_CONDITIONS.full;
    const pre = this.getAssessmentSummary('pre');
    const post = this.getAssessmentSummary('post');
    body.innerHTML = `
      ${extra}
      <div class="study-section">
        <div class="study-section-title">Participant & Condition</div>
        <div class="study-form-row">
          <label>Participant ID</label>
          <input class="study-input" id="study-participant" value="${this.escapeAttr(study.participantId || '')}" placeholder="P001">
          <button class="study-action" onclick="Game.saveStudyParticipant()">Save</button>
        </div>
        <div class="condition-grid">
          ${Object.keys(EXPERIMENT_CONDITIONS).map(key => {
            const c = EXPERIMENT_CONDITIONS[key];
            return `
              <button class="condition-card ${study.condition === key ? 'active' : ''}" onclick="Game.setStudyCondition('${key}')">
                <strong>${c.label}</strong>
                <span>${c.zh}</span>
                <small>${c.description}</small>
              </button>`;
          }).join('')}
        </div>
        <div class="study-current">Current condition: <strong>${condition.label}</strong></div>
      </div>

      <div class="study-section">
        <div class="study-section-title">Assessment</div>
        <div class="assessment-actions">
          <button class="study-action" onclick="Game.startAssessment('pre')">Run pre-test</button>
          <span class="assessment-summary">${pre}</span>
          <button class="study-action" onclick="Game.startAssessment('post')">Run post-test</button>
          <span class="assessment-summary">${post}</span>
        </div>
        <div id="assessment-box"></div>
      </div>

      <div class="study-section">
        <div class="study-section-title">Quick UX Survey</div>
        <div class="survey-grid">
          ${SURVEY_ITEMS.map(item => `
            <label class="survey-item">
              <span>${item.label}</span>
              <small>${item.zh}</small>
              <input type="range" min="1" max="7" value="${(study.survey || {})[item.id] || 4}" oninput="Game.setSurveyValue('${item.id}', this.value)">
              <b>${(study.survey || {})[item.id] || 4}</b>
            </label>`).join('')}
        </div>
      </div>

      <div class="study-section study-metrics">
        <div class="study-section-title">Logged Data</div>
        ${this.renderStudyMetrics(study)}
        <div class="assessment-actions">
          <button class="study-action primary" onclick="Game.exportStudyCSV()">Export CSV</button>
          <button class="study-action" onclick="Game.exportStudyJSON()">Export JSON</button>
          <button class="study-action danger" onclick="Game.clearStudyLogs()">Clear logs</button>
        </div>
      </div>`;
  },
  saveStudyParticipant() {
    const input = document.getElementById('study-participant');
    this.updateStudy({ participantId: input ? input.value.trim() : '' });
    this.logEvent('participant_save', { participantId: input ? input.value.trim() : '' });
    this.renderStudy();
  },
  setStudyCondition(condition) {
    if (!EXPERIMENT_CONDITIONS[condition]) return;
    this.updateStudy({ condition, startedAt: Date.now() });
    this.logEvent('condition_set', { condition });
    this.renderStudy();
    this.renderAdaptivePanel();
    this.renderMap();
    if (this.currentScene && SCENES[this.currentScene]) this.renderScene(SCENES[this.currentScene]);
  },
  getAssessmentSummary(type) {
    const result = (this.getStudy().assessments || {})[type];
    if (!result) return 'not completed';
    return `${result.score}/${result.total} · ${new Date(result.completedAt).toLocaleString()}`;
  },
  startAssessment(type) {
    this.assessmentState = { type, index: 0, answers: [] };
    this.logEvent('assessment_start', { type });
    this.renderAssessmentItem();
  },
  renderAssessmentItem() {
    const box = document.getElementById('assessment-box');
    if (!box || !this.assessmentState) return;
    const item = ASSESSMENT_ITEMS[this.assessmentState.index];
    if (!item) return this.finishAssessment();
    box.innerHTML = `
      <div class="assessment-card">
        <div class="assessment-progress">${this.assessmentState.type.toUpperCase()} ${this.assessmentState.index + 1}/${ASSESSMENT_ITEMS.length}</div>
        <div class="assessment-prompt">${this.escapeHtml(item.prompt)}</div>
        <div class="assessment-zh">${this.escapeHtml(item.zh)}</div>
        <div class="assessment-options">
          ${item.options.map(opt => `<button onclick="Game.answerAssessment('${this.escapeAttr(opt)}')">${this.escapeHtml(opt)}</button>`).join('')}
        </div>
      </div>`;
  },
  answerAssessment(answer) {
    if (!this.assessmentState) return;
    const item = ASSESSMENT_ITEMS[this.assessmentState.index];
    const correct = answer === item.answer;
    this.assessmentState.answers.push({ itemId: item.id, wordId: item.wordId, answer, correct });
    this.logEvent('assessment_answer', { type: this.assessmentState.type, itemId: item.id, answer, correct });
    this.assessmentState.index += 1;
    this.renderAssessmentItem();
  },
  finishAssessment() {
    const state = this.assessmentState;
    if (!state) return;
    const score = state.answers.filter(a => a.correct).length;
    const p = this.loadProgress();
    p.study.assessments[state.type] = {
      score,
      total: ASSESSMENT_ITEMS.length,
      answers: state.answers,
      completedAt: new Date().toISOString()
    };
    this.saveProgress(p);
    this.logEvent('assessment_finish', { type: state.type, score, total: ASSESSMENT_ITEMS.length });
    this.assessmentState = null;
    this.renderStudy(`<div class="study-message">Assessment saved: ${score}/${ASSESSMENT_ITEMS.length}</div>`);
  },
  setSurveyValue(id, value) {
    const p = this.loadProgress();
    p.study.survey = { ...(p.study.survey || {}), [id]: Number(value) };
    this.saveProgress(p);
    const input = document.querySelector(`input[oninput*="${id}"]`);
    if (input && input.nextElementSibling) input.nextElementSibling.textContent = value;
  },
  renderStudyMetrics(study) {
    const logs = study.logs || [];
    const counts = logs.reduce((acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    }, {});
    const important = ['scene_enter', 'vocab_open', 'vocab_status', 'dialogue_open', 'dialogue_choice', 'output_attempt', 'graph_open'];
    return `
      <div class="metric-grid">
        <div class="metric-card"><strong>${logs.length}</strong><span>events</span></div>
        ${important.map(type => `<div class="metric-card"><strong>${counts[type] || 0}</strong><span>${type}</span></div>`).join('')}
      </div>`;
  },
  exportStudyCSV() {
    const p = this.loadProgress();
    const rows = [['ts','elapsedMs','participantId','condition','scene','type','details']];
    (p.study.logs || []).forEach(e => {
      rows.push([e.ts, e.elapsedMs, e.participantId, e.condition, e.scene, e.type, JSON.stringify(e.details || {})]);
    });
    this.downloadText(`munich-study-${Date.now()}.csv`, rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n'), 'text/csv');
  },
  exportStudyJSON() {
    this.downloadText(`munich-study-${Date.now()}.json`, JSON.stringify(this.loadProgress().study, null, 2), 'application/json');
  },
  clearStudyLogs() {
    const p = this.loadProgress();
    p.study.logs = [];
    this.saveProgress(p);
    this.renderStudy(`<div class="study-message">Logs cleared.</div>`);
  },
  downloadText(filename, text, type) {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  },

  // ── Overlay helpers ───────────────────────────────────────
  showOverlay(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('hidden'); el.classList.add('visible'); }
  },
  hideOverlay(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('visible'); el.classList.add('hidden'); }
  },

  _setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  },
  escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  },
  escapeAttr(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
  },
  escapeSvg(str) {
    return this.escapeHtml(str);
  }
};

// Global shim for status buttons
function markVocab(status) { Game.markVocab(status); }

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Game.updateKnowledgeBadge();
  applyLanguage();

  document.addEventListener('keydown', e => {
    Player.onKey(e.key, true);
    if (e.key === 'Escape') {
      Game.hideOverlay('overlay-vocab');
      Game.hideOverlay('overlay-dialogue');
      Game.hideOverlay('overlay-knowledge');
      Game.hideOverlay('overlay-output');
      Game.hideOverlay('overlay-graph');
      Game.hideOverlay('overlay-theory');
      Game.hideOverlay('overlay-study');
    }
    if (e.key === 'Enter' && document.getElementById('overlay-output').classList.contains('visible')) {
      Game.checkOutputChallenge();
    }
  });
  document.addEventListener('keyup', e => Player.onKey(e.key, false));
  window.addEventListener('resize', () => {
    if (!Game.currentScene) {
      Game.renderMap();
    }
  });
});
