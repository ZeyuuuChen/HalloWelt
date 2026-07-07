// ============================================================
// GAME DATA — Vocabulary, Dialogues, Scene Definitions
// ============================================================

const VOCAB = {
  kirche: {
    id: 'kirche', scene: 'marienplatz', category: 'buildings',
    german: 'die Kirche', article: 'die', word: 'Kirche',
    pronunciation: 'KIR-khə',
    chinese: '教堂', english: 'church',
    example: 'Die Frauenkirche ist das Wahrzeichen Münchens.',
    exampleChinese: '圣母教堂是慕尼黑的标志。',
    exampleEnglish: 'The Frauenkirche is the symbol of Munich.'
  },
  rathaus: {
    id: 'rathaus', scene: 'marienplatz', category: 'buildings',
    german: 'das Rathaus', article: 'das', word: 'Rathaus',
    pronunciation: 'RAHT-hows',
    chinese: '市政厅', english: 'town hall',
    example: 'Das Rathaus steht am Marienplatz.',
    exampleChinese: '市政厅坐落在玛利亚广场。',
    exampleEnglish: 'The town hall is located at Marienplatz.'
  },
  uhr: {
    id: 'uhr', scene: 'marienplatz', category: 'objects',
    german: 'die Uhr', article: 'die', word: 'Uhr',
    pronunciation: 'OOR',
    chinese: '钟表 / 时钟', english: 'clock / watch',
    example: 'Das Glockenspiel ist eine berühmte Uhr.',
    exampleChinese: '报时钟是一座著名的时钟。',
    exampleEnglish: 'The Glockenspiel is a famous clock.'
  },
  markt: {
    id: 'markt', scene: 'marienplatz', category: 'places',
    german: 'der Markt', article: 'der', word: 'Markt',
    pronunciation: 'MARKT',
    chinese: '市场', english: 'market',
    example: 'Der Viktualienmarkt ist ein berühmter Markt.',
    exampleChinese: '维克图阿连市场是一个著名的市场。',
    exampleEnglish: 'Viktualienmarkt is a famous market.'
  },
  brunnen: {
    id: 'brunnen', scene: 'marienplatz', category: 'objects',
    german: 'der Brunnen', article: 'der', word: 'Brunnen',
    pronunciation: 'BROO-nən',
    chinese: '喷泉 / 水井', english: 'fountain / well',
    example: 'Der Brunnen ist sehr schön.',
    exampleChinese: '喷泉非常漂亮。',
    exampleEnglish: 'The fountain is very beautiful.'
  },
  taube: {
    id: 'taube', scene: 'marienplatz', category: 'animals',
    german: 'die Taube', article: 'die', word: 'Taube',
    pronunciation: 'TOW-bə',
    chinese: '鸽子', english: 'pigeon / dove',
    example: 'Viele Tauben leben auf dem Marienplatz.',
    exampleChinese: '玛利亚广场上生活着许多鸽子。',
    exampleEnglish: 'Many pigeons live at Marienplatz.'
  },
  blumenladen: {
    id: 'blumenladen', scene: 'marienplatz', category: 'places',
    german: 'der Blumenladen', article: 'der', word: 'Blumenladen',
    pronunciation: 'BLOO-mən-lah-dən',
    chinese: '花店', english: 'flower shop',
    example: 'Im Blumenladen gibt es viele schöne Blumen.',
    exampleChinese: '花店里有很多美丽的鲜花。',
    exampleEnglish: 'There are many beautiful flowers in the flower shop.'
  },
  cafe: {
    id: 'cafe', scene: 'marienplatz', category: 'places',
    german: 'das Café', article: 'das', word: 'Café',
    pronunciation: 'ka-FEH',
    chinese: '咖啡馆', english: 'café',
    example: 'Ich trinke Kaffee im Café.',
    exampleChinese: '我在咖啡馆喝咖啡。',
    exampleEnglish: 'I drink coffee in the café.'
  },
  universitaet: {
    id: 'universitaet', scene: 'tum', category: 'buildings',
    german: 'die Universität', article: 'die', word: 'Universität',
    pronunciation: 'oo-ni-ver-zi-TEHT',
    chinese: '大学', english: 'university',
    example: 'Die TU München ist eine bekannte Universität.',
    exampleChinese: '慕尼黑工业大学是一所知名大学。',
    exampleEnglish: 'TU Munich is a well-known university.'
  },
  bibliothek: {
    id: 'bibliothek', scene: 'tum', category: 'buildings',
    german: 'die Bibliothek', article: 'die', word: 'Bibliothek',
    pronunciation: 'bib-li-o-TEHK',
    chinese: '图书馆', english: 'library',
    example: 'In der Bibliothek sind viele Bücher.',
    exampleChinese: '图书馆里有很多书。',
    exampleEnglish: 'There are many books in the library.'
  },
  buch: {
    id: 'buch', scene: 'tum', category: 'objects',
    german: 'das Buch', article: 'das', word: 'Buch',
    pronunciation: 'BOOKH',
    chinese: '书', english: 'book',
    example: 'Ich lese ein interessantes Buch.',
    exampleChinese: '我在读一本有趣的书。',
    exampleEnglish: 'I am reading an interesting book.'
  },
  rucksack: {
    id: 'rucksack', scene: 'tum', category: 'objects',
    german: 'der Rucksack', article: 'der', word: 'Rucksack',
    pronunciation: 'ROOK-zak',
    chinese: '背包', english: 'backpack',
    example: 'Der Student trägt einen Rucksack.',
    exampleChinese: '这位学生背着一个背包。',
    exampleEnglish: 'The student carries a backpack.'
  },
  laptop: {
    id: 'laptop', scene: 'tum', category: 'objects',
    german: 'der Laptop', article: 'der', word: 'Laptop',
    pronunciation: 'LAP-top',
    chinese: '笔记本电脑', english: 'laptop',
    example: 'Ich lerne mit meinem Laptop.',
    exampleChinese: '我用笔记本电脑学习。',
    exampleEnglish: 'I study with my laptop.'
  },
  fahrrad: {
    id: 'fahrrad', scene: 'tum', category: 'transport',
    german: 'das Fahrrad', article: 'das', word: 'Fahrrad',
    pronunciation: 'FAR-raht',
    chinese: '自行车', english: 'bicycle',
    example: 'Viele Studenten fahren Fahrrad.',
    exampleChinese: '很多学生骑自行车。',
    exampleEnglish: 'Many students ride bicycles.'
  },
  hoersaal: {
    id: 'hoersaal', scene: 'tum', category: 'buildings',
    german: 'der Hörsaal', article: 'der', word: 'Hörsaal',
    pronunciation: 'HÖR-zahl',
    chinese: '阶梯教室 / 讲堂', english: 'lecture hall',
    example: 'Die Vorlesung ist im Hörsaal.',
    exampleChinese: '讲座在阶梯教室举行。',
    exampleEnglish: 'The lecture is in the lecture hall.'
  },
  mensa: {
    id: 'mensa', scene: 'tum', category: 'places',
    german: 'die Mensa', article: 'die', word: 'Mensa',
    pronunciation: 'MEN-za',
    chinese: '大学食堂', english: 'university cafeteria',
    example: 'Ich esse zu Mittag in der Mensa.',
    exampleChinese: '我在食堂吃午饭。',
    exampleEnglish: 'I eat lunch in the cafeteria.'
  },
  baum: {
    id: 'baum', scene: 'englischergarten', category: 'nature',
    german: 'der Baum', article: 'der', word: 'Baum',
    pronunciation: 'BOWM',
    chinese: '树', english: 'tree',
    example: 'Der Baum ist sehr groß.',
    exampleChinese: '这棵树非常高大。',
    exampleEnglish: 'The tree is very big.'
  },
  blume: {
    id: 'blume', scene: 'englischergarten', category: 'nature',
    german: 'die Blume', article: 'die', word: 'Blume',
    pronunciation: 'BLOO-mə',
    chinese: '花', english: 'flower',
    example: 'Die Blume ist wunderschön.',
    exampleChinese: '这朵花非常美丽。',
    exampleEnglish: 'The flower is wonderful.'
  },
  fluss: {
    id: 'fluss', scene: 'englischergarten', category: 'nature',
    german: 'der Fluss', article: 'der', word: 'Fluss',
    pronunciation: 'FLOOS',
    chinese: '河流', english: 'river',
    example: 'Die Isar ist ein schöner Fluss.',
    exampleChinese: '伊萨尔河是一条美丽的河流。',
    exampleEnglish: 'The Isar is a beautiful river.'
  },
  hund: {
    id: 'hund', scene: 'englischergarten', category: 'animals',
    german: 'der Hund', article: 'der', word: 'Hund',
    pronunciation: 'HOONT',
    chinese: '狗', english: 'dog',
    example: 'Der Hund läuft im Park.',
    exampleChinese: '狗在公园里跑。',
    exampleEnglish: 'The dog runs in the park.'
  },
  bruecke: {
    id: 'bruecke', scene: 'englischergarten', category: 'buildings',
    german: 'die Brücke', article: 'die', word: 'Brücke',
    pronunciation: 'BRÜK-ə',
    chinese: '桥', english: 'bridge',
    example: 'Wir gehen über die Brücke.',
    exampleChinese: '我们走过桥。',
    exampleEnglish: 'We walk over the bridge.'
  },
  surfer: {
    id: 'surfer', scene: 'englischergarten', category: 'people',
    german: 'der Surfer', article: 'der', word: 'Surfer',
    pronunciation: 'ZURF-ər',
    chinese: '冲浪者', english: 'surfer',
    example: 'Der Surfer surft auf dem Eisbach.',
    exampleChinese: '冲浪者在艾斯巴赫河上冲浪。',
    exampleEnglish: 'The surfer surfs on the Eisbach.'
  },
  pagode: {
    id: 'pagode', scene: 'englischergarten', category: 'buildings',
    german: 'die Pagode', article: 'die', word: 'Pagode',
    pronunciation: 'pa-GOH-də',
    chinese: '宝塔', english: 'pagoda',
    example: 'Die chinesische Pagode ist im Englischen Garten.',
    exampleChinese: '中国宝塔在英国花园里。',
    exampleEnglish: 'The Chinese Pagoda is in the English Garden.'
  },
  bier: {
    id: 'bier', scene: 'hofbraeuhaus', category: 'food',
    german: 'das Bier', article: 'das', word: 'Bier',
    pronunciation: 'BEER',
    chinese: '啤酒', english: 'beer',
    example: 'Ein Bier, bitte!',
    exampleChinese: '请来一杯啤酒！',
    exampleEnglish: 'One beer, please!'
  },
  brezel: {
    id: 'brezel', scene: 'hofbraeuhaus', category: 'food',
    german: 'die Brezel', article: 'die', word: 'Brezel',
    pronunciation: 'BREH-tsəl',
    chinese: '椒盐卷饼（结形饼干）', english: 'pretzel',
    example: 'Eine Brezel mit Butter, bitte.',
    exampleChinese: '请来一个涂黄油的椒盐卷饼。',
    exampleEnglish: 'A pretzel with butter, please.'
  },
  masskrug: {
    id: 'masskrug', scene: 'hofbraeuhaus', category: 'objects',
    german: 'der Masskrug', article: 'der', word: 'Masskrug',
    pronunciation: 'MAHS-krook',
    chinese: '一升装啤酒杯', english: 'beer stein (1 litre)',
    example: 'Der Masskrug fasst einen Liter.',
    exampleChinese: '这个啤酒杯能装一升。',
    exampleEnglish: 'The beer stein holds one litre.'
  },
  tisch: {
    id: 'tisch', scene: 'hofbraeuhaus', category: 'objects',
    german: 'der Tisch', article: 'der', word: 'Tisch',
    pronunciation: 'TISH',
    chinese: '桌子', english: 'table',
    example: 'Bitte setzen Sie sich an den Tisch.',
    exampleChinese: '请在桌子旁坐下。',
    exampleEnglish: 'Please sit at the table.'
  },
  stuhl: {
    id: 'stuhl', scene: 'hofbraeuhaus', category: 'objects',
    german: 'der Stuhl', article: 'der', word: 'Stuhl',
    pronunciation: 'SHTOOL',
    chinese: '椅子', english: 'chair',
    example: 'Ist dieser Stuhl frei?',
    exampleChinese: '这把椅子空着吗？',
    exampleEnglish: 'Is this chair free?'
  },
  akkordeon: {
    id: 'akkordeon', scene: 'hofbraeuhaus', category: 'objects',
    german: 'das Akkordeon', article: 'das', word: 'Akkordeon',
    pronunciation: 'a-KOR-de-on',
    chinese: '手风琴', english: 'accordion',
    example: 'Die Musik vom Akkordeon klingt schön.',
    exampleChinese: '手风琴的音乐听起来很美。',
    exampleEnglish: 'The accordion music sounds beautiful.'
  },
  wand: {
    id: 'wand', scene: 'hofbraeuhaus', category: 'objects',
    german: 'die Wand', article: 'die', word: 'Wand',
    pronunciation: 'VANT',
    chinese: '墙壁', english: 'wall',
    example: 'An der Wand hängen Bilder.',
    exampleChinese: '墙上挂着图画。',
    exampleEnglish: 'Pictures hang on the wall.'
  },
  bahnhof: {
    id: 'bahnhof', scene: 'hauptbahnhof', category: 'places',
    german: 'der Bahnhof', article: 'der', word: 'Bahnhof',
    pronunciation: 'BAHN-hohf',
    chinese: '火车站', english: 'train station',
    example: 'Der Hauptbahnhof ist sehr groß.',
    exampleChinese: '中央火车站很大。',
    exampleEnglish: 'The central station is very large.'
  },
  zug: {
    id: 'zug', scene: 'hauptbahnhof', category: 'transport',
    german: 'der Zug', article: 'der', word: 'Zug',
    pronunciation: 'TSOOK',
    chinese: '火车', english: 'train',
    example: 'Der Zug fährt nach Berlin.',
    exampleChinese: '这列火车开往柏林。',
    exampleEnglish: 'The train goes to Berlin.'
  },
  gleis: {
    id: 'gleis', scene: 'hauptbahnhof', category: 'places',
    german: 'das Gleis', article: 'das', word: 'Gleis',
    pronunciation: 'GLYS',
    chinese: '站台 / 轨道', english: 'platform / track',
    example: 'Der Zug fährt von Gleis 5 ab.',
    exampleChinese: '火车从 5 号站台出发。',
    exampleEnglish: 'The train departs from platform 5.'
  },
  fahrkarte: {
    id: 'fahrkarte', scene: 'hauptbahnhof', category: 'objects',
    german: 'die Fahrkarte', article: 'die', word: 'Fahrkarte',
    pronunciation: 'FAHR-kar-tə',
    chinese: '车票', english: 'ticket',
    example: 'Ich kaufe eine Fahrkarte am Automaten.',
    exampleChinese: '我在自动售票机买一张车票。',
    exampleEnglish: 'I buy a ticket at the machine.'
  },
  automat: {
    id: 'automat', scene: 'hauptbahnhof', category: 'objects',
    german: 'der Automat', article: 'der', word: 'Automat',
    pronunciation: 'ow-toh-MAHT',
    chinese: '自动售票机 / 自动机', english: 'machine',
    example: 'Der Automat steht neben dem Eingang.',
    exampleChinese: '自动售票机在入口旁边。',
    exampleEnglish: 'The machine is next to the entrance.'
  },
  koffer: {
    id: 'koffer', scene: 'hauptbahnhof', category: 'objects',
    german: 'der Koffer', article: 'der', word: 'Koffer',
    pronunciation: 'KOF-er',
    chinese: '行李箱', english: 'suitcase',
    example: 'Mein Koffer ist schwer.',
    exampleChinese: '我的行李箱很重。',
    exampleEnglish: 'My suitcase is heavy.'
  },
  fahrplan: {
    id: 'fahrplan', scene: 'hauptbahnhof', category: 'objects',
    german: 'der Fahrplan', article: 'der', word: 'Fahrplan',
    pronunciation: 'FAHR-plahn',
    chinese: '时刻表', english: 'timetable',
    example: 'Der Fahrplan zeigt die Abfahrt und die Ankunft.',
    exampleChinese: '时刻表显示出发和到达。',
    exampleEnglish: 'The timetable shows departure and arrival.'
  },
  abfahrt: {
    id: 'abfahrt', scene: 'hauptbahnhof', category: 'transport',
    german: 'die Abfahrt', article: 'die', word: 'Abfahrt',
    pronunciation: 'AHP-fahrt',
    chinese: '出发', english: 'departure',
    example: 'Die Abfahrt ist um zehn Uhr.',
    exampleChinese: '出发时间是十点。',
    exampleEnglish: 'The departure is at ten o’clock.'
  },
  ankunft: {
    id: 'ankunft', scene: 'hauptbahnhof', category: 'transport',
    german: 'die Ankunft', article: 'die', word: 'Ankunft',
    pronunciation: 'AHN-koonft',
    chinese: '到达', english: 'arrival',
    example: 'Die Ankunft ist um zwölf Uhr.',
    exampleChinese: '到达时间是十二点。',
    exampleEnglish: 'The arrival is at twelve o’clock.'
  }
};

