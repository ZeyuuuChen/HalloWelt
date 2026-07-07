// ============================================================
// PLAYER — sprite, movement, game loop, proximity detection
// ============================================================

const Player = {
  x: 200, y: 340,         // world position (px)
  vx: 0, vy: 0,
  speed: 3.5,
  width: 36, height: 54,
  facing: 1,              // 1 = right, -1 = left
  walking: false,
  enabled: false,
  sceneW: 1800,           // current scene world width
  sceneH: 480,            // current scene world height
  groundY: 350,           // y floor level
  camX: 0,                // camera world-x offset

  // interaction state
  nearObject: null,
  nearNPC: null,
  interactCooldown: 0,

  keys: {},
  _raf: null,
  _el: null,              // DOM element for sprite
  _promptEl: null,        // interaction prompt DOM element

  init(sceneW, sceneH, groundY, startX) {
    this.sceneW = sceneW || 1800;
    this.sceneH = sceneH || 480;
    this.groundY = groundY || 340;
    this.x = startX || 180;
    this.y = this.groundY;
    this.vx = 0; this.vy = 0;
    this.facing = 1;
    this.walking = false;
    this.nearObject = null;
    this.nearNPC = null;
    this.interactCooldown = 0;
    this.enabled = true;
    this._createSprite();
    this._startLoop();
  },

  destroy() {
    this.enabled = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._el && this._el.parentNode) this._el.parentNode.removeChild(this._el);
    if (this._promptEl && this._promptEl.parentNode) this._promptEl.parentNode.removeChild(this._promptEl);
    this._el = null;
    this._promptEl = null;
  },

  _createSprite() {
    const canvas = document.getElementById('scene-canvas');
    if (!canvas) return;

    // Remove old sprite if any
    const old = canvas.querySelector('.player-sprite');
    if (old) old.remove();
    const oldP = canvas.querySelector('.interact-prompt');
    if (oldP) oldP.remove();

    const el = document.createElement('div');
    el.className = 'player-sprite';
    el.innerHTML = `
      <div class="ps-shadow"></div>
      <div class="ps-body-group">
        <div class="ps-backpack"></div>
        <div class="ps-head">
          <div class="ps-hair"></div>
          <div class="ps-face">
            <div class="ps-eyes"><span></span><span></span></div>
            <div class="ps-mouth"></div>
          </div>
        </div>
        <div class="ps-body">
          <div class="ps-body-inner"></div>
          <div class="ps-arm ps-arm-l"></div>
          <div class="ps-arm ps-arm-r"></div>
        </div>
        <div class="ps-legs">
          <div class="ps-leg ps-leg-l"></div>
          <div class="ps-leg ps-leg-r"></div>
        </div>
      </div>`;
    canvas.appendChild(el);
    this._el = el;

    // Interaction prompt
    const prompt = document.createElement('div');
    prompt.className = 'interact-prompt hidden';
    canvas.appendChild(prompt);
    this._promptEl = prompt;
  },

  _startLoop() {
    const loop = () => {
      if (!this.enabled) return;
      this._update();
      this._draw();
      this._raf = requestAnimationFrame(loop);
    };
    this._raf = requestAnimationFrame(loop);
  },

  _update() {
    if (this.interactCooldown > 0) this.interactCooldown--;

    const left  = this.keys['ArrowLeft']  || this.keys['a'] || this.keys['A'];
    const right = this.keys['ArrowRight'] || this.keys['d'] || this.keys['D'];
    const up    = this.keys['ArrowUp']    || this.keys['w'] || this.keys['W'];
    const down  = this.keys['ArrowDown']  || this.keys['s'] || this.keys['S'];

    this.vx = 0; this.vy = 0;
    if (left)  { this.vx = -this.speed; this.facing = -1; }
    if (right) { this.vx =  this.speed; this.facing =  1; }
    if (up)    this.vy = -this.speed * 0.6;
    if (down)  this.vy =  this.speed * 0.6;

    this.walking = (this.vx !== 0 || this.vy !== 0);

    this.x += this.vx;
    this.y += this.vy;

    // Clamp to scene bounds
    this.x = Math.max(30, Math.min(this.sceneW - 30, this.x));
    this.y = Math.max(this.groundY - 60, Math.min(this.groundY + 40, this.y));

    // Camera: fixed game viewport width.
    const vpW = 900;
    const maxCam = Math.max(0, this.sceneW - vpW);
    const screenX = this.x - this.camX;
    const leftEdge = vpW * 0.35;
    const rightEdge = vpW * 0.65;

    if (screenX < leftEdge) {
      this.camX -= leftEdge - screenX;
    } else if (screenX > rightEdge) {
      this.camX += screenX - rightEdge;
    }
    this.camX = Math.max(0, Math.min(maxCam, this.camX));

    // Proximity check
    this._checkProximity();
  },

  _checkProximity() {
    const scene = Game.currentScene ? SCENES[Game.currentScene] : null;
    if (!scene) return;

    const OBJECT_DIST = 90;
    const NPC_DIST = 100;

    // Check objects
    let nearObj = null;
    for (const obj of scene.objects) {
      if (!obj.worldX) continue;
      const dx = this.x - (obj.worldX + obj.worldW / 2);
      const dy = this.y - obj.worldY;
      if (Math.sqrt(dx*dx + dy*dy) < OBJECT_DIST) { nearObj = obj; break; }
    }
    this.nearObject = nearObj;

    // Check NPCs
    let nearNPC = null;
    for (const npc of scene.npcs) {
      if (!npc.worldX) continue;
      const dx = this.x - npc.worldX;
      const dy = this.y - npc.worldY;
      if (Math.sqrt(dx*dx + dy*dy) < NPC_DIST) { nearNPC = npc; break; }
    }
    this.nearNPC = nearNPC;
  },

  _draw() {
    if (!this._el) return;

    // Position sprite in viewport (screen) coords
    const screenX = this.x - this.camX - this.width / 2;
    const screenY = this.y - this.height;

    this._el.style.left = screenX + 'px';
    this._el.style.top  = screenY + 'px';
    this._el.style.transform = `scaleX(${this.facing})`;
    this._el.classList.toggle('walking', this.walking);

    // Move all world objects with camera
    const canvas = document.getElementById('scene-canvas');
    if (canvas) {
      const world = canvas.querySelector('.scene-world');
      if (world) world.style.transform = `translateX(${-this.camX}px)`;
    }

    // Interaction prompt
    if (this._promptEl) {
      const target = this.nearNPC || this.nearObject;
      if (target) {
        const tx = (target.worldX || 0) - this.camX;
        const ty = (target.worldY || target.worldX || 0) - 70;
        this._promptEl.style.left = tx + 'px';
        this._promptEl.style.top  = (this.y - this.height - 30) + 'px';
        const isNPC = !!this.nearNPC;
        this._promptEl.textContent = isNPC ? t('talk_prompt') : t('interact_prompt');
        this._promptEl.classList.remove('hidden');
      } else {
        this._promptEl.classList.add('hidden');
      }
    }
  },

  interact() {
    if (this.interactCooldown > 0) return;
    this.interactCooldown = 20;

    if (this.nearNPC) {
      Game.openDialogue(this.nearNPC.dialogueId, this.nearNPC.id);
    } else if (this.nearObject) {
      Game.openVocab(this.nearObject.vocabId);
    }
  },

  onKey(key, down) {
    this.keys[key] = down;
    if (down && (key === 'e' || key === 'E')) this.interact();
  }
};
