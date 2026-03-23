// ============================================================
// NemMat PWA — app.js  (1:1 kopi af nemmat.dk)
// ============================================================

// ── KURSUS-BILLEDER (fra nemmat.dk/wp-content/uploads/) ──
const IMG_BASE = 'https://nemmat.dk/wp-content/uploads/';
const CARD_BG  = IMG_BASE + '2024/03/online_math_course_503df686-1de6-44b8-9c0d-e0743320cddb.webp';
const STX_BG   = IMG_BASE + '2024/12/rm373batch13-086-scaled.webp';
const HHX_BG   = IMG_BASE + '2025/07/IMG_443F40E3442D-1.webp';

// ── HF C NIVEAU KURSER (nemmat.dk/hf-1aar-2) ──
const HF_C_COURSES = [
  {
    slug: 'beviserhf1',
    title: 'Beviser',
    img: IMG_BASE + '2024/11/DALL%C2%B7E-2024-11-21-13.53.20-A-mathematical-design-centered-around-the-value-of-Pi.webp',
    url: 'https://nemmat.dk/beviserhf1'
  },
  {
    slug: 'tal-og-algebra',
    title: 'Tal og Algebra',
    img: IMG_BASE + '2024/11/math.webp',
    url: 'https://nemmat.dk/courses/tal-og-algebra'
  },
  {
    slug: 'ligninger-1-aar-hf-2',
    title: 'Ligninger',
    subtitle: 'Formler',
    img: IMG_BASE + '2024/11/equality.webp',
    url: 'https://nemmat.dk/courses/ligninger-1-aar-hf-2'
  },
  {
    slug: 'procent-og-rentesregning',
    title: 'Procent og Rente',
    img: IMG_BASE + '2024/11/interest-rate.webp',
    url: 'https://nemmat.dk/courses/procent-og-rentesregning'
  },
  {
    slug: 'funktions-begrebet',
    title: 'Funktion',
    img: IMG_BASE + '2024/11/algebra-3.webp',
    url: 'https://nemmat.dk/courses/funktions-begrebet'
  },
  {
    slug: 'lineaer-funktioner',
    title: 'Lineære Funktioner',
    img: IMG_BASE + '2024/11/diagram-e1731763087784.png',
    url: 'https://nemmat.dk/courses/lineaer-funktioner'
  },
  {
    slug: 'eksponentielle-funktioner',
    title: 'Eksponentielle Funktioner',
    img: IMG_BASE + '2024/11/statistics.webp',
    url: 'https://nemmat.dk/courses/eksponentielle-funktioner'
  },
  {
    slug: 'geometri-og-trigonometri',
    title: 'Geometri og Trigonometri',
    img: IMG_BASE + '2024/11/trigonometry-4.webp',
    url: 'https://nemmat.dk/courses/geometri-og-trigonometri'
  },
  {
    slug: 'deskriptiv-statistik',
    title: 'Deskriptiv Statistik',
    img: IMG_BASE + '2024/11/analytics.webp',
    url: 'https://nemmat.dk/courses/deskriptiv-statistik'
  },
  {
    slug: 'sandsynlighedsregning',
    title: 'Sandsynlighed',
    img: IMG_BASE + '2024/11/probability.webp',
    url: 'https://nemmat.dk/courses/sandsynlighedsregning'
  },
  {
    slug: '10-tals-logaritme',
    title: '10 Tals Logaritmer',
    img: IMG_BASE + '2024/11/logarithm-2.webp',
    url: 'https://nemmat.dk/courses/10-tals-logaritme'
  },
  {
    slug: 'potens-funktioner-hf-b',
    title: 'Potens funktioner',
    subtitle: 'Supplerende stof',
    img: IMG_BASE + '2024/11/graph.webp',
    url: 'https://nemmat.dk/courses/potens-funktioner-hf-b'
  }
];

// ── HF B NIVEAU KURSER (nemmat.dk/hf-2aar) ──
const HF_B_COURSES = [
  {
    slug: 'beviser-hf-mat-b',
    title: 'Beviser',
    img: IMG_BASE + '2024/11/DALL%C2%B7E-2024-11-21-13.53.20-A-mathematical-design-centered-around-the-value-of-Pi.webp',
    url: 'https://nemmat.dk/beviser-hf-mat-b'
  },
  {
    slug: 'tal-og-algebra-b-niveau',
    title: 'Tal og Algebra',
    img: IMG_BASE + '2025/04/teacher.webp',
    url: 'https://nemmat.dk/courses/tal-og-algebra-b-niveau'
  },
  {
    slug: 'funktioner-b-niveau',
    title: 'Funktioner',
    img: IMG_BASE + '2025/04/function.webp',
    url: 'https://nemmat.dk/courses/funktioner-b-niveau'
  },
  {
    slug: 'andengradspolynomier-hf',
    title: 'Andengrads polynomier',
    img: IMG_BASE + '2024/11/algebra-2-1.webp',
    url: 'https://nemmat.dk/courses/andengradspolynomier-hf'
  },
  {
    slug: 'analytisk-plan-geometri-hf-b',
    title: 'Analytisk Plan Geometri',
    img: IMG_BASE + '2025/04/shapes-2.webp',
    url: 'https://nemmat.dk/courses/analytisk-plan-geometri-hf-b'
  },
  {
    slug: 'differentialregning-hf-b',
    title: 'Differential regning',
    img: IMG_BASE + '2024/11/calculus-2.webp',
    url: 'https://nemmat.dk/courses/differentialregning-hf-b'
  },
  {
    slug: 'sandstat-b-gym',
    title: 'Sandsynlighed og Statistik',
    img: IMG_BASE + '2024/11/probability.webp',
    url: 'https://nemmat.dk/courses/sandstat-b-gym'
  },
  {
    slug: 'annuitetsregning',
    title: 'Annuitetsregning',
    subtitle: 'Supplerende stof',
    img: IMG_BASE + '2024/11/interest-rate.webp',
    url: 'https://nemmat.dk/courses/annuitetsregning'
  }
];