// ============================================================
// THEORY-DRIVEN LEARNING DATA
// Knowledge graph: prerequisites -> i+1 scheduling
// Cultural scaffolds: scene-bound meaning before translation
// Output challenges: Swain-style required production
// ============================================================

const VOCAB_GRAPH = {
  kirche: { level: 1, prerequisites: [], unlocks: ['rathaus'], family: 'place-buildings' },
  rathaus: { level: 2, prerequisites: ['kirche'], unlocks: ['uhr'], family: 'place-buildings' },
  uhr: { level: 2, prerequisites: ['rathaus'], unlocks: [], family: 'place-buildings' },
  markt: { level: 1, prerequisites: [], unlocks: ['blumenladen', 'cafe'], family: 'city-life' },
  blumenladen: { level: 2, prerequisites: ['markt', 'blume'], unlocks: [], family: 'city-life' },
  cafe: { level: 2, prerequisites: ['markt'], unlocks: [], family: 'city-life' },
  brunnen: { level: 1, prerequisites: [], unlocks: [], family: 'city-life' },
  taube: { level: 1, prerequisites: [], unlocks: [], family: 'city-life' },

  buch: { level: 1, prerequisites: [], unlocks: ['bibliothek'], family: 'campus' },
  bibliothek: { level: 2, prerequisites: ['buch'], unlocks: ['universitaet'], family: 'campus' },
  universitaet: { level: 2, prerequisites: ['bibliothek'], unlocks: ['hoersaal'], family: 'campus' },
  hoersaal: { level: 3, prerequisites: ['universitaet'], unlocks: [], family: 'campus' },
  rucksack: { level: 1, prerequisites: [], unlocks: ['laptop'], family: 'student-life' },
  laptop: { level: 2, prerequisites: ['rucksack'], unlocks: [], family: 'student-life' },
  mensa: { level: 2, prerequisites: ['universitaet'], unlocks: [], family: 'student-life' },
  fahrrad: { level: 1, prerequisites: [], unlocks: [], family: 'student-life' },

  baum: { level: 1, prerequisites: [], unlocks: ['blume'], family: 'park' },
  blume: { level: 2, prerequisites: ['baum'], unlocks: ['blumenladen'], family: 'park' },
  fluss: { level: 1, prerequisites: [], unlocks: ['bruecke', 'surfer'], family: 'park' },
  bruecke: { level: 2, prerequisites: ['fluss'], unlocks: [], family: 'park' },
  surfer: { level: 2, prerequisites: ['fluss'], unlocks: [], family: 'park' },
  hund: { level: 1, prerequisites: [], unlocks: [], family: 'park' },
  pagode: { level: 3, prerequisites: ['baum', 'bruecke'], unlocks: [], family: 'park' },

  tisch: { level: 1, prerequisites: [], unlocks: ['stuhl'], family: 'beerhall' },
  stuhl: { level: 1, prerequisites: ['tisch'], unlocks: [], family: 'beerhall' },
  bier: { level: 1, prerequisites: [], unlocks: ['masskrug', 'brezel'], family: 'beerhall' },
  masskrug: { level: 2, prerequisites: ['bier'], unlocks: [], family: 'beerhall' },
  brezel: { level: 2, prerequisites: ['bier'], unlocks: [], family: 'beerhall' },
  akkordeon: { level: 3, prerequisites: ['bier'], unlocks: [], family: 'beerhall' },
  wand: { level: 1, prerequisites: [], unlocks: [], family: 'beerhall' },

  bahnhof: { level: 1, prerequisites: [], unlocks: ['zug', 'fahrkarte'], family: 'station' },
  zug: { level: 1, prerequisites: ['bahnhof'], unlocks: ['gleis', 'abfahrt'], family: 'station' },
  koffer: { level: 1, prerequisites: [], unlocks: [], family: 'station' },
  fahrkarte: { level: 2, prerequisites: ['bahnhof'], unlocks: ['automat'], family: 'station' },
  automat: { level: 2, prerequisites: ['fahrkarte'], unlocks: [], family: 'station' },
  gleis: { level: 2, prerequisites: ['zug'], unlocks: ['fahrplan'], family: 'station' },
  fahrplan: { level: 3, prerequisites: ['gleis'], unlocks: ['abfahrt', 'ankunft'], family: 'station' },
  abfahrt: { level: 3, prerequisites: ['fahrplan'], unlocks: [], family: 'station' },
  ankunft: { level: 3, prerequisites: ['fahrplan'], unlocks: [], family: 'station' }
};

