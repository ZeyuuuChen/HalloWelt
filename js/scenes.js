// ============================================================
// SCENE_SVGS — Ghibli-style panoramic backgrounds
// MAP_SVG    — Ghibli aerial Munich map
// ============================================================

const MAP_SVG = `
<svg viewBox="0 0 900 580" xmlns="http://www.w3.org/2000/svg" class="munich-map-svg">
<defs>
  <linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1A6BAF"/>
    <stop offset="35%" stop-color="#3D8EC8"/>
    <stop offset="70%" stop-color="#7AB8DA"/>
    <stop offset="100%" stop-color="#B8D8EE"/>
  </linearGradient>
  <filter id="mSh">
    <feDropShadow dx="2" dy="4" stdDeviation="5" flood-color="rgba(0,0,0,0.3)"/>
  </filter>
  <clipPath id="cpMP"><circle r="33"/></clipPath>
  <clipPath id="cpTUM"><circle r="33"/></clipPath>
  <clipPath id="cpEG"><circle r="33"/></clipPath>
  <clipPath id="cpHB"><circle r="33"/></clipPath>
  <clipPath id="cpHBF"><circle r="33"/></clipPath>
  <radialGradient id="mVig" cx="50%" cy="50%" r="72%">
    <stop offset="55%" stop-color="transparent"/>
    <stop offset="100%" stop-color="rgba(15,25,50,0.4)"/>
  </radialGradient>
</defs>

<!-- Sky -->
<rect width="900" height="580" fill="url(#mSky)"/>

<!-- Ghibli Clouds -->
<g opacity="0.96">
  <ellipse cx="140" cy="78" rx="88" ry="26" fill="#C0D8EC" opacity="0.4"/>
  <ellipse cx="140" cy="62" rx="88" ry="43" fill="white"/>
  <ellipse cx="88" cy="58" rx="58" ry="35" fill="white"/>
  <ellipse cx="192" cy="56" rx="64" ry="33" fill="white"/>
  <ellipse cx="140" cy="48" rx="50" ry="27" fill="white"/>
  <ellipse cx="114" cy="50" rx="28" ry="16" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.9">
  <ellipse cx="430" cy="66" rx="76" ry="23" fill="#C0D8EC" opacity="0.4"/>
  <ellipse cx="430" cy="50" rx="76" ry="38" fill="white"/>
  <ellipse cx="380" cy="48" rx="48" ry="29" fill="white"/>
  <ellipse cx="478" cy="46" rx="54" ry="27" fill="white"/>
  <ellipse cx="430" cy="38" rx="42" ry="22" fill="white"/>
</g>
<g opacity="0.95">
  <ellipse cx="750" cy="60" rx="80" ry="25" fill="#C0D8EC" opacity="0.4"/>
  <ellipse cx="750" cy="45" rx="80" ry="40" fill="white"/>
  <ellipse cx="700" cy="42" rx="52" ry="31" fill="white"/>
  <ellipse cx="798" cy="40" rx="58" ry="29" fill="white"/>
  <ellipse cx="750" cy="32" rx="44" ry="23" fill="white"/>
  <ellipse cx="726" cy="35" rx="24" ry="15" fill="rgba(255,255,255,0.55)"/>
</g>
<g opacity="0.8">
  <ellipse cx="870" cy="82" rx="46" ry="17" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="870" cy="70" rx="46" ry="28" fill="white"/>
  <ellipse cx="848" cy="68" rx="30" ry="21" fill="white"/>
  <ellipse cx="892" cy="66" rx="32" ry="19" fill="white"/>
</g>

<!-- Distant Alps -->
<path d="M 0,195 Q 60,152 140,170 Q 210,138 295,158 Q 365,115 450,142 Q 515,110 585,130 Q 648,115 705,132 Q 760,118 815,136 Q 858,122 900,138 L 900,212 L 0,212Z"
      fill="#8AACBE" opacity="0.28"/>
<path d="M 0,212 Q 88,182 188,198 Q 272,162 365,180 Q 445,152 530,170 Q 605,156 680,170 Q 752,155 825,168 Q 865,157 900,165 L 900,228 L 0,228Z"
      fill="#98BCCC" opacity="0.24"/>

<!-- Mid-distance hills -->
<path d="M 0,268 Q 95,245 205,260 Q 305,242 425,258 Q 515,244 625,260 Q 715,248 825,262 Q 868,254 900,260 L 900,318 L 0,318Z"
      fill="#3A7840" opacity="0.46"/>
<path d="M 0,288 Q 125,267 252,284 Q 368,269 488,282 Q 582,270 698,284 Q 795,273 900,282 L 900,338 L 0,338Z"
      fill="#4A8A4A" opacity="0.56"/>

<!-- Englischer Garten forest (NE) -->
<ellipse cx="660" cy="252" rx="152" ry="83" fill="#246824" opacity="0.76"/>
<circle cx="572" cy="238" r="45" fill="#1A5A1A" opacity="0.9"/>
<circle cx="620" cy="218" r="42" fill="#2D7A2D" opacity="0.9"/>
<circle cx="672" cy="213" r="47" fill="#1E6420" opacity="0.9"/>
<circle cx="725" cy="223" r="43" fill="#1A5A1A" opacity="0.88"/>
<circle cx="756" cy="242" r="39" fill="#2D7A2D" opacity="0.85"/>
<circle cx="698" cy="260" r="46" fill="#1E6420" opacity="0.85"/>
<circle cx="638" cy="262" r="41" fill="#1A5A1A" opacity="0.85"/>
<circle cx="605" cy="214" r="25" fill="#3D9040" opacity="0.72"/>
<circle cx="666" cy="204" r="29" fill="#3D9040" opacity="0.72"/>
<circle cx="730" cy="214" r="23" fill="#3D9040" opacity="0.68"/>
<!-- Mini Pagoda in park -->
<polygon points="698,200 705,188 712,200" fill="#C04000" opacity="0.95"/>
<rect x="701" y="200" width="8" height="14" fill="#C87820" opacity="0.95"/>
<polygon points="695,200 705,192 715,200" fill="#D04800" opacity="0.9"/>

<!-- Olympiapark (NW) -->
<ellipse cx="128" cy="238" rx="83" ry="53" fill="#3A8A40" opacity="0.66"/>
<circle cx="93" cy="225" r="33" fill="#267326" opacity="0.85"/>
<circle cx="136" cy="217" r="29" fill="#3D9040" opacity="0.85"/>
<circle cx="168" cy="228" r="27" fill="#267326" opacity="0.8"/>
<rect x="95" y="180" width="4" height="37" fill="#9A9A9A" opacity="0.8"/>
<circle cx="97" cy="178" r="5" fill="#B0B0B0" opacity="0.8"/>
<path d="M 110,220 Q 130,205 150,218" stroke="#C8C8C8" stroke-width="2.5" fill="none" opacity="0.65"/>

<!-- Scattered parks -->
<circle cx="292" cy="266" r="27" fill="#2D7A2D" opacity="0.6"/>
<circle cx="316" cy="254" r="21" fill="#3D9040" opacity="0.6"/>
<circle cx="488" cy="263" r="23" fill="#2D7A2D" opacity="0.6"/>
<circle cx="832" cy="272" r="29" fill="#2D7A2D" opacity="0.56"/>
<circle cx="856" cy="260" r="23" fill="#3D9040" opacity="0.56"/>

<!-- Isar River -->
<path d="M 748,168 C 763,228 747,290 733,352 C 721,408 733,460 743,522 C 749,556 743,573 747,580"
      stroke="#3E8FC0" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M 748,168 C 763,228 747,290 733,352 C 721,408 733,460 743,522 C 749,556 743,573 747,580"
      stroke="#7ECCE8" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.58"/>
<path d="M 748,168 C 763,228 747,290 733,352 C 721,408 733,460 743,522 C 749,556 743,573 747,580"
      stroke="white" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.18"/>

<!-- City ground base -->
<path d="M 118,298 Q 280,280 452,294 Q 562,284 662,298 Q 712,310 722,326 L 722,432 Q 642,447 542,442 Q 432,450 332,443 Q 222,450 140,442 Q 106,433 118,298Z"
      fill="#D8C090" opacity="0.58"/>

<!-- Building clusters -->
<g opacity="0.8">
  <rect x="348" y="292" width="52" height="32" fill="#C8A860" rx="2"/>
  <rect x="348" y="286" width="52" height="7" fill="#D4601A" rx="1"/>
  <rect x="410" y="290" width="44" height="30" fill="#D4B870" rx="2"/>
  <rect x="410" y="284" width="44" height="7" fill="#C04A1A" rx="1"/>
  <rect x="366" y="318" width="58" height="28" fill="#D4B870" rx="2"/>
  <rect x="366" y="312" width="58" height="7" fill="#BF5015" rx="1"/>
  <ellipse cx="374" cy="300" rx="9" ry="13" fill="#2D6010" stroke="#1A4008" stroke-width="1.5"/>
  <ellipse cx="390" cy="300" rx="9" ry="13" fill="#2D6010" stroke="#1A4008" stroke-width="1.5"/>
  <rect x="404" y="282" width="12" height="18" fill="#908070"/>
  <circle cx="410" cy="281" r="4" fill="#F0DEB0" stroke="#8B6914" stroke-width="0.8"/>
  <rect x="222" y="298" width="48" height="28" fill="#C8A860" rx="2"/>
  <rect x="222" y="292" width="48" height="7" fill="#C04A1A" rx="1"/>
  <rect x="244" y="320" width="44" height="26" fill="#D4B870" rx="2"/>
  <rect x="244" y="314" width="44" height="7" fill="#BF5015" rx="1"/>
  <rect x="178" y="306" width="38" height="24" fill="#C8A860" rx="2"/>
  <rect x="178" y="300" width="38" height="7" fill="#D4601A" rx="1"/>
  <rect x="316" y="342" width="44" height="26" fill="#C8A860" rx="2"/>
  <rect x="316" y="336" width="44" height="7" fill="#D4601A" rx="1"/>
  <rect x="368" y="340" width="48" height="26" fill="#D4B870" rx="2"/>
  <rect x="368" y="334" width="48" height="7" fill="#BF5015" rx="1"/>
  <rect x="426" y="334" width="44" height="28" fill="#C8A860" rx="2"/>
  <rect x="426" y="328" width="44" height="7" fill="#D4601A" rx="1"/>
  <rect x="458" y="296" width="48" height="28" fill="#C8A860" rx="2"/>
  <rect x="458" y="290" width="48" height="7" fill="#D4601A" rx="1"/>
  <rect x="514" y="302" width="44" height="26" fill="#D4B870" rx="2"/>
  <rect x="514" y="296" width="44" height="7" fill="#BF5015" rx="1"/>
  <rect x="477" y="322" width="54" height="26" fill="#C8A860" rx="2"/>
  <rect x="477" y="316" width="54" height="7" fill="#C04A1A" rx="1"/>
  <rect x="488" y="310" width="36" height="24" fill="#D4A054" rx="2"/>
  <polygon points="488,310 506,298 524,310" fill="#8B4A10" opacity="0.9"/>
  <rect x="272" y="296" width="40" height="24" fill="#C8B870" rx="2"/>
  <rect x="272" y="290" width="40" height="7" fill="#BF5015" rx="1"/>
  <rect x="562" y="292" width="38" height="24" fill="#C8A860" rx="2"/>
  <rect x="562" y="286" width="38" height="7" fill="#D4601A" rx="1"/>
  <rect x="554" y="318" width="44" height="24" fill="#D4B870" rx="2"/>
  <rect x="554" y="312" width="44" height="7" fill="#BF5015" rx="1"/>
  <rect x="295" y="240" width="52" height="26" fill="#F0E0C0" rx="2"/>
  <polygon points="295,240 321,226 347,240" fill="#E0C870"/>
  <rect x="310" y="228" width="22" height="8" fill="#0066B3" rx="2"/>
  <text x="321" y="236" text-anchor="middle" font-size="5" font-weight="bold" fill="white" font-family="Arial">TUM</text>
</g>

<!-- Streets -->
<g stroke="#D4C090" stroke-width="3.5" opacity="0.5" fill="none">
  <line x1="352" y1="278" x2="352" y2="382"/><line x1="422" y1="276" x2="422" y2="382"/>
  <line x1="494" y1="278" x2="494" y2="382"/>
  <line x1="168" y1="298" x2="628" y2="304"/><line x1="168" y1="328" x2="628" y2="334"/>
  <line x1="168" y1="358" x2="628" y2="358"/>
</g>

<!-- Foreground ground -->
<path d="M 0,408 Q 182,390 364,402 Q 544,390 724,404 Q 824,414 900,410 L 900,580 L 0,580Z"
      fill="#5A8A40" opacity="0.5"/>
<path d="M 0,445 Q 245,426 490,440 Q 685,426 900,442 L 900,580 L 0,580Z"
      fill="#4A7A30" opacity="0.6"/>

<!-- Compass Rose -->
<g transform="translate(65,492)">
  <circle r="32" fill="#F8EDD0" stroke="#8B6914" stroke-width="2.5" opacity="0.92"/>
  <circle r="24" fill="none" stroke="#C8A050" stroke-width="1.2" opacity="0.7"/>
  <polygon points="0,-27 -4.5,-9 0,-13 4.5,-9" fill="#8B2020"/>
  <polygon points="0,27 -4.5,9 0,13 4.5,9" fill="#5A5A5A"/>
  <polygon points="-27,0 -9,-4.5 -13,0 -9,4.5" fill="#5A5A5A"/>
  <polygon points="27,0 9,-4.5 13,0 9,4.5" fill="#5A5A5A"/>
  <text x="0" y="-14" text-anchor="middle" font-size="10" font-weight="bold" fill="#8B2020" font-family="serif">N</text>
  <circle r="3.5" fill="#8B6914"/>
</g>

<!-- Title Banner -->
<g transform="translate(450,552)">
  <rect x="-155" y="-19" width="310" height="38" fill="#4A2A00" rx="6" opacity="0.88"/>
  <rect x="-148" y="-13" width="296" height="26" fill="#C08030" rx="4" opacity="0.88"/>
  <text x="0" y="7" text-anchor="middle" font-size="14" font-weight="bold" fill="#3A1A00" font-family="Georgia,serif">München · 慕尼黑</text>
</g>

<!-- ═══ LOCATION MEDALLIONS ═══ -->

<!-- Marienplatz -->
<g id="pin-marienplatz" class="map-pin" onclick="Game.enterScene('marienplatz')" style="cursor:pointer" transform="translate(390,308)">
  <circle r="58" fill="#FF6B3D" opacity="0">
    <animate attributeName="r" values="38;58;38" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.22;0;0.22" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="0" cy="44" rx="38" ry="10" fill="rgba(0,0,0,0.28)"/>
  <circle r="38" fill="white" stroke="#C8A030" stroke-width="5" filter="url(#mSh)"/>
  <g clip-path="url(#cpMP)">
    <rect x="-33" y="-33" width="66" height="52" fill="#5BAED4"/>
    <rect x="-33" y="5" width="66" height="10" fill="#C0B0A0" opacity="0.45"/>
    <rect x="-20" y="-22" width="9" height="35" fill="#9B8060"/>
    <ellipse cx="-15.5" cy="-22" rx="7" ry="11" fill="#2D6010"/>
    <rect x="11" y="-22" width="9" height="35" fill="#9B8060"/>
    <ellipse cx="15.5" cy="-22" rx="7" ry="11" fill="#2D6010"/>
    <rect x="-6" y="-25" width="12" height="37" fill="#A09088"/>
    <rect x="-33" y="15" width="66" height="20" fill="#C8A46A"/>
    <line x1="-33" y1="22" x2="33" y2="22" stroke="#A07840" stroke-width="0.8" opacity="0.5"/>
  </g>
  <circle r="38" fill="none" stroke="#E8C030" stroke-width="2.5"/>
  <circle cx="0" cy="-38" r="3.5" fill="#C8A030"/><circle cx="38" cy="0" r="3.5" fill="#C8A030"/>
  <circle cx="0" cy="38" r="3.5" fill="#C8A030"/><circle cx="-38" cy="0" r="3.5" fill="#C8A030"/>
  <g transform="translate(0, 52)">
    <rect x="-54" y="-13" width="108" height="26" fill="#D03800" rx="12"/>
    <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="white" font-family="Arial">Marienplatz</text>
  </g>
</g>

<!-- TU München -->
<g id="pin-tum" class="map-pin" onclick="Game.enterScene('tum')" style="cursor:pointer" transform="translate(335,243)">
  <circle r="55" fill="#0066B3" opacity="0">
    <animate attributeName="r" values="36;55;36" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.22;0;0.22" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="0" cy="42" rx="36" ry="9" fill="rgba(0,0,0,0.25)"/>
  <circle r="36" fill="white" stroke="#0050A0" stroke-width="5" filter="url(#mSh)"/>
  <g clip-path="url(#cpTUM)">
    <rect x="-33" y="-33" width="66" height="52" fill="#A8CDE8"/>
    <rect x="-29" y="-6" width="58" height="26" fill="#EDD090"/>
    <polygon points="-29,-6 0,-22 29,-6" fill="#E8C870"/>
    <rect x="-15" y="-18" width="30" height="10" fill="#0066B3" rx="2"/>
    <text x="0" y="-11" text-anchor="middle" font-size="7" font-weight="bold" fill="white" font-family="Arial">TUM</text>
    <rect x="-23" y="-6" width="4" height="26" fill="#EDD9A3"/>
    <rect x="-11" y="-6" width="4" height="26" fill="#EDD9A3"/>
    <rect x="7" y="-6" width="4" height="26" fill="#EDD9A3"/>
    <rect x="19" y="-6" width="4" height="26" fill="#EDD9A3"/>
    <rect x="-33" y="20" width="66" height="14" fill="#5AA830"/>
  </g>
  <circle r="36" fill="none" stroke="#3388DD" stroke-width="2.5"/>
  <circle cx="0" cy="-36" r="3" fill="#0050A0"/><circle cx="36" cy="0" r="3" fill="#0050A0"/>
  <circle cx="0" cy="36" r="3" fill="#0050A0"/><circle cx="-36" cy="0" r="3" fill="#0050A0"/>
  <g transform="translate(0, 49)">
    <rect x="-47" y="-13" width="94" height="26" fill="#0055A8" rx="12"/>
    <text x="0" y="5" text-anchor="middle" font-size="11.5" font-weight="bold" fill="white" font-family="Arial">TU München</text>
  </g>
</g>

<!-- Englischer Garten -->
<g id="pin-garten" class="map-pin" onclick="Game.enterScene('englischergarten')" style="cursor:pointer" transform="translate(656,222)">
  <circle r="55" fill="#2E7D32" opacity="0">
    <animate attributeName="r" values="36;55;36" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.22;0;0.22" dur="3s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="0" cy="42" rx="36" ry="9" fill="rgba(0,0,0,0.25)"/>
  <circle r="36" fill="white" stroke="#1B5E20" stroke-width="5" filter="url(#mSh)"/>
  <g clip-path="url(#cpEG)">
    <rect x="-33" y="-33" width="66" height="52" fill="#56B4D3"/>
    <circle cx="-18" cy="-5" r="19" fill="#1A5A1A"/>
    <circle cx="2" cy="-9" r="21" fill="#2D7A2D"/>
    <circle cx="22" cy="-6" r="18" fill="#1A5A1A"/>
    <circle cx="-9" cy="-12" r="15" fill="#3D9040"/>
    <circle cx="12" cy="-14" r="15" fill="#3D9040"/>
    <circle cx="0" cy="-18" r="10" fill="#4AA040"/>
    <path d="M -33,12 Q -10,7 12,13 Q 24,17 33,13" stroke="#4A9FD5" stroke-width="5" fill="none"/>
    <rect x="-33" y="17" width="66" height="16" fill="#4A9030"/>
  </g>
  <circle r="36" fill="none" stroke="#4CAF50" stroke-width="2.5"/>
  <circle cx="0" cy="-36" r="3" fill="#1B5E20"/><circle cx="36" cy="0" r="3" fill="#1B5E20"/>
  <circle cx="0" cy="36" r="3" fill="#1B5E20"/><circle cx="-36" cy="0" r="3" fill="#1B5E20"/>
  <g transform="translate(0, 49)">
    <rect x="-64" y="-13" width="128" height="26" fill="#2A6E2A" rx="12"/>
    <text x="0" y="5" text-anchor="middle" font-size="10.5" font-weight="bold" fill="white" font-family="Arial">Englischer Garten</text>
  </g>
</g>

<!-- Hofbräuhaus -->
<g id="pin-hofbraeu" class="map-pin" onclick="Game.enterScene('hofbraeuhaus')" style="cursor:pointer" transform="translate(492,316)">
  <circle r="55" fill="#E65100" opacity="0">
    <animate attributeName="r" values="36;55;36" dur="2.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.22;0;0.22" dur="2.3s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="0" cy="42" rx="36" ry="9" fill="rgba(0,0,0,0.25)"/>
  <circle r="36" fill="white" stroke="#BF360C" stroke-width="5" filter="url(#mSh)"/>
  <g clip-path="url(#cpHB)">
    <rect x="-33" y="-33" width="66" height="66" fill="#C88C3A"/>
    <rect x="-33" y="-33" width="66" height="30" fill="#3A1A00"/>
    <path d="M -33,-33 Q -16,-3 0,7 Q 16,-3 33,-33" fill="#2A0A00" opacity="0.65"/>
    <ellipse cx="-14" cy="-8" rx="7" ry="9" fill="#FFD700"/>
    <ellipse cx="14" cy="-8" rx="7" ry="9" fill="#FFD700"/>
    <ellipse cx="-14" cy="-8" rx="4" ry="5" fill="#FFFACD" opacity="0.7"/>
    <ellipse cx="14" cy="-8" rx="4" ry="5" fill="#FFFACD" opacity="0.7"/>
    <rect x="-30" y="8" width="60" height="7" fill="#7A4020" rx="2"/>
    <rect x="-30" y="22" width="60" height="7" fill="#7A4020" rx="2"/>
    <text x="-18" y="21" font-size="14">🍺</text>
    <text x="8" y="21" font-size="14">🥨</text>
    <rect x="-33" y="29" width="66" height="8" fill="#9A6030"/>
  </g>
  <circle r="36" fill="none" stroke="#FF7043" stroke-width="2.5"/>
  <circle cx="0" cy="-36" r="3" fill="#BF360C"/><circle cx="36" cy="0" r="3" fill="#BF360C"/>
  <circle cx="0" cy="36" r="3" fill="#BF360C"/><circle cx="-36" cy="0" r="3" fill="#BF360C"/>
  <g transform="translate(0, 49)">
    <rect x="-52" y="-13" width="104" height="26" fill="#C83200" rx="12"/>
    <text x="0" y="5" text-anchor="middle" font-size="11.5" font-weight="bold" fill="white" font-family="Arial">Hofbräuhaus</text>
  </g>
</g>

<!-- Hauptbahnhof -->
<g id="pin-hauptbahnhof" class="map-pin" onclick="Game.enterScene('hauptbahnhof')" style="cursor:pointer" transform="translate(238,374)">
  <circle r="55" fill="#455A64" opacity="0">
    <animate attributeName="r" values="36;55;36" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.22;0;0.22" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="0" cy="42" rx="36" ry="9" fill="rgba(0,0,0,0.25)"/>
  <circle r="36" fill="white" stroke="#455A64" stroke-width="5" filter="url(#mSh)"/>
  <g clip-path="url(#cpHBF)">
    <rect x="-33" y="-33" width="66" height="66" fill="#DDE6EC"/>
    <rect x="-28" y="-22" width="56" height="38" fill="#78909C" rx="3"/>
    <rect x="-23" y="-16" width="12" height="12" fill="#B3E5FC"/>
    <rect x="-5" y="-16" width="12" height="12" fill="#B3E5FC"/>
    <rect x="13" y="-16" width="12" height="12" fill="#B3E5FC"/>
    <rect x="-18" y="4" width="36" height="12" fill="#ECEFF1"/>
    <text x="0" y="13" text-anchor="middle" font-size="10" font-weight="bold" fill="#263238" font-family="Arial">Hbf</text>
    <path d="M -30,24 H30" stroke="#455A64" stroke-width="5"/>
    <path d="M -24,29 H24" stroke="#263238" stroke-width="3"/>
  </g>
  <circle r="36" fill="none" stroke="#90A4AE" stroke-width="2.5"/>
  <circle cx="0" cy="-36" r="3" fill="#455A64"/><circle cx="36" cy="0" r="3" fill="#455A64"/>
  <circle cx="0" cy="36" r="3" fill="#455A64"/><circle cx="-36" cy="0" r="3" fill="#455A64"/>
  <g transform="translate(0, 49)">
    <rect x="-58" y="-13" width="116" height="26" fill="#455A64" rx="12"/>
    <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="white" font-family="Arial">Hauptbahnhof</text>
  </g>
</g>

<!-- Vignette — pointer-events:none so it never blocks clicks -->
<rect width="900" height="580" fill="url(#mVig)" pointer-events="none"/>
</svg>`;