// ── TAL OG ALGEBRA CURRICULUM ──
const TAL_ALGEBRA_CURRICULUM = [
  { title: 'TAL', items: [
    { type: 'lesson', title: 'Teori – Tals betydning', dur: '5 min', ytId: '8VYhH_yuv6k' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål', ytId: 'PIJwhN-Kggs' }
  ]},
  { title: 'REGNEARTERNES HIERAKI', items: [
    { type: 'lesson', title: 'Teori – Addition og Subtraktion', dur: '4 min', ytId: 'G5YSE6tol94' },
    { type: 'lesson', title: 'Teori om Multiplikation og Division', dur: '5 min', ytId: '235sVrctdwg' },
    { type: 'lesson', title: 'Potens og Rod', dur: '5 min', ytId: 'bK19NJH5KWQ' },
    { type: 'lesson', title: 'Teori om Fortegn', dur: '', ytId: 'UhQbkGmjR2w' },
    { type: 'lesson', title: 'Teori – Regnearternes Hieraki', dur: '5 min', ytId: 'maG4-7fQQQc' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: 'POTENS OG ROD', items: [
    { type: 'lesson', title: 'Teori – Regneregler for potens og rødder', dur: '2 min', ytId: 'lHE0CnH9_rA' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: 'EKSAMENSØVELSE 1', items: [
    { type: 'quiz', title: 'Læringstelt – Hvor meget har du styr på?', dur: '5 spørgsmål' }
  ]},
  { title: 'ALGEBRA', items: [
    { type: 'lesson', title: 'Teori – Introduktion til bogstaver', dur: '4 min', ytId: 'PqedBFPH39w' },
    { type: 'lesson', title: 'Teori – Algebra og parenteser', dur: '5 min', ytId: '1kYVetGT1Y8' },
    { type: 'lesson', title: 'Algebra regneregler', dur: '6 min', ytId: 'EF0E8gYP-do' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: 'TAL OG BOGSTAVER MED DIGITALE VÆRKTØJ (CAS)', items: [
    { type: 'quiz', title: 'Læringstelt – Test din forståelse', dur: '7 spørgsmål' }
  ]},
  { title: 'BRØKREGNING', items: [
    { type: 'lesson', title: 'Teori – Hvad er en brøk, forlængelse og forkortelse', dur: '4 min', ytId: 'MEi0ORA4OwI' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Addition og Subtraktion med brøker', dur: '5 min', ytId: 'nVyrPOvC9bQ' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Multiplikation og Division med brøker', dur: '3 min', ytId: 'rdbjjpJEyR4' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Sammenhæng mellem tal og brøker', dur: '4 min', ytId: 'YWgQGtXknWo' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: 'EKSAMENSØVELSE 2', items: [
    { type: 'quiz', title: 'Test din forståelse af Tal og Algebra', dur: '5 spørgsmål' }
  ]}
];

// ── LIGNINGER CURRICULUM ──
const LIGNINGER_CURRICULUM = [
  { title: '1. Motivation og Indledning', items: [
    { type: 'lesson', title: 'Motivation og Indledning', dur: '', ytId: 'qYXyWtIEUD0' },
    { type: 'quiz',   title: 'Læringstelt: Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '2. Addition og Subtraktion', items: [
    { type: 'lesson', title: 'Teori – Addition og subtraktion', dur: '5 min', ytId: '_iLc4eWjf7c' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '3. Multiplikation og Division', items: [
    { type: 'lesson', title: 'Teori – Multiplikation og division', dur: '4 min', ytId: 'ZU3QEXRlnRg' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '4. Regler for ligninger', items: [
    { type: 'lesson', title: 'Teori – Regler', dur: '4 min', ytId: 'Q2LMRNO8JOY' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '5. Ubekendt på begge sider', items: [
    { type: 'lesson', title: 'Teori – Ubekendt på begge sider af lighedstegnet', dur: '3 min', ytId: 'GdlGgiZpaaY' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '6. Parenteser i ligninger', items: [
    { type: 'lesson', title: 'Teori – Ligninger med Parenteser', dur: '5 min', ytId: 'wDD0RRAQWy0' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '7. Potens og Rødder', items: [
    { type: 'lesson', title: 'Teori – Potens og Rødder', dur: '4 min', ytId: 'eVSB_lY6OGI' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '8. Ligning i tekst', items: [
    { type: 'lesson', title: 'Forklaring af ligning i tekst', dur: '', ytId: 'G5-3D3OfRks' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '7 spørgsmål' }
  ]},
  { title: '9. Logaritmiske ligninger', items: [
    { type: 'lesson', title: 'Teori – Logaritmisk Ligning', dur: '3 min', ytId: 'YXYJkDXdfhg' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '10. Formler', items: [
    { type: 'lesson', title: 'Teori – Formler', dur: '', ytId: 'hz1568kONNo' },
    { type: 'lesson', title: 'Teori – Formler i tekst', dur: '', ytId: 'ZGzA3WUZ96k' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '4 spørgsmål' }
  ]},
  { title: '11. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Gør dig klar til den skriftlige Eksamen!', dur: '10 spørgsmål' }
  ]}
];

// ── PROCENT OG RENTE CURRICULUM ──
const PROCENT_CURRICULUM = [
  { title: '1. Procentbegrebet', items: [
    { type: 'lesson', title: 'Teori – Begrebet Procent', dur: '', ytId: 'CdANeW1Qza0' },
    { type: 'lesson', title: 'Teori – Omregning fra Procent til Decimal', dur: '', ytId: 'ryRvFrCN83U' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '2. Procent af tal og tilvækst', items: [
    { type: 'lesson', title: 'Teori – Procent af tal', dur: '', ytId: 'M0ifMdZybpY' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Absolut og Relativ tilvækst', dur: '', ytId: 'vY2qXzt59mM' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '3. Fremskrivningsfaktor og stigning/fald', items: [
    { type: 'lesson', title: 'Teori – Fremskrivningsfaktor', dur: '', ytId: 'mtKHN0hRiZg' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – At lægge/trække procent til tal', dur: '', ytId: 'O1FOabU7OIo' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '4. Renteregning', items: [
    { type: 'lesson', title: 'Teori – Renteformlen', dur: '5 min', ytId: '-Oi_Zdg7rF8' },
    { type: 'lesson', title: 'Teori – Slutkapital', dur: '', ytId: 'EpjpWzyHzh8' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Startbeløb', dur: '', ytId: 'TZUsa0zFhnM' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse med startbeløb', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Rentebestemmelse', dur: '', ytId: 'Qnaz6MuFxAc' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Termin', dur: '', ytId: '0DTaqz0-4u8' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' },
    { type: 'lesson', title: 'Teori – Omregning af vækstrate i forskellige tidsenheder', dur: '', ytId: 'l-yx8v_Shw0' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '5. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamensøvelser', dur: '5 spørgsmål' }
  ]}
];

// ── LINEÆRE FUNKTIONER CURRICULUM ──
const LINEAER_CURRICULUM = [
  { title: '1. Forskrift for lineær funktion', items: [
    { type: 'lesson', title: 'Teori – Forskrift for en lineær funktion y = ax + b', dur: '', ytId: 'cyoJCVAC_nQ' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '2. Tallene a og b – visuel forståelse', items: [
    { type: 'lesson', title: 'Teori – Tallene a og b\'s betydning for grafen', dur: '5 min', ytId: 'rPHBcApoSqw' },
    { type: 'quiz',   title: 'Test din visuelle forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '3. Graf, Forskrift, Graf', items: [
    { type: 'lesson', title: 'Teori – Graf-Forskrift-Graf', dur: '6 min', ytId: 'bexYE0LYNZM' },
    { type: 'quiz',   title: 'Test din forståelse fra forskrift til Graf', dur: '3 spørgsmål' }
  ]},
  { title: '4. To punkters formel', items: [
    { type: 'lesson', title: 'Teori – To punkters formel til beregning af a og b', dur: '8 min', ytId: 'ghuvR1G7du8' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '5. Kendt punkt og hældningskoefficient', items: [
    { type: 'lesson', title: 'Teori – Kendt punkt og kendt hældningskoefficient', dur: '5 min', ytId: 'Bac1zBKArZo' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '6. Tabelformer og modeller', items: [
    { type: 'lesson', title: 'Teori – Tabelformer for lineære funktioner', dur: '', ytId: 'Mj_oW-rsXx0' },
    { type: 'lesson', title: 'Teori – Opstilling af Lineære Modeller', dur: '3 min', ytId: '2lFRv-IyKJs' },
    { type: 'lesson', title: 'Teori – Bestemmelse af variabler ud fra model', dur: '', ytId: 'zKxSdfTiNB0' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '7. Skæring mellem to funktioner', items: [
    { type: 'lesson', title: 'Teori – Skæring mellem to funktioner', dur: '4 min', ytId: '2o59Hmhh78w' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '6 spørgsmål' }
  ]},
  { title: '8. Regression med CAS', items: [
    { type: 'lesson', title: 'Teori – Lineær regression (lang version)', dur: '12 min', ytId: 'k8tDAjSwxGw' },
    { type: 'lesson', title: 'Teori – Lineær regression (kort version)', dur: '7 min', ytId: 'IhHWWXQMDcE' },
    { type: 'lesson', title: 'Eksempel – CAS (GeoGebra) til regression', dur: '6 min', ytId: 'KoCCZIXN1yY' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '9. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamensøvelse 1', dur: '2 spørgsmål' },
    { type: 'quiz', title: 'Eksamensøvelse 2', dur: '2 spørgsmål' },
    { type: 'quiz', title: 'Eksamensøvelse 3', dur: '2 spørgsmål' }
  ]}
];

// ── EKSPONENTIELLE FUNKTIONER CURRICULUM ──
const EKSPONENT_CURRICULUM = [
  { title: '1. Indledning og forskrift', items: [
    { type: 'lesson', title: 'Teori – Indledning til eksponentielle funktioner', dur: '', ytId: 'WoN00-bbktY' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '2. Fremskrivningsfaktor og vækstrate', items: [
    { type: 'lesson', title: 'Teori – Fremskrivningsfaktor og vækstrate', dur: '', ytId: 'MyyuOy1afyA' },
    { type: 'quiz',   title: 'Test din visuelle forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '3. Beregning af a og b', items: [
    { type: 'lesson', title: 'Beregning af a og b', dur: '', ytId: 'YeFsdggJa0s' },
    { type: 'lesson', title: 'Eksempel på beregning af tallene a og b', dur: '', ytId: 'pzrFlAb2PxU' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '4. Fordoblings- og halveringskonstant', items: [
    { type: 'lesson', title: 'Teori – Fordoblingskonstant', dur: '', ytId: 'mbTNAR8j0-o' },
    { type: 'lesson', title: 'Teori – Halveringskonstant', dur: '', ytId: 'Xnf-4hIIZcQ' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '5. Modeller og regression', items: [
    { type: 'lesson', title: 'Teori – Fra teori til virkelighed', dur: '', ytId: '0i1wxFvdKoo' },
    { type: 'lesson', title: 'Eksempel – Eksponentiel regression med CAS', dur: '', ytId: 'w5HWVSEXCG8' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '6. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Gør dig klar til den skriftlige Eksamen', dur: '5 spørgsmål' }
  ]}
];

// ── GEOMETRI OG TRIGONOMETRI CURRICULUM ──
const GEOMETRI_CURRICULUM = [
  { title: '1. Motivation og Notation', items: [
    { type: 'lesson', title: 'Teori – Motivation og Notation', dur: '2 min', ytId: 'I4aFHGnav-M' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '2. Ensvinklede trekanter', items: [
    { type: 'lesson', title: 'Teori – Ensvinklede trekanter', dur: '5 min', ytId: '19fFn5kWZg0' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '3. Retvinklede trekanter – Pythagoras', items: [
    { type: 'lesson', title: 'Teori – Retvinklede trekanter og Pythagoras', dur: '6 min', ytId: '0GXYmxNGU94' },
    { type: 'quiz',   title: 'Test dig selv – Pythagoras', dur: '5 spørgsmål' }
  ]},
  { title: '4. Enhedscirklen', items: [
    { type: 'lesson', title: 'Teori – Enhedscirklen', dur: '6 min', ytId: '52Px45gkSTw' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '5. Cos, Sin og Tan', items: [
    { type: 'lesson', title: 'Teori – Brug af formlerne for Cos, Sin og Tan del 1', dur: '4 min', ytId: 'oOt_UxRbW1s' },
    { type: 'lesson', title: 'Teori – Brug af formlerne for Cos, Sin og Tan del 2', dur: '6 min', ytId: '5G1nowqUAys' },
    { type: 'quiz',   title: 'Test dig selv – Cos, Sin, Tan', dur: '5 spørgsmål' }
  ]},
  { title: '6. Konstruktion af trekanter', items: [
    { type: 'lesson', title: 'Teori – Konstruktion med 3 kendte sider', dur: '5 min', ytId: '1oRNG7sdk3s' },
    { type: 'lesson', title: 'Teori – Konstruktion med 2 kendte sider og mellemliggende vinkel', dur: '', ytId: '22TMHfmXqEw' },
    { type: 'lesson', title: 'Teori – Konstruktion med 2 kendte sider og ikke mellemliggende vinkel', dur: '', ytId: 'rorEMAoCT_0' },
    { type: 'lesson', title: 'Teori – Konstruktion med en kendt side og to vinkler', dur: '4 min', ytId: '4C1DsaeVOKs' },
    { type: 'lesson', title: 'Teori – Konstruktion med en kendt side og to vinkler (anden udgave)', dur: '', ytId: 'm7DRgJABH-E' },
    { type: 'quiz',   title: 'Test dig selv – Konstruktion', dur: '5 spørgsmål' }
  ]},
  { title: '7. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamenspørgsmål – Geometri og trigonometri', dur: '5 spørgsmål' }
  ]}
];

// ── DESKRIPTIV STATISTIK CURRICULUM ──
const STATISTIK_CURRICULUM = [
  { title: '1. Motivation', items: [
    { type: 'lesson', title: 'Teori – Motivation', dur: '5 min', ytId: 'lurwUxdrZb4' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '2. Typetal', items: [
    { type: 'lesson', title: 'Teori – Typetal', dur: '5 min', ytId: 'R22mAm_SMRA' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '3. Frekvens og Kumuleret Frekvens', items: [
    { type: 'lesson', title: 'Teori – Frekvens', dur: '3 min', ytId: 'IPGrAWRLbAM' },
    { type: 'lesson', title: 'Teori – Kumuleret Frekvens', dur: '2 min', ytId: 'CwejhNivpnE' },
    { type: 'quiz',   title: 'Test dig selv – Frekvens', dur: '5 spørgsmål' }
  ]},
  { title: '4. Kvartilsæt og Trappediagram', items: [
    { type: 'lesson', title: 'Teori – Udvidet Kvartilsæt', dur: '5 min', ytId: 'Qk3Cup4xqNY' },
    { type: 'lesson', title: 'Trappediagram', dur: '5 min', ytId: '5P0UMDSQjAY' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '5. Boksplot og Middelværdi', items: [
    { type: 'lesson', title: 'Teori – Boksplot', dur: '4 min', ytId: 'e9H9sPKl4JQ' },
    { type: 'lesson', title: 'Teori – Middelværdi', dur: '', ytId: 'IbrsNBjv2Sk' },
    { type: 'lesson', title: 'Teori – Opsummering', dur: '2 min', ytId: 'oHWIEOrhlfM' },
    { type: 'quiz',   title: 'Test dig selv – Boksplot', dur: '5 spørgsmål' }
  ]},
  { title: '6. Grupperet data', items: [
    { type: 'lesson', title: 'Teori – Indsamling af grupperet data', dur: '3 min', ytId: 'Ks8yGon4Gg4' },
    { type: 'lesson', title: 'Teori – Frekvens (grupperet)', dur: '3 min', ytId: 'fRKQ4aLTAxA' },
    { type: 'lesson', title: 'Teori – Kumuleret frekvens (grupperet)', dur: '2 min', ytId: 'lWKw8kdwn7Q' },
    { type: 'lesson', title: 'Teori – Histogram', dur: '5 min', ytId: 'WQPyTVTePo8' },
    { type: 'lesson', title: 'Teori – Sumkurve', dur: '6 min', ytId: 't7cEMHQ8w3Q' },
    { type: 'quiz',   title: 'Test dig selv – Grupperet data', dur: '5 spørgsmål' }
  ]},
  { title: '7. Variation og Outliers', items: [
    { type: 'lesson', title: 'Teori – Boksplot, Variationsbredde og Kvartilbredde', dur: '3 min', ytId: 'GcJkJe7Camg' },
    { type: 'lesson', title: 'Teori – Middelværdi (grupperet)', dur: '4 min', ytId: 'ufWaPrRITCg' },
    { type: 'lesson', title: 'Teori – Forskel mellem Median og Middeltal', dur: '5 min', ytId: 'Okd5vd1UWSI' },
    { type: 'lesson', title: 'Teori – Outliers', dur: '4 min', ytId: 'zAt3Q7TL7VA' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '8. Eksamensforberedelse', items: [
    { type: 'lesson', title: 'Fif til Mundtlighed', dur: '13 min', ytId: '3aCbuHTYnsA' },
    { type: 'quiz', title: 'Eksamenspørgsmål – Statistik', dur: '5 spørgsmål' }
  ]}
];

// ── SANDSYNLIGHEDSREGNING CURRICULUM ──
const SANDSYN_CURRICULUM = [
  { title: '1. Motivation', items: [
    { type: 'lesson', title: 'Teori – Motivation af Sandsynlighedsregning', dur: '1 min', ytId: 'zLwkfqOOb9M' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '2. Tælletræ og Principper', items: [
    { type: 'lesson', title: 'Teori – Tælletræ', dur: '5 min', ytId: '4YPx1sCrSUY' },
    { type: 'lesson', title: 'Teori – Multiplikation og Addition princip', dur: '3 min', ytId: 'XVSa5vioNYE' },
    { type: 'lesson', title: 'Teori – Eksempel gennemgang', dur: '', ytId: 'ivjSRZc2Vvo' },
    { type: 'quiz',   title: 'Test dig selv – Tælletræ', dur: '5 spørgsmål' }
  ]},
  { title: '3. Fakultet, Permutation og Kombination', items: [
    { type: 'lesson', title: 'Teori – Fakultet !', dur: '4 min', ytId: 'cm0NH56SRpQ' },
    { type: 'lesson', title: 'Teori – Permutation og Kombination', dur: '8 min', ytId: 'pXgAmo9Spbg' },
    { type: 'quiz',   title: 'Test dig selv – Kombinatorik', dur: '5 spørgsmål' }
  ]},
  { title: '4. Sandsynlighedsfelt og Hændelser', items: [
    { type: 'lesson', title: 'Teori – Hvad menes der med et sandsynlighedsfelt?', dur: '5 min', ytId: '4KoPohDSBWQ' },
    { type: 'lesson', title: 'Teori – Symmetrisk Sandsynlighed', dur: '5 min', ytId: 'likG3JcTpYU' },
    { type: 'lesson', title: 'Teori – Sandsynlighedstabel og Hændelse', dur: '4 min', ytId: 't7DDCQBQFIo' },
    { type: 'quiz',   title: 'Test dig selv – Sandsynlighed', dur: '5 spørgsmål' }
  ]},
  { title: '5. Uafhængighed og Enten-eller', items: [
    { type: 'lesson', title: 'Teori – Uafhængighed: gange sandsynlighederne', dur: '', ytId: '_yoQoqa0FK0' },
    { type: 'lesson', title: 'Teori – Enten-eller hændelse', dur: '3 min', ytId: 'WLwHyzjjDoY' },
    { type: 'quiz',   title: 'Test dig selv – Uafhængighed', dur: '5 spørgsmål' }
  ]},
  { title: '6. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamenspørgsmål – Sandsynlighed', dur: '5 spørgsmål' }
  ]}
];

// ── 10 TALS LOGARITMER CURRICULUM ──
const LOG_CURRICULUM = [
  { title: '1. 10 tals logaritme', items: [
    { type: 'lesson', title: 'Teori – 10 tals logaritme', dur: '7 min', ytId: 'UMVJOem_d-M' },
    { type: 'quiz',   title: 'Test dig selv – Definitionen', dur: '5 spørgsmål' }
  ]},
  { title: '2. Regneregler for logaritme', items: [
    { type: 'lesson', title: 'Teori – Regneregler for logaritme', dur: '3 min', ytId: 'a63Ts6WsGsI' },
    { type: 'quiz',   title: 'Test dig selv – Regneregler', dur: '5 spørgsmål' }
  ]},
  { title: '3. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamenspørgsmål – Logaritmer', dur: '5 spørgsmål' }
  ]}
];

// ── ANDENGRADSPOLYNOMIER CURRICULUM (HF B) ──
const ANDENGRADS_CURRICULUM = [
  { title: '1. Motivation og Forskrift', items: [
    { type: 'lesson', title: 'Motivation', dur: '6 min', ytId: 'vnUl8ze64E8' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '2. Tallenes betydning og Diskriminant', items: [
    { type: 'lesson', title: 'Teori – Forskrift og tallet a\'s betydning', dur: '3 min', ytId: '-W1rVHgmnfc' },
    { type: 'lesson', title: 'Teori – Forskrift og tallene b og c\'s betydning', dur: '3 min', ytId: '2P2cfjd5pOQ' },
    { type: 'lesson', title: 'Teori – Forskrift og betydning af diskriminanten', dur: '', ytId: 'Pbcx5sw6CSg' },
    { type: 'quiz',   title: 'Test dig selv – Diskriminant', dur: '5 spørgsmål' }
  ]},
  { title: '3. Toppunktsformlen', items: [
    { type: 'lesson', title: 'Teori – Toppunktsformlen eksempel', dur: '5 min', ytId: 'WXbqsYwzzxI' },
    { type: 'lesson', title: 'Teori – Toppunkt som symmetriakse forståelse', dur: '5 min', ytId: '5SCVYehQp_w' },
    { type: 'quiz',   title: 'Test dig selv – Toppunkt', dur: '5 spørgsmål' }
  ]},
  { title: '4. Løsning af andengradsligninger', items: [
    { type: 'lesson', title: 'Teori – Anvendelse af formlen til at løse andengradsligning', dur: '', ytId: '_VE7FW62qNU' },
    { type: 'lesson', title: 'Teori – Løsning når konstant eller 1. grads led mangler', dur: '', ytId: 'XCNMivUO1_g' },
    { type: 'lesson', title: 'Overblik over bestemmelse af rødderne', dur: '9 min', ytId: 'aSwGf_kUrWM' },
    { type: 'quiz',   title: 'Test dig selv – Rødder', dur: '5 spørgsmål' }
  ]},
  { title: '5. Faktorisering', items: [
    { type: 'lesson', title: 'Teori – Faktoriseringsmetoden', dur: '4 min', ytId: 'X-YH0nIwpek' },
    { type: 'lesson', title: 'Teori – Eksempler på toppunkt, rødder og faktorisering', dur: '7 min', ytId: 'vExMyoKjUb8' },
    { type: 'quiz',   title: 'Test dig selv – Faktorisering', dur: '5 spørgsmål' }
  ]},
  { title: '6. Regression med CAS', items: [
    { type: 'lesson', title: 'Teori – Eksempel på 2. grads regression uden CAS', dur: '', ytId: 'FfQX_l8TxDs' },
    { type: 'lesson', title: 'Teori – Eksempel på 2. grads regression med CAS', dur: '', ytId: 'P5lGJ2Z6J64' },
    { type: 'quiz',   title: 'Test dig selv – Regression', dur: '5 spørgsmål' }
  ]},
  { title: '7. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Eksamenspørgsmål – Andengradspolynomier', dur: '5 spørgsmål' }
  ]}
];

// ── DIFFERENTIALREGNING CURRICULUM (HF B) ──
// ── DIFFERENTIAL CURRICULUM (10 lektioner — rigtige data fra nemmat.dk) ──
const DIFFERENTIAL_CURRICULUM = [
  { title: '1. Motivation og Indledning', items: [
    { type: 'lesson', title: 'Teori – Motivation og Indledning', dur: '5 min', ytId: 'Xe0pKo3Zhus' }
  ]},
  { title: '2. 3-trins metoden og Grænseværdi', items: [
    { type: 'lesson', title: 'Teori – 3-trins metoden', dur: '6 min', ytId: '9YODXFNkwco' },
    { type: 'lesson', title: 'Teori – Grænseværdi', dur: '5 min', ytId: 'O29TgeO5JiM' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '3. Afledte funktioner og tangenthældning', items: [
    { type: 'lesson', title: 'Teori – Afledte funktioner og tangenthældning', dur: '6 min', ytId: 'hToGdQQMmbU' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '4. Regneregler for differentialregning', items: [
    { type: 'lesson', title: 'Teori – Regneregler for differentialregning', dur: '7 min', ytId: '9iof0y5BCTQ' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '5. Tangentligning', items: [
    { type: 'lesson', title: 'Teori – Tangentligning', dur: '5 min', ytId: 'RxZIYChWgfk' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '6. Monotoniforhold', items: [
    { type: 'lesson', title: 'Teori – Monotoniforhold', dur: '6 min', ytId: 'RgiT_rb-_ro' },
    { type: 'lesson', title: 'Teori – Eksempel på Monotoniforhold', dur: '5 min', ytId: 'bsoFpvYPQaQ' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '7. Optimering', items: [
    { type: 'lesson', title: 'Teori – Optimering', dur: '6 min', ytId: 'Okt4kurasT8' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]},
  { title: '8. Væksthastighed', items: [
    { type: 'lesson', title: 'Teori – Væksthastighed', dur: '5 min', ytId: 'SMPAkRBIygQ' },
    { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
  ]}
];

// ── VEKTORER 2D CURRICULUM (13 sektioner — rigtige data fra nemmat.dk) ──
const VEKTORER_CURRICULUM = [
  { title: '1. Motivation og Indledning', items: [
    { type: 'lesson', title: 'Teori – Vektor som en bevægelse', dur: '4 min', ytId: 'Xwl2Qkk9B_w' }
  ]},
  { title: '2. Hvad må jeg med Vektorer', items: [
    { type: 'lesson', title: 'Teori – Skalering, Modsat og Længde', dur: '5 min', ytId: 'prB2Qi-zxvg' },
    { type: 'quiz',   title: 'Test dig selv', dur: '7 spørgsmål' }
  ]},
  { title: '3. Fra Punkter til Vektorer samt addition og subtraktion', items: [
    { type: 'lesson', title: 'Teori – Fra punkter til vektorer', dur: '5 min', ytId: 'k5y-7yXmXxY' },
    { type: 'lesson', title: 'Teori – Addition og subtraktion', dur: '4 min', ytId: 'OH93WF_YGQ0' },
    { type: 'quiz',   title: 'Test dig selv med addition subtraktion om punkter til vektorer', dur: '12 spørgsmål' }
  ]},
  { title: '4. SkalarProdukt (Prikprodukt)', items: [
    { type: 'lesson', title: 'Vinkler og vektorer', dur: '3 min', ytId: 'HGJ-4W0s2lo' },
    { type: 'lesson', title: 'Skalarprodukt', dur: '5 min', ytId: 'WcwYUDaEWO0' },
    { type: 'quiz',   title: 'Test dig selv med skalarprodukt', dur: '7 spørgsmål' }
  ]},
  { title: '5. Ortogonale vektorer og Skalarprodukt', items: [
    { type: 'lesson', title: 'Teori – At afgøre om vektorer er vinkelret med skalarprodukt', dur: '3 min', ytId: 'bRol9iy7_6g' },
    { type: 'quiz',   title: 'Test dig selv om ortogonale vektorer', dur: '5 spørgsmål' }
  ]},
  { title: '6. Bestemmelse af vinkel mellem vektorer', items: [
    { type: 'lesson', title: 'Teori – Eksempel på bestemmelse af vinkel mellem to vektorer', dur: '5 min', ytId: '0KasLvduXXQ' },
    { type: 'quiz',   title: 'Test dig selv med bestemmelse af vinkel ml. vektorer', dur: '5 spørgsmål' }
  ]},
  { title: '7. Projektion af vektor på vektor', items: [
    { type: 'lesson', title: 'Teori – projektion', dur: '4 min', ytId: 'Xq0GSfGzdzg' },
    { type: 'lesson', title: 'Teori – længden af projektion', dur: '3 min', ytId: 'akVunn9l4gQ' },
    { type: 'quiz',   title: 'Test din forståelse af projektion formlerne', dur: '4 spørgsmål' }
  ]},
  { title: '8. Determinanter', items: [
    { type: 'lesson', title: 'Teori – Tværvektor og Determinanter', dur: '6 min', ytId: 'kkoPnN9YMcI' },
    { type: 'quiz',   title: 'Test dig selv med definition af determinanter', dur: '4 spørgsmål' },
    { type: 'lesson', title: 'Teori – Anvendelse af Determinant', dur: '4 min', ytId: 'Erl4QeEwLvU' },
    { type: 'lesson', title: 'Teori – Formlerne til bestemmelse af parallelitet og vinkel', dur: '3 min', ytId: 'nQJKpPC60PQ' },
    { type: 'lesson', title: 'Teori – Eksempel på parallelitet', dur: '4 min', ytId: 'V6YeW5jmVDU' },
    { type: 'quiz',   title: 'Test dig selv med Areal, Vinkler og Parallelitet', dur: '6 spørgsmål' }
  ]},
  { title: '9. Linjen i planen', items: [
    { type: 'lesson', title: 'Teori – Linjens ligning og parameterfremstilling', dur: '6 min', ytId: 'l9oVnM5vIhs' },
    { type: 'lesson', title: 'Eksempel på linjen med vektorer', dur: '4 min', ytId: 'rjZozBIlWnc' },
    { type: 'quiz',   title: 'Test dig selv med at skifte fra ligning til parameterfremstilling', dur: '6 spørgsmål' }
  ]},
  { title: '10. Linjens ligning givet et punkt og normalvektor', items: [
    { type: 'lesson', title: 'Bestemmelse af linjens ligningen med et givent punkt og normalvektor', dur: '3 min', ytId: 'xcfJl5pNJxw' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '4 spørgsmål' }
  ]},
  { title: '11. Vinkel mellem Linjer', items: [
    { type: 'lesson', title: 'Teori – Vinkel mellem to linjer', dur: '5 min', ytId: '6AI2G37PCKA' },
    { type: 'quiz',   title: 'Test dig selv med vinkler mellem to linjer', dur: '3 spørgsmål' }
  ]},
  { title: '12. Cirklen', items: [
    { type: 'lesson', title: 'Cirklens parameterfremstilling', dur: '4 min', ytId: 'ikQJWuiXdws' },
    { type: 'lesson', title: 'Skæring mellem linjen (parameterfremstilling) og cirklens ligning', dur: '7 min', ytId: 'tbY7bfUX36k' },
    { type: 'lesson', title: 'Skæring mellem linjens ligning og cirklens ligning', dur: '4 min', ytId: '0Ymj8kuzWMs' },
    { type: 'quiz',   title: 'Test dig selv om cirkler og dens skæring med linjen', dur: '6 spørgsmål' }
  ]},
  { title: '13. Eksamensforberedelse', items: [
    { type: 'quiz', title: 'Skriftlighed (Delprøve 1)', dur: '50 spørgsmål' },
    { type: 'quiz', title: 'Skriftlighed (Delprøve 2)', dur: '31 spørgsmål' }
  ]}
];

// ── QUIZ DATA (rigtige matematikspørgsmål til Vektorer 2D) ──
// Nøgle: "si-ii" (sektionsindex-itemindex)
const QUIZ_DATA = {
  // Sektion 2, quiz 1 — Skalering, Modsat, Længde
  '1-1': [
    { q: 'Hvad er 3 · $\\vec{u}$, hvis $\\vec{u} = \\begin{pmatrix}2\\\\4\\end{pmatrix}$?',
      opts: ['$\\begin{pmatrix}5\\\\7\\end{pmatrix}$','$\\begin{pmatrix}6\\\\12\\end{pmatrix}$','$\\begin{pmatrix}6\\\\4\\end{pmatrix}$','$\\begin{pmatrix}2\\\\12\\end{pmatrix}$'], ans: 1 },
    { q: 'Hvad er modsat-vektoren til $\\vec{v} = \\begin{pmatrix}3\\\\-5\\end{pmatrix}$?',
      opts: ['$\\begin{pmatrix}3\\\\5\\end{pmatrix}$','$\\begin{pmatrix}-3\\\\-5\\end{pmatrix}$','$\\begin{pmatrix}-3\\\\5\\end{pmatrix}$','$\\begin{pmatrix}5\\\\-3\\end{pmatrix}$'], ans: 2 },
    { q: 'Hvad er længden (absolutværdien) af $\\vec{u} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$?',
      opts: ['6','7','5','8'], ans: 2 },
    { q: 'Hvad er $|\\vec{v}|$ hvis $\\vec{v} = \\begin{pmatrix}5\\\\12\\end{pmatrix}$?',
      opts: ['17','13','11','15'], ans: 1 },
    { q: 'Kan man lægge en vektor og et tal sammen?',
      opts: ['Ja, altid','Ja, hvis tallet er 0','Nej, det giver ikke mening','Ja, hvis de har samme fortegn'], ans: 2 },
    { q: 'Hvad giver $\\frac{1}{2} \\cdot \\begin{pmatrix}6\\\\-4\\end{pmatrix}$?',
      opts: ['$\\begin{pmatrix}3\\\\2\\end{pmatrix}$','$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$','$\\begin{pmatrix}12\\\\-8\\end{pmatrix}$','$\\begin{pmatrix}-3\\\\2\\end{pmatrix}$'], ans: 1 },
    { q: 'Enheds-vektoren i x-retningen skrives:',
      opts: ['$(0,0)$','$(1,1)$','$(1,0)$','$(0,1)$'], ans: 2 }
  ],
  // Sektion 3, quiz — Addition, subtraktion, punkter til vektorer
  '2-2': [
    { q: 'Vektoren fra $A(1,2)$ til $B(4,6)$ er:',
      opts: ['$\\begin{pmatrix}5\\\\8\\end{pmatrix}$','$\\begin{pmatrix}3\\\\4\\end{pmatrix}$','$\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$','$\\begin{pmatrix}4\\\\6\\end{pmatrix}$'], ans: 1 },
    { q: '$\\begin{pmatrix}2\\\\3\\end{pmatrix} + \\begin{pmatrix}1\\\\-2\\end{pmatrix} = ?$',
      opts: ['$\\begin{pmatrix}3\\\\5\\end{pmatrix}$','$\\begin{pmatrix}1\\\\5\\end{pmatrix}$','$\\begin{pmatrix}3\\\\1\\end{pmatrix}$','$\\begin{pmatrix}2\\\\-6\\end{pmatrix}$'], ans: 2 },
    { q: '$\\begin{pmatrix}5\\\\2\\end{pmatrix} - \\begin{pmatrix}3\\\\4\\end{pmatrix} = ?$',
      opts: ['$\\begin{pmatrix}8\\\\6\\end{pmatrix}$','$\\begin{pmatrix}2\\\\-2\\end{pmatrix}$','$\\begin{pmatrix}-2\\\\2\\end{pmatrix}$','$\\begin{pmatrix}2\\\\2\\end{pmatrix}$'], ans: 1 },
    { q: 'Hvad er startpunktet ligegyldigt for?',
      opts: ['Vektorens retning','Vektorens længde og retning','Vektorens længde','Begge dele — kun koordinaterne tæller'], ans: 3 },
    { q: 'Vektoren $\\overrightarrow{BA}$ når $A(2,5)$ og $B(6,1)$:',
      opts: ['$\\begin{pmatrix}-4\\\\4\\end{pmatrix}$','$\\begin{pmatrix}4\\\\-4\\end{pmatrix}$','$\\begin{pmatrix}4\\\\4\\end{pmatrix}$','$\\begin{pmatrix}-4\\\\-4\\end{pmatrix}$'], ans: 0 },
    { q: 'Addition af to vektorer $\\vec{a} + \\vec{b}$ er kommutativ. Hvad betyder det?',
      opts: ['$\\vec{a} + \\vec{b} = 2\\vec{a}$','$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$','$\\vec{a} + \\vec{b} = \\vec{a} - \\vec{b}$','$\\vec{a} + \\vec{b} = 0$'], ans: 1 }
  ],
  // Sektion 4, quiz — Skalarprodukt
  '3-2': [
    { q: 'Skalarprodukt af $\\vec{a} = \\begin{pmatrix}2\\\\3\\end{pmatrix}$ og $\\vec{b} = \\begin{pmatrix}4\\\\1\\end{pmatrix}$:',
      opts: ['11','14','8','5'], ans: 0 },
    { q: 'Hvad er resultatet af et skalarprodukt?',
      opts: ['En vektor','Et tal (skalar)','En vinkel','En matrix'], ans: 1 },
    { q: '$\\vec{a} \\cdot \\vec{b} = \\begin{pmatrix}1\\\\0\\end{pmatrix} \\cdot \\begin{pmatrix}0\\\\1\\end{pmatrix} = ?$',
      opts: ['1','-1','0','2'], ans: 2 },
    { q: 'Formlen for skalarprodukt er:',
      opts: ['$a_1 b_2 - a_2 b_1$','$a_1 b_1 + a_2 b_2$','$a_1 + a_2 + b_1 + b_2$','$\\sqrt{a_1^2 + b_1^2}$'], ans: 1 },
    { q: 'Hvad giver $|\\vec{a}|^2$ udtrykt med skalarprodukt?',
      opts: ['$\\vec{a} \\cdot \\vec{a}$','$2 \\cdot \\vec{a}$','$\\vec{a} + \\vec{a}$','$\\vec{a} \\cdot \\vec{0}$'], ans: 0 }
  ],
  // Sektion 5, quiz — Ortogonale vektorer
  '4-1': [
    { q: 'To vektorer er ortogonale (vinkelrette) når:',
      opts: ['$\\vec{a} \\cdot \\vec{b} = 1$','$\\vec{a} \\cdot \\vec{b} = -1$','$\\vec{a} \\cdot \\vec{b} = 0$','$|\\vec{a}| = |\\vec{b}|$'], ans: 2 },
    { q: 'Er $\\vec{a} = \\begin{pmatrix}2\\\\3\\end{pmatrix}$ og $\\vec{b} = \\begin{pmatrix}3\\\\-2\\end{pmatrix}$ ortogonale?',
      opts: ['Ja','Nej','Kun hvis de er normerede','Det kan ikke afgøres'], ans: 0 },
    { q: 'Hvilken vinkel er der mellem to ortogonale vektorer?',
      opts: ['45°','180°','0°','90°'], ans: 3 },
    { q: 'Tværvektoren til $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ er:',
      opts: ['$\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$','$\\begin{pmatrix}b\\\\-a\\end{pmatrix}$','$\\begin{pmatrix}a\\\\-b\\end{pmatrix}$','$\\begin{pmatrix}-b\\\\a\\end{pmatrix}$'], ans: 3 }
  ],
  // Sektion 6, quiz — Vinkel mellem vektorer
  '5-1': [
    { q: 'Formlen for vinklen $\\theta$ mellem $\\vec{a}$ og $\\vec{b}$ er:',
      opts: ['$\\cos\\theta = \\frac{\\vec{a}+\\vec{b}}{|\\vec{a}||\\vec{b}|}$','$\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$','$\\sin\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$','$\\tan\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$'], ans: 1 },
    { q: 'To vektorer har $\\vec{a} \\cdot \\vec{b} = 6$ og $|\\vec{a}| = 2$, $|\\vec{b}| = 3$. Vinklen er:',
      opts: ['30°','60°','90°','0°'], ans: 3 },
    { q: 'Hvad er vinklen hvis $\\cos\\theta = -1$?',
      opts: ['0°','90°','180°','270°'], ans: 2 },
    { q: 'Vinklen mellem to vektorer er altid i intervallet:',
      opts: ['$[0°, 360°]$','$[-90°, 90°]$','$[0°, 180°]$','$[0°, 270°]$'], ans: 2 }
  ],
  // Sektion 7, quiz — Projektion
  '6-2': [
    { q: 'Projektionen af $\\vec{a}$ på $\\vec{b}$ beregnes med:',
      opts: ['$\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\vec{a}$','$\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\vec{b}$','$\\frac{\\vec{a}+\\vec{b}}{|\\vec{b}|}$','$\\vec{a}\\cdot\\hat{b}$'], ans: 1 },
    { q: 'Længden af projektionen af $\\vec{a}$ på $\\vec{b}$ er:',
      opts: ['$|\\vec{a}| + |\\vec{b}|$','$\\frac{|\\vec{a}|}{|\\vec{b}|}$','$\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$','$\\vec{a}\\cdot\\vec{b}$'], ans: 2 },
    { q: 'Hvis $\\vec{a}$ er vinkelret på $\\vec{b}$, hvad er projektionen af $\\vec{a}$ på $\\vec{b}$?',
      opts: ['$\\vec{a}$','$\\vec{b}$','$\\vec{0}$','$1$'], ans: 2 },
    { q: 'Projektionen er en:',
      opts: ['Skalar','Vinkel','Vektor','Matrix'], ans: 2 }
  ],
  // Sektion 8, quiz 1 — Definition af determinanter
  '7-1': [
    { q: 'Determinanten $\\det(\\vec{a},\\vec{b})$ for $\\vec{a}=\\begin{pmatrix}a_1\\\\a_2\\end{pmatrix}, \\vec{b}=\\begin{pmatrix}b_1\\\\b_2\\end{pmatrix}$ er:',
      opts: ['$a_1 b_1 + a_2 b_2$','$a_1 b_1 - a_2 b_2$','$a_1 b_2 - a_2 b_1$','$a_1 b_2 + a_2 b_1$'], ans: 2 },
    { q: 'Tværvektoren til $\\begin{pmatrix}3\\\\5\\end{pmatrix}$ er:',
      opts: ['$\\begin{pmatrix}5\\\\3\\end{pmatrix}$','$\\begin{pmatrix}-3\\\\-5\\end{pmatrix}$','$\\begin{pmatrix}-5\\\\3\\end{pmatrix}$','$\\begin{pmatrix}3\\\\-5\\end{pmatrix}$'], ans: 2 },
    { q: '$\\det\\left(\\begin{pmatrix}2\\\\1\\end{pmatrix}, \\begin{pmatrix}3\\\\4\\end{pmatrix}\\right) = ?$',
      opts: ['5','11','8','10'], ans: 0 },
    { q: 'Hvad beskriver determinantens absolutværdi geometrisk?',
      opts: ['Vinklen mellem vektorerne','Summen af vektorernes længder','Arealet af det parallelogram vektorerne udspænder','Længden af projektionen'], ans: 2 }
  ],
  // Sektion 8, quiz 2 — Areal, Vinkler og Parallelitet
  '7-5': [
    { q: 'To vektorer er parallelle hvis:',
      opts: ['$\\vec{a}\\cdot\\vec{b}=0$','$\\det(\\vec{a},\\vec{b})=0$','$|\\vec{a}|=|\\vec{b}|$','$\\vec{a}+\\vec{b}=\\vec{0}$'], ans: 1 },
    { q: 'Arealet af trekanten udspændt af $\\vec{a}$ og $\\vec{b}$ er:',
      opts: ['$|\\det(\\vec{a},\\vec{b})|$','$\\frac{1}{2}|\\det(\\vec{a},\\vec{b})|$','$2|\\det(\\vec{a},\\vec{b})|$','$|\\vec{a}\\cdot\\vec{b}|$'], ans: 1 },
    { q: '$\\det\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}, \\begin{pmatrix}2\\\\4\\end{pmatrix}\\right) = ?$',
      opts: ['8','6','0','4'], ans: 2, hint: 'Parallelle vektorer giver determinant 0' },
    { q: 'Formlen $\\sin\\theta = \\frac{|\\det(\\vec{a},\\vec{b})|}{|\\vec{a}||\\vec{b}|}$ bruger vi til:',
      opts: ['At finde vektorlængden','At afgøre parallelitet','At beregne vinklen mellem to vektorer','At projicere vektorer'], ans: 2 },
    { q: 'Arealet af parallelogrammet dannet af $\\begin{pmatrix}3\\\\0\\end{pmatrix}$ og $\\begin{pmatrix}0\\\\4\\end{pmatrix}$:',
      opts: ['7','12','14','6'], ans: 1 }
  ],
  // Sektion 9, quiz — Linjen med vektorer
  '8-2': [
    { q: 'Parameterfremstillingen for en linje er:',
      opts: ['$y = ax + b$','$\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}x_0\\\\y_0\\end{pmatrix} + t\\begin{pmatrix}r_1\\\\r_2\\end{pmatrix}$','$x^2 + y^2 = r^2$','$ax + by = c$'], ans: 1 },
    { q: 'Hvad er retningsvektoren for linjen $y = 2x + 1$?',
      opts: ['$\\begin{pmatrix}2\\\\1\\end{pmatrix}$','$\\begin{pmatrix}1\\\\2\\end{pmatrix}$','$\\begin{pmatrix}0\\\\1\\end{pmatrix}$','$\\begin{pmatrix}1\\\\0\\end{pmatrix}$'], ans: 1 },
    { q: 'Normalvektoren til retningsvektoren $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ er:',
      opts: ['$\\begin{pmatrix}1\\\\2\\end{pmatrix}$','$\\begin{pmatrix}2\\\\-1\\end{pmatrix}$','$\\begin{pmatrix}-1\\\\-2\\end{pmatrix}$','$\\begin{pmatrix}1\\\\-2\\end{pmatrix}$'], ans: 1 },
    { q: 'Linjens ligning $ax + by = c$ bruger hvilken vektor som koefficienter?',
      opts: ['Retningsvektoren','En tilfældig vektor','Normalvektoren','Positionsvektoren'], ans: 2 }
  ],
  // Sektion 10, quiz — Linjens ligning
  '9-1': [
    { q: 'Linjens ligning med normalvektor $\\vec{n}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$ igennem $P(1,4)$:',
      opts: ['$2x + 3y = 14$','$3x + 2y = 11$','$2x - 3y = -10$','$x + y = 5$'], ans: 0 },
    { q: 'Hvad bruges normalvektoren til i linjens ligning?',
      opts: ['Den angiver linjens hældning','Den er vinkelret på linjen og giver $a$ og $b$ i $ax+by=c$','Den angiver et punkt på linjen','Den bestemmer linjens afskæring'], ans: 1 },
    { q: 'Hvis $\\vec{n} = \\begin{pmatrix}1\\\\-1\\end{pmatrix}$ og $P(3,3)$, hvad er $c$?',
      opts: ['6','0','3','9'], ans: 1 }
  ],
  // Sektion 11, quiz — Vinkel mellem linjer
  '10-1': [
    { q: 'Vinklen mellem to linjer med retningsvektorer $\\vec{r}_1$ og $\\vec{r}_2$ beregnes med:',
      opts: ['$\\cos\\theta = \\frac{\\vec{r}_1\\cdot\\vec{r}_2}{|\\vec{r}_1||\\vec{r}_2|}$','$\\sin\\theta = \\frac{\\det(\\vec{r}_1,\\vec{r}_2)}{|\\vec{r}_1||\\vec{r}_2|}$','$\\tan\\theta = \\frac{|\\det|}{\\vec{r}_1\\cdot\\vec{r}_2}$','Alle tre formler er ækvivalente'], ans: 3 },
    { q: 'To linjer er parallelle når:',
      opts: ['$\\det(\\vec{r}_1,\\vec{r}_2) = 0$','$\\vec{r}_1\\cdot\\vec{r}_2 = 0$','$|\\vec{r}_1| = |\\vec{r}_2|$','$\\vec{r}_1 + \\vec{r}_2 = \\vec{0}$'], ans: 0 },
    { q: 'To linjer er vinkelrette når:',
      opts: ['$\\det(\\vec{r}_1,\\vec{r}_2) = 0$','$\\vec{r}_1\\cdot\\vec{r}_2 = 0$','$|\\vec{r}_1| = |\\vec{r}_2|$','$\\vec{r}_1 = \\vec{r}_2$'], ans: 1 }
  ],
  // Sektion 12, quiz — Cirkler
  '11-3': [
    { q: 'Cirklens ligning med centrum $(a,b)$ og radius $r$ er:',
      opts: ['$(x+a)^2+(y+b)^2=r$','$(x-a)^2+(y-b)^2=r^2$','$x^2+y^2=r^2$','$(x-a)+(y-b)=r^2$'], ans: 1 },
    { q: 'Cirklens parameterfremstilling med centrum $(0,0)$ og radius $r$:',
      opts: ['$x=r\\cos t,\\ y=r\\sin t$','$x=r\\sin t,\\ y=r\\cos t$','$x=t,\\ y=r$','$x=r,\\ y=t$'], ans: 0 },
    { q: 'Hvad er radius i $x^2 + y^2 = 25$?',
      opts: ['25','5','$\\sqrt{5}$','$\\sqrt{25}$'], ans: 1 },
    { q: 'Centrum i $(x-3)^2 + (y+2)^2 = 16$ er:',
      opts: ['$(-3, 2)$','$(3, -2)$','$(3, 2)$','$(-3, -2)$'], ans: 1 }
  ]
};

// ── ALLE CURRICULA (slug → curriculum) ──
const ALL_CURRICULA = {
  'vektorer-matematik-b-stx-2aar': null, // sættes nedenfor (cirkulær ref løsning)
  'tal-og-algebra': TAL_ALGEBRA_CURRICULUM,
  'tal-og-algebra-b-niveau': TAL_ALGEBRA_CURRICULUM,
  'ligninger-1-aar-hf-2': LIGNINGER_CURRICULUM,
  'procent-og-rentesregning': PROCENT_CURRICULUM,
  'lineaer-funktioner': LINEAER_CURRICULUM,
  'eksponentielle-funktioner': EKSPONENT_CURRICULUM,
  'eksponentielle-funktioner-stx': EKSPONENT_CURRICULUM,
  'geometri-og-trigonometri': GEOMETRI_CURRICULUM,
  'deskriptiv-statistik': STATISTIK_CURRICULUM,
  'statistik-stx-c': STATISTIK_CURRICULUM,
  'sandsynlighedsregning': SANDSYN_CURRICULUM,
  '10-tals-logaritme': LOG_CURRICULUM,
  'andengradspolynomier-hf': ANDENGRADS_CURRICULUM,
  'differentialregning-hf-b': DIFFERENTIAL_CURRICULUM,
};

// ── ALLE QUIZ-DATA (slug → {key → spørgsmål}) ──
const ALL_QUIZ_DATA = {
  'vektorer-matematik-b-stx-2aar': QUIZ_DATA,

  // ────────────────────────────────────────────────────
  // TAL OG ALGEBRA
  // ────────────────────────────────────────────────────
  'tal-og-algebra': {
    // S0: TAL — item 1
    '0-1': [
      { q: 'Hvilken type tal er $\\sqrt{2}$?',
        opts: ['Naturligt tal','Rationalt tal','Irrationalt tal','Helt tal'], ans: 2 },
      { q: 'Hvad er $|-7|$?',
        opts: ['-7','7','$1/7$','49'], ans: 1 },
      { q: '$\\pi$ tilhører hvilken talmængde?',
        opts: ['$\\mathbb{Q}$ (rationale tal)','$\\mathbb{N}$ (naturlige tal)','$\\mathbb{Z}$ (hele tal)','$\\mathbb{R} \\setminus \\mathbb{Q}$ (irrationale tal)'], ans: 3 },
      { q: 'Hvad er $-3 \\cdot (-4)$?',
        opts: ['-12','-7','7','12'], ans: 3 },
      { q: 'Hvilken mængde er størst (flest elementer)?',
        opts: ['$\\mathbb{N}$','$\\mathbb{Z}$','$\\mathbb{Q}$','$\\mathbb{R}$'], ans: 3 }
    ],
    // S1: REGNEARTERNES HIERARKI — item 5
    '1-5': [
      { q: 'Hvad beregnes FØR i $3 + 2 \\cdot 4$?',
        opts: ['$3 + 2 = 5$','$2 \\cdot 4 = 8$','$3 + 4 = 7$','$2 + 4 = 6$'], ans: 1 },
      { q: 'Hvad er $2 + 3 \\cdot (4 - 1)^2$?',
        opts: ['29','125','24','20'], ans: 0 },
      { q: 'Hvad er $10 - 2^3 + 1$?',
        opts: ['3','1','17','7'], ans: 0 },
      { q: 'Regnerækkefølgen (PEMDAS/BEDMAS) er:',
        opts: ['Plus, gange, potens, parentes','Parentes → potens → gang/divider → plus/minus','Parentes → plus → gange → potens','Ingen fast orden'], ans: 1 },
      { q: 'Hvad er $6 \\div 2 \\cdot 3$?',
        opts: ['1','9','4','12'], ans: 1 }
    ],
    // S2: POTENS OG ROD — item 1
    '2-1': [
      { q: 'Hvad er $2^5$?',
        opts: ['10','25','32','16'], ans: 2 },
      { q: '$a^n \\cdot a^m = ?$',
        opts: ['$a^{n+m}$','$a^{n \\cdot m}$','$a^{n/m}$','$2a^{nm}$'], ans: 0 },
      { q: 'Hvad er $\\sqrt{144}$?',
        opts: ['12','14','11','72'], ans: 0 },
      { q: 'Hvad er $8^{1/3}$?',
        opts: ['2','4','512','24'], ans: 0 },
      { q: '$(a^2)^3 = ?$',
        opts: ['$a^5$','$a^6$','$a^{23}$','$a$'], ans: 1 }
    ],
    // S3: EKSAMENSØVELSE 1 — item 0
    '3-0': [
      { q: 'Hvad er $3^2 + 4^2$?',
        opts: ['49','25','14','7'], ans: 1 },
      { q: 'Forenkl $2x + 3y - x$:',
        opts: ['$x + 3y$','$2x - 3y$','$x - 3y$','$3x + 3y$'], ans: 0 },
      { q: 'Hvad er $\\frac{7}{8} + \\frac{1}{4}$?',
        opts: ['$\\frac{8}{12}$','$\\frac{7}{32}$','$\\frac{9}{8}$','$\\frac{1}{2}$'], ans: 2 },
      { q: 'Hvad er $0{,}3 \\cdot 0{,}4$?',
        opts: ['0,7','0,12','1,2','0,012'], ans: 1 },
      { q: 'Hvad er 40% af 250?',
        opts: ['50','75','100','125'], ans: 2 }
    ],
    // S4: ALGEBRA — item 3
    '4-3': [
      { q: 'Forenkl $3x + 2y - x + 5y$:',
        opts: ['$2x + 7y$','$4x + 3y$','$3x + 7y$','$2x + 3y$'], ans: 0 },
      { q: '$a(b + c) = ?$',
        opts: ['$ab + c$','$ab + ac$','$a + b + c$','$abc$'], ans: 1 },
      { q: 'Forenkl $(x+2)(x-2)$:',
        opts: ['$x^2 - 4$','$x^2 + 4$','$x^2 - 2$','$x^2 - 4x$'], ans: 0 },
      { q: 'Løs: $2x = 8$',
        opts: ['$x = 16$','$x = 6$','$x = 4$','$x = 10$'], ans: 2 },
      { q: '$(a + b)^2 = ?$',
        opts: ['$a^2 + b^2$','$a^2 + 2ab + b^2$','$a^2 - b^2$','$2(a+b)$'], ans: 1 }
    ],
    // S5: CAS — item 0
    '5-0': [
      { q: 'Hvad betyder CAS?',
        opts: ['Computer Algebra System','Calculator Arithmetic Software','Computer Arithmetic Standard','Calculation And Statistics'], ans: 0 },
      { q: 'Hvad kan CAS bruges til?',
        opts: ['Kun tegning af grafer','Kun numerisk beregning','Symbolsk og numerisk beregning samt grafisk fremstilling','Kun statistik'], ans: 2 },
      { q: 'Hvilken kommando bruges til at løse ligninger i de fleste CAS-systemer?',
        opts: ['integral()','solve()','plot()','diff()'], ans: 1 }
    ],
    // S6: BRØKREGNING item 1 — hvad er en brøk
    // S6: BRØKREGNING item 1 — forkort og forlæng (nemmat.dk quiz)
    '6-1': [
      { q: 'Forkort mest muligt $\\frac{24}{36}$',
        opts: ['$\\frac{2}{3}$','$\\frac{4}{5}$','$\\frac{3}{4}$','$\\frac{5}{9}$'], ans: 0 },
      { q: 'Forlæng brøken så nævneren bliver 20: $\\frac{3}{5}$',
        opts: ['$\\frac{3}{20}$','$\\frac{6}{20}$','$\\frac{12}{20}$','$\\frac{23}{20}$'], ans: 2 },
      { q: 'Forkort mest muligt $\\frac{10}{45}$',
        opts: ['$\\frac{5}{9}$','$\\frac{2}{9}$','$\\frac{2}{45}$','$\\frac{10}{9}$'], ans: 1 },
      { q: 'Forlæng brøken så nævneren bliver 28: $\\frac{2}{7}$',
        opts: ['$\\frac{2}{7}$','$\\frac{12}{28}$','$\\frac{2}{28}$','$\\frac{8}{28}$'], ans: 3 },
      { q: 'Forkort mest muligt $\\frac{20}{100}$',
        opts: ['$\\frac{1}{10}$','$\\frac{1}{5}$','$\\frac{2}{10}$','$\\frac{1}{4}$'], ans: 1 }
    ],
    // S6: BRØKREGNING item 3 — addition og subtraktion (nemmat.dk quiz)
    '6-3': [
      { q: 'Reducer mest muligt $\\frac{3}{5} + \\frac{2}{10}$',
        opts: ['$\\frac{4}{5}$','$\\frac{5}{15}$','$\\frac{3}{5}$','$\\frac{7}{10}$'], ans: 0 },
      { q: 'Reducer mest muligt $\\frac{5}{4} - \\frac{3}{5}$',
        opts: ['$\\frac{4}{5}$','$\\frac{2}{-1}$','$\\frac{13}{20}$','$\\frac{7}{9}$'], ans: 2 },
      { q: 'Reducer mest muligt $\\frac{2}{7} + \\frac{4}{3}$',
        opts: ['$\\frac{6}{10}$','$\\frac{34}{21}$','$\\frac{6}{21}$','$\\frac{5}{10}$'], ans: 1 },
      { q: 'Reducer mest muligt $\\frac{1}{2} - \\frac{3}{4}$',
        opts: ['$-\\frac{1}{4}$','$\\frac{2}{5}$','$\\frac{3}{2}$','$\\frac{3}{4}$'], ans: 0 },
      { q: 'Reducer mest muligt $\\frac{1}{2} + \\frac{4}{9}$',
        opts: ['$\\frac{6}{15}$','$\\frac{3}{18}$','$\\frac{7}{15}$','$\\frac{17}{18}$'], ans: 3 }
    ],
    // S6: BRØKREGNING item 5 — multiplikation og division (nemmat.dk quiz)
    '6-5': [
      { q: 'Reducer mest muligt $\\frac{3}{4} \\cdot \\frac{4}{5}$',
        opts: ['$\\frac{7}{6}$','$\\frac{7}{9}$','$\\frac{7}{5}$','$\\frac{3}{5}$'], ans: 3 },
      { q: 'Reducer mest muligt $\\frac{1}{4} \\div \\frac{4}{5}$',
        opts: ['$\\frac{7}{5}$','$\\frac{5}{16}$','$\\frac{4}{20}$','$\\frac{17}{16}$'], ans: 1 },
      { q: 'Reducer mest muligt $\\frac{2}{5} \\cdot \\frac{7}{9}$',
        opts: ['$\\frac{2}{45}$','$\\frac{9}{5}$','$\\frac{1}{14}$','$\\frac{14}{45}$'], ans: 3 },
      { q: 'Reducer mest muligt $\\frac{6}{5} \\div \\frac{7}{2}$',
        opts: ['$\\frac{3}{2}$','$\\frac{12}{35}$','$\\frac{13}{7}$','$\\frac{6}{15}$'], ans: 1 },
      { q: 'Reducer mest muligt $\\frac{5}{6} \\cdot \\frac{3}{2}$',
        opts: ['$\\frac{3}{4}$','$\\frac{7}{8}$','$\\frac{5}{4}$','$\\frac{7}{3}$'], ans: 2 }
    ],
    // S6: BRØKREGNING item 7 — brøk med heltal (nemmat.dk quiz)
    '6-7': [
      { q: 'Reducer mest muligt $2 \\cdot \\frac{4}{3}$',
        opts: ['$\\frac{8}{3}$','$\\frac{10}{3}$','$\\frac{5}{3}$','$\\frac{2}{3}$'], ans: 0 },
      { q: 'Reducer mest muligt $\\frac{4}{5} \\cdot (-2)$',
        opts: ['$\\frac{4}{-1}$','$\\frac{8}{-2}$','$-\\frac{8}{5}$','$\\frac{4}{-2}$'], ans: 2 },
      { q: 'Reducer mest muligt $3 + \\frac{5}{2}$',
        opts: ['$\\frac{9}{2}$','$\\frac{11}{2}$','$\\frac{7}{2}$','$\\frac{5}{2}$'], ans: 1 },
      { q: 'Reducer mest muligt $\\frac{1}{4} - 6$',
        opts: ['$\\frac{19}{4}$','$\\frac{23}{4}$','$-\\frac{19}{4}$','$\\frac{23}{-4}$'], ans: 3 },
      { q: 'Reducer mest muligt $2 \\div \\frac{4}{5}$',
        opts: ['$\\frac{5}{2}$','$\\frac{10}{4}$','$\\frac{6}{5}$','$\\frac{6}{2}$'], ans: 0 }
    ],
    // S7: EKSAMENSØVELSE 2 — item 0 (nemmat.dk quiz)
    '7-0': [
      { q: 'Reducer $5 \\cdot (3x - 2)$',
        opts: ['$3x - 10$','$15x - 2$','$15x - 10$','$8x - 2$'], ans: 2 },
      { q: 'Beregn $6^2 - 4 \\cdot 5$',
        opts: ['$16$','$20$','$8$','$13$'], ans: 0 },
      { q: 'Reducer mest muligt udtrykket $7x + 3 \\cdot (3 - 2x)$',
        opts: ['$6x + 9$','$7x + 9$','$3x + 3$','$x + 9$'], ans: 3 },
      { q: 'Beregn $\\sqrt{16} + 2 \\cdot 5$',
        opts: ['$10$','$14$','$8$','$4$'], ans: 1 },
      { q: 'Reducer udtrykket $-3(-2x + 3)$',
        opts: ['$3x + 9$','$-6x + 9$','$6x - 9$','$6x + 3$'], ans: 2 }
    ]
  },
  'tal-og-algebra-b-niveau': null, // sættes nedenfor

  // ────────────────────────────────────────────────────
  // LIGNINGER
  // ────────────────────────────────────────────────────
  'ligninger-1-aar-hf-2': {
    // S0: Lineære ligninger — item 1
    '0-1': [
      { q: 'Løs: $2x + 4 = 10$',
        opts: ['$x = 2$','$x = 3$','$x = 4$','$x = 7$'], ans: 1 },
      { q: 'Løs: $5x - 3 = 12$',
        opts: ['$x = 1$','$x = 2$','$x = 3$','$x = 9$'], ans: 2 },
      { q: 'Løs: $\\frac{x}{3} = 4$',
        opts: ['$x = 7$','$x = 12$','$x = \\frac{4}{3}$','$x = 1$'], ans: 1 },
      { q: 'Løs: $4x = 20$',
        opts: ['$x = 5$','$x = 16$','$x = 80$','$x = 24$'], ans: 0 },
      { q: 'Hvad gør man for at isolere x i $3x = 12$?',
        opts: ['Subtraher 3','Divider med 3','Multipliker med 3','Adder 3'], ans: 1 }
    ],
    // S1: Ligninger med parenteser — item 1
    '1-1': [
      { q: 'Løs: $2(x + 3) = 10$',
        opts: ['$x = 2$','$x = 3$','$x = 8$','$x = 5$'], ans: 0 },
      { q: 'Løs: $3(2x - 1) = 15$',
        opts: ['$x = 2$','$x = 3$','$x = 6$','$x = 5$'], ans: 1 },
      { q: 'Løs: $-(x + 4) = 6$',
        opts: ['$x = -10$','$x = -2$','$x = 10$','$x = 2$'], ans: 0 },
      { q: 'Forenkl: $2(x + 1) + 3(x - 2)$',
        opts: ['$5x - 4$','$5x + 4$','$5x - 8$','$6x - 4$'], ans: 0 },
      { q: 'Løs: $4(x - 1) = 2(x + 3)$',
        opts: ['$x = 1$','$x = 3$','$x = 5$','$x = 7$'], ans: 2 }
    ],
    // S2: Ligningssystemer — item 2
    '2-2': [
      { q: 'Løs: $x + y = 5$ og $x - y = 1$',
        opts: ['$x=3,\\; y=2$','$x=2,\\; y=3$','$x=4,\\; y=1$','$x=1,\\; y=4$'], ans: 0 },
      { q: 'Hvad er substitutionsmetoden?',
        opts: ['Multiplicér ligningerne','Isolér én ubekendt og indsæt i den anden','Addér ligningerne','Subtraher ligningerne'], ans: 1 },
      { q: 'Løs: $2x + y = 7$ og $x + y = 4$',
        opts: ['$x=3,\\; y=1$','$x=1,\\; y=3$','$x=2,\\; y=3$','$x=4,\\; y=0$'], ans: 0 },
      { q: 'To ligninger med to ubekendte har som regel:',
        opts: ['Ingen løsning','Uendeligt mange løsninger','Præcist én løsning','To løsninger'], ans: 2 },
      { q: 'Løs: $y = 2x$ og $x + y = 6$',
        opts: ['$x=2,\\; y=4$','$x=3,\\; y=3$','$x=1,\\; y=5$','$x=4,\\; y=2$'], ans: 0 }
    ],
    // S3: Formler — item 1
    '3-1': [
      { q: 'Isoler $r$ i $A = \\pi r^2$:',
        opts: ['$r = A/\\pi$','$r = \\sqrt{A/\\pi}$','$r = A^2/\\pi$','$r = A/(2\\pi)$'], ans: 1 },
      { q: 'Isoler $b$ i $a = \\frac{b+c}{2}$:',
        opts: ['$b = 2a + c$','$b = 2a - c$','$b = a/2 - c$','$b = (a-c)/2$'], ans: 1 },
      { q: 'Isoler $v$ i $s = v \\cdot t$:',
        opts: ['$v = s + t$','$v = s - t$','$v = s/t$','$v = s \\cdot t$'], ans: 2 },
      { q: 'Isoler $h$ i $V = \\pi r^2 h$:',
        opts: ['$h = V - \\pi r^2$','$h = V \\cdot \\pi r^2$','$h = \\pi r^2/V$','$h = V/(\\pi r^2)$'], ans: 3 },
      { q: 'Isoler $x$ i $y = ax + b$:',
        opts: ['$x = y - b - a$','$x = ay - b$','$x = (y-b)/a$','$x = y/(a+b)$'], ans: 2 }
    ],
    // S4: Eksamen — item 0
    '4-0': [
      { q: 'Løs: $3x + 7 = 22$',
        opts: ['$x = 4$','$x = 5$','$x = 6$','$x = 29/3$'], ans: 1 },
      { q: 'Løs: $\\frac{x}{4} + 2 = 5$',
        opts: ['$x = 28$','$x = 12$','$x = 3$','$x = 7/4$'], ans: 1 },
      { q: 'Løs systemet: $2x + 3y = 12$ og $x = y + 1$',
        opts: ['$x=3,\\; y=2$','$x=2,\\; y=3$','$x=4,\\; y=1$','$x=5,\\; y=0$'], ans: 0 },
      { q: 'Isoler $m$ i $F = m \\cdot a$:',
        opts: ['$m = F - a$','$m = F + a$','$m = F/a$','$m = F \\cdot a$'], ans: 2 },
      { q: 'Løs: $5(x - 2) = 3x + 4$',
        opts: ['$x = 3$','$x = 5$','$x = 7$','$x = 9$'], ans: 2 }
    ],
    // S2: Multiplikation og Division — item 1 (nemmat.dk)
    '2-1': [
      { q: 'Løs ligningen: $2x = 4$', opts: ['$x=4$','$x=12$','$x=3$','$x=2$'], ans: 3 },
      { q: 'Løs ligningen: $3x = -9$', opts: ['$x=2$','$x=3$','$x=5$','$x=-3$'], ans: 3 },
      { q: 'Løs ligningen: $5 \\cdot x = -25$', opts: ['$x=-5$','$x=20$','$x=5$','$x=-3$'], ans: 0 },
      { q: 'Løs ligningen: $18 = 3x$', opts: ['$x=5$','$x=-15$','$x=15$','$x=6$'], ans: 3 },
      { q: 'Løs ligningen: $4x = 24$', opts: ['$x=-6$','$x=20$','$x=6$','$x=13$'], ans: 2 },
      { q: 'Løs ligningen: $\\frac{x}{2} = 10$', opts: ['$x=5$','$x=8$','$x=20$','$x=-8$'], ans: 2 },
      { q: 'Løs ligningen: $\\frac{6}{x} = 3$', opts: ['$x=9$','$x=2$','$x=5$','$x=-6$'], ans: 1 },
      { q: 'Løs ligningen: $12 = \\frac{x}{3}$', opts: ['$x=-10$','$x=15$','$x=9$','$x=36$'], ans: 3 },
      { q: 'Løs ligningen: $2 = \\frac{10}{x}$', opts: ['$x=-5$','$x=4$','$x=-6$','$x=5$'], ans: 3 },
      { q: 'Løs ligningen: $\\frac{x}{5} = 3$', opts: ['$x=3$','$x=12$','$x=15$','$x=-8$'], ans: 2 }
    ],
    // S4: Ubekendt på begge sider — item 1 (nemmat.dk)
    '4-1': [
      { q: 'Løs ligning: $5x + 6 = 3x + 12$', opts: ['$x=7$','$x=12$','$x=3$','$x=-11$'], ans: 2 },
      { q: 'Løs ligning: $3x + 5 = 2x + 10$', opts: ['$x=3$','$x=12$','$x=5$','$x=15$'], ans: 2 },
      { q: 'Løs ligning: $-4x + 8 = 2x + 20$', opts: ['$x=9$','$x=11$','$x=-2$','$x=8$'], ans: 2 },
      { q: 'Løs ligning: $4x - 9 = -2x + 3$', opts: ['$x=2$','$x=-2$','$x=0$','$x=4$'], ans: 0 },
      { q: 'Løs ligning: $-3x - 9 = 4x + 12$', opts: ['$x=3$','$x=2$','$x=-3$','$x=4$'], ans: 2 }
    ],
    // S5: Parenteser i ligninger — item 1 (nemmat.dk)
    '5-1': [
      { q: 'Løs ligningen: $5(x - 2) = 20$', opts: ['$x=7$','$x=12$','$x=3$','$x=6$'], ans: 3 },
      { q: 'Løs ligningen: $3(x + 4) = 18$', opts: ['$x=2$','$x=-3$','$x=0$','$x=-2$'], ans: 0 },
      { q: 'Løs ligningen: $2 \\cdot (2x + 3) = 18$', opts: ['$x=9$','$x=11$','$x=3$','$x=4$'], ans: 2 },
      { q: 'Løs ligningen: $4(x + 1) - 3 = 17$', opts: ['$x=4$','$x=3$','$x=2$','$x=-5$'], ans: 0 },
      { q: 'Løs ligningen: $6(x - 5) + 4 = 10$', opts: ['$x=-6$','$x=5$','$x=8$','$x=6$'], ans: 3 }
    ],
    // S6: Potens og Rødder — item 1 (nemmat.dk)
    '6-1': [
      { q: 'Løs ligningen: $x^2 = 4$', opts: ['$x=2$','$x=-3$','$x=3$','$x=-2$'], ans: 0 },
      { q: 'Løs ligningen: $x^5 = 1$', opts: ['$x=-5$','$x=5$','$x=-1$','$x=1$'], ans: 3 },
      { q: 'Løs ligningen: $2x^2 = 18$', opts: ['$x=-5$','$x=-3$','$x=5$','$x=3$'], ans: 3 },
      { q: 'Løs ligningen: $\\sqrt{x} = 9$', opts: ['$x=6$','$x=3$','$x=9$','$x=81$'], ans: 3 },
      { q: 'Løs ligningen: $\\sqrt{x} + 5 = 9$', opts: ['$x=15$','$x=36$','$x=16$','$x=14$'], ans: 2 }
    ],
    // S7: Ligning i tekst — item 1 (nemmat.dk)
    '7-1': [
      { q: 'Forklar 1. trin i ligningløsning $8 - 4x = 32 - 8x$',
        opts: ['Læg $8x$ til på begge sider','Træk $16x$ fra på begge sider','Læg $5x$ til på begge sider','Læg $3x$ til på begge sider'], ans: 0 },
      { q: 'Forklar 2. trin: $8x + 8 - 4x = 32$',
        opts: ['Lægger 8 til på begge sider og reducer','Trækker $8x$ fra på begge sider og reducer','Trækker 8 fra på begge sider og reducer','Trækker 32 fra på begge sider og reducer'], ans: 2 },
      { q: 'Forklar 3. trin: $4x = 24$',
        opts: ['Ganger med 24 på begge sider','Ganger med 4 på begge sider','Divider med 24 på begge sider','Divider med 4 på begge sider'], ans: 3 },
      { q: 'Forklar 4. trin: $x = 6$',
        opts: ['Reducere og får isoleret $x$ og resultatet','Svaret er forkert','Plussede med 6 på begge sider','Ligningen har ingen løsning'], ans: 0 }
    ],
    // S8: Logaritmiske ligninger — item 1 (nemmat.dk)
    '8-1': [
      { q: 'Beregn $\\log_{10}(1000)$', opts: ['$7$','$12$','$3$','$2$'], ans: 2 },
      { q: 'Beregn $\\log_{10}(10)$', opts: ['$1$','$0$','$-1$','$2$'], ans: 0 },
      { q: 'Beregn $\\log_{10}(0{,}01)$', opts: ['$9$','$-2$','$3$','$-1$'], ans: 1 },
      { q: 'Løs ligningen: $10^x = 1000$', opts: ['$x=2$','$x=3$','$x=-1$','$x=-3$'], ans: 1 },
      { q: 'Løs ligningen: $10^{x+1} = 100$', opts: ['$x=0$','$x=2$','$x=-2$','$x=1$'], ans: 3 }
    ],
    // S9: Formler (tekst) — item 2 (nemmat.dk)
    '9-2': [
      { q: 'Arealet $A = \\frac{1}{2} \\cdot h \\cdot g$. Find $A$ når $h=4$ og $g=12$.',
        opts: ['$A=16$','$A=48$','$A=12$','$A=24$'], ans: 3 },
      { q: 'Find $h$ i $A = \\frac{1}{2} \\cdot h \\cdot g$ når $A=50$ og $g=5$.',
        opts: ['$h=25$','$h=20$','$h=30$','$h=40$'], ans: 1 }
    ],
    // S10: Eksamensøvelse — item 0 (nemmat.dk)
    '10-0': [
      { q: 'Løs: $2x - 5 = 15$', opts: ['$x=9$','$x=5$','$x=10$','$x=12$'], ans: 2 },
      { q: 'Løs: $\\frac{x}{3} + 4 = 9$', opts: ['$x=10$','$x=25$','$x=6$','$x=15$'], ans: 3 },
      { q: 'Løs: $5x - 9 = 3x + 5$', opts: ['$x=0$','$x=5$','$x=7$','$x=8$'], ans: 2 },
      { q: 'Løs: $3 \\cdot (2x - 1) = 4x + 5$', opts: ['$x=4$','$x=3$','$x=1$','$x=5$'], ans: 0 },
      { q: 'Bestem $S$ når $F=15$ i $S = \\frac{4 \\cdot F}{5}$',
        opts: ['$S=8$','$S=12$','$S=10$','$S=6$'], ans: 1 },
      { q: 'Emma maler 200 m stakit med 8 m/time. Formel for rest $y$ efter $x$ timer:',
        opts: ['$y=200+10x$','$y=200+8x$','$y=-8x+300$','$y=200-8x$'], ans: 3 },
      { q: 'Hvad er 1. og 2. trin for at løse $3x - 4 = 11$?',
        opts: ['Gang med 3, læg 4 til','Divider med 3, læg 4 til','Læg 4 til, divider med 3','Træk 4 fra, divider med 3'], ans: 2 },
      { q: '$V = \\pi r^2 h$ med $r=1{,}2$ og $h=1{,}5$. Hvad er $V$?',
        opts: ['$V=8\\,\\text{m}^3$','$V=7{,}03\\,\\text{m}^3$','$V=7{,}79\\,\\text{m}^3$','$V=6{,}79\\,\\text{m}^3$'], ans: 3 },
      { q: '$V = \\pi r^2 h = 8$, $r=1{,}2$. Bestem $h$.',
        opts: ['$h=1{,}88\\,\\text{m}$','$h=1{,}77\\,\\text{m}$','$h=3{,}05\\,\\text{m}$','$h=4{,}5\\,\\text{m}$'], ans: 1 },
      { q: '$W = L \\cdot B \\cdot H \\cdot 2400$ med $L=2{,}5$, $B=1{,}2$, $H=0{,}8$. Kan fundamentet bruges (max 5000 kg)?',
        opts: ['Ja, 4900 kg < 5000 kg','Ja, præcis 5000 kg','Nej, 5550 kg > 5000 kg','Nej, 5760 kg > 5000 kg'], ans: 3 }
    ]
  },

  // ────────────────────────────────────────────────────
  // PROCENT OG RENTE
  // ────────────────────────────────────────────────────
  'procent-og-rentesregning': {
    '0-1': [
      { q: 'Hvad er 25% af 200?',
        opts: ['25','40','50','75'], ans: 2 },
      { q: 'Hvad er 120 som procent af 150?',
        opts: ['70%','75%','80%','85%'], ans: 2 },
      { q: 'Hvad er 15% som decimaltal?',
        opts: ['0,015','0,15','1,5','15'], ans: 1 },
      { q: 'En vare koster 400 kr. Du får 20% rabat. Hvad betaler du?',
        opts: ['320 kr','360 kr','380 kr','280 kr'], ans: 0 },
      { q: '30 er hvad % af 120?',
        opts: ['20%','25%','30%','40%'], ans: 1 }
    ],
    '1-1': [
      { q: 'En pris stiger fra 200 til 250 kr. Hvad er den procentvise stigning?',
        opts: ['20%','25%','50%','30%'], ans: 1 },
      { q: 'Fremskrivningsfaktoren ved 15% stigning er:',
        opts: ['0,85','1,15','0,15','1,5'], ans: 1 },
      { q: 'En pris nedsættes med 30%. Hvad er fremskrivningsfaktoren?',
        opts: ['0,30','1,30','0,70','0,03'], ans: 2 },
      { q: 'En pris stiger med 10% og derefter 10%. Total stigning?',
        opts: ['20%','21%','22%','110%'], ans: 1 },
      { q: 'En temperatur falder fra 20°C til 15°C. Procentvis fald?',
        opts: ['20%','25%','30%','5%'], ans: 1 }
    ],
    '2-1': [
      { q: 'Formlen for renters rente er:',
        opts: ['$K_n = K_0 + n \\cdot r$','$K_n = K_0 \\cdot r^n$','$K_n = K_0 \\cdot n \\cdot r$','$K_n = K_0^n$'], ans: 1 },
      { q: '5000 kr til 4% p.a. Hvad er beløbet efter 3 år?',
        opts: ['5600 kr','5624 kr','5200 kr','5624,32 kr'], ans: 3 },
      { q: 'Hvad er halveringstid?',
        opts: ['Den tid det tager en størrelse at blive halveret','Halvdelen af en periode','Den tid en størrelse fordobles','Renten halveret'], ans: 0 },
      { q: 'En bakteriekultur vokser med 20% pr. time fra 1000. Hvad er der efter 2 timer?',
        opts: ['1200','1400','1440','2000'], ans: 2 },
      { q: 'Nutidsværdi: Hvad er nutidsværdien af 1000 kr om 3 år ved 5% rente?',
        opts: ['≈ 864 kr','900 kr','800 kr','1150 kr'], ans: 0 }
    ],
    '3-0': [
      { q: 'En vare koster 350 kr ex. moms. Med 25% moms, hvad koster den?',
        opts: ['400 kr','425 kr','437,50 kr','440 kr'], ans: 2 },
      { q: 'Procentvis stigning fra 80 til 100:',
        opts: ['20%','25%','30%','80%'], ans: 1 },
      { q: '20.000 kr til 8% sammensat rente i 10 år ≈',
        opts: ['36.000 kr','40.000 kr','43.178 kr','45.000 kr'], ans: 2 },
      { q: 'Halveringstid for en substans der aftager med 10% pr. år ≈',
        opts: ['5 år','6,6 år','10 år','2 år'], ans: 1 },
      { q: 'En investering vokser fra 5000 til 6655 på 3 år. Hvad er den årlige vækstrate?',
        opts: ['5%','8%','10%','15%'], ans: 2 }
    ],
    // S0: PROCENTBEGREBET item 2 — omregning (nemmat.dk)
    '0-2': [
      { q: 'Omregn 25% til decimaltal',
        opts: ['$0{,}30$','$0{,}25$','$0{,}45$','$0{,}2$'], ans: 1 },
      { q: 'Omregn 75% til decimaltal',
        opts: ['$0{,}75$','$\\frac{3}{4}$','$0{,}7$','$\\frac{75}{100}$'], ans: 0 },
      { q: 'Omregn 12,5% til et decimaltal',
        opts: ['$0{,}12$','$0{,}2$','$1{,}25$','$0{,}125$'], ans: 3 },
      { q: 'Omregn 20% til en brøk (simpleste form)',
        opts: ['$\\frac{3}{4}$','$\\frac{1}{5}$','$0{,}2$','$\\frac{20}{100}$'], ans: 1 },
      { q: 'Omregn 50% til en brøk (simpleste form)',
        opts: ['$\\frac{3}{6}$','$\\frac{1}{2}$','$\\frac{5}{10}$','$\\frac{50}{100}$'], ans: 1 },
      { q: 'Omregn 0,75 til procent',
        opts: ['$73\\%$','$7\\%$','$75\\%$','$80\\%$'], ans: 2 },
      { q: 'Omregn $\\frac{1}{5}$ til procent',
        opts: ['$25\\%$','$20\\%$','$10\\%$','$30\\%$'], ans: 1 },
      { q: 'Omregn 1,25 til procent',
        opts: ['$0{,}125\\%$','$1{,}25\\%$','$12{,}5\\%$','$125\\%$'], ans: 3 },
      { q: 'Omregn $\\frac{1}{10}$ til procent',
        opts: ['$0{,}1\\%$','$15\\%$','$10\\%$','$1\\%$'], ans: 2 },
      { q: 'Omregn 2 til procent',
        opts: ['$200\\%$','$159\\%$','$100\\%$','$160\\%$'], ans: 0 }
    ],
    // S1: TILVÆKST item 3 (FIB q1 skipped) (nemmat.dk)
    '1-3': [
      { q: 'Et træ var 150 cm højt. I år er det 165 cm. Hvad er den absolutte tilvækst?',
        opts: ['$2$','$10$','$5$','$15$'], ans: 3 },
      { q: 'En medarbejder: løn stiger fra 25.000 til 26.250 kr. Hvad er den relative tilvækst?',
        opts: ['$6\\%$','$5\\%$','$4\\%$','$3\\%$'], ans: 1 },
      { q: 'En mobiltelefon: pris falder fra 10.000 til 8.500 kr. Hvad er den absolutte tilvækst?',
        opts: ['$-1500$','$-1200$','$-1100$','$-1000$'], ans: 0 },
      { q: 'En løbekonkurrence: 400 deltagere sidste år, 320 i år. Hvad er den relative tilvækst?',
        opts: ['$-5\\%$','$10\\%$','$-10\\%$','$-20\\%$'], ans: 3 }
    ],
    // S2: FREMSKRIVNINGSFAKTOR item 3 (nemmat.dk)
    '2-3': [
      { q: 'En biograf sætter priser op med 8%. En billet kostede 120 kr. Beregn den nye pris med fremskrivningsfaktor.',
        opts: ['$129{,}60\\text{ kr}$','$130\\text{ kr}$','$112\\text{ kr}$','$128{,}00\\text{ kr}$'], ans: 0 },
      { q: 'Du får 5% lønforhøjelse. Din løn var 25.000 kr. Beregn din nye løn.',
        opts: ['$25.450\\text{ kr}$','$27.450\\text{ kr}$','$26.250\\text{ kr}$','$28.540\\text{ kr}$'], ans: 2 },
      { q: 'En mobiltelefon falder 12% i pris. Prisen var 6.000 kr. Beregn ny pris med fremskrivningsfaktor.',
        opts: ['$6.000\\text{ kr}$','$5.400\\text{ kr}$','$5.280\\text{ kr}$','$5.540\\text{ kr}$'], ans: 2 },
      { q: 'Du har 10.000 kr. med 2% rente. Beregn beløbet efter ét år med fremskrivningsfaktor.',
        opts: ['$10.350\\text{ kr}$','$11.450\\text{ kr}$','$10.200\\text{ kr}$','$10.900\\text{ kr}$'], ans: 2 },
      { q: 'En liter mælk koster 12 kr. Priser stiger 3% om året. Beregn prisen efter ét år.',
        opts: ['$11{,}95\\text{ kr}$','$12{,}36\\text{ kr}$','$13\\text{ kr}$','$12{,}50\\text{ kr}$'], ans: 1 }
    ],
    // S3: SLUTKAPITAL item 2 (nemmat.dk)
    '3-2': [
      { q: '10.000 kr. indsættes til 2,5% p.a. Hvad er beløbet efter 5 år?',
        opts: ['$10.500{,}38\\text{ kr}$','$11.000\\text{ kr}$','$11.314{,}08\\text{ kr}$','$12.000\\text{ kr}$'], ans: 2 },
      { q: 'En aktie vokser med 12% hvert år i 4 år. Startkursen var 780. Hvad er kursen efter 4 år?',
        opts: ['$1227{,}35$','$1225{,}54$','$1350{,}39$','$1425{,}45$'], ans: 0 },
      { q: 'Fridas forældre sætter 40.000 kr. ind til 3,3% p.a. Frida hæver dem som 18-årig. Hvor mange penge?',
        opts: ['$89.563{,}25\\text{ kr}$','$71.757{,}25\\text{ kr}$','$72.589{,}60\\text{ kr}$','$75.000\\text{ kr}$'], ans: 1 },
      { q: 'Niklas har 63.385 kr. til 2,9% p.a. i 7 år. Hvad er beløbet?',
        opts: ['$78.956{,}30\\text{ kr}$','$75.000\\text{ kr}$','$76.000\\text{ kr}$','$77.427{,}30\\text{ kr}$'], ans: 3 },
      { q: 'Adam indsætter 35.000 kr. til 5% i 3 år, derefter 6% til han fylder 30 (fra 18). Hvad hæver han?',
        opts: ['$71.456{,}30\\text{ kr}$','$70.350{,}50\\text{ kr}$','$68.452{,}41\\text{ kr}$','$71.328{,}30\\text{ kr}$'], ans: 2 }
    ],
    // S3: STARTBELØB item 4 (nemmat.dk)
    '3-4': [
      { q: 'Lukas har 25.000 kr. efter 3 år til 2% p.a. Hvad var startbeløbet?',
        opts: ['$22.534{,}04\\text{ kr}$','$23.000{,}05\\text{ kr}$','$23.558{,}06\\text{ kr}$','$25.000\\text{ kr}$'], ans: 2 },
      { q: 'Sara: 5.600 kr. efter 4 år til 3,5% p.a. Hvad satte forældrene ind?',
        opts: ['$4.800{,}05\\text{ kr}$','$4.880{,}08\\text{ kr}$','$5.200{,}50\\text{ kr}$','$5.400{,}25\\text{ kr}$'], ans: 1 },
      { q: 'Simon: 90.000 kr. efter 6 år til 4% p.a. Hvad var startbeløbet?',
        opts: ['$70.837{,}35\\text{ kr}$','$71.128{,}31\\text{ kr}$','$72.837{,}45\\text{ kr}$','$73.837{,}50\\text{ kr}$'], ans: 1 },
      { q: 'Maria: 12.000 kr. efter 2 år til 1,8% p.a. Hvad var det oprindelige beløb?',
        opts: ['$11.579{,}39\\text{ kr}$','$12.200{,}55\\text{ kr}$','$12.500{,}45\\text{ kr}$','$12.700{,}38\\text{ kr}$'], ans: 0 },
      { q: 'Jonas: 7.350 kr. efter 5 år til 2,75% p.a. Hvad var startbeløbet?',
        opts: ['$6.300{,}86\\text{ kr}$','$6.000{,}05\\text{ kr}$','$6.600{,}49\\text{ kr}$','$6.417{,}68\\text{ kr}$'], ans: 3 }
    ],
    // S3: RENTEBESTEMMELSE item 6 (nemmat.dk)
    '3-6': [
      { q: '14.000 kr. vokser til 25.400 kr. på 9 år. Hvad er den årlige rente?',
        opts: ['$6{,}84\\%$','$6{,}54\\%$','$9{,}34\\%$','$6{,}10\\%$'], ans: 0 },
      { q: 'Et hus stiger fra 850.000 til 2.200.000 kr. på 7 år. Hvad er den årlige stigning?',
        opts: ['$14{,}04\\%$','$16{,}25\\%$','$13{,}65\\%$','$14{,}55\\%$'], ans: 3 },
      { q: 'Nanna: 3.000 kr. vokser til 8.000 kr. på 5 år. Hvad er den årlige rente?',
        opts: ['$21{,}67\\%$','$21{,}56\\%$','$22{,}79\\%$','$20{,}35\\%$'], ans: 0 },
      { q: 'David: 10.000 kr. skal fordobles på 12 år. Hvilken rente kræves?',
        opts: ['$9{,}65\\%$','$8{,}30\\%$','$5{,}95\\%$','$5{,}54\\%$'], ans: 2 },
      { q: '15.000 kr. vokser til 18.976,95 kr. på 5 år. Hvad er den årlige rente?',
        opts: ['$4{,}82\\%$','$4{,}24\\%$','$4{,}00\\%$','$4{,}83\\%$'], ans: 0 }
    ],
    // S3: ANTAL TERMINER item 8 (nemmat.dk)
    '3-8': [
      { q: '10.000 kr. til 5% p.a. Hvor mange år skal der gå, før beløbet er 12.155 kr.?',
        opts: ['$2$','$3$','$4$','$5$'], ans: 2 },
      { q: '5.000 kr. til 6% p.a. Hvor mange år går der, før pengene er fordoblet?',
        opts: ['$11$','$12$','$13$','$15$'], ans: 1 },
      { q: '15.000 kr. til 3% p.a. Hvor mange terminer inden du når 18.000 kr.?',
        opts: ['$5$','$6$','$7$','$8$'], ans: 2 },
      { q: '20.000 kr. til 4% p.a. Efter hvor mange år er beløbet ca. 24.320 kr.?',
        opts: ['$3$','$4$','$5$','$6$'], ans: 2 },
      { q: '150.000 kr. til 2,5% p.a. Hvor mange terminer til 200.000 kr.?',
        opts: ['$10$','$11$','$12$','$13$'], ans: 2 }
    ],
    // S3: VÆKSTRATE SAMMENLIGNING item 10 (nemmat.dk)
    '3-10': [
      { q: 'Du skal vælge et mobilabonnement. Abonnement A: 2,5% pr. måned. Abonnement B: 28% om året. Hvilket er billigst på årsbasis?',
        opts: ['De koster det samme','Abonnement B','Abonnement A','Det kan ikke beregnes'], ans: 1 },
      { q: 'Emma overvejer to lån. Lån A: 2,5% pr. måned. Lån B: 28% om året. Hvilket lån er billigst?',
        opts: ['Lån A, hun sparer 0 kr.','Lån B, hun sparer ca. 2,65% rente','Lån A, hun sparer ca. 2%','De koster det samme'], ans: 1 },
      { q: 'Du indsætter 5.000 kr. Konto A giver 12% effektiv rente, Konto B 12% nominel rente. Hvad giver mest efter 1 år?',
        opts: ['Konto A: 5.634,13 kr.','Konto B: 5.600,00 kr.','Konto A og B giver det samme','Konto B: 5.634,13 kr.'], ans: 0 },
      { q: 'Butik A tilbyder 2,5% pr. måned. Butik B tilbyder 28% om året. Hvilken er billigst?',
        opts: ['Butik A, fordi 2,5% pr. måned er lavere','Butik B, fordi 28% < effektiv rente 34,49% fra Butik A','De koster det samme','Det afhænger af beløbet'], ans: 1 },
      { q: 'Udbyder A: 3% pr. måned. Udbyder B: 42% om året. Hvilken streamingtjeneste er billigst?',
        opts: ['Udbyder A, fordi 3% pr. måned er lavere','Udbyder B, fordi årlig rente < effektiv rente 42,58% fra Udbyder A','De koster det samme','Udbyder A, fordi samlet rente ikke overstiger 36%'], ans: 1 }
    ],
    // S4: EKSAMENSØVELSER item 0 (FIB q9 skipped) (nemmat.dk)
    '4-0': [
      { q: 'Emma indsætter 7.500 kr. til 2,5% p.a. Beregn hendes opsparing efter 6 år.',
        opts: ['ca. 8.700 kr.','ca. 8.698 kr.','ca. 8.800 kr.','ca. 9.000 kr.'], ans: 1 },
      { q: 'Emma: 7.500 kr. til 2,5% p.a. Hvor mange år inden opsparingen når 10.000 kr.?',
        opts: ['ca. 11 år','ca. 12 år','ca. 13 år','ca. 14 år'], ans: 1 },
      { q: 'Caroline indsætter 100.000 kr. til 5% p.a. Hvad er opsparingen værd efter 10 år?',
        opts: ['$139.899\\text{ kr.}$','$150.000\\text{ kr.}$','$180.000\\text{ kr.}$','$162.889\\text{ kr.}$'], ans: 3 },
      { q: 'Caroline: 100.000 kr. til 5% p.a. Hvor mange år til beløbet er fordoblet?',
        opts: ['20 år','13,5 år','14,21 år','16 år'], ans: 2 },
      { q: '15.000 kr. vokser til 17.349 kr. på 7 år. Bestem den faste årlige rente.',
        opts: ['$10\\%$','$2\\%$','$6\\%$','$7\\%$'], ans: 1 },
      { q: 'En skitur koster 10.000 kr. om 4 år. Renten er 2% p.a. Hvad skal indsættes nu?',
        opts: ['$9.000\\text{ kr.}$','$8.676{,}98\\text{ kr.}$','$9.500\\text{ kr.}$','$9.238{,}45\\text{ kr.}$'], ans: 3 },
      { q: 'Bank A: 2% pr. måned. Bank B: 24% om året. Hvilken er mest attraktiv for din investering?',
        opts: ['Bank B, da Bank A svarer til 23% i årlig rente','Det afhænger af beløbet','Bank A, da de svarer til ca. 27% i årlig rente','Begge banker svarer til 24% om året'], ans: 2 },
      { q: 'Beløbet på en konto beskrives ved $K = 5000 \\cdot 1{,}05^n$. Hvad er den årlige procentvise rente?',
        opts: ['$5\\%$','$5000\\%$','$1{,}05\\%$','$150\\%$'], ans: 0 },
      { q: 'Maria og Emil: løs $15000 \\cdot 1{,}03^x = 18000 \\cdot 1{,}02^x$',
        opts: ['$x=18$','$x=16{,}5$','$x=18{,}7$','$x=18{,}5$'], ans: 2 },
      { q: 'Løsningen på ligningen er $x = 18{,}7$. Hvad fortæller dette?',
        opts: ['Maria og Emil har 0 kr. efter 18,7 år','Emil har mere end Maria efter 18,7 år','Maria og Emil har samme beløb på kontoen efter 18,7 år','Maria har mere end Emil efter 18,7 år'], ans: 2 }
    ]
  },

  // ────────────────────────────────────────────────────
  // LINEÆRE FUNKTIONER
  // ────────────────────────────────────────────────────
  'lineaer-funktioner': {
    '0-1': [
      { q: 'Hæld­ningen $a$ i $y = 3x - 5$ er:',
        opts: ['-5','3','-3','5'], ans: 1 },
      { q: 'Skæring med y-aksen for $y = 2x + 7$ er:',
        opts: ['$(0,\\,2)$','$(0,\\,7)$','$(7,\\,0)$','$(-7,\\,0)$'], ans: 1 },
      { q: 'En lineær funktion med $a = 0$ er:',
        opts: ['En konstant funktion','Umulig','Voksende','Faldende'], ans: 0 },
      { q: 'Hvad fortæller hæld­ningskoefficienten $a$?',
        opts: ['Hvad $y$ er når $x=0$','Hvor meget $y$ stiger pr. enhed $x$ stiger','Hvor grafen skærer x-aksen','Funktionens maksimum'], ans: 1 },
      { q: '$y = -2x + 3$ er:',
        opts: ['Voksende','Faldende','Konstant','Ikke-lineær'], ans: 1 }
    ],
    '1-1': [
      { q: 'Hæld­ningen af linjen gennem $(1,\\,3)$ og $(3,\\,7)$:',
        opts: ['1','2','3','4'], ans: 1 },
      { q: 'Skæring med x-aksen for $y = 2x - 6$:',
        opts: ['$(3,\\,0)$','$(0,\\,-6)$','$(6,\\,0)$','$(0,\\,3)$'], ans: 0 },
      { q: 'To linjer med samme hæld­ningskoefficient er:',
        opts: ['Vinkelrette','Parallelle','Sammenfaldende','Altid skærende'], ans: 1 },
      { q: 'Hæld­ningen af en vandret linje er:',
        opts: ['Udefineret','1','0','-1'], ans: 2 },
      { q: 'Hæld­ningen af en lodret linje er:',
        opts: ['0','1','Udefineret','-1'], ans: 2 }
    ],
    '2-1': [
      { q: 'Find $a$ og $b$ i $y=ax+b$ når grafen går igennem $(0,\\,4)$ og $(2,\\,10)$:',
        opts: ['$a=3,\\; b=4$','$a=4,\\; b=3$','$a=2,\\; b=4$','$a=3,\\; b=2$'], ans: 0 },
      { q: 'Hvad er $b$ for linjen $y = 5x + b$ der går igennem $(2,\\,-3)$?',
        opts: ['$b = -13$','$b = 7$','$b = -7$','$b = 13$'], ans: 0 },
      { q: '$y = 3x + 1$ og $y = 3x - 5$. Forholdet?',
        opts: ['Skærer i $(0,\\,0)$','Parallelle','Identiske','Vinkelrette'], ans: 1 },
      { q: 'Formel for linjen med hæld­ning 2 igennem $(1,\\,5)$:',
        opts: ['$y = 2x + 7$','$y = 2x + 5$','$y = 2x + 3$','$y = 2x - 3$'], ans: 2 },
      { q: 'Skæringspunktet for $y = 2x + 1$ og $y = -x + 7$:',
        opts: ['$(2,\\,5)$','$(3,\\,4)$','$(1,\\,6)$','$(2,\\,3)$'], ans: 0 }
    ],
    '3-1': [
      { q: 'Hvad er monotoni for $y = -3x + 2$?',
        opts: ['Strengt voksende','Strengt faldende','Konstant','Hverken'], ans: 1 },
      { q: 'Væksten i $y$ fra $x=1$ til $x=4$ for $y = 2x + 1$:',
        opts: ['3','6','9','12'], ans: 1 },
      { q: 'Skæringspunkt for $y = 4x - 8$ og $y = 2x - 2$:',
        opts: ['$(3,\\,4)$','$(4,\\,3)$','$(2,\\,0)$','$(3,\\,6)$'], ans: 0 },
      { q: 'Hvad er $f(3)$ for $f(x) = -x + 5$?',
        opts: ['2','8','-2','3'], ans: 0 },
      { q: 'Grafen $y = x$ går igennem:',
        opts: ['Punktet $(1,\\,0)$','Punktet $(0,\\,1)$','Origo med hæld­ning 1','Y-aksen i $(0,\\,5)$'], ans: 2 }
    ],
    '4-0': [
      { q: 'Hæld­ningen af linjen igennem $(-2,\\,3)$ og $(4,\\,9)$:',
        opts: ['0,5','1','2','3'], ans: 1 },
      { q: 'Formel for linje igennem $(0,\\,-3)$ med hæld­ning 4:',
        opts: ['$y = 4x + 3$','$y = -3x + 4$','$y = 4x - 3$','$y = -4x + 3$'], ans: 2 },
      { q: 'Skæringspunktet for $y = x + 2$ og $y = 3x - 4$:',
        opts: ['$(3,\\,5)$','$(5,\\,3)$','$(3,\\,3)$','$(1,\\,3)$'], ans: 0 },
      { q: '$y = -0{,}5x + 2$. Hvad er $y$ ved $x = 6$?',
        opts: ['-1','1','5','-3'], ans: 0 },
      { q: '$a = -2,\\; b = 5$. Skæring med x-aksen?',
        opts: ['$(2,\\,0)$','$(2{,}5,\\,0)$','$(0,\\,5)$','$(5,\\,0)$'], ans: 1 }
    ],
    // S4: KENDT PUNKT OG HÆLDNING — item 1 (nemmat.dk)
    '4-1': [
      { q: 'Grafen for $f$ har hæld­ning 3 og går gennem $P(2,\\,5)$. Bestem forskriften.',
        opts: ['$f(x)=x-3$','$f(x)=-3x+1$','$f(x)=3x-1$','$f(x)=2x+1$'], ans: 2 },
      { q: '$f$ har hæld­ning 3 og går gennem $P(2,\\,5)$. Beregn $f(1)$.',
        opts: ['$f(1)=2$','$f(1)=6$','$f(2)=1$','$f(1)=-1$'], ans: 0 },
      { q: 'Grafen for $f$ har hæld­ning 5 og går gennem $P(1,\\,4)$. Hvad er $a$ og $b$?',
        opts: ['$a=5,\\; b=-1$','$a=5,\\; b=4$','$a=5,\\; b=0$','$a=5,\\; b=1$'], ans: 0 },
      { q: '$f$ har hæld­ning 5 og går gennem $P(1,\\,4)$. Er $f(2) = 9$?',
        opts: ['Nej, fordi $f(2)=11$','Ja, fordi $f(2)=9$'], ans: 1 },
      { q: 'Grafen for $f$ har hæld­ning $-5$ og går gennem $P(0,\\,4)$. Bestem forskriften.',
        opts: ['$f(x)=-5x+0$','$f(x)=-x+4$','$f(x)=-5x+4$','$f(x)=-4x+5$'], ans: 2 }
    ],
    // S5: TABELFORMER OG MODELLER — item 3 (nemmat.dk)
    '5-3': [
      { q: 'En teleudbyder: grundpris 50 kr/mdr og 20 kr/time. Opstil en funktion for prisen $f(x)$.',
        opts: ['$f(x)=20x+50$','$f(x)=50x+20$','$f(x)=30x+50$','$f(x)=20x+20$'], ans: 0 },
      { q: 'En biograf: 90 kr/billet. Popcorn (60 kr) giver 10 kr rabat pr. billet. Funktion for total pris ved $x$ billetter + popcorn?',
        opts: ['$f(x)=-80x+90$','$f(x)=-10x+90$','$f(x)=80x+60$','$f(x)=90x+60$'], ans: 2 },
      { q: 'En fabrik: startpris 5000 kr, falder med 100 kr pr. telefon. Opstil en funktion.',
        opts: ['$f(x)=5000+100x$','$f(x)=-5000x+100$','$f(x)=5000x-100$','$f(x)=-100x+5000$'], ans: 3 },
      { q: 'Fitnesscenter: 200 kr/mdr + 50 kr/holdtræning. Funktion for månedlig pris $p(x)$?',
        opts: ['$p(x)=200+50x$','$p(x)=50+50x$','$p(x)=200+200x$','$p(x)=50x-200$'], ans: 0 }
    ],
    // S6: SKÆRING MELLEM TO FUNKTIONER — item 1 (nemmat.dk)
    '6-1': [
      { q: 'Find skæringspunktet for $f(x)=3x+6$ og $g(x)=-x+22$.',
        opts: ['$(4,\\,20)$','$(3,\\,16)$','$(4,\\,18)$','$(3,\\,22)$'], ans: 2 },
      { q: 'Find skæringspunktet for $f(x)=4x-5$ og $g(x)=3x+15$.',
        opts: ['$(20,\\,75)$','$(75,\\,20)$','$(25,\\,60)$','$(3,\\,9)$'], ans: 0 },
      { q: 'To telefonmodeller: Model A = $2x+150$ og Model B = $3x+50$. Hvornår koster de det samme?',
        opts: ['$100$ minutter','$50$ minutter','$75$ minutter','$30$ minutter'], ans: 0 },
      { q: 'Modellerne skærer ved 100 minutter. Hvilken model er billigst over 100 minutter?',
        opts: ['Kan ikke afgøres','Model A','Model B','De koster det samme'], ans: 1 },
      { q: 'Modellerne skærer ved 100 minutter. Hvilken model er billigst under 100 minutter?',
        opts: ['Kan ikke afgøres','Model A','Model B','De koster det samme'], ans: 2 },
      { q: 'En familie overvejer to vaskemaskinemodeller. De bruger lige meget efter ca. ___ år.',
        opts: ['$10$ år','$9$ år','$8$ år','$11$ år'], ans: 0 }
    ],
    // S7: REGRESSION MED CAS — item 3 (nemmat.dk)
    '7-3': [
      { q: '$f(x)=1{,}5x+5$ (kaffe pr. uge, $x$ = skoletimer). Hvad er $f(30)$?',
        opts: ['$30$','$50$','$45$','$55$'], ans: 1 },
      { q: '$f(x)=1{,}5x+5$ (kaffe pr. uge). Hvad er $f(20)$?',
        opts: ['$35$','$30$','$25$','$20$'], ans: 0 },
      { q: '$f(x)=1{,}5x+5$. Find $x$, når $f(x)=26$.',
        opts: ['$16$','$11$','$9$','$14$'], ans: 3 },
      { q: '$f(x)=8x+150$ (puls, $x$ = hastighed km/t). Hvad er $f(5)$?',
        opts: ['$180$ slag/min','$170$ slag/min','$160$ slag/min','$190$ slag/min'], ans: 3 },
      { q: '$f(x)=8x+150$ (puls). Find hastighed $x$, når pulsen er 190 slag/min.',
        opts: ['$5$ km/t','$10$ km/t','$15$ km/t','$20$ km/t'], ans: 0 },
      { q: '$f(x)=8x+150$ (puls). Hvor meget stiger pulsen, når hastigheden stiger 3 km/t?',
        opts: ['$40$ slag/min','$24$ slag/min','$35$ slag/min','$13$ slag/min'], ans: 1 },
      { q: '$f(x)=-10x+200$ (lommepenge, $x$ = alder). Hvad er $f(14)$?',
        opts: ['$65$ kr','$55$ kr','$50$ kr','$60$ kr'], ans: 3 },
      { q: '$f(x)=-10x+200$. Find alderen $x$, når lommepengene er 60 kr.',
        opts: ['$13$ år','$14$ år','$12$ år','$10$ år'], ans: 1 },
      { q: '$f(x)=-10x+200$. Hvad er $f(17)$?',
        opts: ['$30$ kr','$170$ kr','$150$ kr','$90$ kr'], ans: 0 }
    ],
    // S8: EKSAMENSFORBEREDELSE — item 0,1,2 (nemmat.dk)
    '8-0': [
      { q: 'Grafen for $f(x)=ax+b$ går gennem $(2,\\,10)$ og $(6,\\,2)$. Beregn $a$ og $b$.',
        opts: ['$a=-6,\\; b=20$','$a=20,\\; b=-6$','$a=14,\\; b=-2$','$a=-2,\\; b=14$'], ans: 3 },
      { q: 'Med $f(x)=-2x+14$: beregn $f(1)$.',
        opts: ['$f(1)=11$','$f(1)=12$','$f(1)=13$','$f(1)=14$'], ans: 1 }
    ],
    '8-1': [
      { q: 'Grafen for $f$ har hæld­ning 5 og går gennem $P(2,\\,3)$. Beregn $f(3)$.',
        opts: ['$f(3)=13$','$f(3)=5$','$f(3)=7$','$f(3)=8$'], ans: 3 },
      { q: 'Løs ligningen $f(x)=18$ når $f(x)=5x-7$.',
        opts: ['$x=4$','$x=5$','$x=7$','$x=8$'], ans: 1 }
    ],
    '8-2': [
      { q: 'Temperaturen på en motorhjelm kan beskrives ved en lineær funktion. Bestem hæld­ningstallet $a$.',
        opts: ['$5$','$3$','$4$','Kan ikke bestemmes'], ans: 0 },
      { q: 'Hvad fortæller tallet $a$ om temperaturændringen på motorhjelmen?',
        opts: ['Temperaturen STIGER med 5°C pr. time','Temperaturen FALDER med 5°C pr. time'], ans: 1 }
    ]
  },

  // ────────────────────────────────────────────────────
  // EKSPONENTIELLE FUNKTIONER
  // ────────────────────────────────────────────────────
  'eksponentielle-funktioner': {
    '0-1': [
      { q: 'En eksponentiel funktion skrives som:',
        opts: ['$f(x) = ax + b$','$f(x) = b \\cdot a^x$','$f(x) = x^a$','$f(x) = a \\cdot x^b$'], ans: 1 },
      { q: 'For $f(x) = 2 \\cdot 3^x$: hvad er $f(2)$?',
        opts: ['12','18','24','36'], ans: 1 },
      { q: 'Hvad er grundtallet $a$ i $f(x) = 5 \\cdot 0{,}8^x$?',
        opts: ['5','0,8','0,2','1'], ans: 1 },
      { q: 'Når $a > 1$ i $f(x) = b \\cdot a^x$ er funktionen:',
        opts: ['Faldende','Voksende','Konstant','Lineær'], ans: 1 },
      { q: 'Startværdien $b$ i $f(x) = b \\cdot a^x$ svarer til:',
        opts: ['$f(1)$','$f(0)$','$f(-1)$','$f(a)$'], ans: 1 }
    ],
    '1-1': [
      { q: 'Hvad er vækstraten $r$ for $f(x) = 3 \\cdot 1{,}2^x$?',
        opts: ['1,2','20%','3%','12%'], ans: 1 },
      { q: 'En størrelse vokser med 5% pr. år. Fremskrivningsfaktoren er:',
        opts: ['0,95','1,5','1,05','5'], ans: 2 },
      { q: 'En størrelse aftager med 8% pr. år. Fremskrivningsfaktoren er:',
        opts: ['0,92','1,08','0,08','0,8'], ans: 0 },
      { q: 'For $f(x) = 1000 \\cdot 0{,}75^x$: vækstraten er:',
        opts: ['75%','-25%','25%','-75%'], ans: 1 },
      { q: 'Procentvis vækst pr. x-enhed for $a = 1{,}06$:',
        opts: ['6%','60%','1,6%','0,6%'], ans: 0 }
    ],
    '2-1': [
      { q: 'Fordoblingstiden $T_2$ beregnes med:',
        opts: ['$T_2 = 2/a$','$T_2 = \\log(a)/\\log(2)$','$T_2 = \\log(2)/\\log(a)$','$T_2 = a/2$'], ans: 2 },
      { q: '$f(x) = 3 \\cdot 2^x$. Fordoblingstiden er:',
        opts: ['1','2','3','0,5'], ans: 0 },
      { q: 'En funktion halveres hvert 5. år. Hvad er grundtallet?',
        opts: ['0,5','≈ 0,87','0,75','2'], ans: 1 },
      { q: 'En substans aftager med 20% pr. dag. Halveringstiden ≈',
        opts: ['2 dage','3,1 dage','5 dage','10 dage'], ans: 1 },
      { q: 'For $f(x) = b \\cdot a^x$ med halveringstid $T_{1/2}$:',
        opts: ['$f(x + T_{1/2}) = 2f(x)$','$f(x + T_{1/2}) = f(x)/2$','$f(T_{1/2}) = 0$','$a^{T_{1/2}} = 2$'], ans: 1 }
    ],
    '3-1': [
      { q: 'Hvad er eksponentiel regression?',
        opts: ['Find en lineær model','Tilpas en eksponentiel model til datapunkter','Integration af eksponentielle funktioner','Differentiering'], ans: 1 },
      { q: 'Til eksponentiel regression bruges:',
        opts: ['Lineær regression direkte','Log-lineær regression ($\\ln y$ og $x$ lineært relaterede)','Polynomiel regression','Ingen regression er mulig'], ans: 1 },
      { q: '$f(x) = 2 \\cdot 1{,}5^x$. Hvad er $f(3)$?',
        opts: ['6','6,5','6,75','9'], ans: 2 },
      { q: 'To eksponentielle funktioner med samme grundtal $a$ men $b_1 \\neq b_2$:',
        opts: ['Skærer aldrig hinanden','Skærer én gang','Skærer to gange','Er altid identiske'], ans: 0 },
      { q: '$f(x) = 1000 \\cdot 1{,}1^x$. Hvad er $f(5) \\approx ?$',
        opts: ['1500','1600','1610','1100'], ans: 2 }
    ],
    '4-0': [
      { q: '$f(x) = 3 \\cdot 2^x$. Hvad er $f(4)$?',
        opts: ['24','48','96','16'], ans: 1 },
      { q: 'En population starter med 500 og vokser med 6% pr. år. Hvad er der efter 10 år ≈?',
        opts: ['800','895','1000','300'], ans: 1 },
      { q: 'Fordoblingstid for $f(x) = 5 \\cdot 1{,}1^x \\approx$',
        opts: ['7,27','10','5','2'], ans: 0 },
      { q: 'Vækstrate for $a = 0{,}85$:',
        opts: ['15% vækst','85% vækst','-15% (fald)','−85%'], ans: 2 },
      { q: '$f(x) = b \\cdot a^x$ med $f(0) = 4$ og $f(1) = 6$. Hvad er $a$?',
        opts: ['1,2','1,4','1,5','2'], ans: 2 }
    ],
    // S2: BEREGNING AF a OG b — item 2 (nemmat.dk)
    '2-2': [
      { q: '$f(x)=b\\cdot a^x$ går gennem $(2,\\,6)$ og $(6,\\,18)$. Bestem $a$ og $b$.',
        opts: ['$a=3{,}46$ og $b=3{,}46$','$b=1{,}316$ og $a=3{,}46$','$a=1{,}316$ og $b=3{,}46$','$a=1{,}5$ og $b=3{,}2$'], ans: 2 },
      { q: '$f(x)=b\\cdot a^x$ går gennem $(2,\\,6)$ og $(4,\\,18)$. Bestem forskriften.',
        opts: ['$f(x)=2\\cdot 1{,}73^x$','$f(x)=2\\cdot 17{,}3^x$','$f(x)=4\\cdot 73^x$','$f(x)=3\\cdot 173^x$'], ans: 0 },
      { q: '$f(x)=2\\cdot 1{,}73^x$. Beregn $f(3)$.',
        opts: ['$f(3)=12{,}65$','$f(3)=25{,}59$','$f(3)=10{,}39$','$f(3)=15{,}65$'], ans: 2 }
    ],
    // S3: FORDOBLINGSKONSTANT — item 2 (nemmat.dk)
    '3-2': [
      { q: 'Bestem fordoblingskonstanten for $f(x)=20000\\cdot 1{,}05^x$.',
        opts: ['$T_2=13{,}6$','$T_2=14{,}21$','$T_2=15{,}4$','$T_2=12{,}5$'], ans: 1 },
      { q: 'En bakteriekultur vokser med $a=1{,}08$ pr. time. Hvad er fordoblingskonstanten?',
        opts: ['$11$ timer','$10$ timer','$12{,}5$ timer','$9$ timer'], ans: 3 },
      { q: 'En investering vokser med 9% pr. år. Beregn fordoblingskonstanten.',
        opts: ['Fordobles hvert 100.000 år','Fordobles hvert 18 år','Fordoblingskonstanten findes ikke','Fordobles hvert 8 år'], ans: 3 },
      { q: '$f(x)=120000\\cdot (1+0{,}25)^x$. Bestem $T_2$.',
        opts: ['$T_2=3{,}11$','$T_2=5{,}55$','$T_2=4{,}51$','$T_2=6{,}01$'], ans: 0 },
      { q: '$f(x)=5\\cdot 1{,}30^x$. Aflæs/beregn fordoblingskonstanten.',
        opts: ['$T_2=4{,}54$','$T_2=2{,}64$','$T_2=3{,}52$','$T_2=5{,}55$'], ans: 1 }
    ],
    // S4: HALVERINGSKONSTANT — item 2 (nemmat.dk)
    '4-2': [
      { q: 'Bestem halveringskonstanten for $f(x)=200\\cdot 0{,}92^x$.',
        opts: ['$T_{\\frac{1}{2}}=9{,}52$','$T_{\\frac{1}{2}}=7{,}95$','$T_{\\frac{1}{2}}=8{,}31$','$T_{\\frac{1}{2}}=9{,}10$'], ans: 2 },
      { q: 'En smartphone: startpris 8.000 kr, $a=0{,}85$ pr. år. Hvornår er prisen halveret?',
        opts: ['Halveret hvert 6,84 år','Halveret hvert 9,55 år','Halveret hvert 5,76 år','Halveret hvert 4,27 år'], ans: 3 },
      { q: 'En medicin aftager med 10% i timen ($a=0{,}90$). Hvad er halveringstiden?',
        opts: ['Halveret hvert 8,58 time','Halveret hvert 5,65 time','Halveret hvert 7,5 time','Halveret hvert 6,58 time'], ans: 3 },
      { q: '$f(x)=2500\\cdot (1-0{,}18)^x$. Bestem $T_{\\frac{1}{2}}$.',
        opts: ['$T_{\\frac{1}{2}}=4{,}1$','$T_{\\frac{1}{2}}=3{,}8$','$T_{\\frac{1}{2}}=3{,}49$','$T_{\\frac{1}{2}}=2{,}98$'], ans: 2 },
      { q: '$f(x)=550\\cdot 0{,}40^x$. Bestem halveringskonstanten grafisk.',
        opts: ['$T_{\\frac{1}{2}}=0{,}76$','$T_{\\frac{1}{2}}=0{,}5$','$T_{\\frac{1}{2}}=0{,}65$','$T_{\\frac{1}{2}}=0{,}45$'], ans: 0 }
    ],
    // S5: MODELLER OG REGRESSION — item 0 (FIB skipped) (nemmat.dk)
    '5-0': [
      { q: 'Kaffeforbrug: 800 kr/år i 2019, vokser med 10% pr. år. Opstil en eksponentiel model.',
        opts: ['$y=800\\cdot 110^x$','$y=800\\cdot 1{,}10^x$','$y=800\\cdot 10^x$','$y=10\\cdot 1800^x$'], ans: 1 },
      { q: 'Fitnessabonnement: 350 kr/mdr i 2021, falder med 15% pr. år. Opstil modellen.',
        opts: ['$f(x)=15\\cdot 0{,}85^x$','$f(x)=350\\cdot 0{,}15^x$','$f(x)=350\\cdot 0{,}85^x$','$f(x)=400\\cdot 0{,}85^x$'], ans: 2 },
      { q: '$f(x)=650\\cdot 0{,}85^x$ (DVD-salg). Hvad fortæller tallet 650?',
        opts: ['Startværdien — 650.000 solgte DVD i 2015','Fremskrivningsfaktoren — aftager med 650 om året'], ans: 0 },
      { q: '$f(x)=650\\cdot 0{,}85^x$ (DVD-salg). Hvad fortæller tallet 0,85?',
        opts: ['Startværdien — 0,85 solgte DVD i 2015','Fremskrivningsfaktoren — aftager med 15% om året'], ans: 1 }
    ]
  },
  'eksponentielle-funktioner-stx': null, // sættes nedenfor

  // ────────────────────────────────────────────────────
  // GEOMETRI OG TRIGONOMETRI
  // ────────────────────────────────────────────────────
  'geometri-og-trigonometri': {
    '0-1': [
      { q: 'Pythagoras\' sætning siger:',
        opts: ['$a + b = c$','$a^2 + b^2 = c^2$','$a^2 - b^2 = c^2$','$a \\cdot b = c^2$'], ans: 1 },
      { q: 'Kateterne er 3 og 4. Hvad er hypotenusen?',
        opts: ['5','6','7','12'], ans: 0 },
      { q: 'En stige på 5 m. Bunden er 3 m fra muren. Højden er:',
        opts: ['3 m','4 m','6 m','8 m'], ans: 1 },
      { q: 'Hypotenusen i en retvinklet trekant er altid:',
        opts: ['Den korteste side','Den midterste side','Den længste side','En katet'], ans: 2 },
      { q: 'Er trekanten med sider 5, 12, 13 retvinklet?',
        opts: ['Ja','Nej','Kun ved 90°','Det kan ikke afgøres'], ans: 0 }
    ],
    '1-1': [
      { q: 'I en retvinklet trekant med vinkel $\\theta$: $\\sin\\theta = ?$',
        opts: ['hosliggende/hypotenusen','modstående/hypotenusen','modstående/hosliggende','hypotenusen/modstående'], ans: 1 },
      { q: '$\\cos(60°) = ?$',
        opts: ['1','0,5','$\\sqrt{3}/2$','0'], ans: 1 },
      { q: '$\\tan(45°) = ?$',
        opts: ['0','0,5','1','$\\sqrt{2}$'], ans: 2 },
      { q: 'Hypotenusen = 10, vinkel = 30°. Modstående side = ?',
        opts: ['5','7','8,66','10'], ans: 0 },
      { q: 'Hvad er $\\theta$ hvis $\\cos(\\theta) = 0{,}5$?',
        opts: ['30°','45°','60°','90°'], ans: 2 }
    ],
    '2-1': [
      { q: 'Sinusrelationen siger:',
        opts: ['$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$','$a^2 = b^2 + c^2 - 2bc\\cos A$','$a = b \\cdot \\sin A$','$\\sin A = a/c$'], ans: 0 },
      { q: 'Cosinusrelationen bruges ved:',
        opts: ['SSS eller SAS','To vinkler og én side','Kun retvinklede trekanter','Aldrig'], ans: 0 },
      { q: 'Areal af trekant med $a=5$, $b=8$ og mellemliggende vinkel $C=30°$:',
        opts: ['10','20','40','5'], ans: 0 },
      { q: 'Summen af vinkler i en trekant er:',
        opts: ['90°','180°','270°','360°'], ans: 1 },
      { q: 'I trekant med $A=40°$, $B=60°$. Hvad er $C$?',
        opts: ['60°','70°','80°','90°'], ans: 2 }
    ],
    '3-1': [
      { q: 'Arealet af en cirkel med radius 5:',
        opts: ['$5\\pi$','$10\\pi$','$25\\pi$','$50\\pi$'], ans: 2 },
      { q: 'Volumen af en terning med sidelængde 4:',
        opts: ['16','48','64','96'], ans: 2 },
      { q: 'Areal af trekant med grundlinje 8 og højde 5:',
        opts: ['40','20','13','80'], ans: 1 },
      { q: 'Volumen af kegle med $r=3$ og $h=4$:',
        opts: ['$9\\pi$','$12\\pi$','$36\\pi$','$4\\pi$'], ans: 1 },
      { q: 'Areal af rombe med diagonaler 6 og 8:',
        opts: ['24','12','48','36'], ans: 0 }
    ],
    '4-0': [
      { q: 'Kateterne er 6 og 8. Hvad er hypotenusen?',
        opts: ['10','14','12','8'], ans: 0 },
      { q: 'Areal af trekant med to sider 6 og 8 og mellemliggende vinkel 90°:',
        opts: ['24','48','12','36'], ans: 0 },
      { q: 'Volumen af en kube med sidelængde 3:',
        opts: ['9','18','27','36'], ans: 2 },
      { q: '$\\cos(30°) = ?$',
        opts: ['0,5','$\\sqrt{2}/2$','$\\sqrt{3}/2$','1'], ans: 2 },
      { q: 'En cirkel har radius 7. Hvad er omkredsen?',
        opts: ['$7\\pi$','$14\\pi$','$49\\pi$','$\\pi/7$'], ans: 1 }
    ],
    '4-2': [
      { q: 'Aflæs $\\sin(53{,}1°)$ fra enhedscirklen.',
        opts: ['$0{,}5$','$0{,}7$','$0{,}6$','$0{,}8$'], ans: 3 },
      { q: 'Aflæs $\\cos(53{,}1°)$ fra enhedscirklen.',
        opts: ['$0{,}8$','$0{,}65$','$0{,}6$','$0{,}7$'], ans: 2 },
      { q: 'Aflæs $\\cos(45°)$ fra enhedscirklen.',
        opts: ['$0{,}5$','$0{,}8$','$0{,}7$','$0{,}6$'], ans: 2 },
      { q: 'Aflæs $\\sin(45°)$ fra enhedscirklen.',
        opts: ['$0{,}7$','$0{,}6$','$0{,}8$','$0{,}5$'], ans: 0 },
      { q: 'Aflæs $\\tan(45°)$ fra enhedscirklen.',
        opts: ['$0{,}8$','$1{,}5$','$1$','$0{,}9$'], ans: 2 },
      { q: 'Retvinklet trekant ABC: $a=7$ (modstående til A), $b=24$ (hosliggende til A). Opstil ligning for vinkel $A$.',
        opts: ['$\\tan(24)=\\tfrac{a}{7}$','$\\tan(7)=\\tfrac{a}{24}$','$\\tan(A)=\\tfrac{24}{7}$','$\\tan(A)=\\tfrac{7}{24}$'], ans: 3 }
    ],
    '5-5': [
      { q: 'Trekant ABC: $C$ er ret, $|AC|=15$, $\\angle A=39°$. Hvad er $b=|AC|$?',
        opts: ['$54$','$15$','$39$','$24$'], ans: 1 },
      { q: 'Trekant ABC: $C$ er ret, $|AC|=15$, $\\angle A=39°$. Opstil ligning for $|AB|$.',
        opts: ['$\\cos(39)=\\tfrac{15}{|AB|}$','$\\cos(15)=\\tfrac{39}{|AB|}$','$\\cos(39)=\\tfrac{39}{|AB|}$','$\\cos(15)=\\tfrac{15}{|AB|}$'], ans: 0 },
      { q: 'Trekant: $a=5$, $b=6$, $c=7$. Bestem vinkel $A$ med cosinusrelationen.',
        opts: ['$63{,}55°$','$50{,}20°$','$44{,}42°$','$60{,}50°$'], ans: 2 },
      { q: 'Trekant: $a=8$, $b=10$, $c=12$. Bestem vinkel $C$ med cosinusrelationen.',
        opts: ['$77{,}25°$','$79{,}88°$','$75{,}52°$','$82{,}82°$'], ans: 3 },
      { q: 'Sinusrelationen lyder:',
        opts: ['$\\tfrac{a}{\\sin A}=\\tfrac{b}{\\sin B}=\\tfrac{c}{\\sin C}$','$a^2=b^2+c^2-2bc\\cos A$','$T=\\tfrac{1}{2}ab\\sin C$','$c^2=a^2+b^2$'], ans: 0 }
    ],
    '6-0': [
      { q: 'Trekant ABC: $\\angle A=45°$, $|AB|=10$, $|AC|=14$. Hvad svarer siden $c$ til?',
        opts: ['$14$','$45$','$12$','$10$'], ans: 3 },
      { q: 'Trekant ABC: $|AB|=5$, $|AC|=3$, $C$ er ret. Bestem hypotenusen.',
        opts: ['$4$','$2$','$5$','$3$'], ans: 2 },
      { q: 'Retvinklet trekant: $\\angle A=35°$, $C$ er ret, hyp $=15$. Opstil ligning for den modstående katete til $A$.',
        opts: ['$\\sin(35)=\\tfrac{\\text{mod}}{15}$','$\\sin(15)=\\tfrac{\\text{mod}}{35}$','$\\sin(\\text{mod})=\\tfrac{15}{35}$','$\\sin(35)=\\tfrac{35}{\\text{mod}}$'], ans: 0 },
      { q: 'Trekant med højde $h=10$ og areal $=35$. Bestem grundlinjen $|AB|$.',
        opts: ['$10$','$35$','$7$','$5$'], ans: 2 }
    ]
  },

  // ────────────────────────────────────────────────────
  // DESKRIPTIV STATISTIK
  // ────────────────────────────────────────────────────
  'deskriptiv-statistik': {
    '0-1': [
      { q: 'Hvad er relativ frekvens?',
        opts: ['Antal observationer i alt','En observations antal divideret med totalt antal','Summen af alle observationer','Middelværdien'], ans: 1 },
      { q: 'Datasættet [2, 4, 4, 4, 5, 5, 7, 9]. Hyppighed for 4:',
        opts: ['1','2','3','4'], ans: 2 },
      { q: 'Hvilken type variabel er hårfarve?',
        opts: ['Kvantitativ diskret','Kvantitativ kontinuert','Kvalitativ nominalt','Kvantitativ ordinal'], ans: 2 },
      { q: 'En frekvenstabel viser:',
        opts: ['Kun gennemsnittet','Antallet af gange hver værdi optræder','Standardafvigelsen','Kun max og min'], ans: 1 },
      { q: 'Hvad er summen af alle relative frekvenser?',
        opts: ['0','0,5','1','Varierer'], ans: 2 }
    ],
    '1-1': [
      { q: 'Gennemsnit af [3, 5, 7, 9, 11]:',
        opts: ['6','7','8','9'], ans: 1 },
      { q: 'Median af [1, 3, 5, 7, 9]:',
        opts: ['3','5','7','6'], ans: 1 },
      { q: 'Median af [2, 4, 6, 8] (lige antal):',
        opts: ['4','5','6','4,5'], ans: 1 },
      { q: 'Hvornår er medianen bedre end gennemsnittet?',
        opts: ['Aldrig','Når data er symmetrisk fordelt','Når der er ekstreme værdier (outliers)','Altid'], ans: 2 },
      { q: 'Gennemsnit af [10, 20, 30, 40, 50]:',
        opts: ['25','30','35','40'], ans: 1 }
    ],
    '2-1': [
      { q: 'Nedre kvartil $Q_1$ er:',
        opts: ['Medianen af den øverste halvdel','25%-percentilen','75%-percentilen','Middelværdien'], ans: 1 },
      { q: 'Interkvartilbredde $IQR = ?$',
        opts: ['$Q_1 - Q_3$','$Q_3 - Q_1$','$Q_2 - Q_1$','$Q_3 - Q_2$'], ans: 1 },
      { q: 'I et boksplot er "boksen" afgrænset af:',
        opts: ['Min og max','$Q_1$ og $Q_3$','$Q_1$ og medianen','Medianen og $Q_3$'], ans: 1 },
      { q: 'En outlier er typisk:',
        opts: ['Medianen','En observation < $Q_1 - 1{,}5 \\cdot IQR$ eller > $Q_3 + 1{,}5 \\cdot IQR$','Gennemsnittet','$Q_3$'], ans: 1 },
      { q: 'Hvad viser "halen" i et boksplot?',
        opts: ['Gennemsnittet','Spredningen af de midterste 50%','Data uden for kvartilerne','Medianen'], ans: 2 }
    ],
    '3-1': [
      { q: 'Standardafvigelse $s$ måler:',
        opts: ['Den mest hyppige værdi','Middel afstand fra gennemsnittet','Max minus min','Antal observationer'], ans: 1 },
      { q: 'Hvis alle observationer er identiske, er standardafvigelsen:',
        opts: ['1','Uendelig','0','Gennemsnittet'], ans: 2 },
      { q: 'Varians = ?',
        opts: ['$s$','$s^2$','$2s$','$s/2$'], ans: 1 },
      { q: 'En stor standardafvigelse betyder:',
        opts: ['Data er tæt samlet om gennemsnittet','Data er meget spredt','Gennemsnittet er stort','Ingen variation'], ans: 1 },
      { q: 'For [2, 2, 2, 2, 2]: standardafvigelsen er:',
        opts: ['0','1','2','4'], ans: 0 }
    ],
    '4-0': [
      { q: 'Datasæt: [4, 8, 6, 5, 3, 2, 8, 9, 2, 5]. Hvad er medianen?',
        opts: ['5','5,5','6','4,5'], ans: 0 },
      { q: 'Hvad er $Q_1$ for [1, 2, 3, 4, 5, 6, 7, 8]?',
        opts: ['2','2,5','3','3,5'], ans: 1 },
      { q: 'IQR for datasæt med $Q_1=10$ og $Q_3=25$:',
        opts: ['10','15','25','35'], ans: 1 },
      { q: 'Gennemsnit for [12, 15, 11, 14, 13]:',
        opts: ['12','13','14','15'], ans: 1 },
      { q: 'Hvad er typetallet (mode) for [3, 5, 5, 7, 3, 5, 2]?',
        opts: ['3','5','7','2'], ans: 1 }
    ]
  },

  // ────────────────────────────────────────────────────
  // SANDSYNLIGHEDSREGNING
  // ────────────────────────────────────────────────────
  'sandsynlighedsregning': {
    '0-1': [
      { q: 'Udfaldsrummet er:',
        opts: ['Det ønskede udfald','Mængden af alle mulige udfald','Antallet af forsøg','Sandsynligheden for succes'], ans: 1 },
      { q: 'Kaster vi en terning. Hvad er udfaldsrummet?',
        opts: ['{1,2,3}','{1,2,3,4,5,6}','{1,6}','{3,4}'], ans: 1 },
      { q: 'En hændelse er:',
        opts: ['Altid hele udfaldsrummet','En delmængde af udfaldsrummet','Et enkelt forsøg','Sandsynlighedsmålet'], ans: 1 },
      { q: 'P(A) = 0,3. Hvad er $P(A^c)$ (komplementhændelse)?',
        opts: ['0,3','0,5','0,7','1'], ans: 2 },
      { q: 'Hvad er sandsynlighed for at slå 6 med en fair terning?',
        opts: ['$1/3$','$1/4$','$1/5$','$1/6$'], ans: 3 }
    ],
    '1-1': [
      { q: 'Relativ hyppighed =',
        opts: ['Antal gunstige / antal forsøg','Antal gunstige · antal forsøg','Antal forsøg − antal gunstige','Antal forsøg + antal gunstige'], ans: 0 },
      { q: 'Sandsynlighed er:',
        opts: ['Altid > 1','Et tal mellem 0 og 1 (inkl.)','Altid 0,5','Altid et helt tal'], ans: 1 },
      { q: 'P(sikker hændelse) =',
        opts: ['0','0,5','1','Varierer'], ans: 2 },
      { q: 'P(umulig hændelse) =',
        opts: ['0','0,5','1','Varierer'], ans: 0 },
      { q: 'Kastes en mønt 100 gange og plat ses 55 gange. Relativ hyppighed af plat?',
        opts: ['0,45','0,50','0,55','0,60'], ans: 2 }
    ],
    '2-1': [
      { q: 'Multiplikationsprincippet: 3 skjorter og 4 bukser giver:',
        opts: ['7 kombinationer','12 kombinationer','16 kombinationer','24 kombinationer'], ans: 1 },
      { q: 'Antal permutationer af 5 objekter taget 2 ad gangen:',
        opts: ['10','20','25','30'], ans: 1 },
      { q: 'Binomialkoefficienten $\\binom{5}{2} = ?$',
        opts: ['5','10','15','20'], ans: 1 },
      { q: 'En PIN-kode har 4 cifre (0-9). Antal mulige koder:',
        opts: ['40','400','1000','10000'], ans: 3 },
      { q: '$\\binom{n}{0} = ?$',
        opts: ['0','1','$n$','$n!$'], ans: 1 }
    ],
    '3-1': [
      { q: 'Betinget sandsynlighed $P(A|B) = ?$',
        opts: ['$P(A \\cap B) / P(A)$','$P(A \\cap B) / P(B)$','$P(A) \\cdot P(B)$','$P(A) + P(B)$'], ans: 1 },
      { q: 'A og B er uafhængige hvis:',
        opts: ['$P(A \\cap B) = 0$','$P(A|B) = P(A)$','$P(A) = P(B)$','$P(A \\cup B) = 1$'], ans: 1 },
      { q: 'P(A ∩ B) for uafhængige A og B:',
        opts: ['$P(A) + P(B)$','$P(A) - P(B)$','$P(A) \\cdot P(B)$','$P(A) / P(B)$'], ans: 2 },
      { q: 'P(A ∪ B) = ?',
        opts: ['$P(A) + P(B)$','$P(A) + P(B) - P(A \\cap B)$','$P(A) \\cdot P(B)$','$P(A) - P(B)$'], ans: 1 },
      { q: 'P(A)=0,4, P(B)=0,3, P(A∩B)=0,12. Er A og B uafhængige?',
        opts: ['Ja, $0{,}4 \\cdot 0{,}3 = 0{,}12$','Nej, summen er ikke 1','Ja, fordi begge < 0,5','Nej, P(A∩B)≠0'], ans: 0 }
    ],
    '4-0': [
      { q: 'Hvad er P(mindst ét plat) ved 2 møntkast?',
        opts: ['0,25','0,50','0,75','1'], ans: 2 },
      { q: 'Antal måder at vælge 3 ud af 6 objekter (orden ligegyldig):',
        opts: ['18','20','15','30'], ans: 1 },
      { q: 'P(A)=0,6, P(B|A)=0,3. P(A∩B)=?',
        opts: ['0,18','0,30','0,90','0,3'], ans: 0 },
      { q: 'En pose med 3 røde og 5 blå kugler. P(rød) = ?',
        opts: ['$1/3$','$3/8$','$3/5$','$5/8$'], ans: 1 },
      { q: 'P(slå to seksere i træk med fair terning) = ?',
        opts: ['$1/6$','$1/12$','$1/36$','$1/72$'], ans: 2 }
    ]
  },

  // ────────────────────────────────────────────────────
  // LOGARITMER
  // ────────────────────────────────────────────────────
  '10-tals-logaritme': {
    '0-1': [
      { q: '$\\log(100) = ?$',
        opts: ['1','2','10','100'], ans: 1 },
      { q: 'Hvad er definitionen på $\\log(x)$?',
        opts: ['$\\log(x) = x^{10}$','$10^{\\log(x)} = x$','$\\log(x) = x/10$','$\\log(x) = 10x$'], ans: 1 },
      { q: '$\\log(10^5) = ?$',
        opts: ['10','50','5','100000'], ans: 2 },
      { q: '$10^{\\log(7)} = ?$',
        opts: ['7','70','$\\log(7)$','$10 \\cdot 7$'], ans: 0 },
      { q: '$\\log(1) = ?$',
        opts: ['1','10','0','Udefineret'], ans: 2 }
    ],
    '1-1': [
      { q: '$\\log(a \\cdot b) = ?$',
        opts: ['$\\log(a) \\cdot \\log(b)$','$\\log(a) + \\log(b)$','$\\log(a) - \\log(b)$','$\\log(a+b)$'], ans: 1 },
      { q: '$\\log(a/b) = ?$',
        opts: ['$\\log(a) + \\log(b)$','$\\log(a) \\cdot \\log(b)$','$\\log(a) - \\log(b)$','$\\log(a)/\\log(b)$'], ans: 2 },
      { q: '$\\log(a^n) = ?$',
        opts: ['$\\log(a)^n$','$n \\cdot \\log(a)$','$\\log(n \\cdot a)$','$a \\cdot \\log(n)$'], ans: 1 },
      { q: 'Beregn $\\log(1000)$:',
        opts: ['2','3','4','10'], ans: 1 },
      { q: '$\\log(10^3 \\cdot 10^2) = ?$',
        opts: ['5','6','25','3'], ans: 0 }
    ],
    '2-1': [
      { q: 'Løs: $\\log(x) = 3$',
        opts: ['$x = 30$','$x = 100$','$x = 1000$','$x = 3$'], ans: 2 },
      { q: 'Løs: $10^x = 500$',
        opts: ['$x = 50$','$x = \\log(500) \\approx 2{,}70$','$x = 5000$','$x = 5$'], ans: 1 },
      { q: 'Løs: $\\log(x) + \\log(3) = \\log(12)$',
        opts: ['$x = 4$','$x = 9$','$x = 36$','$x = 3$'], ans: 0 },
      { q: 'Hvad bruges logaritmer til i eksponentielle sammenhænge?',
        opts: ['At lægge tal sammen','At isolere eksponenten','At differentiere','At integrere'], ans: 1 },
      { q: 'Løs: $2 \\cdot 10^x = 200$',
        opts: ['$x = 100$','$x = 1$','$x = 2$','$x = 10$'], ans: 2 }
    ],
    '3-0': [
      { q: '$\\log(50) + \\log(2) = ?$',
        opts: ['$\\log(52)$','$\\log(48)$','$\\log(100) = 2$','$\\log(25)$'], ans: 2 },
      { q: 'Løs: $3 \\cdot 10^x = 3000$',
        opts: ['$x = 1$','$x = 2$','$x = 3$','$x = 1000$'], ans: 2 },
      { q: '$\\log(8^3) = ?$',
        opts: ['$3 \\cdot \\log(8) \\approx 2{,}71$','$\\log(3)$','$8^3$','$24$'], ans: 0 },
      { q: 'Hvad er log-papirets fordel?',
        opts: ['Eksponentielle funktioner vises som rette linjer','Det er nemmere at farvelægge','Det giver bedre afrunding','Ingen fordel'], ans: 0 },
      { q: 'Løs: $\\log(x^2) = 4$',
        opts: ['$x = 2$','$x = 100$','$x = \\pm 100$','$x = 4$'], ans: 2 }
    ]
  },

  // ────────────────────────────────────────────────────
  // ANDENGRADSPOLYNOMIER (HF B)
  // ────────────────────────────────────────────────────
  'andengradspolynomier-hf': {
    '0-1': [
      { q: 'Toppunktets $x$-koordinat i $f(x) = ax^2 + bx + c$:',
        opts: ['$x_T = -b/a$','$x_T = -b/(2a)$','$x_T = b/(2a)$','$x_T = -2b/a$'], ans: 1 },
      { q: 'For $f(x) = 2x^2 - 8x + 3$: $x$-koordinaten for toppunktet?',
        opts: ['$x = 1$','$x = 2$','$x = 4$','$x = -2$'], ans: 1 },
      { q: '$y$-koordinaten for toppunktet beregnes ved:',
        opts: ['$y_T = c$','$y_T = -b/(2a)$','$y_T = f(x_T)$','$y_T = b/(4a)$'], ans: 2 },
      { q: 'Når $a < 0$ i $f(x) = ax^2 + bx + c$ åbner parablen:',
        opts: ['Opad (smilende)','Nedad (grædende)','Er en linje','Er en cirkel'], ans: 1 },
      { q: '$f(x) = x^2 - 4x + 4 = ?$',
        opts: ['$(x-2)^2$','$(x+2)^2$','$(x-4)^2$','$(x-2)(x+2)$'], ans: 0 }
    ],
    '1-1': [
      { q: 'Diskriminanten $\\Delta = ?$',
        opts: ['$b^2 + 4ac$','$b^2 - 4ac$','$-b^2 - 4ac$','$4ac - b^2$'], ans: 1 },
      { q: '$\\Delta > 0$ betyder:',
        opts: ['Ingen rødder','Én rod','To reelle rødder','Parabel i origo'], ans: 2 },
      { q: '$\\Delta = 0$ betyder:',
        opts: ['Ingen reelle rødder','Præcis én rod (dobbeltrod)','To reelle rødder','Ingen information'], ans: 1 },
      { q: 'Rødderne i $x^2 - 5x + 6 = 0$:',
        opts: ['$x=1$ og $x=6$','$x=2$ og $x=3$','$x=-2$ og $x=-3$','$x=5$ og $x=6$'], ans: 1 },
      { q: 'Rødderne for $ax^2 + bx + c = 0$:',
        opts: ['$x = -b/(2a)$','$x = (b \\pm \\sqrt{\\Delta})/(2a)$','$x = (-b \\pm \\sqrt{\\Delta})/(2a)$','$x = (b \\pm \\sqrt{-\\Delta})/(2a)$'], ans: 2 }
    ],
    '2-1': [
      { q: '$f(x) = (x-2)(x+3)$ skærer x-aksen i:',
        opts: ['$x=2$ og $x=3$','$x=2$ og $x=-3$','$x=-2$ og $x=3$','$x=-2$ og $x=-3$'], ans: 1 },
      { q: 'Toppunktet for $f(x) = (x-2)^2 - 5$:',
        opts: ['$(2,\\,-5)$','$(-2,\\,5)$','$(2,\\,5)$','$(-2,\\,-5)$'], ans: 0 },
      { q: '$f(x) = x^2 - 6x + 5$ med rødder $x=1$ og $x=5$. Aksesymmetrilinjen er:',
        opts: ['$x = 1$','$x = 3$','$x = 5$','$x = 2$'], ans: 1 },
      { q: 'Parabel med toppunkt $(3,\\,-4)$ og $a=1$:',
        opts: ['$f(x) = (x-3)^2 + 4$','$f(x) = (x+3)^2 - 4$','$f(x) = (x-3)^2 - 4$','$f(x) = (x-4)^2 - 3$'], ans: 2 },
      { q: '$y$-skæringen for $f(x) = 2x^2 - 3x + 1$:',
        opts: ['0','-3','1','2'], ans: 2 }
    ],
    '3-1': [
      { q: 'Løs: $x^2 - 9 = 0$',
        opts: ['$x = 3$','$x = -3$','$x = \\pm 3$','$x = \\pm 9$'], ans: 2 },
      { q: 'Løs: $x^2 + 2x - 8 = 0$',
        opts: ['$x=2$ og $x=-4$','$x=-2$ og $x=4$','$x=4$ og $x=2$','$x=1$ og $x=-8$'], ans: 0 },
      { q: 'Løs: $2x^2 - x - 1 = 0$',
        opts: ['$x=1$ og $x=-0{,}5$','$x=2$ og $x=-1$','$x=0{,}5$ og $x=-1$','$x=1$ og $x=0{,}5$'], ans: 0 },
      { q: '$f(x) = x^2 - 4$. Nulpunkter ved:',
        opts: ['$x = 4$','$x = \\pm 2$','$x = 2$','$x = \\pm 4$'], ans: 1 },
      { q: 'Løs: $(x+1)^2 = 9$',
        opts: ['$x=2$ og $x=-4$','$x=3$ og $x=-3$','$x=8$ og $x=-8$','$x=2$ og $x=4$'], ans: 0 }
    ],
    '4-0': [
      { q: 'Rødderne i $x^2 - 5x + 6 = 0$:',
        opts: ['$x=1$ og $x=6$','$x=2$ og $x=3$','$x=-2$ og $x=-3$','$x=5$ og $x=1$'], ans: 1 },
      { q: 'Toppunkt for $f(x) = x^2 - 6x + 8$:',
        opts: ['$(3,\\,-1)$','$(-3,\\,1)$','$(3,\\,1)$','$(6,\\,8)$'], ans: 0 },
      { q: '$\\Delta$ for $2x^2 + 3x + 5 = 0$:',
        opts: ['-31','31','1','-1'], ans: 0 },
      { q: '$f(x) = -2(x-1)^2 + 8$. Toppunktet er:',
        opts: ['$(1,\\,8)$','$(-1,\\,8)$','$(1,\\,-8)$','$(2,\\,8)$'], ans: 0 },
      { q: 'Løs: $x^2 = 16$',
        opts: ['$x=4$','$x=-4$','$x=\\pm4$','$x=8$'], ans: 2 }
    ]
  },

  // ────────────────────────────────────────────────────
  // DIFFERENTIALREGNING (HF B)
  // ────────────────────────────────────────────────────
  'differentialregning-hf-b': {
    '0-1': [
      { q: 'Differentialkvotienten $f\'(x)$ beskriver:',
        opts: ['Arealet under kurven','Hæld­ningen af tangenten til kurven','Funktionens maksimale værdi','Kurvelængden'], ans: 1 },
      { q: 'Definition af $f\'(x)$:',
        opts: ['$\\lim_{h\\to0}\\frac{f(x+h)-f(x-h)}{2h}$','$\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$','$f(x+1)-f(x)$','$\\int f(x)\\,dx$'], ans: 1 },
      { q: '$f(x) = x^2$. Hvad er $f\'(x)$?',
        opts: ['$2$','$x$','$2x$','$x^2$'], ans: 2 },
      { q: '$f(x) = 5$ (konstant). Hvad er $f\'(x)$?',
        opts: ['5','1','0','Udefineret'], ans: 2 },
      { q: 'Et punkt hvor $f\'(x) = 0$ kaldes:',
        opts: ['Skæringspunkt','Stationært punkt','Infleksionspunkt','Asymptote'], ans: 1 }
    ],
    '1-1': [
      { q: 'Differentiér $f(x) = x^3$:',
        opts: ['$x^2$','$3x^2$','$3x$','$x^4$'], ans: 1 },
      { q: 'Differentiér $f(x) = 4x^5$:',
        opts: ['$4x^4$','$20x^4$','$20x^5$','$4x^6$'], ans: 1 },
      { q: 'Differentiér $f(x) = \\sqrt{x}$:',
        opts: ['$\\sqrt{x}/2$','$1/(2\\sqrt{x})$','$2\\sqrt{x}$','$x^{-1}$'], ans: 1 },
      { q: 'Differentiér $f(x) = e^x$:',
        opts: ['$x \\cdot e^{x-1}$','$e^x$','$e^{x+1}$','$x \\cdot e^x$'], ans: 1 },
      { q: 'Differentiér $f(x) = \\ln(x)$:',
        opts: ['$\\ln(x)/x$','$1/\\ln(x)$','$1/x$','$x/\\ln(x)$'], ans: 2 }
    ],
    '2-1': [
      { q: '$f\'(x) > 0$ i et interval betyder at $f$ er:',
        opts: ['Faldende','Konstant','Voksende','Har et maksimum'], ans: 2 },
      { q: '$f\'(x) < 0$ i et interval betyder at $f$ er:',
        opts: ['Voksende','Konstant','Har et minimum','Faldende'], ans: 3 },
      { q: '$f(x) = x^3 - 3x$. Stationære punkter ved:',
        opts: ['$x = 0$','$x = \\pm 1$','$x = \\pm 3$','$x = 1$'], ans: 1 },
      { q: '$f(x) = x^2$. Er $x=0$ et lokalt minimum eller maksimum?',
        opts: ['Lokalt maksimum','Lokalt minimum','Hverken','Globalt maksimum'], ans: 1 },
      { q: 'En funktion skifter fra voksende til faldende i $x=3$. Hvad er $x=3$?',
        opts: ['Lokalt minimum','Lokalt maksimum','Infleksionspunkt','Asymptote'], ans: 1 }
    ],
    '3-1': [
      { q: 'Tangentlinjens ligning i $(x_0, f(x_0))$:',
        opts: ['$y = f(x_0) + f\'(x_0)(x-x_0)$','$y = f\'(x_0) \\cdot x + f(x_0)$','$y = f(x_0) \\cdot x$','$y = f\'(x_0) - x_0$'], ans: 0 },
      { q: '$f(x) = x^2$. Tangentligning i $x=2$:',
        opts: ['$y = 4x - 4$','$y = 2x + 4$','$y = 4x + 4$','$y = 2x - 4$'], ans: 0 },
      { q: 'Hæld­ningen af tangenten til $f(x) = x^3$ i $x=1$:',
        opts: ['1','2','3','6'], ans: 2 },
      { q: 'Tangentlinjen og kurven:',
        opts: ['Har altid to skæringspunkter','Rører kurven i tangentpunktet','Er altid parallel med x-aksen','Er aldrig parallel'], ans: 1 },
      { q: 'Normallinjen i et punkt er:',
        opts: ['Parallel med tangenten','Vinkelret på tangenten','Det samme som tangenten','Parallel med x-aksen'], ans: 1 }
    ],
    '4-1': [
      { q: 'For at finde globalt maksimum på $[a,b]$:',
        opts: ['Find kun $f(a)$ og $f(b)$','Find kun stationære punkter','Undersøg stationære punkter OG randpunkter','Differentiér to gange'], ans: 2 },
      { q: '$f(x) = -x^2 + 4x$. Maksimumspunktet er:',
        opts: ['$(1,\\,3)$','$(2,\\,4)$','$(4,\\,0)$','$(0,\\,4)$'], ans: 1 },
      { q: 'Rektangel med omkreds 20. Max areal ved bredde:',
        opts: ['$b = 4$','$b = 5$','$b = 6$','$b = 10$'], ans: 1 },
      { q: 'Hvad er $f\'\'(x)$ for $f(x) = x^3$?',
        opts: ['$6$','$6x$','$3x$','$x^2$'], ans: 1 },
      { q: 'Hvis $f\'(x_0)=0$ og $f\'\'(x_0)>0$, er $x_0$:',
        opts: ['Lokalt maksimum','Infleksionspunkt','Lokalt minimum','Ikke stationært'], ans: 2 }
    ],
    '5-0': [
      { q: 'Differentiér $f(x) = 3x^4 - 2x^2 + 5$:',
        opts: ['$12x^3 - 4x$','$12x^3 - 2x$','$12x^4 - 4x$','$3x^3 - 2x$'], ans: 0 },
      { q: 'Stationære punkter for $f(x) = x^2 - 4x + 3$:',
        opts: ['$x = 0$','$x = 1$','$x = 2$','$x = 3$'], ans: 2 },
      { q: 'Tangentligning til $f(x) = x^3$ i $x=1$:',
        opts: ['$y = x + 1$','$y = 3x - 2$','$y = 3x + 2$','$y = 3x$'], ans: 1 },
      { q: '$f\'(x_0)=0$ og $f\'\'(x_0)<0$. Hvad er $x_0$?',
        opts: ['Lokalt minimum','Lokalt maksimum','Infleksionspunkt','Asymptote'], ans: 1 },
      { q: 'Maksimum af $f(x) = -x^2 + 6x - 5$:',
        opts: ['$f = 3$','$f = 4$','$f = 5$','$f = 6$'], ans: 1 }
    ]
  }
};

// Sæt cross-referencer
ALL_QUIZ_DATA['tal-og-algebra-b-niveau'] = ALL_QUIZ_DATA['tal-og-algebra'];
ALL_QUIZ_DATA['eksponentielle-funktioner-stx'] = ALL_QUIZ_DATA['eksponentielle-funktioner'];
ALL_CURRICULA['vektorer-matematik-b-stx-2aar'] = null; // håndteres i getCurriculum

// ── KURS-BESKRIVELSER ──
const COURSE_DESC = {
  'tal-og-algebra':             'Grundlæggende talsystemet, regningsarterne og simpel algebra. Bygger et fundament til al matematik.',
  'ligninger-1-aar-hf-2':       'Løsning af ligninger med én og to ubekendte, formler og omskrivning.',
  'procent-og-rentesregning':   'Procentberegning, fremskrivningsfaktor, simpel og sammensat rente.',
  'lineaer-funktioner':         'Den lineære funktion y = ax + b — hæld­ning, skæring og bestemmelse af forskrift.',
  'eksponentielle-funktioner':  'Eksponentielle funktioner, vækstrate, halverings- og fordoblingstid.',
  'geometri-og-trigonometri':   'Pythagoras, trigonometri (sin/cos/tan), sinus- og cosinusrelation, arealer og rumfang.',
  'deskriptiv-statistik':       'Statistisk beskrivelse: frekvens, gennemsnit, median, kvartiler og boksplot.',
  'sandsynlighedsregning':      'Sandsynlighed, kombinatorik og betinget sandsynlighed.',
  '10-tals-logaritme':          'Logaritmens definition, regneregler og ligninger med log.',
  'andengradspolynomier-hf':    'Andengradspolynomier, toppunkt, diskriminant og løsning af andengradsligninger.',
  'differentialregning-hf-b':   'Differentialkvotienten, differentieringsregler, monotoni, tangent og optimering.',
  'vektorer-matematik-b-stx-2aar': 'Vektorer i planen — skalarprodukt, projektion, determinanter, linjens ligning og cirkler.',
};

// Quiz tilstand
let quizState = null; // { questions, current, answers, submitted }

// ── CURRENT STATE ──
let currentPage = 'gymnasium';
let currentCourse = null;
let currentSection = 0;
let currentItem = 0;
let lessonSidebarOpen = true;
let openLessonSections = new Set([0]);

// ── NAVIGATION ──
function navigate(page, data) {
  currentPage = page;
  if (arguments.length > 1) currentCourse = data || null;
  closeMobileMenu();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateActiveNav(page);
}

function updateActiveNav(page) {
  document.querySelectorAll('.header-nav > ul > li').forEach(li => li.classList.remove('active'));
  const gymPages = ['gymnasium','hf','stx','hhx','hf-c','hf-b'];
  if (gymPages.includes(page)) {
    const gymLi = document.getElementById('nav-gymnasium');
    if (gymLi) gymLi.classList.add('active');
  }
}

// ── MOBILE MENU ──
function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  m.hidden = !m.hidden;
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').hidden = true;
}

// ── LESSON HELPERS ──
function getCurriculum() {
  const slug = currentCourse?.slug || 'vektorer-matematik-b-stx-2aar';
  if (slug === 'vektorer-matematik-b-stx-2aar') return VEKTORER_CURRICULUM;
  return ALL_CURRICULA[slug] || [
    { title: '1. Introduktion', items: [
      { type: 'lesson', title: 'Introduktion til ' + (currentCourse?.title || slug), dur: 'Kommer snart' }
    ]},
    { title: '2. Grundlæggende begreber', items: [
      { type: 'lesson', title: 'Teori og definitioner', dur: 'Kommer snart' },
      { type: 'quiz',   title: 'Test dig selv', dur: '5 spørgsmål' }
    ]},
    { title: '3. Øvelser og eksamen', items: [
      { type: 'quiz', title: 'Eksamensforberedelse', dur: '5 spørgsmål' }
    ]}
  ];
}

function getQuizData(key) {
  const slug = currentCourse?.slug || 'vektorer-matematik-b-stx-2aar';
  return (ALL_QUIZ_DATA[slug] || QUIZ_DATA)[key] || null;
}

function getFlatItems() {
  const flat = [];
  getCurriculum().forEach((sec, si) => {
    sec.items.forEach((item, ii) => flat.push({ si, ii, item, sec }));
  });
  return flat;
}

function getCurrentFlatIdx() {
  return getFlatItems().findIndex(f => f.si === currentSection && f.ii === currentItem);
}

function openLesson(sIdx, iIdx) {
  currentSection = sIdx;
  currentItem = iIdx;
  openLessonSections.add(sIdx);
  navigate('lesson');
}

function goNextLesson() {
  const flat = getFlatItems();
  const idx = getCurrentFlatIdx();
  if (idx < flat.length - 1) { const n = flat[idx + 1]; openLesson(n.si, n.ii); }
}

function goPrevLesson() {
  const flat = getFlatItems();
  const idx = getCurrentFlatIdx();
  if (idx > 0) { const p = flat[idx - 1]; openLesson(p.si, p.ii); }
}

function toggleLessonSidebar() {
  lessonSidebarOpen = !lessonSidebarOpen;
  const s = document.getElementById('lesson-sidebar');
  const t = document.getElementById('sidebar-toggle');
  if (s) s.classList.toggle('collapsed', !lessonSidebarOpen);
  if (t) t.textContent = lessonSidebarOpen ? '◀' : '▶';
}

function toggleLessonSection(sIdx) {
  if (openLessonSections.has(sIdx)) openLessonSections.delete(sIdx);
  else openLessonSections.add(sIdx);
  const body = document.getElementById(`ls-body-${sIdx}`);
  const chev = document.getElementById(`ls-chev-${sIdx}`);
  if (body) body.style.display = openLessonSections.has(sIdx) ? 'block' : 'none';
  if (chev) chev.style.transform = openLessonSections.has(sIdx) ? 'rotate(0deg)' : 'rotate(-90deg)';
}

// ── RENDER ──
function render() {
  const app = document.getElementById('app');
  switch (currentPage) {
    case 'gymnasium': app.innerHTML = renderGymnasium(); break;
    case 'hf':        app.innerHTML = renderHF(); break;
    case 'hf-c':      app.innerHTML = renderHFNiveau('c'); break;
    case 'hf-b':      app.innerHTML = renderHFNiveau('b'); break;
    case 'stx':       app.innerHTML = renderSTX(); break;
    case 'hhx':       app.innerHTML = renderHHX(); break;
    case 'course':    app.innerHTML = renderCourse(); break;
    case 'lesson':    app.innerHTML = renderLessonViewer(); break;
    case 'institutioner': app.innerHTML = renderSimple('Institutioner', 'Siden er under opbygning.'); break;
    case 'private':   app.innerHTML = renderSimple('Private og Forældre', 'Siden er under opbygning.'); break;
    case 'om':        app.innerHTML = renderSimple('Om NemMat', 'Vi hjælper gymnasieelever med matematik.'); break;
    case 'kontakt':   app.innerHTML = renderSimple('Kontakt', 'Ring til os på <a href="tel:50435078">50435078</a> eller skriv til <a href="mailto:info@nemmat.dk">info@nemmat.dk</a>'); break;
    case 'opret':     app.innerHTML = renderSimple('Opret konto', 'Besøg <a href="https://nemmat.dk/medlemsskabsniveauer" target="_blank">nemmat.dk</a> for at oprette konto.'); break;
    case 'konto':     app.innerHTML = renderSimple('Min konto', 'Log ind på <a href="https://nemmat.dk/lp-profil/" target="_blank">nemmat.dk</a>.'); break;
    default:          app.innerHTML = renderSimple('Side ikke fundet', ''); break;
  }
  // Fade-in animation
  app.style.animation = 'none';
  app.offsetHeight; // reflow
  app.style.animation = 'fadeIn .25s ease';
  bindEvents();
}

// ── GYMNASIUM SIDE (nemmat.dk/gymnasium) ──
function renderGymnasium() {
  const flat = getFlatItems();
  const totalDone = flat.filter(f => isCompleted(f.si, f.ii)).length;
  const pct = flat.length > 0 ? Math.round((totalDone / flat.length) * 100) : 0;

  return `
    ${renderBreadcrumb([])}
    <div class="gym-hero">
      <div class="gym-hero-inner">
        <div class="gym-hero-badge">🎓 Matematik gjort nemt</div>
        <h1 class="gym-hero-title">Bliv bedre til matematik</h1>
        <p class="gym-hero-sub">Videoer, quizzer og øvelser — tilpasset HF, STX og HHX</p>
        ${pct > 0 ? `
          <div class="gym-hero-progress">
            <div class="gym-progress-bar"><div class="gym-progress-fill" style="width:${pct}%"></div></div>
            <span class="gym-progress-txt">${totalDone} / ${flat.length} gennemført · ${pct}%</span>
          </div>` : `
          <button class="btn-hero-start" onclick="navigate('hf-c')">Start her →</button>`}
      </div>
    </div>
    <div style="background:var(--bg-light); padding: 40px 0 0;">
      <!-- STX sektion -->
      <div class="gym-section level-cards-section">
        <h2 class="gym-section-title">STX</h2>
        <div class="level-cards-grid cols-3">
          <div class="level-card" style="background-image:url('${STX_BG}')" onclick="navigate('stx')">
            <h2>C -Niveau</h2>
          </div>
          <a href="https://nemmat.dk/stx-2aar" target="_blank" rel="noopener" class="level-card" style="background-image:url('${STX_BG}')">
            <h2>B -Niveau</h2>
          </a>
          <a href="https://nemmat.dk/stx-3aar" target="_blank" rel="noopener" class="level-card" style="background-image:url('${STX_BG}')">
            <h2>A -Niveau</h2>
          </a>
        </div>
      </div>

      <!-- HF sektion -->
      <div class="gym-section level-cards-section">
        <h2 class="gym-section-title">HF</h2>
        <div class="level-cards-grid cols-2">
          <div class="level-card" style="background-image:url('${CARD_BG}')" onclick="navigate('hf-c')">
            <h2>C -Niveau</h2>
          </div>
          <div class="level-card" style="background-image:url('${CARD_BG}')" onclick="navigate('hf-b')">
            <h2>B -Niveau</h2>
          </div>
        </div>
      </div>

      <!-- HHX sektion -->
      <div class="gym-section level-cards-section">
        <h2 class="gym-section-title">HHX</h2>
        <div class="level-cards-grid cols-3">
          <div class="level-card" style="background-image:url('${HHX_BG}')" onclick="navigate('hhx')">
            <h2>C -Niveau</h2>
          </div>
          <a href="https://nemmat.dk/hhx-2aar" target="_blank" rel="noopener" class="level-card" style="background-image:url('${HHX_BG}')">
            <h2>B -Niveau</h2>
          </a>
          <a href="https://nemmat.dk/stx-3aar" target="_blank" rel="noopener" class="level-card" style="background-image:url('${HHX_BG}')">
            <h2>A -Niveau</h2>
          </a>
        </div>
      </div>
    </div>
  `;
}

// ── HF SIDE (nemmat.dk/hf) ──
function renderHF() {
  return `
    ${renderBreadcrumb([{label:'Gymnasium', page:'gymnasium'}])}
    <div class="page-hero">
      <div class="page-hero-inner">
        <h1>HF</h1>
      </div>
    </div>
    <div class="level-cards-section" style="padding-top:2rem;">
      <div class="level-cards-grid cols-2">
        <div class="level-card" style="background-image:url('${CARD_BG}')" onclick="navigate('hf-c')">
          <h2>Matematik C</h2>
        </div>
        <div class="level-card" style="background-image:url('${CARD_BG}')" onclick="navigate('hf-b')">
          <h2>Matematik B</h2>
        </div>
      </div>
    </div>
  `;
}

// ── HF C / B NIVEAU KURSUSSIDER ──
function renderHFNiveau(niveau) {
  const isC = niveau === 'c';
  const title = isC ? 'HF - C Niveau' : 'HF - B niveau';
  const courses = isC ? HF_C_COURSES : HF_B_COURSES;
  const breadParent = {label:'HF', page:'hf'};

  const subjectColors = {
    'beviser': '#6366f1', 'tal-og-algebra': '#2563eb', 'ligninger': '#0891b2',
    'procent': '#0d9488', 'funktions': '#059669', 'lineaer': '#16a34a',
    'eksponent': '#ca8a04', 'geometri': '#d97706', 'trigonometri': '#dc2626',
    'deskriptiv': '#db2777', 'sandsynlighed': '#9333ea', 'logaritme': '#7c3aed',
    'potens': '#2563eb', 'integral': '#0891b2', 'differentialregning': '#dc2626',
    'vektorer': '#6366f1'
  };
  const getColor = slug => {
    for (const [k, v] of Object.entries(subjectColors)) {
      if (slug.includes(k)) return v;
    }
    return '#356df1';
  };
  const cards = courses.map(c => {
    const color = getColor(c.slug);
    return `
    <div class="course-card" onclick="openCourse('${c.slug}','${encodeURIComponent(c.title)}')" style="--card-accent:${color}">
      <div class="course-card-img"
           style="background-image:url('${c.img}')"
           onerror="this.style.backgroundColor='#E1E9FD'">
        <div class="course-card-accent-bar" style="background:${color}"></div>
      </div>
      <div class="course-card-body">
        <h2>${c.title}${c.subtitle ? '<br><small style="font-size:13px;color:var(--muted);font-weight:400">' + c.subtitle + '</small>' : ''}</h2>
        <button class="btn-gaa-til" style="background:${color}">GÅ TIL KURSET</button>
      </div>
    </div>`;
  }).join('');

  return `
    ${renderBreadcrumb([{label:'Gymnasium',page:'gymnasium'},{label:'HF',page:'hf'}])}
    <div class="page-hero">
      <div class="page-hero-inner">
        <h1>${title}</h1>
      </div>
    </div>
    <div class="courses-section" style="padding-top:2rem;">
      <div class="courses-grid">${cards}</div>
    </div>
  `;
}

function openCourse(slug, titleEncoded) {
  currentCourse = { slug, title: decodeURIComponent(titleEncoded) };
  navigate('course');
}

// ── KURSUSSIDE ──
function renderCourse() {
  const c = currentCourse || { slug: 'tal-og-algebra', title: 'Tal og Algebra' };
  const slug = c.slug || '';
  const isFull = !currentCourse || !!ALL_CURRICULA[slug] || slug === 'vektorer-matematik-b-stx-2aar';
  const curriculum = getCurriculum();
  const totalLessons = curriculum.reduce((n,s) => n + s.items.filter(i=>i.type==='lesson').length, 0);
  const totalQuizzes = curriculum.reduce((n,s) => n + s.items.filter(i=>i.type==='quiz').length, 0);
  const comingSoonBanner = !isFull ? `
    <div class="coming-soon-banner">
      🚀 <strong>Dette kursus er under opbygning.</strong>
      Fuldt indhold med videoer og quizzer kommer snart.
      <a href="#" onclick="openCourse('vektorer-matematik-b-stx-2aar', encodeURIComponent('Vektorer 2D'));return false;" style="color:#356df1;font-weight:700;margin-left:8px">Prøv Vektorer 2D i stedet →</a>
    </div>` : '';

  const curriculumHtml = curriculum.map((sec, si) => {
    const doneInSec = sec.items.filter((_, ii) => isCompleted(si, ii)).length;
    const allDone = doneInSec === sec.items.length;
    return `
    <div class="curriculum-section">
      <div class="curriculum-section-header" onclick="toggleSection(${si})">
        <span>${sec.title}</span>
        ${allDone ? '<span class="section-done-badge">✓ Færdig</span>' : doneInSec > 0 ? `<span class="section-progress-badge">${doneInSec}/${sec.items.length}</span>` : ''}
        <span class="curriculum-section-meta">${sec.items.length} opgaver</span>
        <span id="chev-${si}" style="color:var(--primary);transition:transform .25s">▼</span>
      </div>
      <div class="curriculum-section-body ${si===0?'open':''}" id="sec-body-${si}">
        ${sec.items.map((item, ii) => {
          const done = isCompleted(si, ii);
          return `
          <div class="curriculum-item${done ? ' curriculum-item-done' : ''}" onclick="openLesson(${si},${ii})">
            <span class="item-icon">${done ? '✅' : item.type==='quiz' ? '❓' : '📄'}</span>
            <span class="item-title">${item.title}</span>
            ${done ? '' : '<span class="item-locked">🔒</span>'}
            ${item.dur ? `<span class="item-dur">${item.dur}</span>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');

  return `
    ${renderBreadcrumb([
      {label:'Gymnasium',page:'gymnasium'},
      {label:'HF',page:'hf'},
      {label:'HF C Niveau',page:'hf-c'}
    ])}
    ${comingSoonBanner}
    <div class="course-detail-wrap">
      <div class="course-main">
        <img
          src="${IMG_BASE}2024/12/IMG_E8AB72FD2CB8-1.webp"
          alt="${c.title}"
          class="course-featured-img"
          onerror="this.style.display='none'"
        />
        <h1>${c.title}</h1>

        <div class="course-tabs">
          <button class="course-tab active" onclick="switchTab('desc', this)">Beskrivelse</button>
          <button class="course-tab" onclick="switchTab('lektioner', this)">Lektioner</button>
        </div>

        <div class="course-tab-panel active" id="tab-desc">
          <div class="course-desc">
            <h3>${c.title}</h3>
            <p>${COURSE_DESC[c.slug] || 'Dette kursus giver dig en solid forståelse af emnet med videoer, quizzer og øvelser.'}</p>
            <p><strong>Kurset indeholder:</strong></p>
            <ul>
              ${curriculum.map(s => `<li>${s.title}</li>`).join('')}
            </ul>
            <p><strong>Kurset er for:</strong> dig der ønsker at mestre emnet og klare dig godt til eksamen.</p>
          </div>
        </div>

        <div class="course-tab-panel" id="tab-lektioner">
          <p style="margin-bottom:16px;color:var(--muted);font-size:14px;">
            ${curriculum.length} Sektioner &nbsp;|&nbsp; ${totalLessons} Lektioner &nbsp;|&nbsp; ${totalQuizzes} Quizzer &nbsp;|&nbsp; Lifetime adgang
          </p>
          ${curriculumHtml}
        </div>
      </div>

      <aside class="course-sidebar">
        <div class="course-enroll-box">
          ${(function() {
            const flat = getFlatItems();
            const totalDone = flat.filter(f => isCompleted(f.si, f.ii)).length;
            const pct = flat.length > 0 ? Math.round((totalDone / flat.length) * 100) : 0;
            const firstIncomplete = flat.findIndex(f => !isCompleted(f.si, f.ii));
            const btnLabel = totalDone === 0 ? 'Start Kursus' : totalDone === flat.length ? '✅ Kursus Gennemført!' : 'Fortsæt';
            const btnClick = firstIncomplete >= 0 ? `openLesson(${flat[firstIncomplete].si},${flat[firstIncomplete].ii})` : 'openLesson(0,0)';
            return `
              ${pct > 0 ? `<div class="course-enroll-progress">
                <div class="course-enroll-pbar"><div class="course-enroll-pfill" style="width:${pct}%"></div></div>
                <span class="course-enroll-pct">${pct}% gennemført</span>
              </div>` : ''}
              <button class="btn-start-kursus${pct === 100 ? ' done' : ''}" onclick="${btnClick}">${btnLabel}</button>
              <button class="btn-kob-med">Køb Medlemskab</button>`;
          })()}
          <ul class="course-meta-list">
            <li><span class="meta-label">Sektioner</span><span>${curriculum.length}</span></li>
            <li><span class="meta-label">Lektioner</span><span>${totalLessons}</span></li>
            <li><span class="meta-label">Quizzer</span><span>${totalQuizzes}</span></li>
            <li><span class="meta-label">Adgang</span><span>Lifetime</span></li>
          </ul>
        </div>
      </aside>
    </div>
  `;
}

// ── LEKTION VIEWER ──
function renderLessonViewer() {
  const curriculum = getCurriculum();
  const flat = getFlatItems();
  const flatIdx = getCurrentFlatIdx();
  const cur = flat[flatIdx];
  const nextEntry = flat[flatIdx + 1] || null;
  const prevEntry = flat[flatIdx - 1] || null;
  const item = cur ? cur.item : { type: 'lesson', title: '', dur: '' };
  const sec  = cur ? cur.sec  : { title: '' };
  const courseTitle = currentCourse ? currentCourse.title : 'Vektorer 2D';

  // ── SIDEBAR ──
  const sidebarHtml = curriculum.map((s, si) => {
    const isOpen = openLessonSections.has(si);
    const isActiveSection = si === currentSection;
    const doneCount = s.items.filter((_, ii) => isCompleted(si, ii)).length;
    const secPct = Math.round((doneCount / s.items.length) * 100);
    const sectionAllDone = doneCount === s.items.length;

    const itemsHtml = s.items.map((it, ii) => {
      const isActive = si === currentSection && ii === currentItem;
      const done = isCompleted(si, ii);
      return `
        <div class="lesson-sidebar-item${isActive ? ' active' : ''}${done ? ' completed' : ''}" onclick="openLesson(${si},${ii})">
          <span class="lesson-sidebar-item-icon">${it.type === 'quiz' ? '❓' : '📄'}</span>
          <span class="lesson-sidebar-item-title">${it.title}</span>
          <span class="lesson-sidebar-item-lock">🔒</span>
          ${it.dur ? `<span class="lesson-sidebar-item-dur">${it.dur}</span>` : ''}
        </div>`;
    }).join('');

    return `
      <div class="lesson-sidebar-section">
        <div class="lesson-sidebar-header${isActiveSection ? ' active-section' : ''}" onclick="toggleLessonSection(${si})">
          <span id="ls-chev-${si}" class="lesson-sidebar-chev" style="transform:${isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'}">▼</span>
          <span style="flex:1;margin-left:8px;font-size:12px">${s.title}</span>
          ${sectionAllDone ? '<span class="section-done-badge">✓</span>' : ''}
          <span class="lesson-sidebar-count">${doneCount}/${s.items.length}</span>
        </div>
        <div class="section-progress-bar">
          <div class="section-progress-fill" id="sec-prog-${si}" style="width:${secPct}%"></div>
        </div>
        <div class="lesson-sidebar-items" id="ls-body-${si}" style="display:${isOpen ? 'block' : 'none'}">
          ${itemsHtml}
        </div>
      </div>`;
  }).join('');

  // ── CONTENT ──
  const isQuiz = item.type === 'quiz';
  const quizKey = `${currentSection}-${currentItem}`;
  const quizQuestions = getQuizData(quizKey);
  const alreadyDone = isCompleted(currentSection, currentItem);

  // Init quiz state when entering a new quiz
  if (isQuiz && quizQuestions && (!quizState || quizState.key !== quizKey)) {
    quizState = { key: quizKey, current: 0, answers: new Array(quizQuestions.length).fill(null), submitted: false, score: 0 };
  }

  let contentHtml;
  if (isQuiz && quizQuestions) {
    contentHtml = renderQuizContent(quizQuestions, sec, item, alreadyDone);
  } else {
    contentHtml = `
    <div class="lesson-video-wrap">
      ${item.ytId ? `
        <iframe src="https://www.youtube.com/embed/${item.ytId}?rel=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>` : `
        <div class="lesson-video-placeholder">
          <div class="play-icon">▶</div>
          <span>${item.dur || 'Video'}</span>
        </div>`}
    </div>
    <div class="lesson-content-body">
      <div class="lesson-breadcrumb-mini">📚 ${sec.title}</div>
      <h2>${item.title}</h2>
      <p class="lesson-desc">${item.dur ? `⏱ ${item.dur}` : ''}</p>
    </div>
    <div class="lesson-complete-area">
      <button id="btn-complete"
        class="btn-mark-complete${alreadyDone ? ' done' : ''}"
        onclick="markComplete()"
        ${alreadyDone ? 'disabled' : ''}>
        ${alreadyDone ? '✅ Gennemført!' : '✅ Markér som gennemført'}
      </button>
      ${!alreadyDone ? `<span class="lesson-complete-hint">Klik når du er færdig med videoen</span>` : ''}
    </div>`;
  }

  // ── BOTTOM BAR ──
  const trunc = (t, n=40) => t && t.length > n ? t.substring(0, n) + '…' : t;
  const prevBtn = prevEntry
    ? `<button class="lesson-prev-btn" onclick="goPrevLesson()">← ${trunc(prevEntry.item.title)}</button>`
    : `<span class="lesson-edge-label">Første lektion</span>`;
  const nextBtn = nextEntry
    ? `<button class="lesson-next-btn" onclick="goNextLesson()">
         <div><span class="lesson-next-label">Næste</span>${trunc(nextEntry.item.title)}</div> →
       </button>`
    : `<span class="lesson-edge-label">Kurset er gennemført 🎉</span>`;

  // ── PROGRESS ──
  const pct = flat.length > 0 ? Math.round((flatIdx / flat.length) * 100) : 0;

  return `
    <div class="lesson-page">

      <!-- TOP BAR -->
      <div class="lesson-topbar">
        <button class="lesson-topbar-back" onclick="navigate('course')" title="Tilbage til kursus">←</button>
        <div class="lesson-topbar-title">${courseTitle}</div>
        <div class="lesson-progress-wrap">
          <div class="lesson-progress-bar"><div class="lesson-progress-fill" style="width:${pct}%"></div></div>
          <span class="lesson-progress-label">${pct}%</span>
        </div>
        <div class="lesson-topbar-search">
          <span style="color:var(--muted-lt);font-size:14px">🔍</span>
          <input type="text" placeholder="Søg i kurset…" />
        </div>
      </div>

      <!-- BODY: sidebar + content -->
      <div class="lesson-body">
        <div class="lesson-sidebar${lessonSidebarOpen ? '' : ' collapsed'}" id="lesson-sidebar">
          <button class="lesson-sidebar-toggle" id="sidebar-toggle" onclick="toggleLessonSidebar()">
            ${lessonSidebarOpen ? '◀' : '▶'}
          </button>
          <div class="lesson-sidebar-inner">${sidebarHtml}</div>
        </div>
        <div class="lesson-content">${contentHtml}</div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="lesson-bottombar">
        <div class="lesson-bottombar-prev">${prevBtn}</div>
        <div class="lesson-bottombar-next">${nextBtn}</div>
      </div>
    </div>`;
}

// ── QUIZ RENDER ──
function renderQuizContent(questions, sec, item, alreadyDone) {
  if (!quizState) return '';

  if (alreadyDone && !quizState.submitted) {
    quizState.submitted = true;
    quizState.score = questions.length;
  }

  if (quizState.submitted) {
    const score = quizState.score;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const grade = pct >= 80 ? '🏆 Fremragende!' : pct >= 60 ? '👍 Godt klaret!' : '💪 Prøv igen!';
    return `
      <div class="quiz-wrap">
        <div class="quiz-result-screen">
          <div class="quiz-result-icon">${pct >= 60 ? '🎉' : '📚'}</div>
          <h2 class="quiz-result-title">${grade}</h2>
          <div class="quiz-score-circle">
            <span class="quiz-score-num">${score}/${total}</span>
            <span class="quiz-score-pct">${pct}%</span>
          </div>
          <div class="quiz-result-bar-wrap">
            <div class="quiz-result-bar" style="width:${pct}%; background:${pct>=60?'linear-gradient(90deg,#356df1,#29CC57)':'linear-gradient(90deg,#f59e0b,#ef4444)'}"></div>
          </div>
          ${pct < 60 ? `<button class="btn-quiz-retry" onclick="retryQuiz()">🔄 Prøv igen</button>` : ''}
          <div class="quiz-review">
            ${questions.map((q, i) => {
              const userAns = quizState.answers[i];
              const correct = userAns === q.ans;
              return `
                <div class="quiz-review-item ${correct ? 'correct' : 'wrong'}">
                  <span class="quiz-review-icon">${correct ? '✅' : '❌'}</span>
                  <div>
                    <div class="quiz-review-q">Sp. ${i+1}</div>
                    <div class="quiz-review-a">${correct ? 'Korrekt' : `Forkert — rigtigt svar: ${q.opts[q.ans]}`}</div>
                  </div>
                </div>`;
            }).join('')}
          </div>
          <div class="lesson-complete-area" style="padding:0;margin-top:24px;">
            <button id="btn-complete"
              class="btn-mark-complete${alreadyDone ? ' done' : ''}"
              onclick="markComplete()"
              ${alreadyDone ? 'disabled' : ''}>
              ${alreadyDone ? '✅ Gennemført!' : '✅ Markér quiz som gennemført'}
            </button>
          </div>
        </div>
      </div>`;
  }

  const q = questions[quizState.current];
  const total = questions.length;
  const answered = quizState.answers[quizState.current];
  const progressPct = Math.round((quizState.current / total) * 100);

  return `
    <div class="quiz-wrap">
      <div class="quiz-header">
        <div class="quiz-breadcrumb">📚 ${sec.title}</div>
        <div class="quiz-progress-row">
          <span class="quiz-counter">Spørgsmål ${quizState.current + 1} / ${total}</span>
          <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progressPct}%"></div></div>
        </div>
      </div>

      <div class="quiz-question-card">
        <div class="quiz-q-number">Q${quizState.current + 1}</div>
        <p class="quiz-question-text">${q.q}</p>
        ${q.hint ? `<div class="quiz-hint">💡 ${q.hint}</div>` : ''}
        <div class="quiz-options">
          ${q.opts.map((opt, i) => {
            let cls = 'quiz-option';
            if (answered !== null) {
              if (i === q.ans) cls += ' correct';
              else if (i === answered) cls += ' wrong';
              else cls += ' dimmed';
            } else if (answered === i) {
              cls += ' selected';
            }
            return `<button class="${cls}" onclick="selectQuizAnswer(${i})" ${answered !== null ? 'disabled' : ''}>${opt}</button>`;
          }).join('')}
        </div>
        ${answered !== null ? `
          <div class="quiz-feedback ${answered === q.ans ? 'feedback-correct' : 'feedback-wrong'}">
            ${answered === q.ans ? '✅ Korrekt!' : `❌ Forkert. Svaret er: ${q.opts[q.ans]}`}
          </div>
          <button class="btn-quiz-next" onclick="nextQuizQuestion()">
            ${quizState.current < total - 1 ? 'Næste spørgsmål →' : 'Se resultat →'}
          </button>` : ''}
      </div>
    </div>`;
}

function selectQuizAnswer(optIdx) {
  if (!quizState || quizState.answers[quizState.current] !== null) return;
  const questions = getQuizData(quizState.key);
  quizState.answers[quizState.current] = optIdx;
  if (optIdx === questions[quizState.current].ans) quizState.score++;

  // Re-render content area only
  const content = document.querySelector('.lesson-content');
  if (content) {
    const sec = getCurriculum()[currentSection];
    const item = sec.items[currentItem];
    content.innerHTML = renderQuizContent(questions, sec, item, isCompleted(currentSection, currentItem));
    if (window.MathJax) MathJax.typesetPromise([content]).catch(()=>{});
  }
}

function nextQuizQuestion() {
  if (!quizState) return;
  const questions = getQuizData(quizState.key);
  if (quizState.current < questions.length - 1) {
    quizState.current++;
  } else {
    quizState.submitted = true;
  }
  const content = document.querySelector('.lesson-content');
  if (content) {
    const sec = getCurriculum()[currentSection];
    const item = sec.items[currentItem];
    content.innerHTML = renderQuizContent(questions, sec, item, isCompleted(currentSection, currentItem));
    if (window.MathJax) MathJax.typesetPromise([content]).catch(()=>{});
    content.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function retryQuiz() {
  if (!quizState) return;
  const questions = getQuizData(quizState.key);
  quizState = { key: quizState.key, current: 0, answers: new Array(questions.length).fill(null), submitted: false, score: 0 };
  const content = document.querySelector('.lesson-content');
  if (content) {
    const sec = getCurriculum()[currentSection];
    const item = sec.items[currentItem];
    content.innerHTML = renderQuizContent(questions, sec, item, false);
    if (window.MathJax) MathJax.typesetPromise([content]).catch(()=>{});
  }
}

// ── STX SIDE ──
function renderSTX() {
  const courses = [
    { slug: 'tal-og-algebrastx-1aar', title: 'Tal og Algebra', img: IMG_BASE+'2024/11/math.webp' },
    { slug: 'ligninger-og-formlerstx-c', title: 'Ligninger og Formler', img: IMG_BASE+'2024/11/equality.webp' },
    { slug: 'lineaer-funktion-stx', title: 'Lineære Funktioner', img: IMG_BASE+'2024/11/diagram-e1731763087784.png' },
    { slug: 'eksponentielle-funktioner-stx', title: 'Eksponentielle Funktioner', img: IMG_BASE+'2024/11/statistics.webp' },
    { slug: 'statistik-stx-c', title: 'Statistik', img: IMG_BASE+'2024/11/analytics.webp' },
    { slug: 'procent-og-rente-stx', title: 'Procent og Rente', img: IMG_BASE+'2024/11/interest-rate.webp' },
  ];
  return renderNiveauPage('STX', 'C Niveau', courses, [{label:'Gymnasium',page:'gymnasium'}]);
}

// ── HHX SIDE ──
function renderHHX() {
  const courses = [
    { slug: 'tal-hhx-c', title: 'Tal og Algebra', img: IMG_BASE+'2024/11/math.webp' },
    { slug: 'ligninger-hhx-c', title: 'Ligninger', img: IMG_BASE+'2024/11/equality.webp' },
  ];
  return renderNiveauPage('HHX', 'C Niveau', courses, [{label:'Gymnasium',page:'gymnasium'}]);
}

function renderNiveauPage(exam, niveau, courses, breadcrumbs) {
  const cards = courses.map(c => `
    <div class="course-card" onclick="openCourse('${c.slug}','${encodeURIComponent(c.title)}')">
      <div class="course-card-img" style="background-image:url('${c.img}')"></div>
      <div class="course-card-body">
        <h2>${c.title}</h2>
        <button class="btn-gaa-til">GÅ TIL KURSET</button>
      </div>
    </div>
  `).join('');
  return `
    ${renderBreadcrumb(breadcrumbs)}
    <div class="page-hero">
      <div class="page-hero-inner">
        <h1>${exam} - ${niveau}</h1>
      </div>
    </div>
    <div class="courses-section" style="padding-top:2rem;">
      <div class="courses-grid">${cards}</div>
    </div>
  `;
}

// ── SIMPEL SIDE ──
function renderSimple(title, body) {
  return `
    <div class="simple-page">
      <h1>${title}</h1>
      <p>${body}</p>
    </div>
  `;
}

// ── BREADCRUMB ──
function renderBreadcrumb(crumbs) {
  const parts = crumbs.map(c =>
    `<a href="#" onclick="navigate('${c.page}');return false;">${c.label}</a><span class="sep">›</span>`
  ).join('');
  return `
    <div class="breadcrumb-bar">
      <div class="breadcrumb-inner">
        <a href="#" onclick="navigate('gymnasium');return false;">Hjem</a>
        ${crumbs.length ? '<span class="sep">›</span>' : ''}
        ${parts}
      </div>
    </div>
  `;
}

// ── EVENT BINDING (efter render) ──
function bindEvents() {
  // GÅ TIL KURSET knapper
  document.querySelectorAll('.btn-gaa-til').forEach((btn, i) => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = btn.closest('.course-card');
      if (card) card.click();
    });
  });
  // Typeset MathJax på quiz-indhold
  if (window.MathJax && document.querySelector('.quiz-wrap')) {
    MathJax.typesetPromise([document.querySelector('.quiz-wrap')]).catch(()=>{});
  }
}

// ── TAB SWITCH ──
function switchTab(id, btn) {
  document.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.course-tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
}

// ── CURRICULUM ACCORDION ──
function toggleSection(idx) {
  const body = document.getElementById('sec-body-' + idx);
  const chev = document.getElementById('chev-' + idx);
  if (!body) return;
  const open = body.classList.toggle('open');
  if (chev) chev.style.transform = open ? 'rotate(0deg)' : 'rotate(-90deg)';
}

// ── COMPLETION TRACKING ──
const STORAGE_KEY = 'nemmat_completed';
let completedLessons = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons]));
}

function getLessonKey(si, ii) {
  const slug = currentCourse?.slug || 'default';
  return `${slug}:${si}-${ii}`;
}

function isCompleted(si, ii) { return completedLessons.has(getLessonKey(si, ii)); }

function markComplete() {
  const key = getLessonKey(currentSection, currentItem);
  completedLessons.add(key);
  saveCompleted();

  const btn = document.getElementById('btn-complete');
  if (btn) {
    btn.textContent = '✅ Gennemført!';
    btn.classList.add('done');
    btn.disabled = true;
  }

  // Opdater progress bar
  updateSidebarItem(currentSection, currentItem);
  updateSectionProgress(currentSection);
  updateTopProgress();

  // Check om hele sektionen er done
  const curriculum = getCurriculum();
  const sec = curriculum[currentSection];
  const sectionDone = sec.items.every((_, ii) => isCompleted(currentSection, ii));
  if (sectionDone) fireConfetti();

  // Auto-næste efter 1.5 sek
  setTimeout(() => goNextLesson(), 1500);
}

function updateSidebarItem(si, ii) {
  const items = document.querySelectorAll('.lesson-sidebar-item');
  const flat = getFlatItems();
  const idx = flat.findIndex(f => f.si === si && f.ii === ii);
  if (items[idx]) {
    if (isCompleted(si, ii)) items[idx].classList.add('completed');
    else items[idx].classList.remove('completed');
  }
}

function updateSectionProgress(si) {
  const fill = document.getElementById(`sec-prog-${si}`);
  if (!fill) return;
  const curriculum = getCurriculum();
  const sec = curriculum[si];
  const done = sec.items.filter((_, ii) => isCompleted(si, ii)).length;
  const pct = Math.round((done / sec.items.length) * 100);
  fill.style.width = pct + '%';
}

function updateTopProgress() {
  const fill = document.querySelector('.lesson-progress-fill');
  const label = document.querySelector('.lesson-progress-label');
  if (!fill) return;
  const flat = getFlatItems();
  const done = flat.filter(f => isCompleted(f.si, f.ii)).length;
  const pct = Math.round((done / flat.length) * 100);
  fill.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

// ── CONFETTI ──
function fireConfetti() {
  const colors = ['#356df1','#29CC57','#f59e0b','#ec4899','#8b5cf6','#06b6d4'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > .5 ? '50%' : '2px'};
      animation-delay: ${Math.random() * .5}s;
      animation-duration: ${1 + Math.random() * .8}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
}

// ── STREAK ──
function getStreak() {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem('nemmat_streak') || '{"streak":0,"last":""}');
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (data.last === today) return data.streak;
  if (data.last === yesterday) {
    const s = {...data, streak: data.streak + 1, last: today};
    localStorage.setItem('nemmat_streak', JSON.stringify(s));
    return s.streak;
  }
  if (data.last !== today) {
    const s = {streak: 1, last: today};
    localStorage.setItem('nemmat_streak', JSON.stringify(s));
    return 1;
  }
  return data.streak;
}

// ── PWA: OFFLINE BAR ──
window.addEventListener('online',  () => { document.getElementById('offline-bar').hidden = true; });
window.addEventListener('offline', () => { document.getElementById('offline-bar').hidden = false; });
if (!navigator.onLine) document.getElementById('offline-bar').hidden = false;

// ── SERVICE WORKER ──
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  const streak = getStreak();
  if (streak >= 2) {
    const bar = document.getElementById('offline-bar');
    const streakEl = document.createElement('div');
    streakEl.className = 'streak-banner';
    streakEl.textContent = `🔥 ${streak} dages streak! Godt gået!`;
    document.body.insertBefore(streakEl, document.body.firstChild);
    setTimeout(() => streakEl.style.display = 'none', 4000);
  }
  navigate('gymnasium');
});