const CEFR_WORD_LEVELS = {
  kirche: 'A1', rathaus: 'A1', uhr: 'A1', markt: 'A1', brunnen: 'A1', taube: 'A1',
  cafe: 'A1', buch: 'A1', rucksack: 'A1', fahrrad: 'A1', baum: 'A1', blume: 'A1',
  fluss: 'A1', hund: 'A1', bier: 'A1', brezel: 'A1', tisch: 'A1', stuhl: 'A1',
  bahnhof: 'A1', zug: 'A1', koffer: 'A1',

  blumenladen: 'A2', universitaet: 'A2', bibliothek: 'A2', laptop: 'A2',
  hoersaal: 'A2', mensa: 'A2', bruecke: 'A2', surfer: 'A2', pagode: 'A2',
  masskrug: 'A2', akkordeon: 'A2', wand: 'A2',
  fahrkarte: 'A2', automat: 'A2', gleis: 'A2', fahrplan: 'A2', abfahrt: 'A2', ankunft: 'A2'
};

const LEVEL_ROUTE = {
  A1: {
    title: 'A1 Survival Munich',
    zh: 'A1 生存慕尼黑',
    goal: 'Recognize concrete places, objects, food, and basic directions.',
    unlockRule: 'Start here. Learn at least 10 A1 words to open the A2 route.',
    scenes: ['marienplatz', 'tum', 'englischergarten', 'hofbraeuhaus']
  },
  A2: {
    title: 'A2 Situated Actions',
    zh: 'A2 情境行动',
    goal: 'Use words in routes, campus tasks, ordering, and cultural explanations.',
    unlockRule: 'Unlocked when A1 foundation is stable enough for i+1 expansion.',
    scenes: ['marienplatz', 'tum', 'englischergarten', 'hofbraeuhaus']
  }
};

const A2_UNLOCK_A1_LEARNED = 10;

const EXPERIMENT_CONDITIONS = {
  control: {
    label: 'Control: word cards',
    zh: '对照组：普通词卡',
    description: 'Vocabulary cards and dictionary remain available; adaptive graph, theory panel, and output gates are hidden.',
    mechanisms: ['cards']
  },
  situated: {
    label: 'Situated input',
    zh: '情境输入组',
    description: 'Players learn by exploring Munich scenes and objects; graph explanation and output gates are disabled.',
    mechanisms: ['cards', 'situated-input']
  },
  full: {
    label: 'Full system',
    zh: '完整系统组',
    description: 'Situated input, explainable graph, negotiation NPCs, output challenges, and SRS are enabled.',
    mechanisms: ['cards', 'situated-input', 'graph', 'negotiation', 'output', 'srs']
  }
};

const ASSESSMENT_ITEMS = [
  {
    id: 'a_bahnhof',
    wordId: 'bahnhof',
    prompt: 'What does "der Bahnhof" mean?',
    zh: '"der Bahnhof" 是什么意思？',
    options: ['train station', 'ticket', 'library', 'beer hall'],
    answer: 'train station'
  },
  {
    id: 'a_gleis',
    wordId: 'gleis',
    prompt: 'Choose the best meaning of "das Gleis".',
    zh: '选择 "das Gleis" 的最佳意思。',
    options: ['platform / track', 'suitcase', 'clock', 'bridge'],
    answer: 'platform / track'
  },
  {
    id: 'a_masskrug',
    wordId: 'masskrug',
    prompt: 'Where would "der Masskrug" most naturally appear?',
    zh: '"der Masskrug" 最自然出现在哪里？',
    options: ['Hofbräuhaus', 'TUM library', 'train platform', 'English Garden'],
    answer: 'Hofbräuhaus'
  },
  {
    id: 'a_fahrkarte',
    wordId: 'fahrkarte',
    prompt: 'Complete the travel sentence: Ich brauche eine ____.',
    zh: '补全旅行句子：Ich brauche eine ____.',
    options: ['Fahrkarte', 'Brezel', 'Pagode', 'Blume'],
    answer: 'Fahrkarte'
  },
  {
    id: 'a_bruecke',
    wordId: 'bruecke',
    prompt: 'Which word fits a route over a river?',
    zh: '哪一个词适合“过河路线”？',
    options: ['die Brücke', 'der Stuhl', 'die Rechnung', 'das Bier'],
    answer: 'die Brücke'
  },
  {
    id: 'a_abfahrt',
    wordId: 'abfahrt',
    prompt: 'Which is the opposite travel event to "die Ankunft"?',
    zh: '"die Ankunft" 对应的相反旅行事件是什么？',
    options: ['die Abfahrt', 'der Automat', 'die Wand', 'der Hund'],
    answer: 'die Abfahrt'
  }
];

const SURVEY_ITEMS = [
  { id: 'motivation', label: 'I wanted to continue learning in the game.', zh: '我想继续在游戏中学习。' },
  { id: 'clarity', label: 'The system made my learning path understandable.', zh: '系统让我理解自己的学习路径。' },
  { id: 'confidence', label: 'The dialogues made me more confident using German.', zh: '对话让我更有信心使用德语。' },
  { id: 'load', label: 'The learning tasks felt mentally demanding.', zh: '学习任务让我感觉认知负担较高。' }
];

const CULTURE_SCAFFOLDS = {
  masskrug: {
    setup: 'Sophie hebt den schweren Glaskrug mit zwei Händen, stößt kurz an und sagt: "Prost!"',
    zh: 'Sophie 双手举起沉重的玻璃杯，轻轻碰杯并说：“Prost!”',
    en: 'Sophie lifts the heavy glass stein with both hands, clinks it, and says "Prost!"',
    principle: 'Situated cue: the word is unlocked through Hofbräuhaus practice.'
  },
  brezel: {
    setup: 'Auf dem Holztisch liegt eine salzige Brezel neben dem Bier.',
    zh: '木桌上，一只咸味椒盐卷饼放在啤酒旁边。',
    en: 'A salty pretzel sits on the wooden table beside the beer.',
    principle: 'Culture-language pairing: Bavarian food context anchors the noun.'
  },
  uhr: {
    setup: 'Am Rathaus bewegen sich Figuren im Glockenspiel, während die Uhr schlägt.',
    zh: '市政厅报时钟响起时，钟楼上的人物开始转动。',
    en: 'The Glockenspiel figures move on the town hall as the clock rings.',
    principle: 'Noticing: motion and sound make the target word salient.'
  },
  bruecke: {
    setup: 'Der Weg über den Eisbach führt links über die Brücke.',
    zh: '通往艾斯巴赫河对岸的路，需要向左走过桥。',
    en: 'The path over the Eisbach goes left across the bridge.',
    principle: 'Navigation language ties the noun to action.'
  },
  bibliothek: {
    setup: 'Studierende flüstern zwischen Regalen; der Ort erklärt das Wort vor der Übersetzung.',
    zh: '学生们在书架间低声交谈；场景先解释词义，再给翻译。',
    en: 'Students whisper between shelves; the place explains the word before translation.',
    principle: 'Context-first input reduces abstract card learning.'
  },
  rathaus: {
    setup: 'Maria zeigt auf den neugotischen Turm und fragt, ob das der Markt oder das Rathaus ist.',
    zh: 'Maria 指向新哥特式塔楼，询问那是市场还是市政厅。',
    en: 'Maria points to the neo-Gothic tower and asks whether it is the market or the town hall.',
    principle: 'Negotiated meaning makes similar city words contrastive.'
  },
  universitaet: {
    setup: 'Vor dem TUM-Hauptgebäude tragen Studierende Rucksäcke und sprechen über den Hörsaal.',
    zh: '在 TUM 主楼前，学生背着书包讨论阶梯教室。',
    en: 'In front of TUM, students carry backpacks and talk about the lecture hall.',
    principle: 'A campus script links place, people, and study actions.'
  },
  fluss: {
    setup: 'Am Eisbach hört man Wasser, sieht die Strömung und fragt nach dem Weg über die Brücke.',
    zh: '在艾斯巴赫河边，玩家听到水声、看到水流，并询问过桥路线。',
    en: 'At the Eisbach, the player hears water, sees the current, and asks for the route over the bridge.',
    principle: 'Multimedia input separates visual scene, audio cue, and text.'
  },
  gleis: {
    setup: 'Auf der Anzeigetafel blinkt "Gleis 5", während der Zug einfährt.',
    zh: '显示屏上闪烁着“5 号站台”，火车正在进站。',
    en: 'The display flashes "Platform 5" as the train pulls in.',
    principle: 'Situated signage anchors transport vocabulary to action.'
  },
  fahrkarte: {
    setup: 'Am roten Automaten wählt der Reisende München–Augsburg und druckt eine Fahrkarte.',
    zh: '旅客在红色自动售票机选择“慕尼黑—奥格斯堡”并打印车票。',
    en: 'At the red machine, the traveler chooses Munich–Augsburg and prints a ticket.',
    principle: 'Task-based input links object, action, and travel goal.'
  },
  fahrplan: {
    setup: 'Der Fahrplan trennt Abfahrt und Ankunft in zwei Spalten.',
    zh: '时刻表把“出发”和“到达”分成两列。',
    en: 'The timetable separates departure and arrival into two columns.',
    principle: 'Contrastive noticing helps distinguish related A2 terms.'
  }
};