// ── Panoramic scene SVGs (1800×480, Ghibli style) ────────────────

const SCENE_SVGS = {

// ── Marienplatz ──────────────────────────────────────────────────
marienplatz: `
<svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="mpSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1A6BAF"/><stop offset="45%" stop-color="#4A9DC8"/>
    <stop offset="100%" stop-color="#A0CDE8"/>
  </linearGradient>
  <linearGradient id="mpBldg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#C8B488"/><stop offset="100%" stop-color="#987050"/>
  </linearGradient>
  <linearGradient id="mpDome" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3D8020"/><stop offset="100%" stop-color="#1A5008"/>
  </linearGradient>
  <linearGradient id="mpGround" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#D8B072"/><stop offset="100%" stop-color="#A07840"/>
  </linearGradient>
  <linearGradient id="mpRath" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#B0A898"/><stop offset="100%" stop-color="#807868"/>
  </linearGradient>
</defs>

<rect width="1800" height="480" fill="url(#mpSky)"/>

<!-- Ghibli Clouds -->
<g opacity="0.95">
  <ellipse cx="200" cy="76" rx="100" ry="30" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="200" cy="58" rx="100" ry="48" fill="white"/>
  <ellipse cx="138" cy="53" rx="65" ry="39" fill="white"/>
  <ellipse cx="260" cy="51" rx="72" ry="36" fill="white"/>
  <ellipse cx="200" cy="42" rx="56" ry="30" fill="white"/>
  <ellipse cx="168" cy="44" rx="32" ry="18" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.88">
  <ellipse cx="660" cy="62" rx="90" ry="27" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="660" cy="45" rx="90" ry="44" fill="white"/>
  <ellipse cx="602" cy="41" rx="58" ry="35" fill="white"/>
  <ellipse cx="716" cy="39" rx="64" ry="33" fill="white"/>
  <ellipse cx="660" cy="31" rx="50" ry="27" fill="white"/>
</g>
<g opacity="0.92">
  <ellipse cx="1160" cy="68" rx="96" ry="29" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="1160" cy="50" rx="96" ry="46" fill="white"/>
  <ellipse cx="1098" cy="46" rx="62" ry="37" fill="white"/>
  <ellipse cx="1220" cy="44" rx="68" ry="35" fill="white"/>
  <ellipse cx="1160" cy="36" rx="53" ry="29" fill="white"/>
  <ellipse cx="1130" cy="38" rx="30" ry="17" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.85">
  <ellipse cx="1610" cy="60" rx="82" ry="25" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="1610" cy="44" rx="82" ry="42" fill="white"/>
  <ellipse cx="1556" cy="40" rx="53" ry="33" fill="white"/>
  <ellipse cx="1662" cy="38" rx="59" ry="31" fill="white"/>
  <ellipse cx="1610" cy="31" rx="46" ry="26" fill="white"/>
</g>

<!-- Atmospheric hazy background buildings -->
<g fill="#C8B8A8" opacity="0.18">
  <rect x="800" y="202" width="42" height="28"/><rect x="852" y="212" width="32" height="20"/>
  <rect x="1260" y="196" width="50" height="32"/><rect x="1322" y="208" width="36" height="22"/>
  <rect x="1560" y="200" width="44" height="28"/><rect x="1616" y="210" width="32" height="20"/>
  <rect x="1680" y="204" width="46" height="24"/><rect x="1740" y="212" width="52" height="18"/>
</g>

<!-- ── FRAUENKIRCHE (left) ── -->
<rect x="40" y="222" width="242" height="165" fill="url(#mpBldg)" stroke="#5C3A1E" stroke-width="2"/>
<!-- Nave buttresses -->
<g fill="#A08868" stroke="#5C3A1E" stroke-width="1.5">
  <rect x="35" y="282" width="14" height="105"/><rect x="276" y="282" width="14" height="105"/>
  <rect x="74" y="302" width="11" height="85"/><rect x="247" y="302" width="11" height="85"/>
  <rect x="113" y="312" width="11" height="75"/><rect x="208" y="312" width="11" height="75"/>
</g>
<!-- Gothic windows -->
<g fill="#B8D4E8" stroke="#5C3A1E" stroke-width="1.5">
  <path d="M 58 242 L 58 292 Q 70 307 82 292 L 82 242Z"/>
  <path d="M 96 242 L 96 292 Q 108 307 120 292 L 120 242Z"/>
  <path d="M 134 242 L 134 292 Q 146 307 158 292 L 158 242Z"/>
  <path d="M 172 242 L 172 292 Q 184 307 196 292 L 196 242Z"/>
  <path d="M 210 242 L 210 292 Q 222 307 234 292 L 234 242Z"/>
</g>
<!-- Entrance portal -->
<path d="M 110 387 L 110 312 Q 151 287 192 312 L 192 387Z" fill="#5C3A10" stroke="#4A2800" stroke-width="2"/>
<rect x="122" y="322" width="18" height="65" fill="#3A2000"/>
<rect x="152" y="322" width="18" height="65" fill="#3A2000"/>
<!-- Left Tower -->
<rect x="42" y="70" width="78" height="178" fill="#9B8060" stroke="#5C3A1E" stroke-width="2.5" rx="3"/>
<rect x="50" y="132" width="62" height="116" fill="url(#mpBldg)"/>
<g fill="#C8A878" stroke="#5C3A1E" stroke-width="1.5">
  <path d="M 57 107 Q 66 97 75 107 L 75 142 L 57 142Z"/>
  <path d="M 83 107 Q 92 97 101 107 L 101 142 L 83 142Z"/>
  <path d="M 57 150 Q 66 140 75 150 L 75 182 L 57 182Z"/>
  <path d="M 83 150 Q 92 140 101 150 L 101 182 L 83 182Z"/>
</g>
<!-- LEFT ONION DOME -->
<path d="M 31 70 Q 42 8 81 -8 Q 120 8 131 70Z" fill="url(#mpDome)" stroke="#1A4008" stroke-width="2.5"/>
<path d="M 48 70 Q 56 28 81 16 Q 106 28 114 70Z" fill="#3D8020" opacity="0.55"/>
<g stroke="#1A4008" stroke-width="1" opacity="0.35" fill="none">
  <path d="M 81,-8 Q 52,20 35,70"/><path d="M 81,-8 Q 68,22 60,70"/>
  <path d="M 81,-8 Q 90,22 100,70"/><path d="M 81,-8 Q 108,20 125,70"/>
</g>
<rect x="78" y="-10" width="6" height="22" fill="#C8A000"/>
<circle cx="81" cy="-12" r="6" fill="#FFD700" stroke="#C8A000" stroke-width="1.5"/>
<!-- Right Tower -->
<rect x="200" y="70" width="78" height="178" fill="#9B8060" stroke="#5C3A1E" stroke-width="2.5" rx="3"/>
<rect x="208" y="132" width="62" height="116" fill="url(#mpBldg)"/>
<g fill="#C8A878" stroke="#5C3A1E" stroke-width="1.5">
  <path d="M 215 107 Q 224 97 233 107 L 233 142 L 215 142Z"/>
  <path d="M 241 107 Q 250 97 259 107 L 259 142 L 241 142Z"/>
  <path d="M 215 150 Q 224 140 233 150 L 233 182 L 215 182Z"/>
  <path d="M 241 150 Q 250 140 259 150 L 259 182 L 241 182Z"/>
</g>
<!-- RIGHT ONION DOME -->
<path d="M 189 70 Q 200 8 239 -8 Q 278 8 289 70Z" fill="url(#mpDome)" stroke="#1A4008" stroke-width="2.5"/>
<path d="M 206 70 Q 214 28 239 16 Q 264 28 272 70Z" fill="#3D8020" opacity="0.55"/>
<g stroke="#1A4008" stroke-width="1" opacity="0.35" fill="none">
  <path d="M 239,-8 Q 210,20 193,70"/><path d="M 239,-8 Q 226,22 218,70"/>
  <path d="M 239,-8 Q 248,22 258,70"/><path d="M 239,-8 Q 266,20 283,70"/>
</g>
<rect x="236" y="-10" width="6" height="22" fill="#C8A000"/>
<circle cx="239" cy="-12" r="6" fill="#FFD700" stroke="#C8A000" stroke-width="1.5"/>

<!-- ── NEUES RATHAUS (center) ── -->
<rect x="380" y="142" width="352" height="248" fill="url(#mpRath)" stroke="#6B5040" stroke-width="2.5" rx="3"/>
<!-- Gothic ornamental roofline -->
<g fill="#8A8478" stroke="#6B5040" stroke-width="1.5">
  <rect x="386" y="122" width="32" height="26"/><polygon points="386,122 402,102 418,122"/>
  <rect x="428" y="117" width="32" height="31"/><polygon points="428,117 444,97 460,117"/>
  <rect x="470" y="122" width="32" height="26"/><polygon points="470,122 486,104 502,122"/>
  <rect x="512" y="117" width="32" height="31"/><polygon points="512,117 528,99 544,117"/>
  <rect x="554" y="122" width="32" height="26"/><polygon points="554,122 570,104 586,122"/>
  <rect x="596" y="117" width="32" height="31"/><polygon points="596,117 612,99 628,117"/>
  <rect x="638" y="122" width="32" height="26"/><polygon points="638,122 654,104 670,122"/>
  <rect x="678" y="127" width="28" height="22"/><polygon points="678,127 692,110 706,127"/>
</g>
<!-- Central Glockenspiel tower -->
<rect x="500" y="47" width="110" height="107" fill="#908880" stroke="#6B5040" stroke-width="2.5"/>
<polygon points="500,47 555,7 610,47" fill="#7A7068" stroke="#6B5040" stroke-width="2"/>
<!-- Clock face -->
<circle cx="555" cy="100" r="35" fill="#F5E6C0" stroke="#8B6914" stroke-width="3"/>
<circle cx="555" cy="100" r="30" fill="#F8EDD0" stroke="#C8A850" stroke-width="1.5"/>
<g font-size="8" text-anchor="middle" fill="#5A3A10" font-family="serif">
  <text x="555" y="74">XII</text><text x="580" y="104">III</text>
  <text x="555" y="132">VI</text><text x="530" y="104">IX</text>
</g>
<line x1="555" y1="100" x2="555" y2="78" stroke="#3A2000" stroke-width="3" stroke-linecap="round"/>
<line x1="555" y1="100" x2="573" y2="110" stroke="#3A2000" stroke-width="2" stroke-linecap="round"/>
<circle cx="555" cy="100" r="3" fill="#5A3A10"/>
<!-- Rathaus windows -->
<g fill="#B0A898" stroke="#6B5040" stroke-width="1.5">
  <path d="M 394 164 Q 407 152 420 164 L 420 208 L 394 208Z"/>
  <path d="M 428 164 Q 441 152 454 164 L 454 208 L 428 208Z"/>
  <path d="M 462 164 Q 475 152 488 164 L 488 208 L 462 208Z"/>
  <path d="M 626 164 Q 639 152 652 164 L 652 208 L 626 208Z"/>
  <path d="M 660 164 Q 673 152 686 164 L 686 208 L 660 208Z"/>
  <path d="M 694 164 Q 707 152 720 164 L 720 208 L 694 208Z"/>
  <path d="M 394 222 Q 407 210 420 222 L 420 262 L 394 262Z"/>
  <path d="M 462 222 Q 475 210 488 222 L 488 262 L 462 262Z"/>
  <path d="M 694 222 Q 707 210 720 222 L 720 262 L 694 262Z"/>
  <path d="M 394 274 Q 407 262 420 274 L 420 308 L 394 308Z"/>
  <path d="M 660 274 Q 673 262 686 274 L 686 308 L 660 308Z"/>
  <path d="M 694 274 Q 707 262 720 274 L 720 308 L 694 308Z"/>
</g>
<!-- Grand entrance -->
<path d="M 510 387 L 510 282 Q 555 257 600 282 L 600 387Z" fill="#5A3A10" stroke="#4A2800" stroke-width="2"/>
<rect x="522" y="294" width="28" height="93" fill="#3A2000"/>
<rect x="562" y="294" width="28" height="93" fill="#3A2000"/>

<!-- Fountain -->
<g transform="translate(762,350)">
  <ellipse cx="0" cy="0" rx="62" ry="26" fill="#72B8E8" stroke="#5080A0" stroke-width="2.5"/>
  <ellipse cx="0" cy="-6" rx="44" ry="18" fill="#5AAED4" stroke="#4070A0" stroke-width="1.5"/>
  <rect x="-7" y="-55" width="14" height="60" fill="#B8B0A0" stroke="#909090" stroke-width="2"/>
  <ellipse cx="0" cy="-52" rx="20" ry="9" fill="#A0A898" stroke="#808890" stroke-width="1.5"/>
  <path d="M 0,-52 Q 15,-70 10,-80" stroke="#A8D8F8" stroke-width="2.5" fill="none" opacity="0.85"/>
  <path d="M 0,-52 Q -15,-70 -10,-80" stroke="#A8D8F8" stroke-width="2.5" fill="none" opacity="0.85"/>
  <path d="M 0,-52 Q 0,-74 0,-84" stroke="#A8D8F8" stroke-width="3" fill="none" opacity="0.9"/>
</g>

<!-- Adjacent buildings -->
<g transform="translate(1052,202)">
  <rect x="0" y="0" width="180" height="178" fill="#B0A888" stroke="#6B5040" stroke-width="2" rx="3"/>
  <g fill="#C8B0A0" stroke="#6B5040" stroke-width="1">
    <path d="M 20 25 Q 35 14 50 25 L 50 70 L 20 70Z"/>
    <path d="M 65 25 Q 80 14 95 25 L 95 70 L 65 70Z"/>
    <path d="M 110 25 Q 125 14 140 25 L 140 70 L 110 70Z"/>
    <path d="M 20 82 Q 35 71 50 82 L 50 125 L 20 125Z"/>
    <path d="M 110 82 Q 125 71 140 82 L 140 125 L 110 125Z"/>
  </g>
</g>

<!-- Market stalls -->
<g transform="translate(902,222)">
  <rect x="0" y="88" width="165" height="112" fill="#F8E8A0" stroke="#C8A800" stroke-width="2.5" rx="3"/>
  <path d="M -10,88 L 175,88 L 175,54 L -10,54Z" fill="#D83818" stroke="#A82808" stroke-width="2"/>
  <path d="M -10,88 Q 8,78 26,88 Q 44,78 62,88 Q 80,78 98,88 Q 116,78 134,88 Q 152,78 175,88" stroke="#A82808" stroke-width="1.5" fill="none"/>
  <g font-size="24"><text x="18" y="148">🥨</text><text x="66" y="148">🥐</text><text x="114" y="148">🍎</text></g>
  <rect x="185" y="88" width="145" height="112" fill="#F8D0A8" stroke="#C88020" stroke-width="2.5" rx="3"/>
  <path d="M 175,88 L 340,88 L 340,54 L 175,54Z" fill="#C82808" stroke="#A01808" stroke-width="2"/>
  <path d="M 175,88 Q 193,78 211,88 Q 229,78 247,88 Q 265,78 283,88 Q 301,78 319,88 Q 337,78 340,88" stroke="#A01808" stroke-width="1.5" fill="none"/>
  <g font-size="24"><text x="195" y="148">🌹</text><text x="237" y="148">🌻</text><text x="279" y="148">💐</text></g>
</g>

<!-- Flower shop -->
<g transform="translate(1202,230)">
  <rect x="0" y="0" width="175" height="152" fill="#E8F0D8" stroke="#5A8A3A" stroke-width="2.5" rx="5"/>
  <path d="M -5,0 L 180,0 L 180,-25 L -5,-25Z" fill="#4A7A2A" stroke="#3A6A1A" stroke-width="2"/>
  <rect x="12" y="16" width="58" height="68" fill="#B8D8F8" stroke="#5A8A3A" stroke-width="1.5" rx="3"/>
  <rect x="84" y="16" width="58" height="68" fill="#B8D8F8" stroke="#5A8A3A" stroke-width="1.5" rx="3"/>
  <g font-size="22"><text x="14" y="92">🌹</text><text x="56" y="92">🌷</text>
    <text x="86" y="92">🌻</text><text x="128" y="92">🌸</text></g>
  <g font-size="24"><text x="8" y="150">🪴</text><text x="52" y="150">🪴</text><text x="108" y="150">🌺</text></g>
  <text x="87" y="-8" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="Arial">Blumenladen</text>
</g>

<!-- Café -->
<g transform="translate(1418,212)">
  <rect x="0" y="0" width="228" height="172" fill="#F0D890" stroke="#8B6914" stroke-width="2.5" rx="5"/>
  <path d="M -12,0 L 240,0 L 240,-28 L -12,-28Z" fill="#C83020" stroke="#A02010" stroke-width="2"/>
  <path d="M -12,0 Q 8,-12 28,0 Q 48,-12 68,0 Q 88,-12 108,0 Q 128,-12 148,0 Q 168,-12 188,0 Q 208,-12 228,0 L 240,0" stroke="#A02010" stroke-width="1.5" fill="none"/>
  <rect x="16" y="20" width="66" height="75" fill="#A8C8E8" stroke="#8B6914" stroke-width="1.5" rx="3"/>
  <rect x="98" y="20" width="66" height="75" fill="#A8C8E8" stroke="#8B6914" stroke-width="1.5" rx="3"/>
  <line x1="49" y1="20" x2="49" y2="95" stroke="#8B6914" stroke-width="1.5"/>
  <line x1="16" y1="57" x2="82" y2="57" stroke="#8B6914" stroke-width="1.5"/>
  <line x1="131" y1="20" x2="131" y2="95" stroke="#8B6914" stroke-width="1.5"/>
  <line x1="98" y1="57" x2="164" y2="57" stroke="#8B6914" stroke-width="1.5"/>
  <rect x="38" y="100" width="152" height="30" fill="#8B4014" rx="5"/>
  <text x="114" y="121" text-anchor="middle" font-size="14" fill="#FFD700" font-weight="bold" font-family="Georgia,serif">Café Bavaria</text>
  <ellipse cx="210" cy="168" rx="38" ry="14" fill="#C8A050" stroke="#8B6914" stroke-width="2"/>
  <rect x="207" y="168" width="6" height="30" fill="#8B6914"/>
  <g font-size="18"><text x="192" y="165">☕</text><text x="218" y="165">🥐</text></g>
</g>

<!-- Pigeons -->
<g font-size="18" opacity="0.9">
  <text x="830" y="380">🕊️</text><text x="854" y="384">🕊️</text><text x="870" y="378">🕊️</text>
</g>

<!-- Ground / Cobblestone -->
<rect x="0" y="360" width="1800" height="120" fill="url(#mpGround)"/>
<g stroke="#8A6030" stroke-width="0.8" opacity="0.42">
  <line x1="0" y1="375" x2="1800" y2="375"/><line x1="0" y1="390" x2="1800" y2="390"/>
  <line x1="0" y1="405" x2="1800" y2="405"/><line x1="0" y1="420" x2="1800" y2="420"/>
  <line x1="0" y1="435" x2="1800" y2="435"/><line x1="0" y1="450" x2="1800" y2="450"/>
  <line x1="0" y1="465" x2="1800" y2="465"/>
</g>
<g stroke="#8A6030" stroke-width="0.8" opacity="0.28">
  <line x1="60" y1="360" x2="60" y2="480"/><line x1="120" y1="360" x2="120" y2="480"/>
  <line x1="180" y1="360" x2="180" y2="480"/><line x1="240" y1="360" x2="240" y2="480"/>
  <line x1="300" y1="360" x2="300" y2="480"/><line x1="360" y1="360" x2="360" y2="480"/>
  <line x1="420" y1="360" x2="420" y2="480"/><line x1="480" y1="360" x2="480" y2="480"/>
  <line x1="540" y1="360" x2="540" y2="480"/><line x1="600" y1="360" x2="600" y2="480"/>
  <line x1="660" y1="360" x2="660" y2="480"/><line x1="720" y1="360" x2="720" y2="480"/>
  <line x1="780" y1="360" x2="780" y2="480"/><line x1="840" y1="360" x2="840" y2="480"/>
  <line x1="900" y1="360" x2="900" y2="480"/><line x1="960" y1="360" x2="960" y2="480"/>
  <line x1="1020" y1="360" x2="1020" y2="480"/><line x1="1080" y1="360" x2="1080" y2="480"/>
  <line x1="1140" y1="360" x2="1140" y2="480"/><line x1="1200" y1="360" x2="1200" y2="480"/>
  <line x1="1260" y1="360" x2="1260" y2="480"/><line x1="1320" y1="360" x2="1320" y2="480"/>
  <line x1="1380" y1="360" x2="1380" y2="480"/><line x1="1440" y1="360" x2="1440" y2="480"/>
  <line x1="1500" y1="360" x2="1500" y2="480"/><line x1="1560" y1="360" x2="1560" y2="480"/>
  <line x1="1620" y1="360" x2="1620" y2="480"/><line x1="1680" y1="360" x2="1680" y2="480"/>
  <line x1="1740" y1="360" x2="1740" y2="480"/>
</g>
<rect x="0" y="358" width="1800" height="8" fill="rgba(0,0,0,0.14)"/>
</svg>`,

// ── TUM Campus ───────────────────────────────────────────────────
tum: `
<svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="tumSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4A9DC8"/><stop offset="60%" stop-color="#A0CDE8"/>
    <stop offset="100%" stop-color="#D0E8F5"/>
  </linearGradient>
  <linearGradient id="tumStone" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#F0E0B8"/><stop offset="100%" stop-color="#D8C898"/>
  </linearGradient>
  <linearGradient id="tumLawn" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7AC850"/><stop offset="100%" stop-color="#5AA830"/>
  </linearGradient>
</defs>

<rect width="1800" height="480" fill="url(#tumSky)"/>

<!-- Clouds -->
<g opacity="0.9">
  <ellipse cx="220" cy="68" rx="84" ry="25" fill="#C0D8EC" opacity="0.35"/>
  <ellipse cx="220" cy="52" rx="84" ry="42" fill="white"/>
  <ellipse cx="162" cy="48" rx="55" ry="34" fill="white"/>
  <ellipse cx="276" cy="46" rx="61" ry="32" fill="white"/>
  <ellipse cx="220" cy="38" rx="48" ry="26" fill="white"/>
</g>
<g opacity="0.85">
  <ellipse cx="880" cy="60" rx="78" ry="23" fill="#C0D8EC" opacity="0.35"/>
  <ellipse cx="880" cy="45" rx="78" ry="40" fill="white"/>
  <ellipse cx="828" cy="41" rx="50" ry="32" fill="white"/>
  <ellipse cx="930" cy="39" rx="56" ry="30" fill="white"/>
  <ellipse cx="880" cy="31" rx="44" ry="24" fill="white"/>
  <ellipse cx="856" cy="34" rx="26" ry="15" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.88">
  <ellipse cx="1540" cy="65" rx="82" ry="24" fill="#C0D8EC" opacity="0.35"/>
  <ellipse cx="1540" cy="49" rx="82" ry="41" fill="white"/>
  <ellipse cx="1486" cy="45" rx="53" ry="33" fill="white"/>
  <ellipse cx="1592" cy="43" rx="59" ry="31" fill="white"/>
  <ellipse cx="1540" cy="35" rx="46" ry="25" fill="white"/>
</g>

<!-- Background hazy trees -->
<g opacity="0.32">
  <circle cx="50" cy="300" r="75" fill="#2A6A2A"/>
  <circle cx="118" cy="318" r="60" fill="#3A8A3A"/>
  <circle cx="1700" cy="300" r="75" fill="#2A6A2A"/>
  <circle cx="1640" cy="318" r="60" fill="#3A8A3A"/>
</g>

<!-- Flanking trees (Ghibli style) -->
<!-- Left tree cluster -->
<circle cx="55" cy="278" r="80" fill="#1A5A1A"/>
<circle cx="20" cy="295" r="62" fill="#2D7A2D"/>
<circle cx="100" cy="288" r="70" fill="#1E6420"/>
<circle cx="55" cy="260" r="55" fill="#2D7A2D"/>
<circle cx="28" cy="250" r="38" fill="#3D9040"/>
<circle cx="80" cy="248" r="42" fill="#3D9040"/>
<circle cx="48" cy="235" r="26" fill="#4AA040"/>
<rect x="38" y="345" width="18" height="42" fill="#5D3A1A"/>
<!-- Right tree cluster -->
<circle cx="1745" cy="278" r="80" fill="#1A5A1A"/>
<circle cx="1780" cy="295" r="62" fill="#2D7A2D"/>
<circle cx="1700" cy="288" r="70" fill="#1E6420"/>
<circle cx="1745" cy="260" r="55" fill="#2D7A2D"/>
<circle cx="1772" cy="250" r="38" fill="#3D9040"/>
<circle cx="1720" cy="248" r="42" fill="#3D9040"/>
<circle cx="1752" cy="235" r="26" fill="#4AA040"/>
<rect x="1742" y="345" width="18" height="42" fill="#5D3A1A"/>

<!-- More mid trees -->
<circle cx="160" cy="300" r="55" fill="#1E6420" opacity="0.85"/>
<circle cx="148" cy="282" r="38" fill="#3D9040" opacity="0.85"/>
<circle cx="1620" cy="305" r="52" fill="#1A5A1A" opacity="0.85"/>
<circle cx="1638" cy="285" r="36" fill="#3D9040" opacity="0.85"/>

<!-- BIBLIOTHEK (left building) -->
<rect x="62" y="162" width="252" height="220" fill="url(#tumStone)" stroke="#8B6914" stroke-width="2.5" rx="4"/>
<g fill="#EDD9A3" stroke="#8B6914" stroke-width="2">
  <rect x="82" y="188" width="18" height="188"/>
  <rect x="120" y="188" width="18" height="188"/>
  <rect x="158" y="188" width="18" height="188"/>
  <rect x="196" y="188" width="18" height="188"/>
  <rect x="234" y="188" width="18" height="188"/>
  <rect x="272" y="188" width="18" height="188"/>
</g>
<polygon points="62,167 188,96 314,167" fill="#EDD090" stroke="#8B6914" stroke-width="2.5"/>
<text x="188" y="143" text-anchor="middle" font-size="12" fill="#8B6914" font-weight="bold" font-family="Georgia,serif">BIBLIOTHEK</text>
<g fill="#B8D0E8" stroke="#8B6914" stroke-width="1.5">
  <path d="M 90 204 L 90 244 Q 100 254 110 244 L 110 204Z"/>
  <path d="M 128 204 L 128 244 Q 138 254 148 244 L 148 204Z"/>
  <path d="M 166 204 L 166 244 Q 176 254 186 244 L 186 204Z"/>
  <path d="M 204 204 L 204 244 Q 214 254 224 244 L 224 204Z"/>
  <path d="M 242 204 L 242 244 Q 252 254 262 244 L 262 204Z"/>
</g>
<path d="M 158 382 L 158 313 Q 188 297 218 313 L 218 382Z" fill="#5A3A10" stroke="#3A2000" stroke-width="2"/>

<!-- TUM HAUPTGEBÄUDE (grand center) -->
<rect x="332" y="112" width="782" height="270" fill="url(#tumStone)" stroke="#8B6914" stroke-width="3" rx="4"/>
<polygon points="332,112 723,30 1114,112" fill="#EAD080" stroke="#8B6914" stroke-width="3"/>
<rect x="650" y="47" width="146" height="52" fill="#0066B3" rx="5"/>
<text x="723" y="82" text-anchor="middle" font-size="26" font-weight="bold" fill="white" font-family="Arial,sans-serif">TUM</text>
<!-- Columns -->
<g fill="#EDD9A3" stroke="#8B6914" stroke-width="2.5">
  <rect x="362" y="142" width="24" height="232"/>
  <rect x="416" y="142" width="24" height="232"/>
  <rect x="470" y="142" width="24" height="232"/>
  <rect x="524" y="142" width="24" height="232"/>
  <rect x="578" y="142" width="24" height="232"/>
  <rect x="758" y="142" width="24" height="232"/>
  <rect x="812" y="142" width="24" height="232"/>
  <rect x="866" y="142" width="24" height="232"/>
  <rect x="920" y="142" width="24" height="232"/>
  <rect x="974" y="142" width="24" height="232"/>
  <rect x="1028" y="142" width="24" height="232"/>
  <rect x="1064" y="142" width="24" height="232"/>
</g>
<!-- Windows -->
<g fill="#A8C0D8" stroke="#8B6914" stroke-width="1.5">
  <path d="M 396 162 L 396 207 Q 408 218 420 207 L 420 162Z"/>
  <path d="M 450 162 L 450 207 Q 462 218 474 207 L 474 162Z"/>
  <path d="M 504 162 L 504 207 Q 516 218 528 207 L 528 162Z"/>
  <path d="M 558 162 L 558 207 Q 570 218 582 207 L 582 162Z"/>
  <path d="M 782 162 L 782 207 Q 794 218 806 207 L 806 162Z"/>
  <path d="M 836 162 L 836 207 Q 848 218 860 207 L 860 162Z"/>
  <path d="M 890 162 L 890 207 Q 902 218 914 207 L 914 162Z"/>
  <path d="M 944 162 L 944 207 Q 956 218 968 207 L 968 162Z"/>
  <path d="M 998 162 L 998 207 Q 1010 218 1022 207 L 1022 162Z"/>
  <path d="M 396 222 L 396 264 Q 408 274 420 264 L 420 222Z"/>
  <path d="M 504 222 L 504 264 Q 516 274 528 264 L 528 222Z"/>
  <path d="M 890 222 L 890 264 Q 902 274 914 264 L 914 222Z"/>
  <path d="M 998 222 L 998 264 Q 1010 274 1022 264 L 1022 222Z"/>
</g>
<!-- Grand entrance -->
<g fill="#5A3A10" stroke="#3A2000" stroke-width="2">
  <path d="M 642 382 L 642 282 Q 682 260 722 282 L 722 382Z"/>
  <path d="M 722 382 L 722 282 Q 762 260 802 282 L 802 382Z"/>
</g>
<rect x="654" y="297" width="32" height="85" fill="#3A2000"/>
<rect x="738" y="297" width="32" height="85" fill="#3A2000"/>

<!-- MENSA (right) -->
<rect x="1164" y="182" width="242" height="200" fill="#E8E0D0" stroke="#9A8870" stroke-width="2.5" rx="4"/>
<rect x="1164" y="162" width="242" height="30" fill="#B0A898" stroke="#9A8870" stroke-width="2"/>
<g fill="#B8C8D8" stroke="#9A8870" stroke-width="1.5">
  <rect x="1179" y="202" width="52" height="62" rx="3"/>
  <rect x="1244" y="202" width="52" height="62" rx="3"/>
  <rect x="1309" y="202" width="52" height="62" rx="3"/>
</g>
<rect x="1224" y="322" width="82" height="60" fill="#5A3A10" rx="3"/>
<text x="1285" y="167" text-anchor="middle" font-size="13" fill="#4A3A28" font-weight="bold" font-family="Arial">MENSA</text>

<!-- Lawn -->
<rect x="0" y="385" width="1800" height="95" fill="url(#tumLawn)"/>
<g stroke="#5A9A3A" stroke-width="1" opacity="0.28">
  <line x1="0" y1="400" x2="1800" y2="400"/>
  <line x1="0" y1="420" x2="1800" y2="420"/>
  <line x1="0" y1="440" x2="1800" y2="440"/>
  <line x1="0" y1="460" x2="1800" y2="460"/>
</g>
<!-- Path from entrance -->
<rect x="642" y="385" width="160" height="95" fill="#D4B870" opacity="0.75"/>
<line x1="722" y1="385" x2="722" y2="480" stroke="#C0A050" stroke-width="1" opacity="0.45"/>

<!-- Bike rack -->
<g transform="translate(1182,380)">
  <rect x="0" y="-12" width="102" height="12" fill="#9A9A9A" stroke="#777" stroke-width="2" rx="3"/>
  <rect x="10" y="-30" width="6" height="30" fill="#666" stroke="#555" stroke-width="1"/>
  <rect x="86" y="-30" width="6" height="30" fill="#666" stroke="#555" stroke-width="1"/>
  <text x="25" y="-14" font-size="22">🚲</text><text x="57" y="-14" font-size="22">🚲</text>
</g>
<!-- Students -->
<g transform="translate(1318,372)">
  <rect x="-10" y="-15" width="112" height="15" fill="#8B5A2B" stroke="#5A3A10" stroke-width="2" rx="3"/>
  <rect x="5" y="0" width="12" height="30" fill="#5A3A10"/>
  <rect x="85" y="0" width="12" height="30" fill="#5A3A10"/>
  <g font-size="18"><text x="5" y="-16">📖</text><text x="50" y="-16">💻</text><text x="82" y="-16">🎒</text></g>
</g>

<rect x="0" y="383" width="1800" height="8" fill="rgba(0,0,0,0.14)" rx="2"/>
</svg>`,

// ── Englischer Garten (Ghibli forest — most like reference image) ─
englischergarten: `
<svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="egSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1A6BAF"/><stop offset="40%" stop-color="#3D9DC8"/>
    <stop offset="100%" stop-color="#8ACAE0"/>
  </linearGradient>
  <linearGradient id="egGrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6DC050"/><stop offset="100%" stop-color="#4A9030"/>
  </linearGradient>
  <linearGradient id="egWater" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2E8BC0"/><stop offset="100%" stop-color="#60B8E8"/>
  </linearGradient>
</defs>

<rect width="1800" height="480" fill="url(#egSky)"/>

<!-- Dramatic Ghibli clouds -->
<g opacity="0.96">
  <ellipse cx="180" cy="72" rx="105" ry="33" fill="#C0D8EC" opacity="0.4"/>
  <ellipse cx="180" cy="52" rx="105" ry="52" fill="white"/>
  <ellipse cx="108" cy="46" rx="70" ry="42" fill="white"/>
  <ellipse cx="248" cy="44" rx="78" ry="40" fill="white"/>
  <ellipse cx="180" cy="34" rx="62" ry="34" fill="white"/>
  <ellipse cx="145" cy="36" rx="36" ry="20" fill="rgba(255,255,255,0.5)"/>
  <ellipse cx="216" cy="32" rx="30" ry="18" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.9">
  <ellipse cx="660" cy="62" rx="92" ry="28" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="660" cy="44" rx="92" ry="46" fill="white"/>
  <ellipse cx="596" cy="40" rx="60" ry="37" fill="white"/>
  <ellipse cx="722" cy="38" rx="66" ry="35" fill="white"/>
  <ellipse cx="660" cy="29" rx="54" ry="30" fill="white"/>
  <ellipse cx="636" cy="31" rx="30" ry="17" fill="rgba(255,255,255,0.5)"/>
</g>
<g opacity="0.88">
  <ellipse cx="1250" cy="68" rx="98" ry="30" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="1250" cy="50" rx="98" ry="48" fill="white"/>
  <ellipse cx="1184" cy="46" rx="64" ry="39" fill="white"/>
  <ellipse cx="1314" cy="44" rx="70" ry="37" fill="white"/>
  <ellipse cx="1250" cy="34" rx="56" ry="31" fill="white"/>
</g>
<g opacity="0.85">
  <ellipse cx="1680" cy="65" rx="80" ry="24" fill="#C0D8EC" opacity="0.38"/>
  <ellipse cx="1680" cy="48" rx="80" ry="42" fill="white"/>
  <ellipse cx="1628" cy="44" rx="52" ry="34" fill="white"/>
  <ellipse cx="1730" cy="42" rx="58" ry="32" fill="white"/>
  <ellipse cx="1680" cy="34" rx="46" ry="26" fill="white"/>
</g>

<!-- Deep background forest (hazy, atmospheric) -->
<g opacity="0.35">
  <ellipse cx="200" cy="258" rx="320" ry="110" fill="#1A4A1A"/>
  <ellipse cx="700" cy="252" rx="280" ry="105" fill="#1F5520"/>
  <ellipse cx="1100" cy="255" rx="300" ry="108" fill="#1A4A1A"/>
  <ellipse cx="1600" cy="260" rx="260" ry="100" fill="#1F5520"/>
</g>

<!-- Mid-ground trees (Ghibli layered — multiple green tones) -->
<g opacity="0.7">
  <circle cx="480" cy="248" r="72" fill="#1A5A1A"/>
  <circle cx="548" cy="265" r="58" fill="#2A7A2A"/>
  <circle cx="612" cy="250" r="68" fill="#1A5A1A"/>
  <circle cx="680" cy="258" r="62" fill="#2A7A2A"/>
  <circle cx="745" cy="245" r="72" fill="#1A5A1A"/>
  <circle cx="814" cy="255" r="60" fill="#2A7A2A"/>
  <circle cx="878" cy="248" r="68" fill="#1F5F1F"/>
  <circle cx="942" cy="262" r="56" fill="#2A7A2A"/>
  <circle cx="1008" cy="250" r="65" fill="#1A5A1A"/>
  <circle cx="1072" cy="258" r="62" fill="#2A7A2A"/>
  <circle cx="1136" cy="246" r="68" fill="#1F5F1F"/>
</g>

<!-- Eisbach / Stream -->
<path d="M 148,325 Q 258,308 392,318 Q 492,328 535,350 Q 548,360 538,382" stroke="#2E7AB8" stroke-width="8" fill="none" opacity="0.7"/>
<path d="M 138,315 Q 255,298 398,310 Q 508,320 552,348 Q 562,360 552,386 L 130,386 Q 100,375 118,352Z"
      fill="url(#egWater)" opacity="0.82"/>
<g stroke="white" stroke-width="1.5" opacity="0.45" fill="none">
  <path d="M 165,340 Q 200,334 238,340"/>
  <path d="M 265,346 Q 308,338 352,346"/>
  <path d="M 382,350 Q 425,342 468,350"/>
  <path d="M 168,358 Q 212,350 256,358"/>
  <path d="M 292,364 Q 336,356 378,364"/>
</g>
<!-- River grassy banks -->
<ellipse cx="142" cy="388" rx="42" ry="16" fill="#4A9030" opacity="0.75"/>
<ellipse cx="546" cy="378" rx="38" ry="13" fill="#4A9030" opacity="0.75"/>

<!-- Surfer on Eisbach wave -->
<g transform="translate(295,312)">
  <path d="M -52,32 Q -22,2 22,7 Q 52,12 72,37" stroke="#5BAED4" stroke-width="6" fill="none"/>
  <path d="M -52,38 Q -22,10 18,14 Q 48,18 70,40" stroke="#7CCCE8" stroke-width="4" fill="none"/>
  <text y="12" font-size="26">🏄</text>
</g>

<!-- Stone Bridge -->
<g transform="translate(352,314)">
  <path d="M -72,52 Q -62,-10 0,-22 Q 62,-10 72,52Z" fill="#9A9088" stroke="#7A7070" stroke-width="2.5"/>
  <path d="M -72,52 L -72,68 L 72,68 L 72,52Z" fill="#B0A898" stroke="#7A7070" stroke-width="2"/>
  <rect x="-82" y="50" width="164" height="19" fill="#C8B890" stroke="#9A9080" stroke-width="2" rx="3"/>
  <g stroke="#8A8878" stroke-width="2.5" stroke-linecap="round">
    <line x1="-77" y1="50" x2="-77" y2="32"/><line x1="-52" y1="50" x2="-52" y2="30"/>
    <line x1="-27" y1="50" x2="-27" y2="28"/><line x1="0" y1="50" x2="0" y2="27"/>
    <line x1="27" y1="50" x2="27" y2="28"/><line x1="52" y1="50" x2="52" y2="30"/>
    <line x1="77" y1="50" x2="77" y2="32"/>
  </g>
  <line x1="-77" y1="32" x2="77" y2="27" stroke="#8A8878" stroke-width="2.5"/>
</g>

<!-- Ground -->
<rect x="0" y="355" width="1800" height="125" fill="url(#egGrass)"/>
<path d="M 0,355 Q 200,345 400,358 Q 600,370 800,355 Q 1000,340 1200,355 Q 1400,368 1600,355 Q 1700,348 1800,355 L 1800,480 L 0,480Z" fill="#6DC050"/>
<!-- Path through park -->
<path d="M 0,380 Q 400,370 700,380 Q 1000,390 1300,378 Q 1600,368 1800,375 L 1800,398 Q 1600,390 1300,402 Q 1000,412 700,400 Q 400,390 0,402Z" fill="#D4B870" opacity="0.55"/>

<!-- ═══ FOREGROUND GHIBLI TREES (like reference image) ═══ -->
<!-- Dense, rich, layered — the hero visual element -->

<!-- Left foreground cluster (very dense) -->
<circle cx="92" cy="268" r="90" fill="#1A4A1A"/>
<circle cx="40" cy="285" r="70" fill="#2D7A2D"/>
<circle cx="155" cy="278" r="78" fill="#1E6420"/>
<circle cx="92" cy="245" r="65" fill="#2A7A2A"/>
<circle cx="48" cy="238" r="46" fill="#3D9040"/>
<circle cx="140" cy="240" r="52" fill="#3D9040"/>
<circle cx="85" cy="222" r="34" fill="#4AA040"/>
<circle cx="118" cy="218" r="28" fill="#5AB050"/>
<circle cx="62" cy="225" r="22" fill="#5AB050" opacity="0.8"/>
<rect x="76" y="340" width="22" height="52" fill="#5D3A1A"/>

<!-- Left mid cluster -->
<circle cx="255" cy="285" r="68" fill="#1A5A1A"/>
<circle cx="220" cy="270" r="52" fill="#2D7A2D"/>
<circle cx="298" cy="278" r="58" fill="#1E6420"/>
<circle cx="255" cy="255" r="46" fill="#3D9040"/>
<circle cx="230" cy="248" r="32" fill="#4AA040"/>
<circle cx="278" cy="244" r="36" fill="#4AA040"/>
<circle cx="252" cy="234" r="22" fill="#5AB050"/>
<rect x="242" y="344" width="18" height="42" fill="#5D3A1A"/>

<!-- Mid-left cluster (after river) -->
<circle cx="625" cy="282" r="70" fill="#1A5A1A"/>
<circle cx="588" cy="298" r="54" fill="#2D7A2D"/>
<circle cx="668" cy="290" r="62" fill="#1E6420"/>
<circle cx="625" cy="260" r="50" fill="#3D9040"/>
<circle cx="600" cy="252" r="36" fill="#4AA040"/>
<circle cx="650" cy="248" r="40" fill="#4AA040"/>
<circle cx="622" cy="238" r="25" fill="#5AB050"/>
<rect x="614" y="344" width="18" height="44" fill="#5D3A1A"/>

<!-- Mid cluster -->
<circle cx="820" cy="278" r="65" fill="#1A5A1A"/>
<circle cx="782" cy="292" r="50" fill="#2D7A2D"/>
<circle cx="862" cy="285" r="58" fill="#1E6420"/>
<circle cx="820" cy="256" r="46" fill="#3D9040"/>
<circle cx="795" cy="248" r="33" fill="#4AA040"/>
<circle cx="845" cy="244" r="37" fill="#4AA040"/>
<circle cx="818" cy="234" r="22" fill="#5AB050"/>
<rect x="810" y="338" width="18" height="42" fill="#5D3A1A"/>

<!-- Mid-right cluster -->
<circle cx="1058" cy="280" r="68" fill="#1A5A1A"/>
<circle cx="1018" cy="294" r="52" fill="#2D7A2D"/>
<circle cx="1098" cy="288" r="60" fill="#1E6420"/>
<circle cx="1058" cy="258" r="48" fill="#3D9040"/>
<circle cx="1032" cy="250" r="34" fill="#4AA040"/>
<circle cx="1084" cy="246" r="38" fill="#4AA040"/>
<circle cx="1056" cy="236" r="24" fill="#5AB050"/>
<rect x="1048" y="342" width="18" height="44" fill="#5D3A1A"/>

<!-- Right foreground cluster -->
<circle cx="1258" cy="276" r="65" fill="#1A5A1A"/>
<circle cx="1218" cy="290" r="50" fill="#2D7A2D"/>
<circle cx="1298" cy="284" r="58" fill="#1E6420"/>
<circle cx="1258" cy="254" r="46" fill="#3D9040"/>
<circle cx="1234" cy="246" r="33" fill="#4AA040"/>
<circle cx="1282" cy="242" r="37" fill="#4AA040"/>
<circle cx="1256" cy="232" r="22" fill="#5AB050"/>
<rect x="1248" y="336" width="18" height="42" fill="#5D3A1A"/>

<!-- ── CHINESE PAGODA (right section, visible above treeline) ── -->
<g transform="translate(1504,95)">
  <rect x="-5" y="0" width="10" height="265" fill="#C87820" stroke="#8B5000" stroke-width="2"/>
  <!-- 5 tiers (roofs + bodies) -->
  <polygon points="-72,265 0,235 72,265" fill="#C04000" stroke="#8B3000" stroke-width="2.5"/>
  <rect x="-52" y="222" width="104" height="44" fill="#D4781A" stroke="#8B5000" stroke-width="1.5"/>
  <polygon points="-62,222 0,195 62,222" fill="#D04800" stroke="#8B3000" stroke-width="2"/>
  <rect x="-44" y="183" width="88" height="40" fill="#D4781A" stroke="#8B5000" stroke-width="1.5"/>
  <polygon points="-52,183 0,158 52,183" fill="#C04000" stroke="#8B3000" stroke-width="2"/>
  <rect x="-36" y="148" width="72" height="37" fill="#D4781A" stroke="#8B5000" stroke-width="1.5"/>
  <polygon points="-42,148 0,126 42,148" fill="#D04800" stroke="#8B3000" stroke-width="2"/>
  <rect x="-28" y="116" width="56" height="34" fill="#D4781A" stroke="#8B5000" stroke-width="1.5"/>
  <polygon points="-32,116 0,97 32,116" fill="#C04000" stroke="#8B3000" stroke-width="2"/>
  <rect x="-20" y="88" width="40" height="31" fill="#D4781A" stroke="#8B5000" stroke-width="1.5"/>
  <polygon points="-22,88 0,72 22,88" fill="#D04800" stroke="#8B3000" stroke-width="1.5"/>
  <rect x="-3" y="55" width="6" height="25" fill="#FFD700" stroke="#C8A000" stroke-width="1"/>
  <circle cx="0" cy="53" r="5.5" fill="#FFD700" stroke="#C8A000"/>
  <!-- Windows on tiers -->
  <g fill="#A84000" stroke="#8B3000" stroke-width="1">
    <ellipse cx="0" cy="246" rx="14" ry="18"/>
    <ellipse cx="0" cy="205" rx="12" ry="15"/>
    <ellipse cx="0" cy="168" rx="10" ry="13"/>
  </g>
  <!-- Red lanterns hanging -->
  <line x1="-62" y1="265" x2="-62" y2="285" stroke="#8B0000" stroke-width="1.5"/>
  <ellipse cx="-62" cy="291" rx="8" ry="12" fill="#CC0000" stroke="#8B0000" stroke-width="1"/>
  <line x1="62" y1="265" x2="62" y2="285" stroke="#8B0000" stroke-width="1.5"/>
  <ellipse cx="62" cy="291" rx="8" ry="12" fill="#CC0000" stroke="#8B0000" stroke-width="1"/>
  <line x1="-48" y1="222" x2="-56" y2="245" stroke="#8B0000" stroke-width="1.5"/>
  <ellipse cx="-56" cy="251" rx="7" ry="10" fill="#CC0000" stroke="#8B0000" stroke-width="1"/>
  <line x1="48" y1="222" x2="56" y2="245" stroke="#8B0000" stroke-width="1.5"/>
  <ellipse cx="56" cy="251" rx="7" ry="10" fill="#CC0000" stroke="#8B0000" stroke-width="1"/>
  <!-- Surrounding bushes -->
  <circle cx="-92" cy="355" r="32" fill="#2A6A2A" stroke="#1A4A1A" stroke-width="2"/>
  <circle cx="92" cy="355" r="32" fill="#2A6A2A" stroke="#1A4A1A" stroke-width="2"/>
  <circle cx="-56" cy="360" r="24" fill="#3A8A3A"/>
  <circle cx="56" cy="360" r="24" fill="#3A8A3A"/>
</g>

<!-- Right far trees (flanking pagoda) -->
<circle cx="1388" cy="278" r="70" fill="#1A5A1A"/>
<circle cx="1355" cy="295" r="54" fill="#2D7A2D"/>
<circle cx="1425" cy="286" r="62" fill="#1E6420"/>
<circle cx="1388" cy="255" r="48" fill="#3D9040"/>
<circle cx="1362" cy="248" r="34" fill="#4AA040"/>
<circle cx="1414" cy="244" r="38" fill="#4AA040"/>
<circle cx="1385" cy="234" r="24" fill="#5AB050"/>
<rect x="1378" y="342" width="18" height="44" fill="#5D3A1A"/>

<!-- Rightmost trees -->
<circle cx="1640" cy="282" r="72" fill="#1A5A1A"/>
<circle cx="1600" cy="298" r="56" fill="#2D7A2D"/>
<circle cx="1682" cy="290" r="64" fill="#1E6420"/>
<circle cx="1752" cy="278" r="68" fill="#1A5A1A"/>
<circle cx="1640" cy="258" r="50" fill="#3D9040"/>
<circle cx="1614" cy="250" r="36" fill="#4AA040"/>
<circle cx="1666" cy="246" r="40" fill="#4AA040"/>
<circle cx="1638" cy="236" r="25" fill="#5AB050"/>
<rect x="1630" y="346" width="18" height="44" fill="#5D3A1A"/>

<!-- Flowers on grass -->
<g font-size="18" opacity="0.9">
  <text x="572" y="374">🌸</text><text x="604" y="382">🌼</text>
  <text x="555" y="390">🌷</text><text x="626" y="378">🌻</text>
  <text x="780" y="372">🌸</text><text x="818" y="382">🌼</text>
  <text x="1010" y="374">🌷</text><text x="1042" y="384">🌸</text>
</g>

<!-- Dog on path -->
<text x="1114" y="372" font-size="26">🐕</text>

<rect x="0" y="353" width="1800" height="8" fill="rgba(0,0,0,0.12)" rx="2"/>
</svg>`,

// ── Hofbräuhaus Interior ──────────────────────────────────────────
hofbraeuhaus: `
<svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="hbCeil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2A1000"/><stop offset="100%" stop-color="#6A3808"/>
  </linearGradient>
  <linearGradient id="hbWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#C88C3A"/><stop offset="100%" stop-color="#9A6A20"/>
  </linearGradient>
  <linearGradient id="hbFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#C8A060"/><stop offset="100%" stop-color="#8A6030"/>
  </linearGradient>
  <radialGradient id="hbLantern" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#FFFACD"/><stop offset="100%" stop-color="#F5C842"/>
  </radialGradient>
</defs>

<!-- Warm interior walls -->
<rect width="1800" height="480" fill="url(#hbWall)"/>

<!-- Ceiling with barrel vaults -->
<rect width="1800" height="158" fill="url(#hbCeil)"/>
<!-- Barrel vault arches -->
<g stroke="#1A0400" stroke-width="12" fill="none" opacity="0.65">
  <path d="M 0,0 Q 150,205 300,158"/>
  <path d="M 150,0 Q 300,205 450,158"/>
  <path d="M 300,0 Q 450,205 600,158"/>
  <path d="M 450,0 Q 600,205 750,158"/>
  <path d="M 600,0 Q 750,205 900,158"/>
  <path d="M 750,0 Q 900,205 1050,158"/>
  <path d="M 900,0 Q 1050,205 1200,158"/>
  <path d="M 1050,0 Q 1200,205 1350,158"/>
  <path d="M 1200,0 Q 1350,205 1500,158"/>
  <path d="M 1350,0 Q 1500,205 1650,158"/>
  <path d="M 1500,0 Q 1650,205 1800,158"/>
</g>
<!-- Structural beams -->
<g stroke="#4A2000" stroke-width="18" opacity="0.75">
  <line x1="0" y1="0" x2="0" y2="158"/>
  <line x1="300" y1="0" x2="300" y2="158"/>
  <line x1="600" y1="0" x2="600" y2="158"/>
  <line x1="900" y1="0" x2="900" y2="158"/>
  <line x1="1200" y1="0" x2="1200" y2="158"/>
  <line x1="1500" y1="0" x2="1500" y2="158"/>
  <line x1="1800" y1="0" x2="1800" y2="158"/>
</g>

<!-- Hanging lanterns with warm glow -->
<g>
  <line x1="200" y1="0" x2="200" y2="100" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="200" cy="114" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="200" cy="114" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
  <ellipse cx="200" cy="158" rx="85" ry="22" fill="#FFD700" opacity="0.1"/>

  <line x1="500" y1="0" x2="500" y2="92" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="500" cy="106" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="500" cy="106" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
  <ellipse cx="500" cy="158" rx="85" ry="22" fill="#FFD700" opacity="0.1"/>

  <line x1="800" y1="0" x2="800" y2="96" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="800" cy="110" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="800" cy="110" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
  <ellipse cx="800" cy="158" rx="85" ry="22" fill="#FFD700" opacity="0.1"/>

  <line x1="1100" y1="0" x2="1100" y2="90" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="1100" cy="104" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="1100" cy="104" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
  <ellipse cx="1100" cy="158" rx="85" ry="22" fill="#FFD700" opacity="0.1"/>

  <line x1="1400" y1="0" x2="1400" y2="94" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="1400" cy="108" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="1400" cy="108" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
  <ellipse cx="1400" cy="158" rx="85" ry="22" fill="#FFD700" opacity="0.1"/>

  <line x1="1700" y1="0" x2="1700" y2="100" stroke="#5A3010" stroke-width="3"/>
  <ellipse cx="1700" cy="114" rx="24" ry="30" fill="url(#hbLantern)" stroke="#C8A000" stroke-width="2.5"/>
  <ellipse cx="1700" cy="114" rx="13" ry="18" fill="#FFFACD" opacity="0.65"/>
</g>

<!-- Wall murals -->
<rect x="25" y="162" width="112" height="135" fill="#8B6014" stroke="#5A3A00" stroke-width="4" rx="5"/>
<rect x="32" y="169" width="98" height="121" fill="#B08030" rx="3"/>
<text x="81" y="237" text-anchor="middle" font-size="36">🦁</text>
<text x="81" y="278" text-anchor="middle" font-size="11" fill="#FFD700" font-family="serif">Bayern</text>

<rect x="1663" y="162" width="112" height="135" fill="#8B6014" stroke="#5A3A00" stroke-width="4" rx="5"/>
<rect x="1670" y="169" width="98" height="121" fill="#B08030" rx="3"/>
<text x="1719" y="237" text-anchor="middle" font-size="36">⚜️</text>
<text x="1719" y="278" text-anchor="middle" font-size="11" fill="#FFD700" font-family="serif">Bayern</text>

<!-- Bavarian coat of arms (center) -->
<g transform="translate(450,172)">
  <rect x="-32" y="0" width="64" height="88" fill="#4090C0" rx="4" stroke="#2060A0" stroke-width="2"/>
  <g fill="#FFFFFF" opacity="0.8">
    <rect x="-32" y="0" width="16" height="22" rx="2"/><rect x="16" y="0" width="16" height="22" rx="2"/>
    <rect x="-32" y="44" width="16" height="22" rx="2"/><rect x="16" y="44" width="16" height="22" rx="2"/>
    <rect x="-16" y="22" width="16" height="22" rx="2"/><rect x="0" y="22" width="16" height="22" rx="2"/>
    <rect x="-16" y="66" width="16" height="22" rx="2"/><rect x="0" y="66" width="16" height="22" rx="2"/>
  </g>
  <g fill="#4090C0" opacity="0.9">
    <rect x="-16" y="0" width="16" height="22" rx="2"/><rect x="0" y="0" width="16" height="22" rx="2"/>
    <rect x="-32" y="22" width="16" height="22" rx="2"/><rect x="16" y="22" width="16" height="22" rx="2"/>
    <rect x="-16" y="44" width="16" height="22" rx="2"/><rect x="0" y="44" width="16" height="22" rx="2"/>
    <rect x="-32" y="66" width="16" height="22" rx="2"/><rect x="16" y="66" width="16" height="22" rx="2"/>
  </g>
</g>

<!-- Center banner -->
<g transform="translate(900,172)">
  <rect x="-185" y="0" width="370" height="85" fill="#7A0000" rx="6"/>
  <rect x="-177" y="6" width="354" height="73" fill="#C00000" rx="4"/>
  <text x="0" y="34" text-anchor="middle" font-size="16" fill="#FFD700" font-weight="bold" font-family="Georgia,serif">HOFBRÄUHAUS MÜNCHEN</text>
  <text x="0" y="58" text-anchor="middle" font-size="12" fill="#FFCC80" font-family="Georgia,serif">Seit 1589 — Willkommen!</text>
  <text x="-158" y="62" font-size="26">🍺</text>
  <text x="132" y="62" font-size="26">🍺</text>
</g>

<!-- Beer barrels (left wall) -->
<g transform="translate(190,285)">
  <ellipse cx="0" cy="0" rx="48" ry="32" fill="#8B5A1A" stroke="#5A3A00" stroke-width="3"/>
  <rect x="-48" y="0" width="96" height="70" fill="#7A4810" stroke="#5A3A00" stroke-width="3"/>
  <ellipse cx="0" cy="70" rx="48" ry="32" fill="#6A3808" stroke="#5A3A00" stroke-width="3"/>
  <g stroke="#C8A050" stroke-width="2.5" opacity="0.7">
    <line x1="-48" y1="18" x2="48" y2="18"/><line x1="-48" y1="35" x2="48" y2="35"/>
    <line x1="-48" y1="52" x2="48" y2="52"/>
  </g>
  <rect x="-6" y="-5" width="12" height="20" fill="#C8A050" rx="3"/>
  <text x="0" y="48" text-anchor="middle" font-size="22">🍺</text>
</g>

<!-- Accordion player corner -->
<g transform="translate(1520,260)">
  <rect x="-50" y="0" width="100" height="130" fill="#7A4818" stroke="#5A3A00" stroke-width="2" rx="5" opacity="0.5"/>
  <text x="0" y="80" text-anchor="middle" font-size="48">🪗</text>
  <g font-size="11" fill="#FFD700" text-anchor="middle" opacity="0.8" font-family="serif">
    <text x="0" y="115">🎵</text>
    <text x="-30" y="98">🎶</text>
    <text x="30" y="100">🎵</text>
  </g>
</g>

<!-- Long dining tables with benches -->
<!-- Table 1 -->
<g transform="translate(350,270)">
  <rect x="-165" y="0" width="330" height="115" fill="#7A4820" stroke="#5A3000" stroke-width="3" rx="4"/>
  <rect x="-165" y="0" width="330" height="18" fill="#9A6030" rx="4"/>
  <!-- Bench front -->
  <rect x="-150" y="115" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <!-- Bench back -->
  <rect x="-150" y="-22" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <!-- Beer mugs and food on table -->
  <g font-size="22"><text x="-140" y="68">🍺</text><text x="-90" y="68">🍺</text>
    <text x="-40" y="68">🥨</text><text x="10" y="68">🍺</text>
    <text x="60" y="68">🍺</text><text x="110" y="68">🥨</text>
    <text x="160" y="68">🍺</text></g>
  <!-- Table wood grain -->
  <g stroke="#9A6030" stroke-width="1.5" opacity="0.4">
    <line x1="-165" y1="40" x2="165" y2="40"/>
    <line x1="-165" y1="65" x2="165" y2="65"/>
    <line x1="-165" y1="90" x2="165" y2="90"/>
  </g>
</g>

<!-- Table 2 -->
<g transform="translate(920,270)">
  <rect x="-165" y="0" width="330" height="115" fill="#7A4820" stroke="#5A3000" stroke-width="3" rx="4"/>
  <rect x="-165" y="0" width="330" height="18" fill="#9A6030" rx="4"/>
  <rect x="-150" y="115" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <rect x="-150" y="-22" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <g font-size="22"><text x="-140" y="68">🥨</text><text x="-90" y="68">🍺</text>
    <text x="-40" y="68">🍺</text><text x="10" y="68">🥨</text>
    <text x="60" y="68">🍺</text><text x="110" y="68">🍺</text>
    <text x="160" y="68">🥨</text></g>
  <g stroke="#9A6030" stroke-width="1.5" opacity="0.4">
    <line x1="-165" y1="40" x2="165" y2="40"/>
    <line x1="-165" y1="65" x2="165" y2="65"/>
    <line x1="-165" y1="90" x2="165" y2="90"/>
  </g>
</g>

<!-- Table 3 (partial, right) -->
<g transform="translate(1300,270)">
  <rect x="-165" y="0" width="330" height="115" fill="#7A4820" stroke="#5A3000" stroke-width="3" rx="4"/>
  <rect x="-165" y="0" width="330" height="18" fill="#9A6030" rx="4"/>
  <rect x="-150" y="115" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <rect x="-150" y="-22" width="300" height="20" fill="#6A3808" stroke="#5A3000" stroke-width="2" rx="3"/>
  <g font-size="22"><text x="-140" y="68">🍺</text><text x="-90" y="68">🍺</text>
    <text x="-40" y="68">🥨</text><text x="10" y="68">🍺</text>
    <text x="60" y="68">🍺</text><text x="110" y="68">🥨</text></g>
</g>

<!-- Wooden floor planks -->
<rect x="0" y="390" width="1800" height="90" fill="url(#hbFloor)"/>
<g stroke="#7A4810" stroke-width="3" opacity="0.5">
  <line x1="0" y1="408" x2="1800" y2="408"/>
  <line x1="0" y1="426" x2="1800" y2="426"/>
  <line x1="0" y1="444" x2="1800" y2="444"/>
  <line x1="0" y1="462" x2="1800" y2="462"/>
</g>
<g stroke="#7A4810" stroke-width="2" opacity="0.3">
  <line x1="200" y1="390" x2="200" y2="480"/><line x1="450" y1="390" x2="450" y2="480"/>
  <line x1="700" y1="390" x2="700" y2="480"/><line x1="950" y1="390" x2="950" y2="480"/>
  <line x1="1200" y1="390" x2="1200" y2="480"/><line x1="1450" y1="390" x2="1450" y2="480"/>
  <line x1="1700" y1="390" x2="1700" y2="480"/>
</g>

<!-- Warm glow on floor from lanterns -->
<g opacity="0.06">
  <ellipse cx="200" cy="440" rx="140" ry="30" fill="#FFD700"/>
  <ellipse cx="500" cy="440" rx="140" ry="30" fill="#FFD700"/>
  <ellipse cx="800" cy="440" rx="140" ry="30" fill="#FFD700"/>
  <ellipse cx="1100" cy="440" rx="140" ry="30" fill="#FFD700"/>
  <ellipse cx="1400" cy="440" rx="140" ry="30" fill="#FFD700"/>
</g>

<!-- Ground shadow line -->
<rect x="0" y="388" width="1800" height="8" fill="rgba(0,0,0,0.2)" rx="2"/>
</svg>`,

// ── Hauptbahnhof ────────────────────────────────────────────────
hauptbahnhof: `
<svg viewBox="0 0 1800 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="hbfsSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6FA9D8"/><stop offset="70%" stop-color="#D8ECF8"/>
  </linearGradient>
  <linearGradient id="hbfsHall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ECEFF1"/><stop offset="100%" stop-color="#B0BEC5"/>
  </linearGradient>
  <linearGradient id="hbfsFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#A7B1BA"/><stop offset="100%" stop-color="#6D7882"/>
  </linearGradient>
</defs>
<rect width="1800" height="480" fill="url(#hbfsSky)"/>

<!-- glass station hall -->
<rect x="0" y="90" width="1800" height="250" fill="url(#hbfsHall)"/>
<path d="M0 115 Q450 15 900 105 T1800 110 V155 H0Z" fill="#CFD8DC"/>
<g stroke="#90A4AE" stroke-width="4" opacity=".65">
  <line x1="0" y1="155" x2="1800" y2="155"/>
  <line x1="0" y1="215" x2="1800" y2="215"/>
  <line x1="0" y1="275" x2="1800" y2="275"/>
  <line x1="120" y1="90" x2="120" y2="340"/>
  <line x1="320" y1="72" x2="320" y2="340"/>
  <line x1="520" y1="58" x2="520" y2="340"/>
  <line x1="720" y1="70" x2="720" y2="340"/>
  <line x1="920" y1="102" x2="920" y2="340"/>
  <line x1="1120" y1="75" x2="1120" y2="340"/>
  <line x1="1320" y1="58" x2="1320" y2="340"/>
  <line x1="1520" y1="78" x2="1520" y2="340"/>
</g>

<!-- big sign -->
<g transform="translate(210,122)">
  <rect x="-110" y="-24" width="220" height="48" rx="8" fill="#263238"/>
  <text x="0" y="6" text-anchor="middle" font-size="22" font-weight="900" fill="white" font-family="Arial">München Hbf</text>
</g>

<!-- timetable board -->
<g transform="translate(1360,145)">
  <rect x="-110" y="-55" width="220" height="110" rx="8" fill="#202B33"/>
  <text x="-88" y="-28" font-size="16" font-weight="900" fill="#F5C842" font-family="Arial">Abfahrt</text>
  <text x="18" y="-28" font-size="16" font-weight="900" fill="#8FD6FF" font-family="Arial">Ankunft</text>
  <g font-size="12" font-family="Arial" fill="#E8F4FD">
    <text x="-88" y="0">10:04 Nürnberg</text>
    <text x="-88" y="24">10:18 Augsburg</text>
    <text x="18" y="0">10:12 Salzburg</text>
    <text x="18" y="24">10:25 Berlin</text>
  </g>
</g>

<!-- ticket machines -->
<g transform="translate(980,285)">
  <rect x="-40" y="-80" width="80" height="125" rx="8" fill="#C62828" stroke="#8E1B1B" stroke-width="4"/>
  <rect x="-28" y="-66" width="56" height="34" rx="4" fill="#B3E5FC"/>
  <rect x="-26" y="-18" width="52" height="12" rx="3" fill="#ECEFF1"/>
  <circle cx="-16" cy="20" r="8" fill="#F5C842"/><circle cx="14" cy="20" r="8" fill="#F5C842"/>
  <text x="0" y="-43" text-anchor="middle" font-size="10" font-weight="900" fill="#263238" font-family="Arial">Ticket</text>
</g>

<!-- train -->
<g transform="translate(470,300)">
  <rect x="-220" y="-58" width="440" height="88" rx="18" fill="#ECEFF1" stroke="#78909C" stroke-width="5"/>
  <rect x="-208" y="-48" width="416" height="32" rx="10" fill="#B3E5FC"/>
  <rect x="-170" y="-46" width="56" height="28" rx="4" fill="#E1F5FE"/>
  <rect x="-90" y="-46" width="56" height="28" rx="4" fill="#E1F5FE"/>
  <rect x="-10" y="-46" width="56" height="28" rx="4" fill="#E1F5FE"/>
  <rect x="70" y="-46" width="56" height="28" rx="4" fill="#E1F5FE"/>
  <rect x="150" y="-46" width="40" height="62" rx="5" fill="#CFD8DC"/>
  <path d="M-220 6 H220" stroke="#C62828" stroke-width="8"/>
  <circle cx="-150" cy="35" r="17" fill="#37474F"/><circle cx="150" cy="35" r="17" fill="#37474F"/>
  <text x="-196" y="0" font-size="17" font-weight="900" fill="#263238" font-family="Arial">ICE</text>
</g>

<!-- platforms and floor -->
<rect x="0" y="340" width="1800" height="140" fill="url(#hbfsFloor)"/>
<g stroke="#455A64" stroke-width="5" opacity=".65">
  <line x1="0" y1="378" x2="1800" y2="378"/>
  <line x1="0" y1="410" x2="1800" y2="410"/>
  <line x1="0" y1="442" x2="1800" y2="442"/>
</g>
<g stroke="#263238" stroke-width="4">
  <line x1="610" y1="360" x2="850" y2="420"/>
  <line x1="650" y1="360" x2="890" y2="420"/>
</g>

<!-- luggage cluster -->
<g transform="translate(1160,342)">
  <rect x="-26" y="-34" width="52" height="62" rx="8" fill="#5D4037" stroke="#3E2723" stroke-width="3"/>
  <rect x="-12" y="-44" width="24" height="12" rx="5" fill="none" stroke="#3E2723" stroke-width="3"/>
  <circle cx="-14" cy="31" r="4" fill="#263238"/><circle cx="14" cy="31" r="4" fill="#263238"/>
</g>

<!-- platform labels -->
<g font-family="Arial" font-weight="900">
  <rect x="650" y="210" width="95" height="38" rx="8" fill="#263238"/>
  <text x="697" y="235" text-anchor="middle" font-size="20" fill="white">Gleis 5</text>
  <rect x="1425" y="250" width="105" height="34" rx="8" fill="#E8F4FD" stroke="#78909C" stroke-width="2"/>
  <text x="1478" y="273" text-anchor="middle" font-size="16" fill="#263238">Abfahrt</text>
  <rect x="1545" y="250" width="105" height="34" rx="8" fill="#E8F4FD" stroke="#78909C" stroke-width="2"/>
  <text x="1598" y="273" text-anchor="middle" font-size="16" fill="#263238">Ankunft</text>
</g>
</svg>`,

}; // end SCENE_SVGS
