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
  }
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
        german: 'Wunderbar! Können Sie mir helfen? Wo ist der Marienplatz?',
        chinese: '太好了！您能帮我吗？玛利亚广场在哪里？',
        english: 'Wonderful! Can you help me? Where is Marienplatz?',
        learnPhrase: ['wo_ist'],
        options: [
          { text: 'Sie sind schon hier!', textChinese: '您已经在这里了！', next: 'node_here' }
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
        german: 'Grüß Gott! Was darf ich Ihnen bringen?',
        chinese: '您好！（巴伐利亚方言）我能为您带来什么？',
        english: 'Hello! (Bavarian greeting) What can I bring you?',
        learnPhrase: ['guten_tag'],
        options: [
          { text: 'Ein Bier, bitte!', textChinese: '请来一杯啤酒！', next: 'node_beer' },
          { text: 'Eine Brezel, bitte!', textChinese: '请来一个椒盐卷饼！', next: 'node_pretzel' }
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
    ]
  }
};
