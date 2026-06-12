// ============================================================
// Internationalisation — default English, optional Chinese
// ============================================================

const LANG = { current: 'en' };

const T = {
  en: {
    game_title: 'München Adventure',
    game_subtitle: 'Explore Munich · Learn German',
    game_tagline: 'Click objects to learn words · Talk to people · Collect vocabulary',
    start_btn: '▶  Start Game',
    lang_toggle: '中文',

    map_title: 'Explore München',
    map_subtitle: 'Select a destination on the map',
    knowledge_btn: '📚 My Dictionary',

    scene_hint: '⌨ WASD / Arrow keys to move  ·  E to interact  ·  Click objects to learn',
    back_btn: '← Map',
    interact_prompt: 'E  Interact',
    talk_prompt: 'E  Talk',

    vocab_pronunciation: 'Pronunciation',
    vocab_example_label: 'Example',
    status_learned: '✓ Know it',
    status_fuzzy: '? Fuzzy',
    status_unknown: '✗ Don\'t know',

    dlg_end_btn: 'End conversation',

    kb_title: '📚 My Vocabulary — Wörterbuch',
    kb_tab_words: 'Words',
    kb_tab_phrases: 'Phrases',
    kb_filter_all: 'All',
    kb_filter_learned: '✓ Know',
    kb_filter_fuzzy: '? Fuzzy',
    kb_filter_unknown: '✗ Don\'t know',
    kb_empty_all: 'Nothing learned yet.\nGo explore scenes and talk to people!',
    kb_empty_filter: 'No items with this status.',
    kb_words_seen: 'words seen',
    kb_phrases_seen: 'phrases seen',
    kb_mastered: 'mastered',
    kb_progress: 'Overall progress',

    cat_buildings: '🏛 Building',
    cat_objects: '📦 Object',
    cat_places: '📍 Place',
    cat_animals: '🐾 Animal',
    cat_nature: '🌿 Nature',
    cat_people: '👤 People',
    cat_food: '🍽 Food',
    cat_transport: '🚗 Transport',

    phrase_greetings: '👋 Greetings',
    phrase_polite: '🙏 Polite expressions',
    phrase_directions: '🗺 Directions',
    phrase_learning: '📚 Learning',
    phrase_food: '🍽 Food & Drink',
    phrase_shopping: '🛍 Shopping',
    phrase_introductions: '🤝 Introductions',

    loc_marienplatz: 'Marienplatz',
    loc_marienplatz_desc: 'Heart of Munich — Frauenkirche & Rathaus',
    loc_tum: 'TU München',
    loc_tum_desc: 'World-class technical university',
    loc_englischergarten: 'Englischer Garten',
    loc_englischergarten_desc: 'Larger than Central Park — urban paradise',
    loc_hofbraeuhaus: 'Hofbräuhaus',
    loc_hofbraeuhaus_desc: 'World-famous Bavarian beer hall',
  },

  zh: {
    game_title: '慕尼黑冒险',
    game_subtitle: '探索慕尼黑 · 学习德语',
    game_tagline: '点击物体学单词 · 和人对话 · 收集词汇',
    start_btn: '▶  开始游戏',
    lang_toggle: 'English',

    map_title: '探索慕尼黑',
    map_subtitle: '在地图上选择一个目的地',
    knowledge_btn: '📚 我的图鉴',

    scene_hint: '⌨ WASD / 方向键 移动  ·  E 键交互  ·  点击物体学单词',
    back_btn: '← 地图',
    interact_prompt: 'E  查看',
    talk_prompt: 'E  对话',

    vocab_pronunciation: '发音',
    vocab_example_label: '例句',
    status_learned: '✓ 认识',
    status_fuzzy: '? 模糊',
    status_unknown: '✗ 不认识',

    dlg_end_btn: '结束对话',

    kb_title: '📚 我的图鉴 — Wörterbuch',
    kb_tab_words: '单词',
    kb_tab_phrases: '句子',
    kb_filter_all: '全部',
    kb_filter_learned: '✓ 认识',
    kb_filter_fuzzy: '? 模糊',
    kb_filter_unknown: '✗ 不认识',
    kb_empty_all: '还没有学过任何内容。\n去场景中探索吧！',
    kb_empty_filter: '没有符合该状态的条目。',
    kb_words_seen: '个单词已见',
    kb_phrases_seen: '个句子已见',
    kb_mastered: '项已掌握',
    kb_progress: '总体进度',

    cat_buildings: '🏛 建筑',
    cat_objects: '📦 物品',
    cat_places: '📍 场所',
    cat_animals: '🐾 动物',
    cat_nature: '🌿 自然',
    cat_people: '👤 人物',
    cat_food: '🍽 食物',
    cat_transport: '🚗 交通',

    phrase_greetings: '👋 问候',
    phrase_polite: '🙏 礼貌用语',
    phrase_directions: '🗺 问路',
    phrase_learning: '📚 学习用语',
    phrase_food: '🍽 饮食',
    phrase_shopping: '🛍 购物',
    phrase_introductions: '🤝 自我介绍',

    loc_marienplatz: '玛利亚广场',
    loc_marienplatz_desc: '慕尼黑心脏 — 圣母教堂与市政厅',
    loc_tum: '慕尼黑工业大学',
    loc_tum_desc: '世界顶尖理工大学',
    loc_englischergarten: '英国花园',
    loc_englischergarten_desc: '比纽约中央公园更大的城市绿肺',
    loc_hofbraeuhaus: '霍夫布劳豪斯',
    loc_hofbraeuhaus_desc: '世界最著名的巴伐利亚啤酒馆',
  }
};

function t(key) {
  return (T[LANG.current] && T[LANG.current][key]) || T.en[key] || key;
}

function toggleLang() {
  LANG.current = LANG.current === 'en' ? 'zh' : 'en';
  applyLanguage();
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // Toggle buttons show the OTHER language
  ['lang-toggle-btn','lang-toggle-btn-map'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = t('lang_toggle');
  });
  // Re-render knowledge base if open
  if (document.getElementById('overlay-knowledge').classList.contains('visible')) {
    Game.renderKnowledge();
  }
}