const OUTPUT_CHALLENGES = {
  marienplatz: [
    { prompt: 'Say where the town hall is.', zh: '说出市政厅在哪里。', answer: 'Das Rathaus ist am Marienplatz.', blanks: ['Das', 'Rathaus', 'ist', 'am', 'Marienplatz'], accepted: ['das rathaus ist am marienplatz'] },
    { prompt: 'Ask where the market is.', zh: '询问市场在哪里。', answer: 'Wo ist der Markt?', blanks: ['Wo', 'ist', 'der', 'Markt'], accepted: ['wo ist der markt'] }
  ],
  tum: [
    { prompt: 'Say you study with a laptop.', zh: '说“我用笔记本电脑学习”。', answer: 'Ich lerne mit dem Laptop.', blanks: ['Ich', 'lerne', 'mit', 'dem', 'Laptop'], accepted: ['ich lerne mit dem laptop'] },
    { prompt: 'Ask where the lecture hall is.', zh: '询问阶梯教室在哪里。', answer: 'Wo ist der Hörsaal?', blanks: ['Wo', 'ist', 'der', 'Hörsaal'], accepted: ['wo ist der hörsaal', 'wo ist der horsaal'] }
  ],
  englischergarten: [
    { prompt: 'Give a direction using left.', zh: '使用 links 给出方向。', answer: 'Links ist die Brücke.', blanks: ['Links', 'ist', 'die', 'Brücke'], accepted: ['links ist die brücke', 'links ist die brucke'] },
    { prompt: 'Say the river is beautiful.', zh: '说河很美。', answer: 'Der Fluss ist schön.', blanks: ['Der', 'Fluss', 'ist', 'schön'], accepted: ['der fluss ist schön', 'der fluss ist schon'] }
  ],
  hofbraeuhaus: [
    { prompt: 'Order one beer politely.', zh: '礼貌地点一杯啤酒。', answer: 'Ein Bier, bitte!', blanks: ['Ein', 'Bier', 'bitte'], accepted: ['ein bier bitte'] },
    { prompt: 'Toast with the Masskrug.', zh: '用一升啤酒杯干杯。', answer: 'Prost mit dem Masskrug!', blanks: ['Prost', 'mit', 'dem', 'Masskrug'], accepted: ['prost mit dem masskrug'] }
  ],
  hauptbahnhof: [
    { prompt: 'Ask which platform the train leaves from.', zh: '询问火车从哪个站台出发。', answer: 'Von welchem Gleis fährt der Zug ab?', blanks: ['Von', 'welchem', 'Gleis', 'fährt', 'der', 'Zug', 'ab'], accepted: ['von welchem gleis fährt der zug ab', 'von welchem gleis fahrt der zug ab'] },
    { prompt: 'Say you need a ticket.', zh: '说你需要一张车票。', answer: 'Ich brauche eine Fahrkarte.', blanks: ['Ich', 'brauche', 'eine', 'Fahrkarte'], accepted: ['ich brauche eine fahrkarte'] }
  ]
};

const LEARNING_THEORY = [
  {
    id: 'input',
    title: 'Comprehensible Input i+1',
    zh: '可理解输入 i+1',
    claim: 'Learners acquire best when new language is just beyond current mastery.',
    design: 'The vocabulary graph checks prerequisites and highlights the next reachable words in each scene.',
    evidence: 'Graph path, recommended i+1 chips, review-before-new ordering.'
  },
  {
    id: 'interaction',
    title: 'Negotiation of Meaning',
    zh: '意义协商',
    claim: 'Clarification and confirmation repair misunderstandings and deepen processing.',
    design: 'NPCs produce ambiguous utterances; players choose clarification requests, confirmation checks, or comprehension checks.',
    evidence: 'Dialogue turns tagged by interaction function.'
  },
  {
    id: 'output',
    title: 'Pushed Output',
    zh: '强制产出',
    claim: 'Learners notice gaps when they must produce accurate language.',
    design: 'Scene exit and missions require typed or constructed German sentences.',
    evidence: 'Completed output tasks saved per scene.'
  },
  {
    id: 'situated',
    title: 'Situated Cultural Learning',
    zh: '情境与文化共习',
    claim: 'Words become meaningful when tied to authentic practices and places.',
    design: 'Key words are unlocked through Munich scenes: Hofbräuhaus, TUM, Marienplatz, Englischer Garten.',
    evidence: 'Culture cues on vocabulary cards and scene missions.'
  },
  {
    id: 'srs',
    title: 'Spaced Retrieval',
    zh: '间隔提取',
    claim: 'Memory improves when review intervals adapt to recall quality.',
    design: 'SM-2 updates interval, ease factor, due date, and the map shows today’s review queue.',
    evidence: 'SRS metadata in cards and dictionary.'
  },
  {
    id: 'flow',
    title: 'Flow Balance',
    zh: '心流平衡',
    claim: 'Challenge should track skill so the player feels progression without overload.',
    design: 'Due reviews, i+1 words, NPC repairs, and missions combine recognition, interaction, and production.',
    evidence: 'Scene completion, dialogue rounds, output completion, and vocabulary mastery.'
  }
];

const SCENE_MISSIONS = {
  marienplatz: [
    {
      title: 'City Orientation',
      zh: '城市定位',
      steps: ['Learn Rathaus and Markt', 'Ask Maria a clarification question', 'Produce one direction sentence'],
      theory: ['input', 'interaction', 'output']
    },
    {
      title: 'Clock Noticing',
      zh: '报时钟注意任务',
      steps: ['Open die Uhr', 'Compare Rathaus vs. Kirche', 'Mark one word as fuzzy or known'],
      theory: ['input', 'situated', 'srs']
    }
  ],
  tum: [
    {
      title: 'First Day at TUM',
      zh: 'TUM 第一天',
      steps: ['Find Bibliothek', 'Ask where the Hörsaal is', 'Say what you study with'],
      theory: ['situated', 'interaction', 'output']
    },
    {
      title: 'Campus Toolkit',
      zh: '校园工具包',
      steps: ['Learn Rucksack and Laptop', 'Connect them in the graph', 'Review one due item'],
      theory: ['input', 'srs', 'flow']
    }
  ],
  englischergarten: [
    {
      title: 'Eisbach Route',
      zh: '艾斯巴赫路线',
      steps: ['Learn Fluss and Brücke', 'Use links/rechts in output', 'Confirm the route with an NPC'],
      theory: ['situated', 'interaction', 'output']
    },
    {
      title: 'Park Culture',
      zh: '公园文化',
      steps: ['Unlock Surfer or Pagode', 'Notice the culture cue', 'Review the park family path'],
      theory: ['situated', 'input', 'srs']
    }
  ],
  hofbraeuhaus: [
    {
      title: 'Bavarian Order',
      zh: '巴伐利亚点单',
      steps: ['Clarify Maß vs. Glas', 'Learn Bier and Masskrug', 'Order politely'],
      theory: ['interaction', 'situated', 'output']
    },
    {
      title: 'Table Talk',
      zh: '餐桌对话',
      steps: ['Learn Tisch, Stuhl, Brezel', 'Use bitte/danke', 'Complete the scene output'],
      theory: ['input', 'interaction', 'flow']
    }
  ],
  hauptbahnhof: [
    {
      title: 'Find the Platform',
      zh: '找到站台',
      steps: ['Learn Bahnhof and Zug', 'Clarify Gleis with an NPC', 'Ask where the train departs'],
      theory: ['input', 'interaction', 'output']
    },
    {
      title: 'Buy a Ticket',
      zh: '购买车票',
      steps: ['Open Fahrkarte and Automat', 'Compare Abfahrt vs. Ankunft', 'Produce a travel sentence'],
      theory: ['situated', 'srs', 'flow']
    }
  ]
};

// ============================================================
// PHRASES (learned through NPC dialogues)
// ============================================================

const PHRASES = {
  hallo: {
    id: 'hallo', category: 'greetings',
    german: 'Hallo!', chinese: '你好！', english: 'Hello!'
  },
  guten_morgen: {
    id: 'guten_morgen', category: 'greetings',
    german: 'Guten Morgen!', chinese: '早上好！', english: 'Good morning!'
  },
  guten_tag: {
    id: 'guten_tag', category: 'greetings',
    german: 'Guten Tag!', chinese: '你好！（白天）', english: 'Good day!'
  },
  auf_wiedersehen: {
    id: 'auf_wiedersehen', category: 'greetings',
    german: 'Auf Wiedersehen!', chinese: '再见！', english: 'Goodbye!'
  },
  tschuss: {
    id: 'tschuss', category: 'greetings',
    german: 'Tschüss!', chinese: '拜拜！', english: 'Bye!'
  },
  wie_gehts: {
    id: 'wie_gehts', category: 'greetings',
    german: 'Wie geht es Ihnen?', chinese: '您好吗？', english: 'How are you?'
  },
  gut_danke: {
    id: 'gut_danke', category: 'greetings',
    german: 'Gut, danke!', chinese: '很好，谢谢！', english: 'Fine, thank you!'
  },
  bitte: {
    id: 'bitte', category: 'polite',
    german: 'Bitte!', chinese: '请 / 不客气！', english: 'Please / You\'re welcome!'
  },
  danke: {
    id: 'danke', category: 'polite',
    german: 'Danke!', chinese: '谢谢！', english: 'Thank you!'
  },
  entschuldigung: {
    id: 'entschuldigung', category: 'polite',
    german: 'Entschuldigung!', chinese: '打扰一下 / 对不起！', english: 'Excuse me / Sorry!'
  },
  wo_ist: {
    id: 'wo_ist', category: 'directions',
    german: 'Wo ist...?', chinese: '...在哪里？', english: 'Where is...?'
  },
  ich_verstehe_nicht: {
    id: 'ich_verstehe_nicht', category: 'learning',
    german: 'Ich verstehe nicht.', chinese: '我不明白。', english: 'I don\'t understand.'
  },
  sprechen_sie_englisch: {
    id: 'sprechen_sie_englisch', category: 'learning',
    german: 'Sprechen Sie Englisch?', chinese: '您会说英语吗？', english: 'Do you speak English?'
  },
  ein_bier_bitte: {
    id: 'ein_bier_bitte', category: 'food',
    german: 'Ein Bier, bitte!', chinese: '请来一杯啤酒！', english: 'One beer, please!'
  },
  die_rechnung: {
    id: 'die_rechnung', category: 'food',
    german: 'Die Rechnung, bitte!', chinese: '请结账！', english: 'The bill, please!'
  },
  prost: {
    id: 'prost', category: 'food',
    german: 'Prost!', chinese: '干杯！', english: 'Cheers!'
  },
  ich_lerne_deutsch: {
    id: 'ich_lerne_deutsch', category: 'learning',
    german: 'Ich lerne Deutsch.', chinese: '我在学德语。', english: 'I am learning German.'
  },
  wie_viel_kostet: {
    id: 'wie_viel_kostet', category: 'shopping',
    german: 'Wie viel kostet das?', chinese: '这个多少钱？', english: 'How much does this cost?'
  },
  ich_heisse: {
    id: 'ich_heisse', category: 'introductions',
    german: 'Ich heiße...', chinese: '我叫...', english: 'My name is...'
  },
  woher_kommen_sie: {
    id: 'woher_kommen_sie', category: 'introductions',
    german: 'Woher kommen Sie?', chinese: '您从哪里来？', english: 'Where are you from?'
  }
};

