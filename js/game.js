// ============================================================
// GAME ENGINE
// ============================================================

const STORAGE_KEY = 'munich_progress';

const Game = {
  currentScene: null,
  currentVocabId: null,
  currentVocabType: 'word',
  currentDialogue: null,
  knowledgeTab: 'words',
  knowledgeFilter: 'all',

  // ── Progress ─────────────────────────────────────────────
  loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { words: {}, phrases: {}, scenes: [] }; }
    catch { return { words: {}, phrases: {}, scenes: [] }; }
  },
  saveProgress(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); },
  markSeen(id, type) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    if (!s[id]) s[id] = { status: 'new', seenAt: Date.now() };
    this.saveProgress(p);
  },
  setStatus(id, type, status) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    s[id] = { status, seenAt: Date.now() };
    this.saveProgress(p);
    this.updateKnowledgeBadge();
  },
  getStatus(id, type) {
    const p = this.loadProgress();
    const s = type === 'phrase' ? p.phrases : p.words;
    return (s[id] || {}).status || 'new';
  },

  // ── Screens ──────────────────────────────────────────────
  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  },
  start() { this.showScreen('screen-map'); this.updateKnowledgeBadge(); },
  goToMap() {
    Player.destroy();
    this.currentScene = null;
    this.showScreen('screen-map');
    this.updateKnowledgeBadge();
  },

  // ── Scene Loading ─────────────────────────────────────────
  enterScene(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) return;
    Player.destroy();
    this.currentScene = sceneId;

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
  },

  renderScene(scene) {
    const canvas = document.getElementById('scene-canvas');
    canvas.innerHTML = '';

    // World layer (scrolls with camera)
    const world = document.createElement('div');
    world.className = 'scene-world';

    const cfg = SCENE_LAYOUT[scene.id] || {};
    world.style.width  = (cfg.worldW || 1800) + 'px';
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
    const svg = (typeof SCENE_SVGS !== 'undefined' && SCENE_SVGS[scene.id]) || '';
    return `<div class="scene-svg-wrapper" style="width:${w}px;height:100%">${svg}</div>`;
  },

  buildObjects(scene) {
    return scene.objects.map(obj => {
      const wx = obj.worldX, wy = obj.worldY, ww = obj.worldW || 80, wh = obj.worldH || 80;
      return `
        <div class="world-object"
             style="left:${wx}px;top:${wy - wh}px;width:${ww}px;height:${wh}px"
             onclick="Game.openVocab('${obj.vocabId}')">
          <div class="world-object-icon">${obj.emoji}</div>
          <div class="world-object-label">${obj.label}</div>
          <div class="world-object-de"></div>
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

  // ── Vocabulary Card ───────────────────────────────────────
  openVocab(vocabId) {
    const v = VOCAB[vocabId];
    if (!v) return;
    this.currentVocabId = vocabId;
    this.currentVocabType = 'word';
    this.markSeen(vocabId, 'word');

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
    document.getElementById('vocab-category').textContent = t('cat_' + v.category);

    const status = this.getStatus(vocabId, 'word');
    this._syncStatusBtns(status);
    this.showOverlay('overlay-vocab');
    this.updateKnowledgeBadge();
  },

  closeVocab() { this.hideOverlay('overlay-vocab'); this.currentVocabId = null; },

  markVocab(status) {
    if (!this.currentVocabId) return;
    const type = this.currentVocabType || 'word';
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

    document.getElementById('dlg-german').textContent  = node.german;
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
        btn.innerHTML = `<span class="opt-de">${opt.text}</span>
                         <span class="opt-zh">${opt.textChinese}</span>`;
        btn.onclick = () => {
          if (opt.learnPhrase) this.markSeen(opt.learnPhrase, 'phrase');
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

  // ── Knowledge Base ────────────────────────────────────────
  openKnowledge() { this.renderKnowledge(); this.showOverlay('overlay-knowledge'); },
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

    document.getElementById('scene-progress').innerHTML = Object.keys(SCENES).map(sid => {
      const sc = SCENES[sid];
      const ids = sc.objects.map(o => o.vocabId);
      const seen    = ids.filter(id => p.words[id]).length;
      const learned = ids.filter(id => (p.words[id] || {}).status === 'learned').length;
      const pct2 = ids.length ? Math.round((learned / ids.length) * 100) : 0;
      return `<div class="scene-stat">
        <span class="scene-stat-name">${sc.emoji} ${LANG.current === 'zh' ? sc.nameChinese : sc.name}</span>
        <span class="scene-stat-count">${seen}/${ids.length} seen · ${learned} learned</span>
        <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct2}%"></div></div>
      </div>`;
    }).join('');
  },

  renderKnowledgeList() {
    const p = this.loadProgress();
    const tab = this.knowledgeTab, filter = this.knowledgeFilter;

    let items = tab === 'words'
      ? Object.keys(VOCAB).map(id => {
          const e = p.words[id];
          return e ? { ...VOCAB[id], type: 'word', status: e.status, seenAt: e.seenAt } : null;
        }).filter(Boolean)
      : Object.keys(PHRASES).map(id => {
          const e = p.phrases[id];
          return e ? { ...PHRASES[id], type: 'phrase', status: e.status, seenAt: e.seenAt } : null;
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
      if (item.type === 'word') return `
        <div class="kb-item status-${sc}" onclick="Game.openVocabFromKb('${item.id}')">
          <div class="kb-item-main">
            <span class="kb-german">${item.german}</span>
            <span class="kb-chinese">${item.chinese}</span>
            <span class="kb-english">${item.english}</span>
          </div>
          <div class="kb-item-meta">
            <span class="kb-cat">${t('cat_' + item.category)}</span>
            <span class="kb-status-badge status-${sc}">${sl}</span>
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
    }
  });
  document.addEventListener('keyup', e => Player.onKey(e.key, false));
});
