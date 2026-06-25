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
    { type: 'lesson', title: 'Teori – Grænseværdi', dur: '5 min', ytId: 'O29TgeO5JiM' }
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

// ── ANALYTISK PLAN GEOMETRI HF B (fra scraped data) ──
const ANALYTISK_CURRICULUM = [
  { title: '1. Introduktion til Analytisk Plan Geometri', items: [
    { type: 'lesson', title: 'Teori – Introduktion', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '8 spørgsmål' }
  ]},
  { title: '2. Den rette linje', items: [
    { type: 'lesson', title: 'Teori – Den rette linje', dur: '6 min' },
    { type: 'quiz',   title: 'Test din forståelse af den rette linje', dur: '8 spørgsmål' }
  ]},
  { title: '3. Ortogonale linjer og hældningsvinkel', items: [
    { type: 'lesson', title: 'Teori – Ortogonale linjer og hældningsvinkel', dur: '6 min' },
    { type: 'quiz',   title: 'Test din forståelse af ortogonale linjer', dur: '12 spørgsmål' }
  ]},
  { title: '4. Skæring mellem linjer', items: [
    { type: 'lesson', title: 'Teori – Skæring mellem linjer', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af skæring mellem linjer', dur: '6 spørgsmål' }
  ]},
  { title: '5. Afstand fra punkt til linje', items: [
    { type: 'lesson', title: 'Teori – Afstand fra punkt til linje', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af afstand fra punkt til linje', dur: '4 spørgsmål' }
  ]},
  { title: '6. Cirklens ligning', items: [
    { type: 'lesson', title: 'Teori – Cirklens ligning', dur: '6 min' },
    { type: 'quiz',   title: 'Test din forståelse af Cirklens ligning', dur: '7 spørgsmål' }
  ]},
  { title: '7. Punkt på cirkel', items: [
    { type: 'lesson', title: 'Teori – Punkt på cirkel', dur: '4 min' },
    { type: 'quiz',   title: 'Test din forståelse af punkt på cirkel', dur: '4 spørgsmål' }
  ]},
  { title: '8. Skæring mellem linje og cirkel', items: [
    { type: 'lesson', title: 'Teori – Skæring mellem linje og cirkel', dur: '6 min' },
    { type: 'quiz',   title: 'Antallet af skæring mellem linje og cirkel', dur: '5 spørgsmål' },
    { type: 'quiz',   title: 'Skæringpunkt mellem linje og cirkel', dur: '2 spørgsmål' }
  ]},
  { title: '9. Tangent til cirkel', items: [
    { type: 'lesson', title: 'Teori – Tangent til cirkel', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af tangent til cirkel', dur: '4 spørgsmål' }
  ]},
  { title: '10. Kvadratkomplettering', items: [
    { type: 'lesson', title: 'Teori – Kvadratkomplettering', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af kvadratkomplettering', dur: '5 spørgsmål' }
  ]},
  { title: '11. Eksamensforberedelse', items: [
    { type: 'quiz',   title: 'Eksamen uden hjælp med formelsamling', dur: '19 spørgsmål' },
    { type: 'quiz',   title: 'Eksamen med alle tilladte hjælpemidler', dur: '15 spørgsmål' }
  ]}
];

// ── FUNKTIONER B NIVEAU HF (fra scraped data) ──
const FUNKTIONER_B_CURRICULUM = [
  { title: '1. Introduktion til Funktioner', items: [
    { type: 'lesson', title: 'Teori – Funktionsbegrebet', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '11 spørgsmål' }
  ]},
  { title: '2. Graf og forskrift', items: [
    { type: 'lesson', title: 'Teori – Graf og forskrift', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '3. Funktioners egenskaber', items: [
    { type: 'lesson', title: 'Teori – Egenskaber', dur: '6 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '7 spørgsmål' }
  ]},
  { title: '4. Sammensatte funktioner', items: [
    { type: 'lesson', title: 'Teori – Sammensatte funktioner', dur: '6 min' },
    { type: 'quiz',   title: 'Test din forståelse af sammensatte funktioner', dur: '7 spørgsmål' }
  ]},
  { title: '5. Definitions- og værdimængde', items: [
    { type: 'lesson', title: 'Teori – Definitions- og værdimængde', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af Definition og Værdimængde', dur: '8 spørgsmål' }
  ]},
  { title: '6. Monotoniforhold', items: [
    { type: 'lesson', title: 'Teori – Monotoniforhold', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '9 spørgsmål' }
  ]},
  { title: '7. Parallelforskydning af grafer', items: [
    { type: 'lesson', title: 'Teori – Parallelforskydning', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse af parallelforskydning', dur: '8 spørgsmål' }
  ]},
  { title: '8. Eksamensforberedelse', items: [
    { type: 'quiz',   title: 'Skriftlig forberedelse delprøve 1', dur: '16 spørgsmål' },
    { type: 'quiz',   title: 'Skriftlig forberedelse delprøve 2', dur: '15 spørgsmål' }
  ]}
];

// ── BEVISER HF (C + B) — scraped fra nemmat.dk (7 sub-kurser merged, 33 lektioner) ──
const BEVISER_CURRICULUM = [
  { title: 'Procent og Rente — Renteformlen (Slutkapital)', items: [
    { type: 'lesson', title: 'Bevis for slutkapital', dur: '5 min' }
  ]},
  { title: 'Procent og Rente — Renteformlen (Startkapital)', items: [
    { type: 'lesson', title: 'Bevis for startkapital', dur: '3 min' }
  ]},
  { title: 'Procent og Rente — Renteformlen (Renten)', items: [
    { type: 'lesson', title: 'Bevis for renten', dur: '5 min' }
  ]},
  { title: 'Procent og Rente — Renteformlen (Termin)', items: [
    { type: 'lesson', title: 'Bevis for termin', dur: '4 min' }
  ]},
  { title: 'Lineære Funktioner — Hældningstallet (a)', items: [
    { type: 'lesson', title: 'Bevis for hvorfor a kaldes hældningskoefficient', dur: '6 min', ytId: 'N7H9i11_PVY' }
  ]},
  { title: 'Lineære Funktioner — Beregning af hældningskoefficienten', items: [
    { type: 'lesson', title: 'Bevis for beregning af a', dur: '8 min', ytId: 'mai2pc_4R-s' }
  ]},
  { title: 'Lineære Funktioner — To punkts formel (tallet b)', items: [
    { type: 'lesson', title: 'Bevis for beregning af tallet b i to punkts formlen', dur: '3 min', ytId: 'miJNYaT-uI8' }
  ]},
  { title: 'Lineære Funktioner — Skæring med akserne', items: [
    { type: 'lesson', title: 'Bevis for skæring med akserne', dur: '5 min', ytId: 'XdM_Y1I00U0' }
  ]},
  { title: 'Lineære Funktioner — Kendt punkt og hældningstal', items: [
    { type: 'lesson', title: 'Bevis for formlen for kendt punkt og hældningstallet', dur: '3 min', ytId: 'pwGkXva1thM' }
  ]},
  { title: 'Lineære Funktioner — Generel bevis for lineær tilvækst', items: [
    { type: 'lesson', title: 'Bevis for lineær tilvækst', dur: '5 min', ytId: 'eeAJaH8idu8' },
    { type: 'lesson', title: 'Bevis gennemgang med eksempler', dur: '5 min', ytId: 'k7m1h2pM1UA' }
  ]},
  { title: 'Lineære Funktioner — Fif til mundtlig eksamen', items: [
    { type: 'lesson', title: 'Råd og fif til eksamen', dur: '6 min', ytId: 'Buz6Fu6RDAw' }
  ]},
  { title: 'Eksponentielle Funktioner — a\'s betydning (tilvækst)', items: [
    { type: 'lesson', title: 'Bevis for a\'s betydning for grafen', dur: '8 min', ytId: 'StoboBCFDk0' }
  ]},
  { title: 'Eksponentielle Funktioner — To punkts formel for tallet a', items: [
    { type: 'lesson', title: 'Beregning af tallet a givet to punkter', dur: '4 min', ytId: 'V6y3aHGRBK0' }
  ]},
  { title: 'Eksponentielle Funktioner — b\'s betydning', items: [
    { type: 'lesson', title: 'Bevis for b\'s betydning og beregning ud fra to punkter', dur: '4 min', ytId: '49bdY49eEyE' }
  ]},
  { title: 'Eksponentielle Funktioner — Skæring med akserne', items: [
    { type: 'lesson', title: 'Bevis for skæring med akserne', dur: '4 min', ytId: '837dzEHlz3s' }
  ]},
  { title: 'Eksponentielle Funktioner — Fordoblingskonstanten', items: [
    { type: 'lesson', title: 'Bevis for fordoblingskonstanten', dur: '6 min', ytId: 'EHkfkEESk7M' }
  ]},
  { title: 'Eksponentielle Funktioner — Halveringskonstanten', items: [
    { type: 'lesson', title: 'Bevis for halveringskonstanten', dur: '5 min', ytId: 'EHhYZJbMZt0' }
  ]},
  { title: 'Eksponentielle Funktioner — Fif til mundtlig eksamen', items: [
    { type: 'lesson', title: 'FIF og råd til mundtlig eksamen', dur: '7 min', ytId: 'Pss4YvjYV-k' }
  ]},
  { title: 'Geometri og Trigonometri — Vinkelsum i trekant', items: [
    { type: 'lesson', title: 'Bevis for vinkelsummen i en trekant er 180 grader', dur: '4 min', ytId: 'RGYpvoHdReE' }
  ]},
  { title: 'Geometri og Trigonometri — Pythagoras sætning', items: [
    { type: 'lesson', title: 'Pythagoras sætning for retvinklede trekanter', dur: '9 min', ytId: 'JM48jWoVyZQ' }
  ]},
  { title: 'Geometri og Trigonometri — Cos, Sin og Tan-formlerne', items: [
    { type: 'lesson', title: 'Bevis for Cos, Sin og Tan-formlerne', dur: '8 min', ytId: 'LnIRO2EGuaU' }
  ]},
  { title: 'Geometri og Trigonometri — Areal af trekant med sinus', items: [
    { type: 'lesson', title: 'Bevis for areal med sinusformlen', dur: '4 min', ytId: 'U1YKi_a0St8' }
  ]},
  { title: 'Geometri og Trigonometri — Fif til eksamen', items: [
    { type: 'lesson', title: 'Gode råd og fif til eksamen', dur: '10 min', ytId: 'FcSYEFpe0UM' }
  ]},
  { title: 'Sandsynlighed — Symmetrisk sandsynlighedsfelt', items: [
    { type: 'lesson', title: 'Bevis for sandsynlighed i et symmetrisk sandsynlighedsfelt', dur: '3 min', ytId: 'G7xe-R2fitA' }
  ]},
  { title: 'Sandsynlighed — Hændelse', items: [
    { type: 'lesson', title: 'Bevis for hændelse-sandsynlighed', dur: '3 min', ytId: 'NVzgElxgBss' }
  ]},
  { title: 'Sandsynlighed — Permutation og kombination', items: [
    { type: 'lesson', title: 'Bevis for sammenhæng mellem permutation og kombination', dur: '9 min', ytId: 'l65lX-K10rs' }
  ]},
  { title: 'Sandsynlighed — Fif til mundtlig eksamen', items: [
    { type: 'lesson', title: 'Råd og fif til mundtlig eksamen', dur: '8 min', ytId: 'JKeUjcE5bmY' }
  ]},
  { title: '10-tals Logaritmer — Regneregler', items: [
    { type: 'lesson', title: 'Logaritmeregneregler — beviserne', dur: '8 min', ytId: 'k5lEkpp-vNg' }
  ]},
  { title: 'Potens-funktioner — a og b grafisk betydning', items: [
    { type: 'lesson', title: 'a og b grafisk betydning samt bevis for x-tilvækst', dur: '6 min', ytId: 'tI6NmdwT284' }
  ]},
  { title: 'Potens-funktioner — To punkts formel', items: [
    { type: 'lesson', title: 'Bevis for to punkts formlen', dur: '5 min', ytId: 'jA8Ov3N3iXs' }
  ]},
  { title: 'Potens-funktioner — Vækstrate', items: [
    { type: 'lesson', title: 'Bevis for procent-procent vækstrate', dur: '3 min', ytId: 'biKcNOnIU1M' }
  ]},
  { title: 'Potens-funktioner — Fif til mundtlig eksamen', items: [
    { type: 'lesson', title: 'Råd og fif til mundtlig eksamen', dur: '6 min', ytId: 'RB95bG10XOM' }
  ]}
];

// ── POTENS-FUNKTIONER HF-B — scraped fra nemmat.dk (6 lektioner, tekst-only) ──
const POTENS_CURRICULUM = [
  { title: '1. Motivation, Forskrift og Graf', items: [
    { type: 'lesson', title: 'Motivation', dur: '3 min', ytId: 'ugnlvFTtV6g' },
    { type: 'lesson', title: 'Forskrift og Graf', dur: '6 min', ytId: 'AN6aqzmD6r0' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '9 spørgsmål' }
  ]},
  { title: '2. Tallet a\'s betydning', items: [
    { type: 'lesson', title: 'Betydning af tallet a', dur: '3 min', ytId: 'x3FIBPqvACo' }
  ]},
  { title: '3. Beregning af forskrift ved hjælp af to punkts formlerne', items: [
    { type: 'lesson', title: 'Beregning af forskrift givet to punkter', dur: '4 min', ytId: 'voogOB81XAw' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '4 spørgsmål' }
  ]},
  { title: '4. Relativ vækstrate', items: [
    { type: 'lesson', title: 'Procent-procent vækstrate', dur: '6 min', ytId: 'pQflZ-vZszs' },
    { type: 'quiz',   title: 'Test din forståelse med potens modeller og relativ vækst', dur: '6 spørgsmål' }
  ]},
  { title: '5. Oversigt over de tre elementære funktioner', items: [
    { type: 'lesson', title: 'Oversigt over de tre elementære funktioner', dur: '9 min', ytId: 'zurB3tkWEug' }
  ]},
  { title: '6. Eksamensøvelser', items: [
    { type: 'quiz', title: 'Delprøve 1 uden hjælpemidler', dur: '7 spørgsmål' },
    { type: 'quiz', title: 'Delprøve 2 med hjælpemidler (potens regressions-opgaver)', dur: '15 spørgsmål' }
  ]}
];

// ── SANDSYNLIGHED OG STATISTIK B-NIVEAU — scraped fra nemmat.dk (24 lektioner, 10 quizzer) ──
const SANDSTAT_B_CURRICULUM = [
  { title: '1. Motivation', items: [
    { type: 'lesson', title: 'Teori – Motivation og eksperimenter med sandsynligheder', dur: '6 min', ytId: 'tVzzfK5yq_U' }
  ]},
  { title: '2. Sandsynlighedsfelt', items: [
    { type: 'lesson', title: 'Teori – Sandsynlighedsfelt', dur: '7 min', ytId: 'UDAoi8LbPdU' },
    { type: 'quiz',   title: 'Test din forståelse med brug af sandsynlighedsfelt', dur: '6 spørgsmål' }
  ]},
  { title: '3. Uafhængig og enten-eller-hændelser', items: [
    { type: 'lesson', title: 'Teori – Uafhængighed og enten-eller-sandsynligheder', dur: '8 min', ytId: '8AnJmDvZ6uA' },
    { type: 'quiz',   title: 'Test din forståelse af hændelser', dur: '2 spørgsmål' }
  ]},
  { title: '4. Stokastisk variabel', items: [
    { type: 'lesson', title: 'Teori – Stokastisk variabel', dur: '6 min', ytId: '0-1O0SaVlJw' },
    { type: 'lesson', title: 'Teori – Eksempel på sandsynlighedsfordeling for stokastisk variabel', dur: '4 min', ytId: 'bcEceISlwPE' },
    { type: 'lesson', title: 'Teori – Middelværdi, varians og spredning for stokastisk variabel', dur: '5 min', ytId: 'UnfS4uOp0Zc' },
    { type: 'quiz',   title: 'Test din viden om stokastisk variable', dur: '10 spørgsmål' }
  ]},
  { title: '5. Kombinatorik', items: [
    { type: 'lesson', title: 'Teori – Kombinatorik', dur: '8 min', ytId: '8zEVneRYe5k' },
    { type: 'quiz',   title: 'Test din forståelse af kombination og permutation', dur: '6 spørgsmål' }
  ]},
  { title: '6. Multiplikations- og additionsprincipperne', items: [
    { type: 'lesson', title: 'Teori – Kunsten at tælle muligheder med gange og plus', dur: '4 min', ytId: '4vmI-3JXdIs' },
    { type: 'quiz',   title: 'Test din viden om principperne', dur: '3 spørgsmål' }
  ]},
  { title: '7. Binomialfordeling', items: [
    { type: 'lesson', title: 'Teori – Binomialfordeling gennemgang med eksempel', dur: '9 min', ytId: '2jhFVza3FvQ' },
    { type: 'lesson', title: 'Teori – Sandsynlighedstabel, middelværdi og spredning for binomialfordeling', dur: '5 min', ytId: 'IBZ8_7NFq1s' },
    { type: 'quiz',   title: 'Test din forståelse med binomialfordeling', dur: '9 spørgsmål' }
  ]},
  { title: '8. Binomialtest', items: [
    { type: 'lesson', title: 'Binomialtest – Teori', dur: '5 min', ytId: 'RW8pQB3l7BM' },
    { type: 'lesson', title: 'Teori – Binomialtest del 1 med GeoGebra', dur: '7 min', ytId: 'kkoIFt2PTYA' },
    { type: 'lesson', title: 'Teori – Binomialtest del 2 med GeoGebra', dur: '10 min', ytId: 'A4s4YRR8q7g' },
    { type: 'quiz',   title: 'Test din forståelse af binomial-test', dur: '3 spørgsmål' }
  ]},
  { title: '9. Konfidensinterval for binomialfordeling', items: [
    { type: 'lesson', title: 'Teori – Konfidensinterval for binomialfordeling', dur: '7 min', ytId: 'F1LhmKOnJvc' },
    { type: 'quiz',   title: 'Test din viden om konfidensinterval', dur: '3 spørgsmål' }
  ]},
  { title: '10. Eksamensøvelser uden hjælpemidler', items: [
    { type: 'quiz', title: 'Eksamensligende opgaver u. hjælp', dur: '22 spørgsmål' }
  ]},
  { title: '11. Eksamensøvelser med alle tilladte hjælpemidler', items: [
    { type: 'quiz', title: 'Eksamensligende opgaver m. hjælp', dur: '13 spørgsmål' }
  ]},
  { title: '12. Betinget sandsynlighed og krydstabeller (supplerende stof)', items: [
    { type: 'lesson', title: 'Krydstabeller og sandsynlighedsberegning', dur: '6 min', ytId: '4JDZ8qCiS-c' },
    { type: 'lesson', title: 'Krydstabeller og uafhængighed', dur: '4 min', ytId: 'olFJD5tpiHI' }
  ]},
  { title: '13. Betinget sandsynlighed (supplerende stof)', items: [
    { type: 'lesson', title: 'Intro til mængdelære', dur: '9 min', ytId: 'SCuGnCfYcQQ' },
    { type: 'lesson', title: 'Sandsynlighedsberegning med hændelser', dur: '6 min', ytId: 'wpMlTBAWUj8' },
    { type: 'lesson', title: 'Betinget sandsynlighed del 1/3', dur: '7 min', ytId: 'Lvnm7F1rQag' },
    { type: 'lesson', title: 'Betinget sandsynlighed del 2/3', dur: '5 min', ytId: 'IZ0aI3iv-6g' },
    { type: 'lesson', title: 'Betinget sandsynlighed del 3/3', dur: '5 min', ytId: 'N1G6CW--UJg' },
    { type: 'lesson', title: 'Bayes\' formel', dur: '7 min', ytId: 'qYSPn5I32d4' }
  ]},
  { title: '14. Chi-i-anden og goodness-of-fit-test (supplerende stof)', items: [
    { type: 'lesson', title: 'Goodness-of-fit-test (GOF)', dur: '8 min', ytId: 'jWdr0xDhLu8' },
    { type: 'lesson', title: 'Uafhængighedstest', dur: '8 min', ytId: 'yJRb5txa2Bg' }
  ]}
];

// ── FUNKTIONS-BEGREBET HF-C (fra scraped data) ──
const FUNKTIONS_BEGREBET_CURRICULUM = [
  { title: '1. Hvad er en funktion?', items: [
    { type: 'lesson', title: 'Teori – Funktionsbegrebet', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '2. Graf og forskrift', items: [
    { type: 'lesson', title: 'Teori – Graf og forskrift', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '3. Funktioners egenskaber', items: [
    { type: 'lesson', title: 'Teori – Egenskaber', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '4. Definitions- og værdimængde', items: [
    { type: 'lesson', title: 'Teori – Definitions- og værdimængde', dur: '5 min' },
    { type: 'quiz',   title: 'Test din forståelse', dur: '3 spørgsmål' }
  ]},
  { title: '5. Eksamensforberedelse', items: [
    { type: 'quiz',   title: 'Eksamensøvelser', dur: '7 spørgsmål' }
  ]}
];

// ── ANNUITETSREGNING HF-B (fra scraped data) ──
const ANNUITETSREGNING_CURRICULUM = [
  { title: '1. Annuitetsopsparing', items: [
    { type: 'lesson', title: 'Teori – Annuitetsopsparing', dur: '6 min' },
    { type: 'quiz',   title: 'Øvelser om AnnuitetsOpsparing', dur: '10 spørgsmål' }
  ]},
  { title: '2. Annuitetslån', items: [
    { type: 'lesson', title: 'Teori – Annuitetslån', dur: '6 min' },
    { type: 'quiz',   title: 'Øvelser om AnnuitetsLån', dur: '11 spørgsmål' }
  ]}
];

// ── LIGNINGER OG FORMLER STX-C (fra scraped data) ──
const LIGNINGER_STX_CURRICULUM = [
  { title: '1. Introduktion til ligninger', items: [
    { type: 'lesson', title: 'Teori – Ligningsløsning', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt: Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '2. Lineære ligninger', items: [
    { type: 'lesson', title: 'Teori – Lineære ligninger', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '3. Uligheder', items: [
    { type: 'lesson', title: 'Teori – Uligheder', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '10 spørgsmål' }
  ]},
  { title: '4. To ligninger med to ubekendte', items: [
    { type: 'lesson', title: 'Teori – To ligninger med to ubekendte', dur: '6 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '5. Kvadratsætninger', items: [
    { type: 'lesson', title: 'Teori – Kvadratsætninger', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '6. Faktorisering', items: [
    { type: 'lesson', title: 'Teori – Faktorisering', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '7. Nulreglen', items: [
    { type: 'lesson', title: 'Teori – Nulreglen', dur: '4 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '8. Isolering af variable', items: [
    { type: 'lesson', title: 'Teori – Isolering af variable', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '7 spørgsmål' }
  ]},
  { title: '9. Andengradsligninger', items: [
    { type: 'lesson', title: 'Teori – Andengradsligninger', dur: '5 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
  ]},
  { title: '10. Formelregning', items: [
    { type: 'lesson', title: 'Teori – Formelregning', dur: '4 min' },
    { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '4 spørgsmål' }
  ]},
  { title: '11. Eksamensforberedelse', items: [
    { type: 'quiz',   title: 'Gør dig klar til den skriftlige Eksamen!', dur: '10 spørgsmål' }
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
  ],
  // Sektion 13 Eksamensforberedelse — Skriftlighed Delprøve 1 (50 spørgsmål)
  '12-0': [
  { q: 'I et koordinatsystem i planen er vektorerne givet ved $$\\vec{a}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$$ Bestem vektoren c , så $$\\vec{a}+\\vec{c}=2\\cdot \\vec{b}$$', opts: ['$$\\vec{c}=\\begin{pmatrix} 9 \\\\ -1 \\end{pmatrix}$$','$$\\vec{c}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$$','$$\\vec{c}=\\begin{pmatrix} -8 \\\\ 11 \\end{pmatrix}$$','$$\\vec{c}=\\begin{pmatrix} 9 \\\\ -1 \\end{pmatrix}$$'], ans: 2, ytId: 'LUrfkZ1FH8Y' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix}$$ Undersøge om $$\\vec{b}=k\\cdot \\hat{\\vec{a}}$$ Og i så fald bestem tallet k.', opts: ['$$k=3$$','$$k=1$$','$$k=-3$$','$$k=2$$'], ans: 0, ytId: '1MRe0IYjS-E' },
  { q: 'Bestem koordinaterne til vektor a , således at $$\\vec{a}-3\\cdot \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 20 \\\\ 14 \\end{pmatrix}$$', opts: ['$$\\vec{a}=\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$$','$$\\vec{a}=\\begin{pmatrix} 35 \\\\ 17 \\end{pmatrix}$$','$$\\vec{a}=\\begin{pmatrix} 3 \\\\17 \\end{pmatrix}$$','$$\\vec{a}=\\begin{pmatrix} 50 \\\\ 30 \\end{pmatrix}$$'], ans: 1, ytId: 'G9W4HU03OQo' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} 2 \\\\ -4t \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 6t-3 \\\\ 1 \\end{pmatrix}$$ Bestem skalarprodukt når, t=-1', opts: ['$$0$$','$$5$$','$$10$$','$$-14$$'], ans: 3, ytId: 'jL4qznMJQac' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} 2 \\\\ -4t \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 6t-3 \\\\ 1 \\end{pmatrix}$$ Bestem tallet t , så vektorerne står ortogonale på hinanden', opts: ['$$t=\\frac{3}{4}$$','$$t=\\frac{7}{2}$$','$$t=\\frac{6}{5}$$','$$t=\\frac{5}{2}$$'], ans: 0, ytId: '2bUxwWTljM8' },
  { q: 'Der gives vektorerne $$\\vec{a}=\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} t \\\\ 3 \\end{pmatrix}$$, hvor t er et tal Bestem t, så $$det(\\vec{a},\\vec{b})=35$$', opts: ['$$t=35$$','$$t=-2$$','$$t=4$$','$$t=-10$$'], ans: 3, ytId: '8ncF8HoLz1U' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} t \\\\ 10 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} t-4 \\\\ \\frac{3}{10} \\end{pmatrix}$$ Bestem de værdier af t, der gør de to vektorer vinkelrette', opts: ['$$t=0$$ eller $$t=3$$','$$t=1$$ eller $$t=3$$','$$t=0$$ eller $$t=2$$','$$t=2$$ eller $$t=-2$$'], ans: 1, ytId: '4hGTJ-oWcwo' },
  { q: 'To punkter er bestemt ved A(10,5) og B(5,5) samt en vektor $$\\vec{a}=\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$$ Bestem arealet af parallelogram udspændt af $$\\vec{AB}\\, \\text{og}\\, \\vec{a}$$', opts: ['$$20$$','$$30$$','$$45$$','$$10$$'], ans: 0, ytId: 'h9IHhs8eWNI' },
  { q: 'To punkter er bestemt ved A(2,1) og B(6,3) samt en vektor $$\\vec{a}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ Bestem projektion af $$\\vec{AB} \\, \\text{på} \\,\\vec{a}$$', opts: ['$$\\vec{AB_{\\vec{a}}}=\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$$','$$\\vec{AB_{\\vec{a}}}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$','$$\\vec{AB_{\\vec{a}}}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$','$$\\vec{AB_{\\vec{a}}}=\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$$'], ans: 3, ytId: '_Eg2qG9B95s' },
  { q: 'En parallelogram kan bestemmes ved hjælp af to følgende vektorer $$\\vec{a}=\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ Tegn en model af figuren og bestem arealet af det prallelogram de to vektorer udspænder( farvede område på figuren)', opts: ['$$10$$','$$4$$','$$6$$','$$8$$'], ans: 3, ytId: '-TD2TMKaUco' },
  { q: 'I et koordinatsystem modellen af en persons rute ved vektorerne $$\\vec{AB}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}, \\vec{BC}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}, \\vec{CD}=\\begin{pmatrix} t \\\\ 0 \\end{pmatrix}$$ Bestem tallet t ,når personen går direkte fra A til D, hvor $$\\vec{AD}=\\begin{pmatrix} 10 \\\\ 5 \\end{pmatrix}$$', opts: ['$$t=10$$','$$t=5$$','$$t=2$$','$$t=1$$'], ans: 1, ytId: 'sGeZk5KGZ7g' },
  { q: 'En linje l går gennem punktet P(4,3) og har retningsvektoren $$\\vec{r}=\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$ Tegn linjen l i et koordinatsystem og bestem en parameterfremstilling for linjen l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 13 \\\\ 5 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$'], ans: 2, ytId: 'Kyo6UKfimQY' },
  { q: 'En linje l går gennem punktet P(4,3) og har retningsvektoren $$\\vec{r}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$ Bestem linjens ligning for l', opts: ['$$3x+4y+2=0$$','$$-3x+4y+15=0$$','$$-3x+4y+10=0$$','$$-3x+4y=0$$'], ans: 3, ytId: 'H6JCROow3IA' },
  { q: 'En linje l går gennem punktet P(4,3) og har retningsvektoren $$\\vec{r}=\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$ En anden linje m har ligninigen $$6x-5y+10=0$$ Undersøg om linjerne l og m står vinkelret på hinanden', opts: ['$$\\text{Linjerne l og m er EJ vinkelret på hinanden}$$','$$\\text{Linjerne l og m er vinkelret på hinanden }$$'], ans: 0, ytId: 'tStSMrxkrCQ' },
  { q: 'En ret linje er givet ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ Beskriv linjen l ved et punkt og en retningsvektor', opts: ['Punktet er givet ved (4,-1) og retningsvektoren er $$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$','Punktet er givet ved (4,-1) og retningsvektoren er $$\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$$','Punktet er givet ved (2,1) og retningsvektoren er $$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$','Punktet er givet ved (2,1) og retningsvektoren er $$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$'], ans: 0, ytId: '7rRvqVKDR6E' },
  { q: 'En ret linje er givet ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ Bestem koordinatsættet for punktet på linjen l, når parameterværdien er t=7', opts: ['$$(x,y)=(11,7)$$','$$(x,y)=(10,6)$$','$$(x,y)=(18,6)$$','$$(x,y)=(1,7)$$'], ans: 2, ytId: 'frRyGBpupd4' },
  { q: 'En linje l er givet ved ligningen $$y=3\\cdot (x-2)+3$$ Bestem en parameterfremstilling for l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ -3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ -3 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}+t\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$$'], ans: 0, ytId: '7rXI2BYmsyQ' },
  { q: 'En linje l er givet ved ligningen $$y=3\\cdot (x-2)+3$$ En anden linje m er givet ved parameterfremstillingen $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$$ Undersøg om de to linjer l og m er ortogonale', opts: ['$$\\text{Linjerne l og m er ortogonale}$$','$$\\text{Linjerne l og m er ikke ortogonale}$$'], ans: 0, ytId: 'OILsgH4ZOxw' },
  { q: 'En linje l går gennem punkterne A(2,3) og B(5,6) Bestem en ligning for linjen l på formen $$ax+by+c=0$$', opts: ['$$-3x+2y+5=0$$','$$-x+y-1=0$$','$$-2x+3y+1=0$$','$$-x+2y+1=0$$'], ans: 1, ytId: 'UmFcUd_ePMY' },
  { q: 'En ret linje har hældning 3 og går gennem punktet A(-2,5) Bestem en parameterfremstilling for linjen l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$$'], ans: 1, ytId: 'ZU93abhIeRQ' },
  { q: 'Linjen l går gennem punkterne A(-1,3) og B(4,18) Bestem en parameterfremstilling for l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 18 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 18 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$$'], ans: 3, ytId: '8-Mj8FHeQLw' },
  { q: 'Linjen l går gennem punkterne A(-1,3) og B(4,18). En anden linje m står vinkelret på l og går gennem A Bestem en ligning for m', opts: ['$$5x-15y-40=0$$','$$x-y-8=0$$','$$5x-3y+15=0$$','$$x-3y-10=0$$'], ans: 0, ytId: '-yQJvufuxCA' },
  { q: 'I et koordinatsystem er givet punkterne A(0,3) og B(2,9) Bestem en ligning for den rette linje, der går gennem punktet C(2,5) og er parallel med vektoren $$\\vec{AB}$$', opts: ['$$-5x+y+1=0$$','$$-3x+2y=0$$','$$-6x+2y+2=0$$','$$5x+y+2=0$$'], ans: 2, ytId: 'Gof6oU9_Bs4' },
  { q: 'I et koordinatsystem er givet punkterne A(0,3) og B(2,9) og C(2,5) Bestem arealet af trekant ABC', opts: ['$$Areal=4$$','$$Areal=5$$','$$Areal=8$$','$$Areal=10$$'], ans: 0, ytId: 'AMygsF2Yqeo' },
  { q: 'Bestem en parameterfremstilling for linjen givet ved x=-5', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ -5 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$'], ans: 0, ytId: '_p3vHhS5Zmk' },
  { q: 'To linjer l og m er givet ved $$l: \\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ 6 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$$ $$m:y=3x+4$$ Bestem koordinatsættet til eventuelle skæringspunkter mellem linjerne m og l', opts: ['$$(\\frac{5}{9},\\frac{15}{3})$$','$$(\\frac{1}{9},\\frac{15}{3})$$','$$(\\frac{1}{9},\\frac{13}{3})$$','$$(\\frac{2}{9},\\frac{13}{5})$$'], ans: 2, ytId: 'VelY-6JjhdA' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$$ Undersøg om l og m er parallelle', opts: ['$$\\text{l og m er parallele}$$','$$\\text{l og m er ikke parallele}$$'], ans: 1, ytId: 'P76KndDClws' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$$ Bestem eventuelle koordinatsættet til skæringspunktet mellem linjerne l og m', opts: ['$$(2,2)$$','$$(3,3)$$','$$(3,2)$$','$$(4,2)$$'], ans: 2, ytId: 'QYZO6nUb9jc' },
  { q: 'En linje l er givet ved $$2x+y=7$$ linjen m står vinkelret på l og går gennem punktet P(3,1) Bestem koordinatsættet til skæringspunkterne mellem l og m', opts: ['$$(3,3)$$','$$(1,1)$$','$$(4,2)$$','$$(3,1)$$'], ans: 3, ytId: 'V_cLcPFgW8Q' },
  { q: 'Linjen l går gennem punkterne A(1,4) og B(5,20) Bestem en parameterfremstilling for l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 16 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 9 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 16 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 6 \\end{pmatrix}$$'], ans: 2, ytId: 'B5GETCIB2sM' },
  { q: 'Linjen l går gennem punkterne A(1,1) og B(3,3). Linjen m er givet ved ligningen $$y=-x+4$$ Bestem koordinatsættet til skæringspunkterne mellem linjerne l og m', opts: ['$$(2,3)$$','$$(-4,9)$$','$$(3,2)$$','$$(2,2)$$'], ans: 3, ytId: 'j0kudYuKlxQ' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 18 \\end{pmatrix}+t\\cdot \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix}$$ $$m:6x+4y=25$$ Gør rede for at linjerne l og m er parallelle', opts: ['$$\\text{Linjerne l og m er parallele fordi prikproduktet mellem normal vektoren for linjen m og retningsvektoren for l giver 0}$$','$$\\text{Linjerne l og m er parallele fordi prikproduktet mellem normal vektoren for linjen m og retningsvektoren for l giver -1}$$'], ans: 0, ytId: '1jzg98wEWyo' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}$$ $$m:3x+4y=25$$ Bestem afstanden mellem linjerne l og m', opts: ['$$d=2$$','$$d=3$$','$$d=1$$','$$d=4$$'], ans: 1, ytId: 'KMBf2-pF7sM' },
  { q: 'To linjer l og m i planen er givet ved To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$$$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$$ Undersøg om vinklen mellem l og m er 90 grader', opts: ['$$\\text{De er vinkelret fordi skalarproduktet af linjernes retningsvektorer giver 0}$$','$$\\text{De er ikke vinkelret fordi skalarproduktet af linjernes retningsvektorer giver ikke 0}$$'], ans: 0, ytId: 'Npy8W9kgMBM' },
  { q: 'En cirkel har ligningen: $$(x-2)^2+(y+3)^2=25$$ Bestem centrum og radius for cirklen Bemærk der kan være flere svar', opts: ['$$\\text{Centrums koordinaterne er (2,-3)}$$','$$\\text{Centrums koordinaterne er (2,3)}$$','$$\\text{Radius er 5 }$$','$$\\text{Radius er 25 }$$'], ans: 0, ytId: 'AxPT5txBfoo' },
  { q: 'En cirkel har centrum i C(4,6) og radius 1. Bestem en ligning for cirklen', opts: ['$$(x-4)^2+(y-6)^2=4$$','$$(x-4)^2+(y-6)^2=1$$','$$(x-2)^2+(y-4)^2=1$$','$$(x+4)^2+(y-+)^2=1$$'], ans: 1, ytId: 'yp9gjL2nCbs' },
  { q: 'Bestem radius og centrum for cirklen med ligningen $$x^2+y^2-4x-2y-4=0$$ Bemærk der kan være flere svar', opts: ['$$Centrum=(2,1) $$','$$Radius=5$$','$$Centrum = (4,3)$$','$$Radius =3 $$'], ans: 0, ytId: 'xITe4u8NIoM' },
  { q: 'En cirkel er givet ved ligningen $$(x+1)^2+(y-6)^2=9$$ Bestem koordinatsættet til cirklens centrum og radius Bemærk der kan være flere svarmuligheder', opts: ['$$Radius=9$$','$$Radius=3$$','$$Centrum=(-1,6)$$','$$Centrum=(1,2)$$'], ans: 1, ytId: 'qVCYFEDTi2Q' },
  { q: 'En cirkel er givet ved ligningen $$(x+1)^2+(y-6)^2=9$$ Et punkt P er givet ved P(-3,6) Bestem afstanden mellem cirklens centrum og punktet P, og brug denne til at afgøre, om punktet P ligger på cirklen', opts: ['$$\\text{Afstanden mellem cirklens centrum og punktet P er 1 som er mindre end radius. Så P ligger inde i cirklen}$$','$$\\text{Afstanden mellem cirklens centrum og punktet P er 2 som er mindre end radius. Så P ligger inde i cirklen}$$','$$\\text{Afstanden mellem cirklens centrum og punktet P er 3 som er lig med radius. Så P ligger på cirklen }$$','$$\\text{Afstanden mellem cirklens centrum og punktet P er 4 som er større end radius. Så P ligger udenfor i cirklen}$$'], ans: 1, ytId: 'KLjbhdrOrQk' },
  { q: 'En cirkel har ligningen $$x^2-2x+y^2+6y+8=0$$ Bestem cirklens radius og koordinatsættet til cirklens centrum. Bemærk der kan være flere svarmuligheder', opts: ['$$Centrum=(1,-3)$$','$$Centrum=(1,-1)$$','$$Radius=\\sqrt{2}$$','$$Radius=2$$'], ans: 0, ytId: 'zyglSgM9OQc' },
  { q: 'En cirkel har ligningen $$x^2-2x+y^2+6y+8=0$$ En linje l er bestemt ved parameterfremstillingen $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ -2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$$ Bestem koordinatsættet til hvert af skæringspunkterne mellem cirklen og linjen. Bemærk der kan være flere svarmuligheder', opts: ['$$(0,5)$$','$$(1,2)$$','$$(2,-4)$$','$$(0,-2)$$'], ans: 2, ytId: 'gXkET2CosFc' },
  { q: 'Bestem arealet af parallelogrammet som dannes af følgende to vektorer $$\\vec{a}=\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 1 \\\\ 5 \\end{pmatrix}$$', opts: ['$$15$$','$$27$$','$$12$$','$$9$$'], ans: 1, ytId: 'hvKVKXKuD-A' },
  { q: 'En vektor a⃗ er bestemt ved $$\\vec{a}=\\begin{pmatrix} t \\\\ 12 \\end{pmatrix}$$ Bestem længden af vektor a⃗ nåt t=0', opts: ['$$|\\vec{a}|=10$$','$$|\\vec{a}|=6$$','$$|\\vec{a}|=12$$','$$|\\vec{a}|=8$$'], ans: 2, ytId: '7y3fnkltMi0' },
  { q: 'En vektor a⃗ er bestemt ved $$\\vec{a}=\\begin{pmatrix} t \\\\ 12 \\end{pmatrix}$$ Bestem de værdier af tallet t, hvor længden af vektoren er lig 13 Bemærk der kan være flere svarmuligheder', opts: ['$$t=-5$$','$$t=2$$','$$t=-2$$','$$t=5$$'], ans: 0, ytId: 'Zb55WEHXIv8' },
  { q: 'Tre vektorer a⃗, b⃗ og c⃗ er bestemt ved$$\\vec{a}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}, \\vec{c}=\\begin{pmatrix} c_1 \\\\ c_2 \\end{pmatrix}$$ Det oplyses, at a⃗ · c⃗ = 5 b⃗ · c⃗ = 1 Bestem tallene c1 og c2.', opts: ['$$c_1=0 ,c_2=2$$','$$c_1=1 ,c_2=3$$','$$c_1=1 ,c_2=2$$','$$c_1=2 ,c_2=23$$'], ans: 2, ytId: '0_UYBEJCHGY' },
  { q: 'Trekant ABC er givet ved punkterne : A(1,4), B(5,4) og C(1,1) Undersøg om trekant ABC er retvinklet.', opts: ['$$\\text{Trekant ABC er ikke retvinklet}$$','$$\\text{Trekant ABC er ikke retvinklet i punktet A}$$','$$\\text{Trekant ABC er ikke retvinklet i punktet B}$$','$$\\text{Trekant ABC er ikke retvinklet i punktet C}$$'], ans: 1, ytId: 'yuE-2Rrpoyk' },
  { q: 'Trekant ABC er givet ved punkterne : A(1,4), B(5,4) og C(1,1) Bestem arealet af trekant ABC', opts: ['$$A=6$$','$$A=4$$','$$A=12$$','$$A=8$$'], ans: 0, ytId: 'kDdmtCFApJA' },
  { q: 'To vektorer a⃗ og b⃗ er bestemt ved $$\\vec{a}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}, \\vec{b}=\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$$ Bestem koordinatsættet til projektionen af b⃗ på a⃗. Dvs $$proj(b⃗_{ a⃗})$$', opts: ['$$(4,0)$$','$$(4,2)$$','$$(6,0)$$','$$(4,4)$$'], ans: 2, ytId: 'VZTpOhbVlt0' },
  { q: 'Bestem en parameterfremstilling for linjen x=4', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}+t\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$$'], ans: 0, ytId: 'e-XrB9fFEfU' },
  { q: 'Bestem en parameterfremstiling for linjen y=10', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 10 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 10 \\end{pmatrix}+t\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 10 \\end{pmatrix}+t\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$$'], ans: 3, ytId: 'n9ZGD8FHJCw' }
  ]
,
  // Sektion 13 Eksamensforberedelse — Skriftlighed Delprøve 2 (31 spørgsmål)
  '12-1': [
  { q: 'En linje l går gennem punktet Q(1,7) og har retningsvektor $$\\vec{r}=\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ Opskriv en parameterfremstilling for l', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 1 \\\\ -4 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$$'], ans: 1, ytId: 'eb_sZF4W5T8' },
  { q: 'En linje l går gennem punktet Q(1,7) og har retningsvektor $$\\vec{r}=\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ Bestem koordinatsættet til skæringspunktet mellem l og koordinatsystemets førsteakse', opts: ['$$(\\frac{25}{4},0)$$','$$(\\frac{13}{5},0)$$','$$(2,0)$$','$$(-5,0)$$'], ans: 0, ytId: 'VLMUeeggjDk' },
  { q: 'En linje l går gennem punktet Q(1,7) og har retningsvektor $$\\vec{r}=\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ Bestem den spidse vinkel mellem l og koordinatsystemets førsteakse', opts: ['$$45,5^{\\circ}$$','$$33,6^{\\circ}$$','$$53,1^{\\circ}$$','$$89,5^{\\circ}$$'], ans: 2, ytId: 'ndOA10-p94I' },
  { q: 'En linje er givet ved parameterfremstillingen: $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$$ Bestem en ligning for linjen', opts: ['$$3x+4y-17=0$$','$$x+5y-15=0$$','$$2x+2y-19=0$$','$$x+2y-11=0$$'], ans: 3, ytId: '1O4zK9yYXE8' },
  { q: 'En linje er givet ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$$ Bestem afstanden mellem linjen og punktet P(5,1)', opts: ['$$1,79$$','$$3,67$$','$$4,79$$','$$5,50$$'], ans: 0, ytId: 'kQC2wZzBQks' },
  { q: 'En linje er givet ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$$ Bestem den spidse vinkel mellem linjen og førsteaksen', opts: ['$$16,6^{\\circ}$$','$$26,6^{\\circ}$$','$$46,6^{\\circ}$$','$$56,6^{\\circ}$$'], ans: 1, ytId: 'FvHV_b_yiCA' },
  { q: 'En linje er givet ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$$ Bestem den spidse vinkel mellem linjen og andenaksen', opts: ['$$33,4^{\\circ}$$','$$53,4^{\\circ}$$','$$63,4^{\\circ}$$','$$23,4^{\\circ}$$'], ans: 2, ytId: 'QzJVWrz1bCQ' },
  { q: 'To linjer er givet ved parameterfremstillingen $$l: \\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}+s\\cdot \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$ Bestem eventuelle skæringspunktet mellem linjerne', opts: ['$$(\\frac{20}{13},\\frac{25}{13})$$','$$(\\frac{20}{11},\\frac{25}{11})$$','$$(\\frac{20}{9},\\frac{25}{9})$$','$$(\\frac{20}{7},\\frac{25}{7})$$'], ans: 1, ytId: '6CnsuJADPmY' },
  { q: 'To linjer er givet ved parameterfremstillingen $$l: \\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}+s\\cdot \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$ Bestem den spidse vinkel mellem linjen l og m', opts: ['$$34,8^{\\circ}$$','$$44,8^{\\circ}$$','$$54,8^{\\circ}$$','$$74,8^{\\circ}$$'], ans: 3, ytId: '3r5vUG0h0CE' },
  { q: 'I et koordinatsystem er to punkter givet ved A(2,5) og B(4,11). Bestem $$\\vec{AB}$$', opts: ['$$\\vec{AB}=\\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$$','$$\\vec{AB}=\\begin{pmatrix} 11 \\\\ 1 \\end{pmatrix}$$','$$\\vec{AB}=\\begin{pmatrix} -1 \\\\ 9 \\end{pmatrix}$$','$$\\vec{AB}=\\begin{pmatrix} 1 \\\\ 11 \\end{pmatrix}$$'], ans: 0, ytId: '9tP455OLJhk' },
  { q: 'Linjen l er givet ved $$3x-9y-7=0$$ og i et koordinatsystem er to punkter givet ved A(2,5) og B(4,11).Undersøg, om $$\\vec{AB}$$ er parallel med linjen l', opts: ['$$\\text{De er ikke parallele, grundet de ikke har samme forhold (skalarproduktet er forskellige fra nul)}$$','$$\\text{De er parallele, grundet de har samme forhold (skalarproduktet er nul)}$$'], ans: 0, ytId: 'KhDoWxstOJE' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}, \\quad \\vec{b}=\\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix}$$ Bestem vinklen mellem de to vektorer', opts: ['$$55^{\\circ}$$','$$75^{\\circ}$$','$$51^{\\circ}$$','$$90^{\\circ}$$'], ans: 2, ytId: 'JkI76VDK8xs' },
  { q: 'To vektorer er givet ved $$\\vec{a}=\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}, \\quad \\vec{b}=\\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix}$$ Bestem projektionen af vektor b på vektor a. Dvs $$\\vec{b_{\\vec{a}}}$$', opts: ['$$(\\frac{41}{17},\\frac{71}{17})$$','$$(\\frac{39}{17},\\frac{65}{17})$$','$$(\\frac{35}{17},\\frac{90}{17})$$','$$(\\frac{39}{15},\\frac{65}{15})$$'], ans: 1, ytId: 'Cpek1vLmP5Q' },
  { q: 'To linjer l og m er givet ved parameterfremstillingen $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$$ Bestem koordinatsættet til skæringspunktet mellem l og m', opts: ['$$(\\frac{63}{7},\\frac{6}{7})$$','$$(\\frac{55}{3},\\frac{2}{3})$$','$$(\\frac{55}{9},\\frac{3}{7})$$','$$(\\frac{55}{7},\\frac{2}{7})$$'], ans: 3, ytId: 'Wy8PqHpKRvw' },
  { q: 'To linjer l og m er givet ved parameterfremstillingen $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$$ $$m:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$$ Bestem den stumpe vinkel mellem linjerne l og m', opts: ['$$81,9^{\\circ}$$','$$131,9^{\\circ}$$','$$98,1^{\\circ}$$','$$151,9^{\\circ}$$'], ans: 2, ytId: '86BfVLtwssQ' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$ $$m:2x-y=5$$ Bestem koordinatsættet til skæringspunkt mellem l og m', opts: ['$$(2,2)$$','$$(2,-1)$$','$$(3,-1)$$','$$(4,2)$$'], ans: 1, ytId: 's6EYNsJ5UK4' },
  { q: 'To linjer l og m er givet ved $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$ $$m:2x-y=5$$ Bestem den spidse vinkel mellem l og m', opts: ['$$76,6^{\\circ}$$','$$46,6^{\\circ}$$','$$36,6^{\\circ}$$','$$26,6^{\\circ}$$'], ans: 3, ytId: 'rOYSliW_rwc' },
  { q: 'En linje l er givet ved parameterfremstillingen $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$$ Bestem ved beregning koordinatsættet til skæringspunktet mellem l og x aksen.', opts: ['$$(\\frac{10}{3},0)$$','$$(\\frac{14}{3},0)$$','$$(\\frac{7}{3},0)$$','$$(\\frac{11}{3},0)$$'], ans: 1, ytId: 'Qnh0nDEp4YU' },
  { q: 'En linje l er givet ved parameterfremstillingen $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$$ Bestem den spidse vinkel mellem linjen l og x aksen', opts: ['$$41,5^{\\circ}$$','$$61,5^{\\circ}$$','$$51,5^{\\circ}$$','$$31,5^{\\circ}$$'], ans: 3, ytId: 'RrIJXcOCiuA' },
  { q: 'En linje l er givet ved ligningen $$l: 4x-3y+10=0$$ Et punkt P har koordinaterne P(1,-2) Brug en formel til at bestemme afstanden mellem linjen l og punktet P', opts: ['$$10$$','$$4$$','$$7$$','$$2$$'], ans: 1, ytId: 'OobmwYzufjs' },
  { q: 'En linje l er givet ved ligningen $$l: 4x-3y+10=0$$ Et punkt P har koordinaterne P(1,-2) En linje m går gennem P og står vinkelret på linjen l. Bestem en parameterfremstilling for linjen m.', opts: ['$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}$$','$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$$'], ans: 2, ytId: 'HUd3A8tLNX8' },
  { q: 'En cirkel C og en linje l er givet ved $$C: (x+3)^2+(y-2)^2=25$$ $$l:\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 52 \\\\ 3 \\end{pmatrix}$$ Bestem koordinatsættet til hvert af skæringspunkterne mellem cirklen og linjen Bemærk der skal angives to svar muligheder', opts: ['$$(-6.62,-1.44)$$','$$(4,2)$$','$$(3,4)$$','$$(1,-1)$$'], ans: 0, ytId: 'HxNfwuMWoF0' },
  { q: 'Linjen l har ligningen $$y=-2x+3$$Bestem ved beregning hældningsvinklen for linjen l', opts: ['$$63,4^{\\circ}$$','$$116,6^{\\circ}$$','$$96,6^{\\circ}$$','$$146,6^{\\circ}$$'], ans: 1, ytId: 'K1mSAbC0fmE' },
  { q: 'Linjen l har ligningen $$y=-2x+3$$ En cirkel har centrum i punktet C(4,-1) og har linjen l som tangent Bestem en ligning for cirklen', opts: ['$$(x-4)^2+(y+1)^2=1,7889^2$$','$$(x-4)^2+(y+1)^2=3,5^2$$','$$(x-4)^2+(y+1)^2=36$$','$$(x-4)^2+(y+1)^2=16$$'], ans: 0, ytId: 'sHJ0LhA8HE8' },
  { q: 'En cirkel har centrum C(1,-2) og radius r=4 Bestem en ligning for cirklen', opts: ['$$(x-1)^2+(y+2)^2=9$$','$$(x-1)^2+(y+2)^2=4$$','$$(x-1)^2+(y+2)^2=25$$','$$(x-1)^2+(y+2)^2=16$$'], ans: 3, ytId: 'x8dT-hLO2fM' },
  { q: 'En cirkel har centrum C(1,-2) og radius r=4 Cirklen har to tangenter, der er parallele med vektoren $$\\vec{a}=\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$$ Bestem koordinatsættet til hvert af de to tangenters røringspunkter med cirklen og angiv svaret med 4 decimaler', opts: ['$$(3,2188;-5,3282)$$','$$(-5,2188;5,3282)$$','$$(-1,2188;1,3282)$$','$$(4,2188;8,3282)$$'], ans: 0, ytId: 'dj8tnJz66pk' },
  { q: 'På figuren ses to skibes sejlruter indlagt i et koordinatsystem med enheden meter på begge akser. Skib A befinder sig til begyndelsestidspunktet i punktet A(50,300). Skib B befinder sig til begyndelsestidspunktet i punktet B(800,100). Skib A‘s sejlrute kan beskrives ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 50 \\\\ 300 \\end{pmatrix}+s\\cdot \\begin{pmatrix} 60\\\\ 40 \\end{pmatrix}$$, hvor s angiver antal minutter efter begyndelsespunktet Skib B‘s sejlrute kan beskrives ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 800 \\\\ 100 \\end{pmatrix}+t\\cdot \\begin{pmatrix} -50\\\\ 70 \\end{pmatrix}$$, hvor t angiver antal minutter efter begyndselspunktet Skæringspunktet for de to sejlruter kaldes P. Bestem hvilket af de to skibe der først når frem til P', opts: ['$$\\text{Skib A når først frem til punkt P}$$','$$\\text{Skib B når først frem til punkt P}$$'], ans: 1, ytId: '1yN4aSfnxnk' },
  { q: 'En cyklist bevæger sig mod sportshallen i skolegården, indlagt i et koordinatsystem med enhed meter på begge akser. Cyklisten bane kan beskrives ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}, 0\\leq t \\leq 10$$, hvor t angiver sekunder efter cyklisten starter Bestem koordinatsættet til cyklistens position til tidspunktet 4 sekunder efter start.', opts: ['$$(21,1)$$','$$(1,10)$$','$$(11,1)$$','$$(10,3)$$'], ans: 0, ytId: 'hW_HdIrsyFc' },
  { q: 'En cyklist bevæger sig mod sportshallen i skolegården, indlagt i et koordinatsystem med enhed meter på begge akser. Cyklisten bane kan beskrives ved parameterfremstillingen $$\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}+t\\cdot \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}, 0\\leq t \\leq 10$$, hvor t angiver sekunder efter cyklisten starter Midtercirklen i skolegården kan beskrives ved ligningen $$(x-8)^2+(y-2)^2=9$$ Bestem ved beregning det tidspunkt, hvor cyklisten første gang passerer midtercirklen', opts: ['$$t=1,20s$$','$$t=3,93s$$','$$t=3,37s$$','$$t=1,6s$$'], ans: 3, ytId: 'wh3tCmLGmrg' },
  { q: 'Fire punkter er givet i et koordinatsystem: A(1, 2), B(5, 3), C(6, 7) og D(2, 6) Bestem arealet af parallelogram som dannes af vektorerne AB og AD', opts: ['$$4$$','$$15$$','$$17$$','$$25$$'], ans: 1, ytId: '09qzlWyV0Hg' },
  { q: 'Tre punkter er givet: A(2, 3), B(5, 7), og C(6, 2) Beregn arealet af trekant ABC ved hjælp af determinanter.', opts: ['$$9$$','$$19$$','$$10$$','$$25$$'], ans: 1, ytId: 'dJL6WOnYgH4' }
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
  'analytisk-plan-geometri-hf-b': ANALYTISK_CURRICULUM,
  'funktioner-b-niveau': FUNKTIONER_B_CURRICULUM,
  'funktions-begrebet': FUNKTIONS_BEGREBET_CURRICULUM,
  'annuitetsregning': ANNUITETSREGNING_CURRICULUM,
  'ligninger-og-formlerstx-c': LIGNINGER_STX_CURRICULUM,
  // STX-C genbruger HF-C curricula (samme pensum)
  'tal-og-algebrastx-1aar': TAL_ALGEBRA_CURRICULUM,
  'lineaer-funktion-stx': LINEAER_CURRICULUM,
  'procent-og-rente-stx': PROCENT_CURRICULUM,
  // HHX-C genbruger HF-C curricula
  'tal-hhx-c': TAL_ALGEBRA_CURRICULUM,
  'ligninger-hhx-c': LIGNINGER_CURRICULUM,
  'vektorer-i-planen-stx-a': VEKTORER_CURRICULUM,
  // Placeholder curricula (lesson-only — scraped data findes ikke endnu)
  'beviserhf1': BEVISER_CURRICULUM,
  'beviser-hf-mat-b': BEVISER_CURRICULUM,
  'potens-funktioner-hf-b': POTENS_CURRICULUM,
  'sandstat-b-gym': SANDSTAT_B_CURRICULUM,
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
        opts: ['Naturligt tal','Rationalt tal','Irrationalt tal','Helt tal'], ans: 2, ytId: 'PIJwhN-Kggs' },
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
    ],
    '2-2': [
      { q: 'En webshop registrerer profit per produkt: $200,300,200,400,300,300,200,200,400,300$. Procentdel med profit $200$?',
        opts: ['$25\\%$','$30\\%$','$35\\%$','$40\\%$'], ans: 3 },
      { q: 'Bagerbutik: $12,18,12,12,15,18,12,15$. Procentdel af varer med profit $12$?',
        opts: ['$40\\%$','$50\\%$','$45\\%$','$60\\%$'], ans: 1 },
      { q: 'Yndlingsfag: Mat,Dansk,Mat,Mat,Eng,Dansk,Mat,Dansk,Mat,Eng. Frekvens for Matematik?',
        opts: ['$30\\%$','$40\\%$','$50\\%$','$70\\%$'], ans: 2 },
      { q: 'Kantinesnacks: Chips,Frugt,Chips,Chokolade,Chips,Chips,Frugt,Chips. Frekvens for Frugt?',
        opts: ['$45\\%$','$50\\%$','$20\\%$','$25\\%$'], ans: 3 },
      { q: 'Lektietimer: $2,3,2,4,3,2,5,3,2,4,3$. Frekvens for $4$?',
        opts: ['$15\\%$','$\\approx 18\\%$','$30\\%$','$35\\%$'], ans: 1 }
    ],
    '3-2': [
      { q: 'Datasæt: $100,150,200,250,300,350,400,450,500$. Bestem øvre kvartil $Q_3$.',
        opts: ['$250$','$425$','$400$','$300$'], ans: 1 },
      { q: 'Løbertider (sorteret): $185,190,195,200,210,215,225,230,240$. Bestem kvartilsættet.',
        opts: ['$Q_1=192{,}5,\\ Q_2=210,\\ Q_3=227{,}5$','$Q_1=192{,}5,\\ Q_2=220,\\ Q_3=227{,}5$','$Q_1=200,\\ Q_2=210,\\ Q_3=227{,}5$','$Q_1=192{,}5,\\ Q_2=210,\\ Q_3=210$'], ans: 0 },
      { q: 'Karakterer: $2,4,7,7,7,10,10,12,12,12,12$. Boksplot: min=2, $Q_1=?$, max=12.',
        opts: ['$Q_1=4$','$Q_1=10$','$Q_1=7$','$Q_1=12$'], ans: 2 },
      { q: 'By A (median 15°C) og By B (median 18°C). Hvad kan konkluderes fra boksplottene?',
        opts: ['By B er varmere på de fleste dage','By A er varmere på de fleste dage','Ingen forskel','Det kan ikke afgøres'], ans: 0 }
    ],
    '4-3': [
      { q: 'Cyklede km: $12,15,14,10,11,13,15$. Hvad er middelværdien?',
        opts: ['$12{,}5$','$13$','$13{,}5$','$14$'], ans: 1 },
      { q: 'Karakterer: $4,7,7,10,2,12,7,10,7,4$. Hvad er gennemsnittet?',
        opts: ['$6{,}5$','$7{,}0$','$7{,}5$','$8{,}0$'], ans: 1 },
      { q: 'Hvornår er middelværdi (gennemsnit) og median ens?',
        opts: ['Aldrig','Kun ved 2 observationer','Når datasættet er symmetrisk fordelt','Altid'], ans: 2 },
      { q: 'I et boksplot udgør "boksen" (fra $Q_1$ til $Q_3$):',
        opts: ['De midterste 25% af data','De midterste 50% af data','De midterste 75% af data','Al data'], ans: 1 }
    ],
    '5-5': [
      { q: 'I et frekvenshistogram for klassedelte data: hvad viser y-aksen?',
        opts: ['De præcise observationsværdier','Frekvens (hyppighed) per interval','Kumuleret sum','Alle observationer'], ans: 1 },
      { q: 'Interval $[10; 20[$. Hvilken observation tilhører dette interval?',
        opts: ['$9$','$10$','$20$','$25$'], ans: 1 },
      { q: 'Turistdata: interval [30-39] har frekvens 30% og kumuleret frekvens 60%. Hvad betyder "60%"?',
        opts: ['30% af turisterne er i [30-39]','60% er i [30-39]','60% af turisterne er under 40 år','40% er over 30 år'], ans: 2 },
      { q: 'Klasse: lektietimer fordelt i intervaller. Interval [2;4[ har 8 ud af 20 elever. Frekvensen er:',
        opts: ['$8\\%$','$20\\%$','$40\\%$','$4\\%$'], ans: 2 }
    ],
    '6-4': [
      { q: 'Karakterer: $2,4,4,7,8,10,12,12,20$. Er 20 en outlier ($Q_1=4$, $Q_3=12$, $IQR=8$)?',
        opts: ['Ja, grænse er $Q_3+1{,}5\\cdot IQR=24>20$ — nej, men tæt på','Ja, 20 er en outlier ifølge kurset','Nej, 20 er ikke en outlier','Kun hvis $n>10$'], ans: 1 },
      { q: 'Skærmtid: $1,2,2,3,3,3,4,5,6,10$. $Q_1=2$, $Q_3=5$, $IQR=3$. Er 10 en outlier?',
        opts: ['Ja, øvre grænse $= 5+1{,}5\\cdot 3=9{,}5 < 10$','Nej, 10 er indenfor grænsen','Kun hvis $n>15$','Det kan ikke afgøres'], ans: 0 },
      { q: 'Standardafvigelse $s=0$ betyder:',
        opts: ['Gennemsnittet er 0','Alle observationer er ens','Datasættet har mange outliers','Variansen er negativ'], ans: 1 },
      { q: 'Hvad er variansen, hvis $s=4$?',
        opts: ['$2$','$4$','$8$','$16$'], ans: 3 }
    ],
    '7-1': [
      { q: 'Datasæt: $5,8,8,9,10,12,15$. Median?',
        opts: ['$8$','$9$','$10$','$12$'], ans: 1 },
      { q: 'Datasæt: $5,8,8,9,10,12,15$. $Q_1$?',
        opts: ['$5$','$8$','$9$','$10$'], ans: 1 },
      { q: 'Datasæt: $5,8,8,9,10,12,15$. $Q_3$?',
        opts: ['$10$','$11$','$12$','$15$'], ans: 1 },
      { q: 'Gennemsnit af $5,8,8,9,10,12,15$?',
        opts: ['$9$','$9{,}57$','$10$','$8{,}5$'], ans: 1 },
      { q: 'Er middeltallet altid lig medianen?',
        opts: ['Ja, altid','Nej — middeltallet påvirkes mere af ekstreme værdier','Kun ved store datasæt','Kun ved ulige antal observationer'], ans: 1 }
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
    ],
    '1-3': [
      { q: 'Restaurant: 3 forretter og 2 hovedretter. Antal 2-retters menuer?',
        opts: ['$4$','$5$','$6$','$8$'], ans: 2 },
      { q: 'Terning (6 sider) kastes og mønt (2 sider) slås. Antal muligheder i alt?',
        opts: ['$4$','$10$','$8$','$12$'], ans: 3 },
      { q: 'Skole: 3 formiddagsfag og 4 eftermiddagsfag. Antal dagsprogrammer (ét af hver)?',
        opts: ['$7$','$10$','$12$','$8$'], ans: 2 },
      { q: 'Sportsvalg: 2 fodboldhold, 3 håndboldhold, 2 volleyballhold. Eleven vælger ét hold. Antal valg?',
        opts: ['$5$','$6$','$7$','$9$'], ans: 2 },
      { q: 'Outfit: 3 trøjer, 2 par bukser, 2 par sko (alle skal vælges). Antal outfits?',
        opts: ['$6$','$24$','$12$','$8$'], ans: 2 }
    ],
    '2-2': [
      { q: '5 bøger skal arrangeres på en hylde. Antal måder?',
        opts: ['$150$','$120$','$5$','$70$'], ans: 1 },
      { q: 'Beregn $\\dfrac{10!}{9!}$',
        opts: ['$1$','$9$','$10$','$120$'], ans: 2 },
      { q: '4 kugler i forskellig farve skal arrangeres. Antal måder?',
        opts: ['$12$','$48$','$24$','$4$'], ans: 2 },
      { q: 'Bogstaverne i "ALI" skal arrangeres. Antal permutationer?',
        opts: ['$6$','$3$','$2$','$9$'], ans: 0 },
      { q: '8 elever skal vælge 3 til projektgruppe (orden ligegyldig). Antal måder?',
        opts: ['$48$','$8$','$3$','$56$'], ans: 3 }
    ],
    '3-3': [
      { q: 'En pose: 8 røde, 5 blå, 7 grønne kugler (20 i alt). $P(\\text{blå}) = ?$',
        opts: ['$\\frac{1}{20}$','$\\frac{1}{4}$','$\\frac{1}{5}$','$\\frac{7}{20}$'], ans: 1 },
      { q: 'Samme pose. $P(\\text{rød}) = ?$',
        opts: ['$\\frac{1}{5}$','$\\frac{2}{5}$','$\\frac{7}{20}$','$\\frac{1}{4}$'], ans: 1 },
      { q: 'Summen af alle sandsynligheder i et sandsynlighedsfelt er:',
        opts: ['$0$','$0{,}5$','$1$','Afhænger af udfaldsrummet'], ans: 2 },
      { q: 'Sandsynligheder er altid i intervallet:',
        opts: ['$[-1;\\ 1]$','$[0;\\ 1]$','$[0;\\ 100]$','$[0;\\ \\infty[$'], ans: 1 }
    ],
    '4-2': [
      { q: 'To terninger kastes. $P(\\text{begge viser 6}) = ?$',
        opts: ['$\\frac{1}{3}$','$\\frac{1}{2}$','$\\frac{1}{4}$','$\\frac{1}{36}$'], ans: 3 },
      { q: 'To terninger kastes. $P(\\text{én viser 4 og anden 5}) = ?$',
        opts: ['$\\frac{1}{36}$','$\\frac{1}{6}$','$\\frac{1}{4}$','$\\frac{1}{40}$'], ans: 0 },
      { q: 'Café: 6 chokoladekager, 4 isdesserter, 5 frugtdesserter. $P(\\text{chokolade eller is}) = ?$',
        opts: ['$\\frac{1}{4}$','$\\frac{1}{6}$','$\\frac{1}{3}$','$\\frac{2}{3}$'], ans: 3 },
      { q: 'Samme café. $P(\\text{is eller frugt}) = ?$',
        opts: ['$\\frac{1}{5}$','$\\frac{9}{15}$','$\\frac{1}{4}$','$\\frac{10}{15}$'], ans: 1 }
    ],
    '5-0': [
      { q: 'To terninger kastes. $X$ = sum af øjne. $P(X < 9) = ?$',
        opts: ['$\\frac{26}{36}=\\frac{13}{18}$','$\\frac{20}{36}=\\frac{5}{9}$','$\\frac{10}{36}=\\frac{5}{18}$','$\\frac{2}{36}=\\frac{1}{18}$'], ans: 0 },
      { q: 'Samme spil. $P(X > 10) = ?$',
        opts: ['$\\frac{3}{36}$','$\\frac{5}{36}$','$\\frac{18}{36}$','$\\frac{20}{36}$'], ans: 0 },
      { q: 'Samme spil. $P(X \\text{ er et primtal}) = ?$ (primtal: 2, 3, 5, 7, 11)',
        opts: ['$\\frac{7}{36}$','$\\frac{5}{36}$','$\\frac{11}{36}$','$\\frac{15}{36}$'], ans: 3 }
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
    ],
    '2-0': [
      { q: 'Lydniveauet $f(x) = 92 - 25\\cdot\\log(x)$ dB. Bestem $f(3)$.',
        opts: ['$80{,}1\\text{ dB}$','$83{,}1\\text{ dB}$','$79{,}1\\text{ dB}$','$82{,}1\\text{ dB}$'], ans: 0 },
      { q: 'Løs $f(x) = 70$ for $f(x) = 92 - 25\\cdot\\log(x)$. Hvad fortæller løsningen?',
        opts: ['Afstand 100 m giver 100 dB','Afstand 20 m giver 140 dB','Afstand $\\approx7{,}59$ m giver 70 dB','Afstand 70 m giver 7,59 dB'], ans: 2 }
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
    ],
    '1-3': [
      { q: 'Angiv koefficienterne for $f(x)=3x^2-6x+10$',
        opts: ['$a=3,b=10,c=-6$','$a=3,b=6,c=10$','$a=10,b=6,c=3$','$a=3,b=-6,c=10$'], ans: 3, ytId: 'RtBcktFV834' },
      { q: 'Angiv koefficienterne for $f(x)=x^2+5$',
        opts: ['$a=1,b=5,c=0$','$a=1,b=0,c=5$','$a=0,b=0,c=5$','$a=1,b=1,c=5$'], ans: 1, ytId: 'RtBcktFV834' },
      { q: 'Hvad er koefficienten foran andengradsleddet?',
        opts: ['$b$','$a$'], ans: 1, ytId: 'RtBcktFV834' },
      { q: 'Angiv koefficienterne for $f(x)=-x^2+2x$',
        opts: ['$a=-1,b=2,c=0$','$a=1,b=0,c=2$','$a=-1,b=0,c=2$','$a=1,b=2,c=0$'], ans: 0, ytId: 'RtBcktFV834' },
      { q: 'Angiv koefficienterne for $f(x)=-5x^2-4x-3$',
        opts: ['$a=5,b=-3,c=-4$','$a=5,b=4,c=3$','$a=5,b=4,c=-3$','$a=-5,b=-4,c=-3$'], ans: 3, ytId: 'RtBcktFV834' },
      { q: 'Hvad er koefficienten foran førstegradsleddet?',
        opts: ['$b$','$c$'], ans: 0, ytId: 'RtBcktFV834' },
      { q: 'Angiv koefficienterne for $f(x)=0{,}5x^2$',
        opts: ['$a=2,b=0,c=0$','$a=0,b=0,c=5$','$a=0{,}5,b=0,c=0$','$a=5,b=0,c=0$'], ans: 2, ytId: 'RtBcktFV834' },
      { q: 'Hvad kaldes grafen for et andengradspolynomium?',
        opts: ['Parabel','Cirkel'], ans: 0, ytId: 'RtBcktFV834' },
      { q: 'Hvilken koefficient svarer til konstantleddet i et andengradspolynomium?',
        opts: ['$a$','$c$'], ans: 1, ytId: 'RtBcktFV834' }
    ],
    '2-2': [
      { q: 'Beregn toppunktskoordinat for $f(x)=x^2-6x+8$',
        opts: ['$(1,-3)$','$(1,3)$','$(3,-1)$','$(2,-1)$'], ans: 2, ytId: 'aPyLhkcKakc' },
      { q: 'Aflæs toppunktskoordinaterne fra grafen for en parabel',
        opts: ['$(2,-16)$','$(2,16)$','$(-2,16)$','$(-2,-16)$'], ans: 3, ytId: '-7q8SXxv0cw' },
      { q: 'Aflæs førstekoordinaten til toppunktet ved symmetriargument',
        opts: ['$x=-2$','$x=2$','$x=-16$','$x=16$'], ans: 0, ytId: '-7q8SXxv0cw' },
      { q: 'Beregn toppunktskoordinat for $f(x)=-3x^2+12x-7$',
        opts: ['$(2,-3)$','$(1,4)$','$(2,5)$','$(2,2)$'], ans: 2, ytId: 'rzH7dKLnj2M' },
      { q: '$h(t)=-t^2+6t+4$: hvornår er boldens højde maksimal, og hvad er den?',
        opts: ['1 sek, 8 m','5 sek, 25 m','2 sek, 10 m','3 sek, 13 m'], ans: 3, ytId: 'HyiA94Jl5yE' }
    ],
    '3-3': [
      { q: 'Løs $x^2-x-12=0$',
        opts: ['$x=-2$ eller $x=-3$','$x=3$ eller $x=4$','$x=-3$ eller $x=4$','$x=-1$ eller $x=5$'], ans: 2, ytId: 'oxG4i8mopiQ' },
      { q: 'Løs $2x^2-3x-2=0$',
        opts: ['$x=-2$ eller $x=-3$','$x=-3$ eller $x=3$','$x=0$ eller $x=2$','$x=-\\frac{1}{2}$ eller $x=2$'], ans: 3, ytId: 'teB-Kg52Ugc' },
      { q: 'Løs $x^2-5x=0$',
        opts: ['$x=-5$ eller $x=1$','$x=0$ eller $x=5$','$x=5$ eller $x=-1$','$x=0$ eller $x=-5$'], ans: 1, ytId: 'DEUmye5Aceg' },
      { q: 'Løs $2x^2+6x=0$',
        opts: ['$x=0$ eller $x=-3$','$x=-2$ eller $x=0$','$x=0$ eller $x=3$','$x=-1$ eller $x=3$'], ans: 0, ytId: 'x4cW40Wc_os' },
      { q: 'Løs $x^2-16=0$',
        opts: ['$x=-16$ eller $x=0$','$x=-16$ eller $x=16$','$x=4$ eller $x=-4$','$x=8$ eller $x=-8$'], ans: 2, ytId: 'dy7EOpEWJvM' },
      { q: 'Løs $3x^2-27=0$',
        opts: ['$x=-9$ eller $x=9$','$x=3$ eller $x=-3$','$x=27$ eller $x=-27$','$x=0$ eller $x=1$'], ans: 1, ytId: 'NqxkZeHnq-4' },
      { q: 'Løs $4x^2-12x+8=0$',
        opts: ['$x=-2$ eller $x=-3$','$x=1$ eller $x=2$','$x=-1$ eller $x=4$','$x=2$ eller $x=4$'], ans: 1, ytId: 'YVrfctJ_MLo' },
      { q: 'Løs $x^2+5x+6=0$',
        opts: ['$x=-2$ eller $x=-3$','$x=3$ eller $x=4$','$x=-1$ eller $x=-2$','$x=-1$ eller $x=4$'], ans: 0, ytId: 'MpxuW09uidU' },
      { q: 'Løs $x^2-4x-5=x-5$',
        opts: ['$x=0$ eller $x=4$','$x=0$ eller $x=5$','$x=-5$ eller $x=5$','$x=0$ eller $x=3$'], ans: 1 }
    ],
    '4-2': [
      { q: 'Benyt nulreglen: $5\\cdot(x-4)\\cdot(x+2)=0$',
        opts: ['$x=4$ eller $x=2$','$x=-4$ eller $x=-2$','$x=4$ eller $x=-2$','$x=-4$ eller $x=2$'], ans: 2, ytId: '6XlpubXJ1TA' },
      { q: 'Faktoriser $f(x)=x^2-5x+6$',
        opts: ['$f(x)=(x-2)(x-3)$','$f(x)=(x-0)(x-4)$','$f(x)=(x-1)(x+2)$','$f(x)=(x+2)(x+3)$'], ans: 0, ytId: 'PkuuAfyH_w8' },
      { q: 'Faktoriser $f(x)=3x^2+9x-12$',
        opts: ['$3(x-2)(x-3)$','$3(x-0)(x-2)$','$3(x+3)(x-2)$','$3(x+4)(x-1)$'], ans: 3, ytId: 'OkqvSmVVH54' },
      { q: '$a=5$, rødderne $x_1=-2$ og $x_2=7$. Faktoriser polynomiet',
        opts: ['$7(x+2)(x-5)$','$5(x+2)(x-7)$','$(x+2)(x-7)$','$-2(x+5)(x-7)$'], ans: 1, ytId: 'dbpRHbbOOw0' },
      { q: 'Benyt nulreglen: $-3\\cdot(2x-6)\\cdot(x+4)=0$',
        opts: ['$x=-3$ eller $x=4$','$x=-3$ eller $x=-4$','$x=3$ eller $x=-4$','Ligningen kan ej løses'], ans: 2, ytId: '5iFwCUYi-vs' }
    ],
    '5-2': [
      { q: 'Brobue: toppunkt $(0,9)$, rammer x-aksen i $(-6,0)$ og $(6,0)$. Bestem $a,b,c$',
        opts: ['$a=-0{,}25,b=-9,c=9$','$a=-0{,}25,b=9,c=0$','$a=0{,}25,b=9,c=0$','$a=-0{,}25,b=0,c=9$'], ans: 3, ytId: 'ELuALllyU1g' },
      { q: 'Regression på omsætningstabel ($x=0..10$): bestem $a,b,c$',
        opts: ['$a=-1{,}88,b=8{,}35,c=10{,}78$','$a=-0{,}88,b=10{,}35,c=1{,}78$','$a=-2{,}88,b=8{,}35,c=3{,}78$','$a=-0{,}88,b=8{,}35,c=0{,}78$'], ans: 3, ytId: 'LpwwaMOvbU0' },
      { q: 'Bestem toppunktet og forklar dets betydning i omsætningsmodellen',
        opts: ['Ca. 6 varer, 30.500 kr','Ca. 5 varer, 20.500 kr','Ca. 3 varer, 10.000 kr','Ca. 4 varer, 10.500 kr'], ans: 1, ytId: 'LpwwaMOvbU0' }
    ],
    '6-0': [
      { q: '$2x^2-6x-8=0$: bestem $d$ og løs ligningen',
        opts: ['$d=100$, $x=-2$ eller $x=3$','$d=84$, $x=1$ eller $x=3$','$d=84$, $x=0$ eller $x=4$','$d=100$, $x=-1$ eller $x=4$'], ans: 3, ytId: 'FAyfkUKC4es' },
      { q: 'Tabel for $g$: $g(0)=4$, $g(3)=12$, $g(7)=0$. Skæring med $y$-aksen?',
        opts: ['$(-1,0)$','$(0,4)$','$(0,7)$','$(7,0)$'], ans: 1, ytId: 'z0qwcx3lsx4' },
      { q: 'Tabel for $g$: $g(-1)=0$ og $g(7)=0$. Bestem rødderne',
        opts: ['$x=2$ eller $x=4$','$x=1$ eller $x=5$','$x=0$ eller $x=4$','$x=-1$ eller $x=7$'], ans: 3, ytId: 'z0qwcx3lsx4' },
      { q: 'Tabel for $g$: $g(3)=12$ og grafen er symmetrisk om $x=3$. Toppunkt?',
        opts: ['$(3,12)$','$(4,7)$','$(3,9)$','$(7,0)$'], ans: 0, ytId: 'z0qwcx3lsx4' },
      { q: 'Parabel åbner opad og har aksesymmetrilinje $x=-\\frac{3}{4}$ (til venstre for $y$-aksen). Hvilken forskrift?',
        opts: ['$h(x)=2x^2-3x+5$','$f(x)=2x^2+3x+5$','$g(x)=-2x^2+3x+5$','Ingen af dem'], ans: 1, ytId: 'muUCLFcGyDE' },
      { q: '$a<0$, $c>0$, $b>0$: Parablen åbner...',
        opts: ['Nedad (grene nedad)','Opad (grene opad)'], ans: 0, ytId: 'V-fCWM4I9mw' },
      { q: '$f(x)=-x^2+6x-5$: toppunktskoordinat?',
        opts: ['$(4,7)$','$(1,4)$','$(3,4)$','$(-3,-4)$'], ans: 2, ytId: 'ePVFE5D33Lc' },
      { q: '$a>0$ og $d<0$: hvad gælder for parablen?',
        opts: ['Åbner op og skærer ikke $x$-aksen','Åbner ned og skærer $x$-aksen to steder','Åbner op og skærer $x$-aksen to steder','Åbner ned og rører $x$-aksen'], ans: 0 },
      { q: '$a<0$, $c>0$: parablen skærer $y$-aksen i...',
        opts: ['Et negativt tal','Et positivt tal','Origo','Kan ikke afgøres'], ans: 1, ytId: 'OMlSsb_VxW4' },
      { q: '$f(x)=2x^2-bx-c$ har toppunktet $(1,5)$. Bestem $b$ og $c$',
        opts: ['$b=-4$ og $c=7$','$b=-3$ og $c=5$','$b=2$ og $c=5$','$b=4$ og $c=-7$'], ans: 0, ytId: 'VHpl7XVi28o' },
      { q: '$f(x)=2x^2-8x+c$: bestem $c$ så grafen har præcis ét nulpunkt',
        opts: ['$c=9$','$c=-3$','$c=8$','$c=4$'], ans: 2, ytId: 'nMUT5IdFmds' },
      { q: 'En parabel åbner op og har to nulpunkter. Hvad gælder for $a$ og $d$?',
        opts: ['$a>0$ og $d<0$','$a<0$ og $d<0$','$a>0$ og $d>0$','$a<0$ og $d=0$'], ans: 2, ytId: 'nIeTdS81BIA' },
      { q: 'Parabel med toppunkt $x_T=2$ og rod $x=-1$. Bestem den anden rod',
        opts: ['$x=3$','$x=4$','$x=5$','$x=6$'], ans: 2, ytId: 'nIeTdS81BIA' },
      { q: 'Er $x=1$ en rod i $f(x)=x^2-3x+2$?',
        opts: ['Nej, $f(1)=2\\neq 0$','Ja, $f(1)=0$'], ans: 1, ytId: 'jt6Lpj7Erog' },
      { q: '$a>0$ og $d>0$: parablen...',
        opts: ['Åbner op og rammer ikke $x$-aksen','Åbner op og rammer $x$-aksen to gange','Åbner ned og rammer $x$-aksen to gange','Åbner ned og rammer ikke $x$-aksen'], ans: 1, ytId: '38B3f5IG2gA' },
      { q: '$f(x)=-x^2+6x-5$: bestem diskriminanten og antal rødder',
        opts: ['$d=-56$, ingen rødder','$d=56$, to rødder','$d=56$, ingen rødder','$d=56$, én rod'], ans: 1, ytId: '7FCasf7Ak_o' },
      { q: 'Tabel: $f(0)=4,f(1)=2,f(2)=0,f(3)=1,f(4)=3$. Fortegn for $a$ og $d$?',
        opts: ['$a<0$ og $d>0$','$a<0$ og $d=0$','$a<0$ og $d<0$','$a>0$ og $d<0$'], ans: 1 },
      { q: 'Løs $2\\cdot(x-1)\\cdot(x+2)=0$',
        opts: ['$x=-2$ eller $x=1$','$x=2$ eller $x=-3$','$x=2$ eller $x=-1$','$x=-3$ eller $x=3$'], ans: 0 },
      { q: 'Omskriv $f(x)=2(x-1)(x+2)$ til $ax^2+bx+c$',
        opts: ['$2x^2-2x+5$','$4x^2-2x+4$','$x^2+2x+4$','$2x^2+2x-4$'], ans: 3 },
      { q: 'Faktoriser $f(x)=x^2+4x$ på formen $a(x-x_1)(x-x_2)$',
        opts: ['$(x+4)(x-0)$','$(x-4)(x+4)$','$(x-2)(x+2)$','$(x-1)(x+1)$'], ans: 0 },
      { q: '$f(x)=x^2-9$: skæringspunkt med $y$-aksen',
        opts: ['$(0,10)$','$(0,-9)$','$(0,3)$','$(0,-3)$'], ans: 1 },
      { q: '$f(x)=x^2-9$: skæringspunkter med $x$-aksen',
        opts: ['$x=0$ eller $x=9$','$x=-1$ eller $x=3$','$x=-9$ eller $x=9$','$x=-3$ eller $x=3$'], ans: 3 }
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
        opts: ['Faldende','Konstant','Voksende','Har et maksimum'], ans: 2, ytId: 'cQt5ypGtmk0' },
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
        opts: ['Find kun $f(a)$ og $f(b)$','Find kun stationære punkter','Undersøg stationære punkter OG randpunkter','Differentiér to gange'], ans: 2, ytId: 'fcTW6ZDSZcA' },
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
    ],
    '5-2': [
      { q: '$f\'(x) > 0$ på et interval — $f$ er:',
        opts: ['Faldende','Konstant','Voksende','Har minimum'], ans: 2 },
      { q: '$f\'(x) < 0$ på et interval — $f$ er:',
        opts: ['Voksende','Faldende','Konstant','Har maksimum'], ans: 1 },
      { q: 'Find de stationære punkter for $f(x) = x^2 - 6x + 5$',
        opts: ['$x = 3$','$x = 5$','$x = 1$','$x = 0$'], ans: 0 },
      { q: '$f(x) = x^3 - 3x^2$. Find stationære punkter',
        opts: ['$x = 0$ og $x = 2$','$x = 1$ og $x = 3$','$x = 0$ og $x = 3$','$x = -1$ og $x = 2$'], ans: 0 },
      { q: '$f(x) = x^3 - 3x^2$: er $x = 0$ et lokalt maksimum eller minimum?',
        opts: ['Lokalt minimum','Lokalt maksimum','Infleksionspunkt','Ingen af delene'], ans: 1 },
      { q: 'Fortegnsskema: $f\'(x)$ skifter fra $-$ til $+$ i $x=2$. Hvad er $x=2$?',
        opts: ['Lokalt maksimum','Infleksionspunkt','Lokalt minimum','Skæring med $x$-aksen'], ans: 2 },
      { q: '$f(x) = -x^2 + 4x$: på hvilket interval er $f$ voksende?',
        opts: ['$x > 2$','$x < 2$','$x > 4$','$x < 0$'], ans: 1 },
      { q: 'Hvad bruger man til at bestemme $f$\'s monotoniforhold?',
        opts: ['$f(x) = 0$','$f\'(x) = 0$ og fortegnsskema for $f\'(x)$','$f\'\'(x)$','Nulpunkterne for $f$'], ans: 1 },
      { q: '$f(x) = x^3$: $f\'(x) = 3x^2 \geq 0$ for alle $x$. Hvad betyder det?',
        opts: ['$f$ er faldende overalt','$f$ er voksende overalt','$f$ har et minimum i $x=0$','$f$ er konstant'], ans: 1 },
      { q: 'Find intervaller hvor $f(x) = x^3 - 12x$ er voksende',
        opts: ['$x < -2$ og $x > 2$','$-2 < x < 2$','$x > 0$','$x < 0$'], ans: 0 },
      { q: '$f(x) = -2x^2 + 8x - 3$: hvornår er $f$ faldende?',
        opts: ['$x < 2$','$x > 2$','$x > 4$','$x < 0$'], ans: 1 }
    ],
    '6-1': [
      { q: 'Hvad er formålet med optimering?',
        opts: ['At differentiere en funktion','At finde det størst eller mindst mulige af en størrelse','At løse en ligning','At tegne grafen'], ans: 1 },
      { q: 'Hvilken betingelse gælder altid for et stationært punkt?',
        opts: ['$f(x) = 0$','$f\'\'(x) = 0$','$f\'(x) = 0$','$f(x) = f\'(x)$'], ans: 2 },
      { q: '$f(x) = -x^2 + 10x$. Find maksimum',
        opts: ['$f(5) = 25$','$f(5) = 20$','$f(10) = 0$','$f(0) = 0$'], ans: 0 },
      { q: 'Et rektangel har fast omkreds 40 cm. Hvad er bredden der giver max areal?',
        opts: ['$b = 5$','$b = 8$','$b = 10$','$b = 20$'], ans: 2 },
      { q: 'Rektangel med omkreds 40: max areal er:',
        opts: ['$50\\text{ cm}^2$','$75\\text{ cm}^2$','$100\\text{ cm}^2$','$200\\text{ cm}^2$'], ans: 2 },
      { q: '$f(x) = x^3 - 6x^2 + 9x + 1$ på $[0,4]$. Lokalt max ved:',
        opts: ['$x = 1$','$x = 2$','$x = 3$','$x = 4$'], ans: 0 },
      { q: 'Hvornår skal man undersøge randpunkter ved optimering?',
        opts: ['Aldrig','Kun ved minimum','Når $f$ er defineret på et lukket interval $[a,b]$','Kun når $f\'\'(x)>0$'], ans: 2 },
      { q: '$f(x) = 2x^3 - 9x^2 + 12x$. Find lokalt minimum',
        opts: ['$x = 1$','$x = 2$','$x = 3$','$x = 0$'], ans: 1 },
      { q: 'En boks (uden låg) laves af en 24×24 kvadrat. Hjørnerne klippes $x$. Max volumen ved:',
        opts: ['$x = 2$','$x = 3$','$x = 4$','$x = 6$'], ans: 2 },
      { q: 'Fortolkning: $f\'(x_0) = 0$ og $f\'\'(x_0) > 0$ — hvad er $x_0$?',
        opts: ['Lokalt maksimum','Infleksionspunkt','Lokalt minimum','Intet stationært punkt'], ans: 2 }
    ],
    '7-1': [
      { q: 'Væksthastighed for $f$ i $x_0$ er:',
        opts: ['$f(x_0)$','$f\'(x_0)$','$f\'\'(x_0)$','$\\frac{f(x_0)}{x_0}$'], ans: 1 },
      { q: '$f(t) = 500 \\cdot 1{,}03^t$ (kr/år). Væksthastighed i $t=0$?',
        opts: ['Ca. $14{,}4$ kr/år','Ca. $500$ kr/år','Ca. $1{,}03$ kr/år','Ca. $50$ kr/år'], ans: 0 },
      { q: '$f(x) = x^2 + 3x$. Øjeblikkelig væksthastighed i $x=2$:',
        opts: ['$7$','$10$','$4$','$3$'], ans: 0 },
      { q: 'Hvad fortæller en negativ væksthastighed?',
        opts: ['Funktionen vokser','Funktionen er konstant','Funktionen aftager','Funktionen er nul'], ans: 2 },
      { q: 'En populations størrelse er $P(t) = 1000 + 5t^2$. Vækstrate i $t=3$:',
        opts: ['$15$ individer/år','$30$ individer/år','$45$ individer/år','$5$ individer/år'], ans: 1 },
      { q: '$f(x) = \\ln(x)$. Væksthastighed i $x=5$:',
        opts: ['$5$','$\\ln(5)$','$\\frac{1}{5}$','$\\frac{1}{\\ln 5}$'], ans: 2 },
      { q: 'Hvad er enhederne for væksthastighed hvis $f(t)$ måler kr og $t$ måler år?',
        opts: ['Kr','År','Kr per år','Kr per kr'], ans: 2 },
      { q: '$f\'(x) = 0$ betyder at:',
        opts: ['Funktionen er nul','Væksthastigheden er nul (stationært punkt)','Funktionen vokser maksimalt','Funktionen ikke er differentiabel'], ans: 1 },
      { q: 'Gennemsnitlig væksthastighed fra $x=1$ til $x=3$ for $f(x)=x^2$ er:',
        opts: ['$2$','$3$','$4$','$6$'], ans: 2 }
    ]
  }
};

// Sæt cross-referencer
ALL_QUIZ_DATA['tal-og-algebra-b-niveau'] = ALL_QUIZ_DATA['tal-og-algebra'];
ALL_QUIZ_DATA['eksponentielle-funktioner-stx'] = ALL_QUIZ_DATA['eksponentielle-funktioner'];
ALL_QUIZ_DATA['statistik-stx-c'] = ALL_QUIZ_DATA['deskriptiv-statistik'];
// STX-C / HHX-C duplikater genbruger HF-C hand-written fallback
ALL_QUIZ_DATA['tal-og-algebrastx-1aar'] = ALL_QUIZ_DATA['tal-og-algebra'];
ALL_QUIZ_DATA['tal-hhx-c'] = ALL_QUIZ_DATA['tal-og-algebra'];
ALL_QUIZ_DATA['lineaer-funktion-stx'] = ALL_QUIZ_DATA['lineaer-funktioner'];
ALL_QUIZ_DATA['procent-og-rente-stx'] = ALL_QUIZ_DATA['procent-og-rentesregning'];
ALL_QUIZ_DATA['ligninger-hhx-c'] = ALL_QUIZ_DATA['ligninger-1-aar-hf-2'];
ALL_CURRICULA['vektorer-matematik-b-stx-2aar'] = null; // håndteres i getCurriculum

// ── KURS-BESKRIVELSER ──
const COURSE_DESC = {
  // HF-C
  'beviserhf1':                 'Matematiske beviser og argumentation — direkte bevis, modstrid, induktion og eksempler fra gymnasiepensum.',
  'tal-og-algebra':             'Grundlæggende talsystemet, regningsarterne og simpel algebra. Bygger et fundament til al matematik.',
  'ligninger-1-aar-hf-2':       'Løsning af ligninger med én og to ubekendte, formler og omskrivning.',
  'procent-og-rentesregning':   'Procentberegning, fremskrivningsfaktor, simpel og sammensat rente.',
  'funktions-begrebet':         'Funktionsbegrebet — definitionsmængde, værdimængde, graf og funktionsforskrift.',
  'lineaer-funktioner':         'Den lineære funktion y = ax + b — hældning, skæring og bestemmelse af forskrift.',
  'eksponentielle-funktioner':  'Eksponentielle funktioner, vækstrate, halverings- og fordoblingstid.',
  'geometri-og-trigonometri':   'Pythagoras, trigonometri (sin/cos/tan), sinus- og cosinusrelation, arealer og rumfang.',
  'deskriptiv-statistik':       'Statistisk beskrivelse: frekvens, gennemsnit, median, kvartiler og boksplot.',
  'sandsynlighedsregning':      'Sandsynlighed, kombinatorik og betinget sandsynlighed.',
  '10-tals-logaritme':          'Logaritmens definition, regneregler og ligninger med log.',
  'potens-funktioner-hf-b':     'Potensfunktioner, væksthastighed og sammenhæng med eksponentielle funktioner.',
  // HF-B
  'beviser-hf-mat-b':           'Matematiske beviser på B-niveau — bevistyper, logiske slutninger og deduktive argumenter.',
  'tal-og-algebra-b-niveau':    'Tal og algebra udvidet — reduktioner, brøker, potens- og logaritmeregler på B-niveau.',
  'funktioner-b-niveau':        'Funktionsbegrebet på B-niveau — polynomier, rationale funktioner, sammensatte funktioner og transformationer.',
  'andengradspolynomier-hf':    'Andengradspolynomier, toppunkt, diskriminant og løsning af andengradsligninger.',
  'analytisk-plan-geometri-hf-b': 'Analytisk plangeometri — linjens ligning, afstande, cirkler, skæringspunkter og geometriske problemer.',
  'differentialregning-hf-b':   'Differentialkvotienten, differentieringsregler, monotoni, tangent og optimering.',
  'sandstat-b-gym':             'Sandsynlighed og statistik på B-niveau — fordelinger, stikprøver, hypotesetest og konfidensintervaller.',
  'annuitetsregning':           'Annuitetsregning — rente, afdrag, annuitetslån og opsparing med periodiske indbetalinger.',
  // STX-C (genbruger HF-C indhold)
  'tal-og-algebrastx-1aar':     'Grundlæggende talsystemet, regningsarterne og simpel algebra til STX C-niveau.',
  'ligninger-og-formlerstx-c':  'Ligninger og formler på STX C-niveau — ligningsløsning, formelregning og omskrivning.',
  'procent-og-rente-stx':       'Procentregning og rentesregning til STX C-niveau.',
  'lineaer-funktion-stx':       'Lineære funktioner til STX C-niveau — forskrift, graf og praktiske anvendelser.',
  'eksponentielle-funktioner-stx': 'Eksponentielle funktioner til STX C-niveau — vækst og halveringstid.',
  'statistik-stx-c':            'Statistik på STX C-niveau — beskrivende statistik og dataanalyse.',
  // HHX-C
  'tal-hhx-c':                  'Tal og algebra til HHX C-niveau — regningsarterne, brøker og simpel algebra.',
  'ligninger-hhx-c':            'Ligninger og formler til HHX C-niveau — bruges ofte i økonomiske sammenhænge.',
  // STX-A
  'vektorer-i-planen-stx-a':    'Vektorer i planen på STX A-niveau — skalarprodukt, projektion, determinanter og linjens ligning.',
  // Legacy default
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
  _syncHistory();
}

// ── BROWSER-HISTORIK (tilbage-knap + deep-link) ──
let _historyReady = false;
function _syncHistory() {
  const state = { page: currentPage, course: currentCourse, section: currentSection, item: currentItem };
  if (!_historyReady) {
    history.replaceState(state, '', '#' + currentPage);
    _historyReady = true;
  } else {
    history.pushState(state, '', '#' + currentPage);
  }
}
window.addEventListener('popstate', (e) => {
  const s = e.state;
  // Luk evt. åbne overlays før vi navigerer tilbage
  const ov = document.getElementById('search-overlay');
  if (ov && !ov.hidden) closeSearch();
  closeMobileMenu();
  if (s && s.page) {
    currentPage = s.page;
    currentCourse = s.course || null;
    if (typeof s.section === 'number') currentSection = s.section;
    if (typeof s.item === 'number') currentItem = s.item;
    if (currentPage === 'lesson') openLessonSections.add(currentSection);
  } else {
    currentPage = 'gymnasium';
    currentCourse = null;
  }
  render();
  updateActiveNav(currentPage);
});

// ── AUTH-INTEGRATION ──
let _progressMerged = false;
async function onAuthChanged() {
  updateAuthUI();
  if (window.Auth && Auth.isLoggedIn() && !_progressMerged) {
    _progressMerged = true;
    try {
      const dbKeys = await Auth.loadProgressKeys();
      const dbSet = new Set(dbKeys);
      const localOnly = [...completedLessons].filter(k => !dbSet.has(k));
      if (localOnly.length) await Auth.uploadLocalProgress(localOnly);
      dbKeys.forEach(k => completedLessons.add(k));
      saveCompleted();
    } catch (e) { /* offline */ }
  }
  if (window.Auth && !Auth.isLoggedIn()) _progressMerged = false;
  render();
}

function updateAuthUI() {
  const acc = document.getElementById('header-account-link');
  const opret = document.querySelector('.header-right .btn-opret');
  const loggedIn = window.Auth && Auth.isLoggedIn();
  if (acc) {
    acc.innerHTML = loggedIn
      ? `<span class="konto-icon">👤</span> ${Auth.displayName().split('@')[0]}`
      : `<span class="konto-icon">👤</span> Min konto`;
  }
  if (opret) {
    if (loggedIn) {
      opret.textContent = 'Log ud';
      opret.setAttribute('onclick', 'doLogout();return false;');
    } else {
      opret.textContent = 'Opret konto';
      opret.setAttribute('onclick', "navigate('opret');return false;");
    }
  }
}

async function doSignup(ev) {
  if (ev) ev.preventDefault();
  const name = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const pass = document.getElementById('su-pass').value;
  const level = document.getElementById('su-level').value;
  const msg = document.getElementById('auth-msg');
  if (!name || !email || pass.length < 6) {
    if (msg) msg.innerHTML = '<span class="auth-err">Udfyld navn, email og en adgangskode på mindst 6 tegn.</span>';
    return;
  }
  if (msg) msg.textContent = 'Opretter konto…';
  try {
    const { needsConfirmation } = await Auth.signUp({ name, email, password: pass, examLevel: level });
    if (needsConfirmation) {
      if (msg) msg.innerHTML = '<span class="auth-ok">Konto oprettet! Tjek din email for et bekræftelseslink, og log derefter ind.</span>';
    } else {
      navigate('konto');
    }
  } catch (e) {
    if (msg) msg.innerHTML = `<span class="auth-err">${e.message || 'Kunne ikke oprette konto.'}</span>`;
  }
}

async function doLogin(ev) {
  if (ev) ev.preventDefault();
  const email = document.getElementById('li-email').value.trim();
  const pass = document.getElementById('li-pass').value;
  const msg = document.getElementById('auth-msg');
  if (msg) msg.textContent = 'Logger ind…';
  try {
    await Auth.signIn(email, pass);
    navigate('konto');
  } catch (e) {
    if (msg) msg.innerHTML = `<span class="auth-err">${(e.message || '').includes('Invalid') ? 'Forkert email eller adgangskode.' : (e.message || 'Kunne ikke logge ind.')}</span>`;
  }
}

async function doLogout() {
  await Auth.signOut();
  _progressMerged = false;
  navigate('gymnasium');
}

function updateActiveNav(page) {
  document.querySelectorAll('.header-nav > ul > li').forEach(li => li.classList.remove('active'));
  const gymPages = ['gymnasium','hf','stx','hhx','hf-c','hf-b'];
  if (gymPages.includes(page)) {
    const gymLi = document.getElementById('nav-gymnasium');
    if (gymLi) gymLi.classList.add('active');
  }
  // Bottom nav active state
  document.querySelectorAll('.bottom-nav-item').forEach(a => {
    const p = a.dataset.page;
    const active = (p === 'gymnasium' && page === 'gymnasium')
      || (p === 'hf' && ['hf','stx','hhx','course','lesson'].includes(page))
      || (p === 'konto' && page === 'konto');
    a.classList.toggle('active', active);
  });
}

// ── MOBILE MENU ──
function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  m.hidden = !m.hidden;
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').hidden = true;
}

// ── SEARCH ──
let _searchIndex = null;
function _allCourses() {
  const map = new Map();
  const add = (arr, exam, niveau) => {
    for (const c of (arr || [])) {
      if (!map.has(c.slug)) map.set(c.slug, { ...c, exam, niveau });
    }
  };
  if (typeof HF_C_COURSES !== 'undefined') add(HF_C_COURSES, 'HF', 'C');
  if (typeof HF_B_COURSES !== 'undefined') add(HF_B_COURSES, 'HF', 'B');
  if (typeof STX_C_COURSES !== 'undefined') add(STX_C_COURSES, 'STX', 'C');
  if (typeof HHX_C_COURSES !== 'undefined') add(HHX_C_COURSES, 'HHX', 'C');
  // Vektorer (standalone)
  map.set('vektorer-matematik-b-stx-2aar', {
    slug: 'vektorer-matematik-b-stx-2aar',
    title: 'Vektorer',
    exam: 'STX', niveau: 'B',
  });
  return Array.from(map.values());
}
function _buildSearchIndex() {
  if (_searchIndex) return _searchIndex;
  const idx = [];
  const courses = _allCourses();
  // Kurser
  for (const c of courses) {
    idx.push({
      type: 'Kursus',
      icon: '📚',
      title: c.title,
      meta: [c.exam, c.niveau && c.niveau + '-niveau'].filter(Boolean).join(' · '),
      courseMeta: c,
    });
  }
  // Lektioner + quizzer (per kursus curriculum)
  for (const [slug, curr] of Object.entries(ALL_CURRICULA || {})) {
    const c = curr || (typeof VEKTORER_CURRICULUM !== 'undefined' ? VEKTORER_CURRICULUM : null);
    if (!c) continue;
    const courseMeta = courses.find(x => x.slug === slug);
    const courseTitle = courseMeta ? courseMeta.title : slug;
    c.forEach((sec) => (sec.items || []).forEach((it) => {
      idx.push({
        type: it.type === 'quiz' ? 'Quiz' : 'Lektion',
        icon: it.type === 'quiz' ? '❓' : '▶️',
        title: it.title,
        meta: courseTitle + (sec.title ? ' · ' + sec.title : ''),
        slug, courseMeta,
      });
    }));
  }
  _searchIndex = idx;
  return idx;
}

function openSearch() {
  const ov = document.getElementById('search-overlay');
  const inp = document.getElementById('search-input');
  const res = document.getElementById('search-results');
  ov.hidden = false;
  res.innerHTML = '<div class="search-hint">Skriv for at søge i kurser, lektioner og quizzer…</div>';
  setTimeout(() => inp.focus(), 30);
  document.body.style.overflow = 'hidden';
}
function closeSearch() {
  document.getElementById('search-overlay').hidden = true;
  document.getElementById('search-input').value = '';
  document.body.style.overflow = '';
}
function _highlight(text, q) {
  if (!q) return text;
  const safe = text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const qSafe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(qSafe, 'gi'), m => `<mark>${m}</mark>`);
}
function _runSearch(q) {
  const res = document.getElementById('search-results');
  q = (q || '').trim();
  if (q.length < 2) {
    res.innerHTML = '<div class="search-hint">Skriv mindst 2 bogstaver…</div>';
    return;
  }
  const idx = _buildSearchIndex();
  const qLow = q.toLowerCase();
  const hits = idx
    .map(e => {
      const t = e.title.toLowerCase();
      let score = 0;
      if (t === qLow) score = 100;
      else if (t.startsWith(qLow)) score = 80;
      else if (t.includes(qLow)) score = 60;
      else if (e.meta.toLowerCase().includes(qLow)) score = 20;
      return score ? { e, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 40);
  if (!hits.length) {
    res.innerHTML = `<div class="search-empty">Ingen resultater for "${q.replace(/</g,'&lt;')}"</div>`;
    return;
  }
  const byType = {};
  for (const h of hits) { (byType[h.e.type] ||= []).push(h.e); }
  const html = Object.entries(byType).map(([type, items]) => `
    <div class="search-section">${type}</div>
    ${items.map((e, i) => `
      <a href="#" class="search-result" data-idx="${hits.findIndex(h => h.e === e)}" onclick="_searchGo(${hits.findIndex(h => h.e === e)});return false;">
        <span class="search-result-icon">${e.icon}</span>
        <div class="search-result-main">
          <div class="search-result-title">${_highlight(e.title, q)}</div>
          <div class="search-result-meta">${_highlight(e.meta, q)}</div>
        </div>
      </a>
    `).join('')}
  `).join('');
  res.innerHTML = html;
  window.__searchHits = hits;
}
function _searchGo(i) {
  const hit = (window.__searchHits || [])[i];
  if (!hit) return;
  const e = hit.e;
  closeSearch();
  if (e.courseMeta) navigate('course', e.courseMeta);
  else navigate('gymnasium');
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

// Map PWA-slug → nemmat.dk-slug for scraped-quiz-lookup
const SCRAPED_SLUG_MAP = {
  'tal-og-algebra': 'tal-og-algebra-hf-c',
  'tal-og-algebra-b-niveau': 'tal-og-algebra-b-niveau-hf',
  'ligninger-1-aar-hf-2': 'ligninger-hf-c',
  'lineaer-funktioner': 'lineaer-funktioner-hf-c',
  'ligninger-og-formlerstx-c': 'ligninger-og-formlerstx-c',
  'eksponentielle-funktioner': 'eksponentielle-funktioner',
  'eksponentielle-funktioner-stx': 'eksponentielle-funktioner',
  'funktions-begrebet': 'funktions-begrebet',
  'geometri-og-trigonometri': 'geometri-og-trigonometri',
  'sandsynlighedsregning': 'sandsynlighedsregning',
  '10-tals-logaritme': '10-tals-logaritme',
  'differentialregning-hf-b': 'differentialregning-hf-b',
  'annuitetsregning': 'annuitetsregning',
  'procent-og-rentesregning': 'procent-og-rentesregning',
  'deskriptiv-statistik': 'deskriptiv-statistik',
  'statistik-stx-c': 'deskriptiv-statistik',
  'andengradspolynomier-hf': 'andengradspolynomier-hf-b',
  'analytisk-plan-geometri-hf-b': 'analytisk-plan-geometri-hf-b',
  'funktioner-b-niveau': 'funktioner-b-niveau-hf',
  'funktions-begrebet': 'funktions-begrebet',
  'annuitetsregning': 'annuitetsregning',
  'ligninger-og-formlerstx-c': 'ligninger-og-formlerstx-c',
  // STX/HHX-dubletter genbruger samme scraped-data som HF-C
  'tal-og-algebrastx-1aar': 'tal-og-algebra-hf-c',
  'lineaer-funktion-stx': 'lineaer-funktioner-hf-c',
  'procent-og-rente-stx': 'procent-og-rentesregning',
  'tal-hhx-c': 'tal-og-algebra-hf-c',
  'ligninger-hhx-c': 'ligninger-hf-c',
  // HF-B-kurser scraped via submit-quiz endpoint (kræver enrollment)
  'potens-funktioner-hf-b': 'potens-funktioner-hf-b',
  'sandstat-b-gym': 'sandsynlighedsregning-og-statistik-hf-b',
};

// Returnér quiz-index (0,1,2…) for section-item key ved at tælle forudgående quiz-items i curriculum
function _quizIndexFromKey(slug, key) {
  const [si, ii] = key.split('-').map(Number);
  const curr = ALL_CURRICULA[slug];
  if (!curr) return -1;
  let idx = 0;
  for (let s = 0; s <= si && s < curr.length; s++) {
    const items = curr[s].items || [];
    const maxI = (s === si) ? ii : items.length - 1;
    for (let i = 0; i <= maxI && i < items.length; i++) {
      if (s === si && i === ii) {
        return items[i].type === 'quiz' ? idx : -1;
      }
      if (items[i].type === 'quiz') idx++;
    }
  }
  return -1;
}

function _mapScrapedQuestions(scrapedQuiz) {
  if (!scrapedQuiz?.questions?.length) return null;
  // Understøt single_choice + true_or_false + multi_choice (alle har opts+ans)
  const qs = scrapedQuiz.questions
    .filter(q => ['single_choice','true_or_false','multi_choice'].includes(q.type)
                 && q.ans >= 0
                 && q.opts?.length >= 2)
    .map(q => ({ q: q.q, opts: q.opts, ans: q.ans, ytId: q.ytId || null }));
  return qs.length ? qs : null;
}

function getQuizData(key) {
  const slug = currentCourse?.slug || 'vektorer-matematik-b-stx-2aar';
  // 1. Forsøg scraped data først (nemmat.dk — har videoer)
  const nemmatSlug = SCRAPED_SLUG_MAP[slug];
  if (nemmatSlug && window.SCRAPED_QUIZZES?.[nemmatSlug]) {
    const scrapedAll = window.SCRAPED_QUIZZES[nemmatSlug];
    const [si, ii] = key.split('-').map(Number);
    const curr = ALL_CURRICULA[slug];
    const item = curr?.[si]?.items?.[ii];
    const title = (item?.title || '').toLowerCase();

    // 1a. Title-based: "Eksamensøvelse N" → find scraped med samme nummer
    const mNum = title.match(/eksamensøvelse\s*(\d+)/i);
    if (mNum) {
      const num = parseInt(mNum[1], 10);
      const match = scrapedAll.find(q => {
        const m = (q.title || '').match(/eksamensøvelse\s*(\d+)/i);
        return m && parseInt(m[1], 10) === num;
      });
      const mapped = _mapScrapedQuestions(match);
      if (mapped) return mapped;
    }

    // 1b. Title-based: bundlet eksamens-quiz ("Eksamenspørgsmål", "Gør dig klar til eksamen",
    //     "Skriftlig forberedelse", "Eksamensøvelser delprøve") → merge alle eksamens-scraped
    const isBundled = /eksamenspørg|eksamensforbered|gør dig klar.*eksamen|skriftlig|delprøve|eksamensøvelser\b(?!\s*\d)/i.test(title)
                      || (/eksamen/i.test(title) && !mNum);
    if (isBundled) {
      const examQs = [];
      scrapedAll.forEach(q => {
        if (/eksamen|delprøve/i.test(q.title || '')) {
          (q.questions || []).forEach(qq => {
            if (['single_choice','true_or_false','multi_choice'].includes(qq.type)
                && qq.ans >= 0 && qq.opts?.length >= 2) {
              examQs.push({ q: qq.q, opts: qq.opts, ans: qq.ans, ytId: qq.ytId || null });
            }
          });
        }
      });
      if (examQs.length) return examQs;
    }

    // 1c. Default: sequential mapping (fallback)
    const qIdx = _quizIndexFromKey(slug, key);
    const mapped = _mapScrapedQuestions(scrapedAll[qIdx]);
    if (mapped) return mapped;
  }
  // 2. Fallback til hand-written data
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
    case 'institutioner': app.innerHTML = renderInstitutioner(); break;
    case 'private':   app.innerHTML = renderPrivate(); break;
    case 'om':        app.innerHTML = renderOm(); break;
    case 'kontakt':   app.innerHTML = renderKontakt(); break;
    case 'opret':     app.innerHTML = renderOpret(); break;
    case 'konto':     app.innerHTML = renderKonto(); break;
    case 'admin':     app.innerHTML = renderAdmin(); break;
    default:          app.innerHTML = renderSimple('Side ikke fundet', ''); break;
  }
  // Fade-in animation
  app.style.animation = 'none';
  app.offsetHeight; // reflow
  app.style.animation = 'fadeIn .25s ease';
  bindEvents();
  if (currentPage === 'admin' && window.Auth && Auth.isAdmin()) loadAdminData();
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

  // Dynamisk breadcrumb baseret på hvilket niveau kurset tilhører
  const breadcrumbs = [{label:'Gymnasium',page:'gymnasium'}];
  if (typeof HF_C_COURSES !== 'undefined' && HF_C_COURSES.some(x => x.slug === slug)) {
    breadcrumbs.push({label:'HF',page:'hf'},{label:'HF C Niveau',page:'hf-c'});
  } else if (typeof HF_B_COURSES !== 'undefined' && HF_B_COURSES.some(x => x.slug === slug)) {
    breadcrumbs.push({label:'HF',page:'hf'},{label:'HF B Niveau',page:'hf-b'});
  } else if (typeof STX_C_COURSES !== 'undefined' && STX_C_COURSES.some(x => x.slug === slug)) {
    breadcrumbs.push({label:'STX',page:'stx'});
  } else if (typeof HHX_C_COURSES !== 'undefined' && HHX_C_COURSES.some(x => x.slug === slug)) {
    breadcrumbs.push({label:'HHX',page:'hhx'});
  } else {
    breadcrumbs.push({label:'HF',page:'hf'},{label:'HF C Niveau',page:'hf-c'});
  }

  return `
    ${renderBreadcrumb(breadcrumbs)}
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
              <button class="btn-kob-med" onclick="navigate('opret')">Køb Medlemskab</button>`;
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
        <div class="lesson-topbar-search" onclick="openSearch()" style="cursor:pointer">
          <span style="color:var(--muted-lt);font-size:14px">🔍</span>
          <input type="text" placeholder="Søg i kurser…" readonly style="cursor:pointer;pointer-events:none" />
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
          ${q.ytId ? `
          <div class="quiz-explanation-video">
            <div class="quiz-explanation-label">📹 Forklaring</div>
            <div class="quiz-video-wrap">
              <iframe
                src="https://www.youtube.com/embed/${q.ytId}?rel=0&modestbranding=1"
                title="Forklaring"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>` : ''}
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
const STX_C_COURSES = [
  { slug: 'tal-og-algebrastx-1aar', title: 'Tal og Algebra', img: IMG_BASE+'2024/11/math.webp' },
  { slug: 'ligninger-og-formlerstx-c', title: 'Ligninger og Formler', img: IMG_BASE+'2024/11/equality.webp' },
  { slug: 'lineaer-funktion-stx', title: 'Lineære Funktioner', img: IMG_BASE+'2024/11/diagram-e1731763087784.png' },
  { slug: 'eksponentielle-funktioner-stx', title: 'Eksponentielle Funktioner', img: IMG_BASE+'2024/11/statistics.webp' },
  { slug: 'statistik-stx-c', title: 'Statistik', img: IMG_BASE+'2024/11/analytics.webp' },
  { slug: 'procent-og-rente-stx', title: 'Procent og Rente', img: IMG_BASE+'2024/11/interest-rate.webp' },
];
function renderSTX() {
  return renderNiveauPage('STX', 'C Niveau', STX_C_COURSES, [{label:'Gymnasium',page:'gymnasium'}]);
}

// ── HHX SIDE ──
const HHX_C_COURSES = [
  { slug: 'tal-hhx-c', title: 'Tal og Algebra', img: IMG_BASE+'2024/11/math.webp' },
  { slug: 'ligninger-hhx-c', title: 'Ligninger', img: IMG_BASE+'2024/11/equality.webp' },
];
function renderHHX() {
  return renderNiveauPage('HHX', 'C Niveau', HHX_C_COURSES, [{label:'Gymnasium',page:'gymnasium'}]);
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

// ── INFO-SIDER (hentet fra nemmat.dk) ──
function renderInstitutioner() {
  return `
    ${renderBreadcrumb([{label:'Institutioner', page:'institutioner'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">🏫 For skoler og undervisere</div>
        <h1>Hvad tilbyder NemMat?</h1>
        <p class="info-lead">En innovativ digital læringsplatform der styrker elevernes faglige sikkerhed i matematik — udviklet specifikt til gymnasiale uddannelser.</p>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📚</div>
          <h3>Strukturerede forløb</h3>
          <p>Interaktive opgaver og AI-baseret vejledning understøtter undervisningen ved sygdom, fravær eller differentieret læring.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🎯</div>
          <h3>Klassedifferentiering</h3>
          <p>Som lærer kan du bruge NemMat til lektiehjælp, eksamensforberedelse og som støtte til elever med særlige behov.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">💡</div>
          <h3>Pædagogisk fundament</h3>
          <p>Alt indhold er udviklet med afsæt i pædagogiske principper og et stærkt fokus på forståelse og selvtillid.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🔄</div>
          <h3>Vikarmateriale</h3>
          <p>Platformen fungerer også som vikarmateriale — strukturerede forløb som eleverne selv kan arbejde videre med.</p>
        </div>
      </div>
      <div class="info-cta">
        <h2>Kontakt os for et skoletilbud</h2>
        <p>Ring <a href="tel:50435078">50 43 50 78</a> eller skriv til <a href="mailto:info@nemmat.dk">info@nemmat.dk</a></p>
      </div>
    </div>`;
}

function renderPrivate() {
  return `
    ${renderBreadcrumb([{label:'Private og Forældre', page:'private'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">👨‍👩‍👧 For familier</div>
        <h1>Styrk din faglige sikkerhed i matematik</h1>
        <p class="info-lead">En digital læringsplatform der hjælper unge med at blive mere sikre og dygtige i matematik. Udviklet til gymnasieelever med fokus på forståelse og motivation.</p>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📝</div>
          <h3>Lektiehjælp</h3>
          <p>Strukturerede kursusforløb og interaktive opgaver — brugt som lektiehjælp når matematikken føles svær.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🎓</div>
          <h3>Eksamensforberedelse</h3>
          <p>Bliv klar til både skriftlig og mundtlig eksamen — på alle niveauer (C, B og A).</p>
        </div>
        <div class="info-card">
          <div class="info-icon">📈</div>
          <h3>Følger pensum</h3>
          <p>Interaktive kurser der følger gymnasiets pensum — så man altid har et sted at slå op.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🏆</div>
          <h3>Faglig selvtillid</h3>
          <p>Med NemMat får dit barn en tryg og motiverende vej til bedre forståelse og stærkere faglig selvtillid.</p>
        </div>
      </div>
      <div class="info-cta">
        <h2>Start i dag</h2>
        <p><a href="#" onclick="navigate('opret');return false;" class="btn-cta">Se medlemsskaber →</a></p>
      </div>
    </div>`;
}

function renderOm() {
  return `
    ${renderBreadcrumb([{label:'Om NemMat', page:'om'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">✨ Om os</div>
        <h1>Om NemMat</h1>
        <p class="info-lead">Vi hjælper gymnasieelever med at mestre matematik — gennem strukturerede videoforløb, interaktive quizzer og forklaringer i øjenhøjde.</p>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">🎯</div>
          <h3>Vores mission</h3>
          <p>At gøre matematik tilgængeligt, forståeligt og motiverende for alle elever — uanset niveau og baggrund.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">👥</div>
          <h3>Hvem er vi?</h3>
          <p>Et dansk team med baggrund i undervisning, pædagogik og teknologi — dedikeret til at løfte matematikfaget i gymnasiet.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">📖</div>
          <h3>Fagligt fundament</h3>
          <p>Alt indhold er udviklet af matematikfaglige undervisere med mangeårig gymnasieerfaring og afsæt i pensum på C-, B- og A-niveau.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🚀</div>
          <h3>Konstant opdatering</h3>
          <p>Vi opdaterer løbende platformen med nye forløb, videoer og quizzer — baseret på feedback fra elever og lærere.</p>
        </div>
      </div>
    </div>`;
}

function renderKontakt() {
  return `
    ${renderBreadcrumb([{label:'Kontakt', page:'kontakt'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">📞 Kontakt os</div>
        <h1>Hvordan kan vi hjælpe?</h1>
        <p class="info-lead">Vi sidder klar til at besvare spørgsmål om vores kurser, priser eller andet. Det er helt uforpligtende og du får typisk svar samme dag.</p>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📞</div>
          <h3>Telefon</h3>
          <p><a href="tel:50435078" class="info-big-link">50 43 50 78</a></p>
        </div>
        <div class="info-card">
          <div class="info-icon">✉️</div>
          <h3>Email</h3>
          <p><a href="mailto:info@nemmat.dk" class="info-big-link">info@nemmat.dk</a></p>
        </div>
        <div class="info-card">
          <div class="info-icon">📍</div>
          <h3>Adresse</h3>
          <p>Sønder Boulevard 108<br>1720 København V</p>
        </div>
        <div class="info-card">
          <div class="info-icon">🕐</div>
          <h3>Åbningstider</h3>
          <p>Mandag – Fredag<br>09:00 – 17:00</p>
        </div>
      </div>
    </div>`;
}

function renderOpret() {
  const tiers = [
    { name: 'HF Basis', price: 49.95, level: 'HF', features: ['Adgang til HF C- og B-niveau', 'Quizzer og forklaringer', 'Progress tracking'] },
    { name: 'HF Pro', price: 79.95, level: 'HF', pro: true, features: ['Alt i Basis', 'Eksamenssæt + rettevejledning', 'AI-baseret personlig hjælp'] },
    { name: 'STX Basis', price: 49.95, level: 'STX', features: ['Adgang til STX C- og B-niveau', 'Quizzer og forklaringer', 'Progress tracking'] },
    { name: 'STX Pro', price: 79.95, level: 'STX', pro: true, features: ['Alt i Basis', 'A-niveau eksamenssæt', 'AI-baseret personlig hjælp'] },
    { name: 'HHX Basis', price: 49.95, level: 'HHX', features: ['Adgang til HHX C- og B-niveau', 'Quizzer og forklaringer', 'Progress tracking'] },
    { name: 'HHX Pro', price: 79.95, level: 'HHX', pro: true, features: ['Alt i Basis', 'Eksamenssæt + rettevejledning', 'AI-baseret personlig hjælp'] },
  ];
  const signupForm = (window.Auth && Auth.available && !Auth.isLoggedIn()) ? `
      <form class="auth-form" onsubmit="doSignup(event)">
        <label>Navn<input type="text" id="su-name" autocomplete="name" required></label>
        <label>Email<input type="email" id="su-email" autocomplete="email" required></label>
        <label>Adgangskode<input type="password" id="su-pass" autocomplete="new-password" minlength="6" required placeholder="Mindst 6 tegn"></label>
        <label>Niveau
          <select id="su-level">
            <option value="HF">HF</option>
            <option value="STX">STX</option>
            <option value="HHX">HHX</option>
          </select>
        </label>
        <div id="auth-msg" class="auth-msg"></div>
        <button type="submit" class="btn-auth">Opret gratis konto</button>
      </form>
      <p style="text-align:center;margin-top:14px;color:var(--muted)">
        Har du allerede en konto?
        <a href="#" onclick="navigate('konto');return false;" class="info-big-link">Log ind →</a>
      </p>` : (window.Auth && Auth.isLoggedIn() ? `
      <p style="text-align:center;color:var(--muted)">Du er logget ind som <strong>${Auth.displayName()}</strong>. <a href="#" onclick="navigate('konto');return false;" class="info-big-link">Gå til min konto →</a></p>` : '');

  return `
    ${renderBreadcrumb([{label:'Opret konto', page:'opret'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">🎓 Opret konto</div>
        <h1>Opret din gratis konto</h1>
        <p class="info-lead">Gem din fremgang i skyen og få adgang på alle dine enheder. Opgrader til premium når som helst.</p>
      </div>
      ${signupForm}
      <h2 style="text-align:center;margin:40px 0 4px;font-size:22px">Medlemsskaber</h2>
      <p class="info-lead" style="text-align:center;margin-bottom:20px">Alle medlemsskaber kan opsiges når som helst.</p>
      <div class="pricing-grid">
        ${tiers.map(t => `
          <div class="pricing-card${t.pro ? ' pricing-pro' : ''}">
            ${t.pro ? '<div class="pricing-badge">Mest populær</div>' : ''}
            <div class="pricing-level">${t.level}</div>
            <h3>${t.name}</h3>
            <div class="pricing-price">
              <span class="pricing-amount">${t.price.toFixed(2).replace('.',',')} kr</span>
              <span class="pricing-period">/ måned</span>
            </div>
            <ul class="pricing-features">
              ${t.features.map(f => `<li>✓ ${f}</li>`).join('')}
            </ul>
            <a href="https://nemmat.dk/medlemsskabsniveauer" target="_blank" rel="noopener" class="btn-pricing${t.pro ? ' btn-pricing-pro' : ''}">Vælg ${t.name}</a>
          </div>
        `).join('')}
      </div>
      <div class="info-cta">
        <p>Spørgsmål til medlemsskaber? Ring <a href="tel:50435078">50 43 50 78</a></p>
      </div>
    </div>`;
}

function renderKonto() {
  const flat = [];
  const perCourse = {};
  for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
    const c = curr || VEKTORER_CURRICULUM;
    if (!c) continue;
    perCourse[slug] = { total: 0, done: 0 };
    c.forEach((sec, si) => (sec.items||[]).forEach((it, ii) => {
      flat.push({slug, si, ii});
      perCourse[slug].total++;
      if (completedLessons.has(`${slug}:${si}-${ii}`)) perCourse[slug].done++;
    }));
  }
  const totalDone = Object.values(perCourse).reduce((n,c) => n + c.done, 0);
  const pct = flat.length ? Math.round(100*totalDone/flat.length) : 0;
  // Top 3 kurser med mest fremgang
  const allCourses = _allCourses();
  const topCourses = Object.entries(perCourse)
    .filter(([_, p]) => p.done > 0)
    .sort((a, b) => b[1].done - a[1].done)
    .slice(0, 3)
    .map(([slug, p]) => {
      const meta = allCourses.find(c => c.slug === slug) || { title: slug };
      const cPct = Math.round(100 * p.done / p.total);
      return `
        <div class="info-card" onclick="openCourse('${slug}', encodeURIComponent(${JSON.stringify(meta.title)}))" style="cursor:pointer">
          <h3>${meta.title}</h3>
          <div class="konto-progress-bar" style="margin:8px 0">
            <div class="konto-progress-fill" style="width:${cPct}%"></div>
          </div>
          <p style="margin:0;color:var(--muted);font-size:14px">${p.done} / ${p.total} (${cPct}%)</p>
        </div>`;
    }).join('');
  const loggedIn = window.Auth && Auth.isLoggedIn();

  // ── UDLOGGET: login-formular ──
  if (window.Auth && Auth.available && !loggedIn) {
    return `
    ${renderBreadcrumb([{label:'Log ind', page:'konto'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">🔐 Log ind</div>
        <h1>Log ind på din konto</h1>
        <p class="info-lead">Din fremgang gemmes i skyen og følger dig på alle dine enheder.</p>
      </div>
      <form class="auth-form" onsubmit="doLogin(event)">
        <label>Email<input type="email" id="li-email" autocomplete="email" required></label>
        <label>Adgangskode<input type="password" id="li-pass" autocomplete="current-password" required></label>
        <div id="auth-msg" class="auth-msg"></div>
        <button type="submit" class="btn-auth">Log ind</button>
      </form>
      <p style="text-align:center;margin-top:18px;color:var(--muted)">
        Har du ikke en konto?
        <a href="#" onclick="navigate('opret');return false;" class="info-big-link">Opret konto →</a>
      </p>
    </div>`;
  }

  // ── INDLOGGET (eller offline localStorage-only) ──
  const name = loggedIn ? Auth.displayName().split('@')[0] : '';
  const memb = loggedIn ? Auth.membership() : null;
  const membLabel = { none: 'Gratis', basis: 'Basis', pro: 'Pro' }[memb] || '';
  const isAdmin = loggedIn && Auth.isAdmin();
  return `
    ${renderBreadcrumb([{label:'Min konto', page:'konto'}])}
    <div class="info-page">
      <div class="info-hero">
        <div class="info-hero-badge">👤 Din konto</div>
        <h1>Velkommen${name ? ' ' + name : ' tilbage'}</h1>
        <p class="info-lead">${loggedIn
          ? 'Din fremgang gemmes i skyen og synkroniseres på tværs af dine enheder.'
          : 'Her kan du se din fremgang på tværs af alle kurser — lokalt gemt i din browser.'}</p>
        ${loggedIn ? `<div class="konto-account-row">
          ${membLabel ? `<span class="konto-membership konto-membership-${memb}">${membLabel}-medlem</span>` : ''}
          ${isAdmin ? `<a href="#" onclick="navigate('admin');return false;" class="konto-admin-link">⚙️ Admin-panel</a>` : ''}
          <button class="btn-logout" onclick="doLogout()">Log ud</button>
        </div>` : ''}
      </div>
      <div class="konto-progress">
        <div class="konto-progress-num">${totalDone} / ${flat.length}</div>
        <div class="konto-progress-label">lektioner og quizzer gennemført</div>
        <div class="konto-progress-bar">
          <div class="konto-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="konto-progress-pct">${pct}%</div>
      </div>
      ${topCourses ? `
      <h2 style="margin-top:32px;font-size:20px">Dine kurser i gang</h2>
      <div class="info-grid">${topCourses}</div>` : ''}
      <h2 style="margin-top:32px;font-size:20px">${topCourses ? 'Mere' : 'Kom i gang'}</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">📚</div>
          <h3>Fortsæt læring</h3>
          <p><a href="#" onclick="navigate('gymnasium');return false;" class="info-big-link">Gå til kurser →</a></p>
        </div>
        ${!loggedIn ? `<div class="info-card">
          <div class="info-icon">🔐</div>
          <h3>Opret en konto</h3>
          <p>Gem din fremgang i skyen og få adgang på alle enheder. <a href="#" onclick="navigate('opret');return false;" class="info-big-link">Opret konto →</a></p>
        </div>` : ''}
      </div>
    </div>`;
}

// ── ADMIN-PANEL ──
function renderAdmin() {
  if (!(window.Auth && Auth.isAdmin())) {
    return `
      ${renderBreadcrumb([{label:'Admin', page:'admin'}])}
      <div class="info-page">
        <div class="info-hero"><div class="info-hero-badge">🔒 Admin</div>
          <h1>Ingen adgang</h1>
          <p class="info-lead">Denne side er kun for administratorer.</p>
        </div>
        <p style="text-align:center"><a href="#" onclick="navigate('konto');return false;" class="info-big-link">Tilbage til min konto →</a></p>
      </div>`;
  }
  return `
    ${renderBreadcrumb([{label:'Admin', page:'admin'}])}
    <div class="info-page">
      <div class="info-hero"><div class="info-hero-badge">⚙️ Admin-panel</div>
        <h1>Brugere & medlemskaber</h1>
        <p class="info-lead">Se alle brugere, deres fremgang og styr medlemskaber.</p>
      </div>
      <div style="overflow-x:auto">
        <table class="admin-table">
          <thead><tr>
            <th>Navn</th><th>Email</th><th>Niveau</th><th>Rolle</th><th>Fremgang</th><th>Medlemskab</th>
          </tr></thead>
          <tbody id="admin-users-body">
            <tr><td colspan="6" style="text-align:center;color:var(--muted)">Henter brugere…</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:18px;color:var(--muted);font-size:13px">Quiz-editor (redigér spørgsmål/videoer) kommer i næste trin.</p>
    </div>`;
}

async function loadAdminData() {
  const body = document.getElementById('admin-users-body');
  if (!body) return;
  try {
    const [users, counts] = await Promise.all([Auth.adminListUsers(), Auth.adminProgressCounts()]);
    if (!users.length) {
      body.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--muted)">Ingen brugere endnu.</td></tr>';
      return;
    }
    const esc = s => (s == null ? '' : String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'));
    body.innerHTML = users.map(u => {
      const done = counts[u.id] || 0;
      const sel = ['none','basis','pro'].map(m =>
        `<option value="${m}"${u.membership===m?' selected':''}>${ {none:'Gratis',basis:'Basis',pro:'Pro'}[m] }</option>`).join('');
      return `<tr>
        <td>${esc(u.full_name)}</td>
        <td>${esc(u.email)}</td>
        <td>${esc(u.exam_level)||'–'}</td>
        <td class="${u.role==='admin'?'admin-role-admin':''}">${u.role}</td>
        <td>${done}</td>
        <td><select onchange="doSetMembership('${u.id}', this.value, this)">${sel}</select></td>
      </tr>`;
    }).join('');
  } catch (e) {
    body.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#d93636">Kunne ikke hente brugere: ${e.message||''}</td></tr>`;
  }
}

async function doSetMembership(userId, membership, el) {
  const prev = el ? el.value : null;
  try {
    if (el) el.disabled = true;
    await Auth.adminSetMembership(userId, membership);
    if (el) { el.disabled = false; el.style.borderColor = '#1a9b4b'; setTimeout(()=>{ el.style.borderColor=''; }, 900); }
  } catch (e) {
    if (el) { el.disabled = false; el.style.borderColor = '#d93636'; }
    alert('Kunne ikke ændre medlemskab: ' + (e.message || ''));
  }
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
  if (window.Auth && Auth.isLoggedIn()) Auth.markProgress(key);

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

  // Search input hookup
  const si = document.getElementById('search-input');
  const so = document.getElementById('search-overlay');
  if (si) {
    let t;
    si.addEventListener('input', (e) => {
      clearTimeout(t);
      t = setTimeout(() => _runSearch(e.target.value), 120);
    });
    si.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });
  }
  if (so) {
    so.addEventListener('click', (e) => {
      if (e.target === so) closeSearch();
    });
  }
  // Global ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('search-overlay').hidden) closeSearch();
  });

  navigate('gymnasium');

  // Init auth (Supabase) — opdaterer header + fremgang når session er klar
  if (window.Auth && Auth.init) Auth.init();
});