// ============================================================
// DIALOGUES — NPC conversation trees
// ============================================================

const DIALOGUES = {
  maria: {
    npcId: 'maria',
    start: 'node_hello',
    nodes: {
      node_hello: {
        german: 'Hallo! Entschuldigung, sprechen Sie Deutsch?',
        chinese: '你好！打扰一下，您会说德语吗？',
        english: 'Hello! Excuse me, do you speak German?',
        learnPhrase: ['hallo', 'entschuldigung'],
        options: [
          { text: 'Ja, ein bisschen.', textChinese: '是的，一点点。', next: 'node_yes' },
          { text: 'Nein, ich lerne erst.', textChinese: '不，我刚开始学。', next: 'node_learning' }
        ]
      },
      node_yes: {
        german: 'Wunderbar! Können Sie mir helfen? Ich suche den Platz mit dem Rathaus... oder war es der Markt?',
        chinese: '太好了！您能帮我吗？我在找有市政厅的广场……还是市场来着？',
        english: 'Wonderful! Can you help me? I am looking for the square with the town hall... or was it the market?',
        negotiation: 'clarification',
        learnPhrase: ['wo_ist'],
        options: [
          { text: 'Meinen Sie den Marienplatz?', textChinese: '您是指玛利亚广场吗？', next: 'node_confirm', functionTag: 'confirmation check' },
          { text: 'Ich verstehe nicht. Rathaus oder Markt?', textChinese: '我不明白。市政厅还是市场？', next: 'node_clarify', functionTag: 'clarification request', learnPhrase: 'ich_verstehe_nicht' }
        ]
      },
      node_confirm: {
        german: 'Ja, genau! Der Platz mit dem Rathaus. Bin ich richtig?',
        chinese: '对，没错！有市政厅的广场。我走对了吗？',
        english: 'Yes, exactly! The square with the town hall. Am I in the right place?',
        negotiation: 'confirmation',
        options: [
          { text: 'Ja, Sie sind schon hier!', textChinese: '是的，您已经在这里了！', next: 'node_here', functionTag: 'comprehension check' }
        ]
      },
      node_clarify: {
        german: 'Gute Frage: Ich meine das Rathaus, nicht den Markt.',
        chinese: '问得好：我指的是市政厅，不是市场。',
        english: 'Good question: I mean the town hall, not the market.',
        negotiation: 'clarification',
        options: [
          { text: 'Dann sind Sie am Marienplatz.', textChinese: '那您就在玛利亚广场。', next: 'node_here', functionTag: 'confirmation check' }
        ]
      },
      node_learning: {
        german: 'Oh, ich auch! Ich lerne Deutsch seit drei Monaten.',
        chinese: '哦，我也是！我学德语已经三个月了。',
        english: 'Oh, me too! I have been learning German for three months.',
        learnPhrase: ['ich_lerne_deutsch'],
        options: [
          { text: 'Wie heißen Sie?', textChinese: '您叫什么名字？', next: 'node_name' }
        ]
      },
      node_here: {
        german: 'Oh! Super! Vielen Dank! Auf Wiedersehen!',
        chinese: '哦！太棒了！非常感谢！再见！',
        english: 'Oh! Great! Many thanks! Goodbye!',
        learnPhrase: ['danke', 'auf_wiedersehen'],
        options: [],
        end: true
      },
      node_name: {
        german: 'Ich heiße Maria. Ich komme aus Wien. Und Sie?',
        chinese: '我叫玛利亚。我来自维也纳。您呢？',
        english: 'My name is Maria. I come from Vienna. And you?',
        learnPhrase: ['ich_heisse', 'woher_kommen_sie'],
        options: [
          { text: 'Ich heiße...', textChinese: '我叫……', next: 'node_bye' }
        ]
      },
      node_bye: {
        german: 'Schön, Sie kennenzulernen! Tschüss!',
        chinese: '很高兴认识您！拜拜！',
        english: 'Nice to meet you! Bye!',
        learnPhrase: ['tschuss'],
        options: [],
        end: true
      }
    }
  },

  hans: {
    npcId: 'hans',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Guten Tag! Kann ich Ihnen helfen?',
        chinese: '你好！我能帮助您吗？',
        english: 'Good day! Can I help you?',
        learnPhrase: ['guten_tag'],
        options: [
          { text: 'Wie viel kostet das?', textChinese: '这个多少钱？', next: 'node_price' },
          { text: 'Nur schauen, danke!', textChinese: '只是看看，谢谢！', next: 'node_browse' }
        ]
      },
      node_price: {
        german: 'Diese Brezel kostet 1,50 Euro. Möchten Sie eine kaufen?',
        chinese: '这个椒盐卷饼1.50欧元。您想买一个吗？',
        english: 'This pretzel costs 1.50 euros. Would you like to buy one?',
        learnPhrase: ['wie_viel_kostet'],
        options: [
          { text: 'Ja, bitte!', textChinese: '是的，麻烦了！', next: 'node_buy' },
          { text: 'Nein, danke.', textChinese: '不，谢谢。', next: 'node_no' }
        ]
      },
      node_browse: {
        german: 'Natürlich! Schauen Sie sich ruhig um.',
        chinese: '当然！随便看看吧。',
        english: 'Of course! Look around freely.',
        learnPhrase: ['bitte'],
        options: [],
        end: true
      },
      node_buy: {
        german: 'Hier ist Ihre Brezel! Guten Appetit!',
        chinese: '这是您的椒盐卷饼！祝您好胃口！',
        english: 'Here is your pretzel! Enjoy your meal!',
        learnPhrase: ['danke'],
        options: [],
        end: true
      },
      node_no: {
        german: 'Kein Problem! Auf Wiedersehen!',
        chinese: '没关系！再见！',
        english: 'No problem! Goodbye!',
        learnPhrase: ['auf_wiedersehen'],
        options: [],
        end: true
      }
    }
  },

  lukas: {
    npcId: 'lukas',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Hey! Bist du auch Student hier an der TUM?',
        chinese: '嘿！你也是这里TUM的学生吗？',
        english: 'Hey! Are you also a student here at TUM?',
        learnPhrase: [],
        options: [
          { text: 'Ja, ich studiere hier!', textChinese: '是的，我在这里学习！', next: 'node_yes' },
          { text: 'Nein, ich bin Tourist.', textChinese: '不，我是游客。', next: 'node_tourist' }
        ]
      },
      node_yes: {
        german: 'Cool! Was studierst du? Ich studiere Informatik.',
        chinese: '酷！你学什么专业？我学计算机科学。',
        english: 'Cool! What do you study? I study computer science.',
        learnPhrase: ['ich_lerne_deutsch'],
        options: [
          { text: 'Ich studiere Ingenieurwesen.', textChinese: '我学工程。', next: 'node_nice' },
          { text: 'Ich studiere Deutsch.', textChinese: '我学德语。', next: 'node_deutsch' }
        ]
      },
      node_tourist: {
        german: 'Willkommen in München! Die TUM ist sehr bekannt.',
        chinese: '欢迎来到慕尼黑！慕尼黑工业大学非常有名。',
        english: 'Welcome to Munich! TUM is very well-known.',
        learnPhrase: ['guten_tag'],
        options: [
          { text: 'Ja, sehr beeindruckend!', textChinese: '是的，令人印象深刻！', next: 'node_bye' }
        ]
      },
      node_deutsch: {
        german: 'Toll! Ich helfe dir gern mit Deutsch. Wie geht es dir?',
        chinese: '太好了！我很乐意帮你学德语。你好吗？',
        english: 'Great! I am happy to help you with German. How are you?',
        learnPhrase: ['wie_gehts'],
        options: [
          { text: 'Gut, danke!', textChinese: '很好，谢谢！', next: 'node_bye' }
        ]
      },
      node_nice: {
        german: 'Super! Die Mensa hier ist übrigens sehr gut!',
        chinese: '太棒了！顺便说一下，这里的食堂非常好！',
        english: 'Great! By the way, the cafeteria here is very good!',
        learnPhrase: ['gut_danke'],
        options: [],
        end: true
      },
      node_bye: {
        german: 'War schön mit dir zu reden! Tschüss!',
        chinese: '很高兴和你聊天！拜拜！',
        english: 'Was nice talking to you! Bye!',
        learnPhrase: ['tschuss'],
        options: [],
        end: true
      }
    }
  },

  weber: {
    npcId: 'weber',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Guten Morgen! Haben Sie Fragen zur Vorlesung?',
        chinese: '早上好！您对课程有什么问题吗？',
        english: 'Good morning! Do you have questions about the lecture?',
        learnPhrase: ['guten_morgen'],
        options: [
          { text: 'Wo ist der Hörsaal?', textChinese: '阶梯教室在哪里？', next: 'node_room' },
          { text: 'Wann beginnt die Vorlesung?', textChinese: '课程什么时候开始？', next: 'node_time' }
        ]
      },
      node_room: {
        german: 'Der Hörsaal 1 ist im Hauptgebäude, zweiter Stock.',
        chinese: '一号阶梯教室在主楼二楼。',
        english: 'Lecture hall 1 is in the main building, second floor.',
        learnPhrase: ['wo_ist'],
        options: [
          { text: 'Danke, Herr Professor!', textChinese: '谢谢，教授！', next: 'node_end' }
        ]
      },
      node_time: {
        german: 'Die Vorlesung beginnt um neun Uhr. Pünktlichkeit ist wichtig!',
        chinese: '课程九点开始。守时非常重要！',
        english: 'The lecture starts at nine o\'clock. Punctuality is important!',
        learnPhrase: ['entschuldigung'],
        options: [
          { text: 'Verstanden, danke!', textChinese: '明白了，谢谢！', next: 'node_end' }
        ]
      },
      node_end: {
        german: 'Gerne! Auf Wiedersehen!',
        chinese: '不客气！再见！',
        english: 'You\'re welcome! Goodbye!',
        learnPhrase: ['auf_wiedersehen', 'bitte'],
        options: [],
        end: true
      }
    }
  },

  anna: {
    npcId: 'anna',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Guten Morgen! Schönes Wetter heute, oder?',
        chinese: '早上好！今天天气真好，不是吗？',
        english: 'Good morning! Nice weather today, isn\'t it?',
        learnPhrase: ['guten_morgen'],
        options: [
          { text: 'Ja, sehr schön!', textChinese: '是的，非常好！', next: 'node_weather' },
          { text: 'Ja, ich liebe den Park!', textChinese: '是的，我喜欢这个公园！', next: 'node_park' }
        ]
      },
      node_weather: {
        german: 'München hat oft schönes Wetter im Sommer. Laufen Sie oft hier?',
        chinese: '慕尼黑夏天经常天气很好。您经常在这里跑步吗？',
        english: 'Munich often has nice weather in summer. Do you often run here?',
        learnPhrase: ['gut_danke'],
        options: [
          { text: 'Ja, jeden Morgen!', textChinese: '是的，每天早上！', next: 'node_bye' }
        ]
      },
      node_park: {
        german: 'Der Englische Garten ist wunderschön! Er ist größer als der Central Park!',
        chinese: '英国花园非常美丽！它比纽约中央公园还要大！',
        english: 'The English Garden is wonderful! It is bigger than Central Park!',
        learnPhrase: [],
        options: [
          { text: 'Wirklich? Interessant!', textChinese: '真的吗？太有趣了！', next: 'node_bye' }
        ]
      },
      node_bye: {
        german: 'Schönen Tag noch! Tschüss!',
        chinese: '祝您有个美好的一天！拜拜！',
        english: 'Have a nice day! Bye!',
        learnPhrase: ['tschuss'],
        options: [],
        end: true
      }
    }
  },

  max: {
    npcId: 'max',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Hallo! Das ist mein Hund Bruno. Darf er Sie beschnuppern?',
        chinese: '你好！这是我的狗布鲁诺。它可以闻闻您吗？',
        english: 'Hello! This is my dog Bruno. May he sniff you?',
        learnPhrase: ['hallo'],
        options: [
          { text: 'Ja, natürlich!', textChinese: '是的，当然！', next: 'node_dog' },
          { text: 'Ich habe Angst vor Hunden.', textChinese: '我有点怕狗。', next: 'node_afraid' }
        ]
      },
      node_dog: {
        german: 'Bruno ist sehr lieb. Er liebt Menschen! Wie heißen Sie?',
        chinese: '布鲁诺非常友善。它爱人类！您叫什么名字？',
        english: 'Bruno is very sweet. He loves people! What is your name?',
        learnPhrase: ['ich_heisse'],
        options: [
          { text: 'Schöner Hund!', textChinese: '好漂亮的狗！', next: 'node_bye' }
        ]
      },
      node_afraid: {
        german: 'Kein Problem! Bruno, komm her! Er beißt nicht.',
        chinese: '没关系！布鲁诺，过来！它不咬人的。',
        english: 'No problem! Bruno, come here! He doesn\'t bite.',
        learnPhrase: ['entschuldigung'],
        options: [
          { text: 'Danke für das Verständnis.', textChinese: '感谢您的理解。', next: 'node_bye' }
        ]
      },
      node_bye: {
        german: 'Schönen Spaziergang! Auf Wiedersehen!',
        chinese: '祝您散步愉快！再见！',
        english: 'Have a nice walk! Goodbye!',
        learnPhrase: ['auf_wiedersehen'],
        options: [],
        end: true
      }
    }
  },

  sophie: {
    npcId: 'sophie',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Grüß Gott! Eine Maß oder ein Glas? In München ist das nicht dasselbe.',
        chinese: '您好！要一“Maß”还是一杯？在慕尼黑这可不一样。',
        english: 'Hello! A Maß or a glass? In Munich those are not the same.',
        negotiation: 'clarification',
        learnPhrase: ['guten_tag'],
        options: [
          { text: 'Was bedeutet "eine Maß"?', textChinese: '“eine Maß”是什么意思？', next: 'node_mass', functionTag: 'clarification request' },
          { text: 'Meinen Sie einen Masskrug?', textChinese: '您是指一升啤酒杯吗？', next: 'node_beer', functionTag: 'confirmation check' },
          { text: 'Eine Brezel, bitte!', textChinese: '请来一个椒盐卷饼！', next: 'node_pretzel' }
        ]
      },
      node_mass: {
        german: 'Eine Maß kommt im Masskrug: ein Liter Bier. Möchten Sie das?',
        chinese: '一 Maß 装在 Masskrug 里：一升啤酒。您要这个吗？',
        english: 'A Maß comes in a Masskrug: one litre of beer. Would you like that?',
        negotiation: 'comprehension',
        options: [
          { text: 'Ja, ein Bier im Masskrug, bitte!', textChinese: '是的，请来一杯 Masskrug 啤酒！', next: 'node_beer', functionTag: 'comprehension check', learnPhrase: 'ein_bier_bitte' }
        ]
      },
      node_beer: {
        german: 'Sofort! Ein Masskrug Helles kommt gleich!',
        chinese: '马上来！一升淡啤酒马上来！',
        english: 'Right away! One litre of lager coming right up!',
        learnPhrase: ['ein_bier_bitte'],
        options: [
          { text: 'Danke! Und Prost!', textChinese: '谢谢！干杯！', next: 'node_prost' }
        ]
      },
      node_pretzel: {
        german: 'Mit oder ohne Butter?',
        chinese: '要加黄油还是不加？',
        english: 'With or without butter?',
        learnPhrase: ['bitte'],
        options: [
          { text: 'Mit Butter, bitte!', textChinese: '加黄油，麻烦了！', next: 'node_enjoy' }
        ]
      },
      node_prost: {
        german: 'Prost! Auf Bayern! Möchten Sie auch eine Speisekarte?',
        chinese: '干杯！为巴伐利亚！您也需要菜单吗？',
        english: 'Cheers! To Bavaria! Would you also like a menu?',
        learnPhrase: ['prost'],
        options: [
          { text: 'Ja, bitte!', textChinese: '是的，麻烦了！', next: 'node_end' }
        ]
      },
      node_enjoy: {
        german: 'Guten Appetit! Die Rechnung kommt am Ende.',
        chinese: '祝您好胃口！账单最后来。',
        english: 'Enjoy your meal! The bill comes at the end.',
        learnPhrase: ['die_rechnung'],
        options: [],
        end: true
      },
      node_end: {
        german: 'Gerne! Wenn Sie fertig sind, rufen Sie mich. Die Rechnung, bitte!',
        chinese: '好的！当您用完了，叫我一声。请结账！',
        english: 'Sure! When you\'re done, call me. The bill, please!',
        learnPhrase: ['die_rechnung'],
        options: [],
        end: true
      }
    }
  },

  bob: {
    npcId: 'bob',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Hey! Do you speak English? Ich spreche... ein bisschen Deutsch.',
        chinese: '嘿！您会说英语吗？我会说……一点点德语。',
        english: 'Hey! Do you speak English? I speak... a little German.',
        learnPhrase: ['sprechen_sie_englisch'],
        options: [
          { text: 'Ich lerne auch Deutsch!', textChinese: '我也在学德语！', next: 'node_both' },
          { text: 'Ja, ich spreche Englisch.', textChinese: '是的，我会说英语。', next: 'node_english' }
        ]
      },
      node_both: {
        german: 'Super! Dann üben wir zusammen! Wie sagt man "cheers" auf Deutsch?',
        chinese: '太好了！那我们一起练习！"干杯"在德语里怎么说？',
        english: 'Great! Then we practice together! How do you say "cheers" in German?',
        learnPhrase: ['ich_lerne_deutsch'],
        options: [
          { text: 'Man sagt "Prost"!', textChinese: '说"Prost"！', next: 'node_prost' }
        ]
      },
      node_english: {
        german: 'Oh great! Can you help me order beer in German?',
        chinese: '哦，太好了！您能帮我用德语点啤酒吗？',
        english: 'Oh great! Can you help me order beer in German?',
        learnPhrase: ['ein_bier_bitte'],
        options: [
          { text: 'Sure! Say "Ein Bier, bitte!"', textChinese: '当然！说"Ein Bier, bitte!"', next: 'node_prost' }
        ]
      },
      node_prost: {
        german: 'Prost! Danke! This is amazing! Ich liebe München!',
        chinese: '干杯！谢谢！这太棒了！我爱慕尼黑！',
        english: 'Cheers! Thanks! This is amazing! I love Munich!',
        learnPhrase: ['prost', 'danke'],
        options: [],
        end: true
      }
    }
  },

  clara: {
    npcId: 'clara',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Willkommen! Das Rathaus ist nicht die Kirche. Sehen Sie den Unterschied?',
        chinese: '欢迎！市政厅不是教堂。您看出区别了吗？',
        english: 'Welcome! The town hall is not the church. Do you see the difference?',
        negotiation: 'comprehension',
        options: [
          { text: 'Die Kirche hat Türme.', textChinese: '教堂有塔。', next: 'node_towers', functionTag: 'comprehension check' },
          { text: 'Meinen Sie das Gebäude mit der Uhr?', textChinese: '您是指有钟的建筑吗？', next: 'node_clock', functionTag: 'confirmation check' }
        ]
      },
      node_towers: {
        german: 'Genau. Und am Rathaus sehen Sie die Uhr und das Glockenspiel.',
        chinese: '没错。市政厅上可以看到钟和报时钟。',
        english: 'Exactly. And on the town hall you see the clock and the Glockenspiel.',
        learnPhrase: ['wo_ist'],
        options: [
          { text: 'Also: die Uhr ist am Rathaus.', textChinese: '所以：钟在市政厅上。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_clock: {
        german: 'Ja. Das ist das Rathaus. Die Kirche ist links davon.',
        chinese: '对。那是市政厅。教堂在它左边。',
        english: 'Yes. That is the town hall. The church is to its left.',
        negotiation: 'confirmation',
        options: [
          { text: 'Links ist die Kirche, richtig?', textChinese: '左边是教堂，对吗？', next: 'node_end', functionTag: 'confirmation check' }
        ]
      },
      node_end: {
        german: 'Sehr gut beobachtet. München lernt man mit den Augen und mit Deutsch.',
        chinese: '观察得很好。学习慕尼黑，要用眼睛，也要用德语。',
        english: 'Well observed. You learn Munich with your eyes and with German.',
        options: [],
        end: true
      }
    }
  },

  lea: {
    npcId: 'lea',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Psst. In der Bibliothek sagt man nicht laut "Wo ist der Hörsaal?"',
        chinese: '嘘。在图书馆里不能大声说“阶梯教室在哪里？”',
        english: 'Psst. In the library you do not loudly say "Where is the lecture hall?"',
        negotiation: 'clarification',
        options: [
          { text: 'Wie frage ich leise?', textChinese: '我怎么小声问？', next: 'node_quiet', functionTag: 'clarification request' },
          { text: 'Der Hörsaal ist nicht hier?', textChinese: '阶梯教室不在这里？', next: 'node_not_here', functionTag: 'confirmation check' }
        ]
      },
      node_quiet: {
        german: 'Sie können sagen: Entschuldigung, wo ist der Hörsaal?',
        chinese: '您可以说：打扰一下，阶梯教室在哪里？',
        english: 'You can say: Excuse me, where is the lecture hall?',
        learnPhrase: ['entschuldigung', 'wo_ist'],
        options: [
          { text: 'Entschuldigung, wo ist der Hörsaal?', textChinese: '打扰一下，阶梯教室在哪里？', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_not_here: {
        german: 'Richtig. Die Bibliothek ist zum Lesen. Der Hörsaal ist im Hauptgebäude.',
        chinese: '对。图书馆是阅读的地方。阶梯教室在主楼。',
        english: 'Correct. The library is for reading. The lecture hall is in the main building.',
        options: [
          { text: 'Ich verstehe: Bibliothek, nicht Hörsaal.', textChinese: '我明白：图书馆，不是阶梯教室。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_end: {
        german: 'Perfekt. Und bitte den Laptop leise schließen.',
        chinese: '完美。还有，请轻轻合上笔记本电脑。',
        english: 'Perfect. And please close the laptop quietly.',
        options: [],
        end: true
      }
    }
  },

  tom: {
    npcId: 'tom',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Der Eisbach ist ein Fluss, aber hier surfen Leute. Klingt komisch, oder?',
        chinese: '艾斯巴赫是河，但这里有人冲浪。听起来很奇怪，对吧？',
        english: 'The Eisbach is a river, but people surf here. Sounds strange, right?',
        negotiation: 'clarification',
        options: [
          { text: 'Surfen auf einem Fluss?', textChinese: '在河上冲浪？', next: 'node_surf', functionTag: 'clarification request' },
          { text: 'Meinen Sie den Surfer dort?', textChinese: '您是指那边的冲浪者吗？', next: 'node_person', functionTag: 'confirmation check' }
        ]
      },
      node_surf: {
        german: 'Ja. Die Welle bleibt fast an einer Stelle. Deshalb heißt die Person Surfer.',
        chinese: '对。浪几乎停在一个位置。所以那个人叫冲浪者。',
        english: 'Yes. The wave stays almost in one place. That is why the person is called a surfer.',
        options: [
          { text: 'Der Surfer ist auf dem Fluss.', textChinese: '冲浪者在河上。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_person: {
        german: 'Genau. Hinter dem Surfer ist die Brücke. Links geht es zur Pagode.',
        chinese: '没错。冲浪者后面是桥。向左走到宝塔。',
        english: 'Exactly. Behind the surfer is the bridge. Left goes to the pagoda.',
        options: [
          { text: 'Links zur Pagode, über die Brücke.', textChinese: '向左去宝塔，过桥。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_end: {
        german: 'Super. Jetzt kennen Sie die Route im Englischen Garten.',
        chinese: '很好。现在您知道英国花园里的路线了。',
        english: 'Great. Now you know the route in the English Garden.',
        options: [],
        end: true
      }
    }
  },

  otto: {
    npcId: 'otto',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Hören Sie das Akkordeon? Es ist nicht die Rechnung und nicht die Brezel.',
        chinese: '您听到手风琴了吗？它不是账单，也不是椒盐卷饼。',
        english: 'Do you hear the accordion? It is not the bill and not the pretzel.',
        negotiation: 'comprehension',
        options: [
          { text: 'Das Akkordeon ist Musik.', textChinese: '手风琴是音乐。', next: 'node_music', functionTag: 'comprehension check' },
          { text: 'Ich verstehe nicht: Akkordeon?', textChinese: '我不明白：Akkordeon？', next: 'node_explain', functionTag: 'clarification request', learnPhrase: 'ich_verstehe_nicht' }
        ]
      },
      node_music: {
        german: 'Genau. Nach dem Bier sagt man Prost, zur Musik klatscht man.',
        chinese: '对。喝啤酒后说 Prost，听音乐时鼓掌。',
        english: 'Exactly. After beer you say Prost; to music you clap.',
        learnPhrase: ['prost'],
        options: [
          { text: 'Prost und Musik!', textChinese: '干杯和音乐！', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_explain: {
        german: 'Ein Akkordeon ist ein Instrument. Im Hofbräuhaus hört man oft Volksmusik.',
        chinese: 'Akkordeon 是一种乐器。在 Hofbräuhaus 经常听到民间音乐。',
        english: 'An accordion is an instrument. In Hofbräuhaus you often hear folk music.',
        options: [
          { text: 'Also: das Akkordeon ist ein Instrument.', textChinese: '所以：手风琴是一种乐器。', next: 'node_end', functionTag: 'confirmation check' }
        ]
      },
      node_end: {
        german: 'Richtig. Sprache, Essen und Musik gehören hier zusammen.',
        chinese: '对。语言、食物和音乐在这里连在一起。',
        english: 'Correct. Language, food, and music belong together here.',
        options: [],
        end: true
      }
    }
  },

  greta: {
    npcId: 'greta',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Guten Tag! Der Zug nach Nürnberg fährt gleich ab. Wissen Sie das Gleis?',
        chinese: '您好！去纽伦堡的火车马上出发。您知道站台吗？',
        english: 'Good day! The train to Nuremberg departs soon. Do you know the platform?',
        negotiation: 'comprehension',
        learnPhrase: ['guten_tag'],
        options: [
          { text: 'Ich verstehe nicht: Was bedeutet Gleis?', textChinese: '我不明白：Gleis 是什么意思？', next: 'node_gleis', functionTag: 'clarification request', learnPhrase: 'ich_verstehe_nicht' },
          { text: 'Meinen Sie Gleis 5?', textChinese: '您是指 5 号站台吗？', next: 'node_confirm', functionTag: 'confirmation check' }
        ]
      },
      node_gleis: {
        german: 'Das Gleis ist der Ort, wo der Zug steht. Auf Englisch: platform.',
        chinese: 'Gleis 是火车停靠的地方，英语是 platform。',
        english: 'The platform is the place where the train stands.',
        negotiation: 'clarification',
        options: [
          { text: 'Also: Der Zug fährt von Gleis 5 ab.', textChinese: '所以：火车从 5 号站台出发。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_confirm: {
        german: 'Ja, richtig. Gleis 5. Die Abfahrt ist in zehn Minuten.',
        chinese: '对，没错。5 号站台。十分钟后出发。',
        english: 'Yes, correct. Platform 5. Departure is in ten minutes.',
        negotiation: 'confirmation',
        options: [
          { text: 'Danke! Die Abfahrt ist in zehn Minuten.', textChinese: '谢谢！十分钟后出发。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_end: {
        german: 'Sehr gut. Bitte schauen Sie auch auf den Fahrplan.',
        chinese: '很好。也请看一下时刻表。',
        english: 'Very good. Please also look at the timetable.',
        options: [],
        end: true
      }
    }
  },

  noah: {
    npcId: 'noah',
    start: 'node_start',
    nodes: {
      node_start: {
        german: 'Entschuldigung, ich brauche eine Fahrkarte. Ist das der Automat?',
        chinese: '打扰一下，我需要一张车票。这是自动售票机吗？',
        english: 'Excuse me, I need a ticket. Is this the machine?',
        negotiation: 'confirmation',
        learnPhrase: ['entschuldigung'],
        options: [
          { text: 'Ja, das ist der Automat.', textChinese: '是的，这是自动售票机。', next: 'node_machine', functionTag: 'confirmation check' },
          { text: 'Welche Fahrkarte brauchen Sie?', textChinese: '您需要哪张车票？', next: 'node_ticket', functionTag: 'clarification request' }
        ]
      },
      node_machine: {
        german: 'Danke. Ich fahre nach Augsburg. Abfahrt oder Ankunft: Welche Zeit ist wichtig?',
        chinese: '谢谢。我去奥格斯堡。出发还是到达：哪个时间重要？',
        english: 'Thanks. I am going to Augsburg. Departure or arrival: which time matters?',
        negotiation: 'clarification',
        options: [
          { text: 'Die Abfahrt ist wichtig.', textChinese: '出发时间很重要。', next: 'node_end', functionTag: 'comprehension check' },
          { text: 'Ankunft heißt arrival, richtig?', textChinese: 'Ankunft 是到达，对吗？', next: 'node_arrival', functionTag: 'confirmation check' }
        ]
      },
      node_ticket: {
        german: 'Eine Fahrkarte nach Augsburg, bitte. Mein Koffer ist schon bereit!',
        chinese: '请给我一张去奥格斯堡的车票。我的行李箱已经准备好了！',
        english: 'A ticket to Augsburg, please. My suitcase is already ready!',
        options: [
          { text: 'Kaufen Sie die Fahrkarte am Automaten.', textChinese: '请在自动售票机买车票。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_arrival: {
        german: 'Richtig. Ankunft ist arrival. Abfahrt ist departure.',
        chinese: '对。Ankunft 是到达，Abfahrt 是出发。',
        english: 'Correct. Ankunft is arrival. Abfahrt is departure.',
        options: [
          { text: 'Gut: Abfahrt zuerst, Ankunft später.', textChinese: '好：先出发，后到达。', next: 'node_end', functionTag: 'comprehension check' }
        ]
      },
      node_end: {
        german: 'Vielen Dank! Gute Reise!',
        chinese: '非常感谢！旅途愉快！',
        english: 'Many thanks! Have a good trip!',
        learnPhrase: ['danke'],
        options: [],
        end: true
      }
    }
  }
};

// ============================================================
// SCENE LAYOUT CONFIG (world dimensions, player start)
// ============================================================
const SCENE_LAYOUT = {
  marienplatz:      { worldW: 1800, worldH: 480, groundY: 360, startX: 140 },
  tum:              { worldW: 1800, worldH: 480, groundY: 370, startX: 140 },
  englischergarten: { worldW: 1800, worldH: 480, groundY: 355, startX: 140 },
  hofbraeuhaus:     { worldW: 1800, worldH: 480, groundY: 390, startX: 140 },
  hauptbahnhof:     { worldW: 1800, worldH: 480, groundY: 382, startX: 140 },
};

// ============================================================
// SCENES — world-coordinate object & NPC positions
// ============================================================
const SCENES = {
  marienplatz: {
    id: 'marienplatz', name: 'Marienplatz', nameChinese: '玛利亚广场', emoji: '⛪',
    objects: [
      { id:'kirche',      vocabId:'kirche',      label:'Frauenkirche', emoji:'⛪',  worldX:70,   worldY:360, worldW:200, worldH:240 },
      { id:'rathaus',     vocabId:'rathaus',     label:'Rathaus',      emoji:'🏛️', worldX:380,  worldY:360, worldW:220, worldH:220 },
      { id:'uhr',         vocabId:'uhr',         label:'Glockenspiel', emoji:'🕐',  worldX:460,  worldY:230, worldW:80,  worldH:60  },
      { id:'brunnen',     vocabId:'brunnen',     label:'Brunnen',      emoji:'⛲',  worldX:680,  worldY:360, worldW:90,  worldH:80  },
      { id:'markt',       vocabId:'markt',       label:'Markt',        emoji:'🏪',  worldX:900,  worldY:360, worldW:180, worldH:160 },
      { id:'taube',       vocabId:'taube',       label:'Taube',        emoji:'🕊️', worldX:790,  worldY:360, worldW:60,  worldH:50  },
      { id:'blumenladen', vocabId:'blumenladen', label:'Blumenladen',  emoji:'💐',  worldX:1200, worldY:360, worldW:140, worldH:150 },
      { id:'cafe',        vocabId:'cafe',         label:'Café',         emoji:'☕',  worldX:1480, worldY:360, worldW:160, worldH:150 },
    ],
    npcs: [
      { id:'maria', label:'Maria',  role:'Tourist',  dialogueId:'maria', emoji:'👩‍🦰', color:'#FF8FAB', worldX:750,  worldY:360 },
      { id:'hans',  label:'Hans',   role:'Vendor',   dialogueId:'hans',  emoji:'👨‍🍳', color:'#90EE90', worldX:1060, worldY:360 },
      { id:'clara', label:'Clara',  role:'Guide',    dialogueId:'clara', emoji:'👩‍🏫', color:'#FFD1A6', worldX:1360, worldY:360 },
    ]
  },

  tum: {
    id: 'tum', name: 'TU München', nameChinese: '慕尼黑工业大学', emoji: '🎓',
    objects: [
      { id:'bibliothek',   vocabId:'bibliothek',   label:'Bibliothek',   emoji:'📚',  worldX:60,   worldY:370, worldW:200, worldH:220 },
      { id:'universitaet', vocabId:'universitaet', label:'Universität',  emoji:'🏛️', worldX:330,  worldY:370, worldW:520, worldH:260 },
      { id:'hoersaal',     vocabId:'hoersaal',     label:'Hörsaal',      emoji:'🎓',  worldX:480,  worldY:260, worldW:120, worldH:80  },
      { id:'mensa',        vocabId:'mensa',         label:'Mensa',        emoji:'🍽️', worldX:940,  worldY:370, worldW:180, worldH:200 },
      { id:'fahrrad',      vocabId:'fahrrad',       label:'Fahrrad',      emoji:'🚲',  worldX:1180, worldY:370, worldW:100, worldH:80  },
      { id:'buch',         vocabId:'buch',           label:'Bücher',       emoji:'📖',  worldX:1330, worldY:370, worldW:70,  worldH:60  },
      { id:'rucksack',     vocabId:'rucksack',      label:'Rucksack',     emoji:'🎒',  worldX:1430, worldY:370, worldW:70,  worldH:70  },
      { id:'laptop',       vocabId:'laptop',         label:'Laptop',       emoji:'💻',  worldX:1560, worldY:370, worldW:80,  worldH:60  },
    ],
    npcs: [
      { id:'weber', label:'Prof. Weber', role:'Professor', dialogueId:'weber', emoji:'👨‍🏫', color:'#DDA0DD', worldX:620,  worldY:370 },
      { id:'lukas', label:'Lukas',       role:'Student',   dialogueId:'lukas', emoji:'👨‍🎓', color:'#87CEEB', worldX:1280, worldY:370 },
      { id:'lea',   label:'Lea',         role:'Librarian', dialogueId:'lea',   emoji:'👩‍💼', color:'#B8E0D2', worldX:250,  worldY:370 },
    ]
  },

  englischergarten: {
    id: 'englischergarten', name: 'Englischer Garten', nameChinese: '英国花园', emoji: '🌳',
    objects: [
      { id:'baum',    vocabId:'baum',    label:'Baum',    emoji:'🌳', worldX:60,   worldY:355, worldW:130, worldH:220 },
      { id:'surfer',  vocabId:'surfer',  label:'Surfer',  emoji:'🏄', worldX:320,  worldY:355, worldW:90,  worldH:130 },
      { id:'fluss',   vocabId:'fluss',   label:'Eisbach', emoji:'🌊', worldX:200,  worldY:340, worldW:280, worldH:60  },
      { id:'bruecke', vocabId:'bruecke', label:'Brücke',  emoji:'🌉', worldX:350,  worldY:320, worldW:140, worldH:80  },
      { id:'blume',   vocabId:'blume',   label:'Blume',   emoji:'🌸', worldX:680,  worldY:355, worldW:80,  worldH:60  },
      { id:'hund',    vocabId:'hund',    label:'Hund',    emoji:'🐕', worldX:1100, worldY:355, worldW:80,  worldH:70  },
      { id:'pagode',  vocabId:'pagode',  label:'Pagode',  emoji:'🏯', worldX:1400, worldY:355, worldW:180, worldH:280 },
    ],
    npcs: [
      { id:'anna', label:'Anna', role:'Jogger',      dialogueId:'anna', emoji:'🏃‍♀️', color:'#FFB6C1', worldX:800,  worldY:355 },
      { id:'max',  label:'Max',  role:'Dog walker',  dialogueId:'max',  emoji:'🧑',   color:'#98FB98', worldX:1220, worldY:355 },
      { id:'tom',  label:'Tom',  role:'Surfer',      dialogueId:'tom',  emoji:'🏄‍♂️', color:'#9AD7F5', worldX:470,  worldY:355 },
    ]
  },

  hofbraeuhaus: {
    id: 'hofbraeuhaus', name: 'Hofbräuhaus', nameChinese: '霍夫布劳豪斯', emoji: '🍺',
    objects: [
      { id:'wand',      vocabId:'wand',      label:'Wanddeko',  emoji:'🏠',  worldX:40,   worldY:250, worldW:1720, worldH:160 },
      { id:'tisch',     vocabId:'tisch',     label:'Tisch',     emoji:'🪵',  worldX:150,  worldY:390, worldW:380, worldH:50  },
      { id:'bier',      vocabId:'bier',      label:'Bier',      emoji:'🍺',  worldX:200,  worldY:370, worldW:70,  worldH:80  },
      { id:'brezel',    vocabId:'brezel',    label:'Brezel',    emoji:'🥨',  worldX:320,  worldY:370, worldW:70,  worldH:70  },
      { id:'masskrug',  vocabId:'masskrug',  label:'Masskrug',  emoji:'🍻',  worldX:450,  worldY:370, worldW:70,  worldH:80  },
      { id:'stuhl',     vocabId:'stuhl',     label:'Stuhl',     emoji:'🪑',  worldX:640,  worldY:390, worldW:70,  worldH:90  },
      { id:'akkordeon', vocabId:'akkordeon', label:'Akkordeon', emoji:'🪗',  worldX:1450, worldY:390, worldW:100, worldH:120 },
    ],
    npcs: [
      { id:'sophie', label:'Sophie', role:'Waitress',      dialogueId:'sophie', emoji:'👩‍🍳', color:'#FFD700', worldX:780,  worldY:390 },
      { id:'bob',    label:'Bob',    role:'Tourist',       dialogueId:'bob',    emoji:'👨‍🦱', color:'#87CEFA', worldX:1050, worldY:390 },
      { id:'otto',   label:'Otto',   role:'Musician',      dialogueId:'otto',   emoji:'🧑‍🎤', color:'#F7A8B8', worldX:1510, worldY:390 },
    ]
  },

  hauptbahnhof: {
    id: 'hauptbahnhof', name: 'Hauptbahnhof', nameChinese: '中央火车站', emoji: '🚆',
    objects: [
      { id:'bahnhof',   vocabId:'bahnhof',   label:'Bahnhof',    emoji:'🚉', worldX:70,   worldY:382, worldW:230, worldH:220 },
      { id:'zug',       vocabId:'zug',       label:'Zug',        emoji:'🚆', worldX:300,  worldY:382, worldW:380, worldH:110 },
      { id:'gleis',     vocabId:'gleis',     label:'Gleis 5',    emoji:'🛤️', worldX:640,  worldY:382, worldW:180, worldH:70  },
      { id:'fahrkarte', vocabId:'fahrkarte', label:'Fahrkarte',  emoji:'🎫', worldX:850,  worldY:350, worldW:80,  worldH:70  },
      { id:'automat',   vocabId:'automat',   label:'Automat',    emoji:'🖥️', worldX:980,  worldY:382, worldW:100, worldH:150 },
      { id:'koffer',    vocabId:'koffer',    label:'Koffer',     emoji:'🧳', worldX:1150, worldY:382, worldW:80,  worldH:90  },
      { id:'fahrplan',  vocabId:'fahrplan',  label:'Fahrplan',   emoji:'📋', worldX:1300, worldY:250, worldW:170, worldH:120 },
      { id:'abfahrt',   vocabId:'abfahrt',   label:'Abfahrt',    emoji:'➡️', worldX:1460, worldY:305, worldW:70,  worldH:60  },
      { id:'ankunft',   vocabId:'ankunft',   label:'Ankunft',    emoji:'⬅️', worldX:1570, worldY:305, worldW:70,  worldH:60  },
    ],
    npcs: [
      { id:'greta', label:'Greta', role:'Station staff', dialogueId:'greta', emoji:'👩‍✈️', color:'#B9D7FF', worldX:760,  worldY:382 },
      { id:'noah',  label:'Noah',  role:'Traveler',      dialogueId:'noah',  emoji:'🧑‍💼', color:'#FFD6A5', worldX:1090, worldY:382 },
    ]
  }
};
