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

// ── TAL OG ALGEBRA CURRICULUM (eksempel fra nemmat.dk) ──
const TAL_ALGEBRA_CURRICULUM = [
  {
    title: 'TAL',
    items: [
      { type: 'lesson', title: 'Teori – Tals betydning', dur: '5 min' },
      { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'REGNEARTERNES HIERAKI',
    items: [
      { type: 'lesson', title: 'Teori – Addition og Subtraktion', dur: '4 min' },
      { type: 'lesson', title: 'Teori om Multiplikation og Division', dur: '5 min' },
      { type: 'lesson', title: 'Potens og Rod', dur: '5 min' },
      { type: 'lesson', title: 'Teori om Fortegn', dur: '' },
      { type: 'lesson', title: 'Teori – Regnearternes Hieraki', dur: '5 min' },
      { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'POTENS OG ROD',
    items: [
      { type: 'lesson', title: 'Teori – Regneregler for potens og rødder', dur: '2 min' },
      { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'EKSAMENSØVELSE 1',
    items: [
      { type: 'quiz', title: 'Læringstelt – Hvor meget har du styr på?', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'ALGEBRA',
    items: [
      { type: 'lesson', title: 'Teori – Introduktion til bogstaver', dur: '4 min' },
      { type: 'lesson', title: 'Teori – Algebra og parenteser', dur: '5 min' },
      { type: 'lesson', title: 'Algebra regneregler', dur: '6 min' },
      { type: 'quiz',   title: 'Læringstelt – Test din forståelse', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'TAL OG BOGSTAVER MED DIGITALE VÆRKTØJ (CAS)',
    items: [
      { type: 'quiz', title: 'Læringstelt – Test din forståelse', dur: '7 spørgsmål' }
    ]
  },
  {
    title: 'BRØKREGNING',
    items: [
      { type: 'lesson', title: 'Teori – Hvad er en brøk, forlængelse og forkortelse', dur: '4 min' },
      { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
      { type: 'lesson', title: 'Teori – Addition og Subtraktion med brøker', dur: '5 min' },
      { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
      { type: 'lesson', title: 'Teori – Multiplikation og Division med brøker', dur: '3 min' },
      { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' },
      { type: 'lesson', title: 'Teori – Sammenhæng mellem tal og brøker', dur: '4 min' },
      { type: 'quiz',   title: 'Test din forståelse', dur: '5 spørgsmål' }
    ]
  },
  {
    title: 'EKSAMENSØVELSE 2',
    items: [
      { type: 'quiz', title: 'Test din forståelse af Tal og Algebra', dur: '5 spørgsmål' }
    ]
  }
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
  currentCourse = data || null;
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
  return VEKTORER_CURRICULUM;
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
  bindEvents();
}

// ── GYMNASIUM SIDE (nemmat.dk/gymnasium) ──
function renderGymnasium() {
  return `
    ${renderBreadcrumb([])}
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

  const cards = courses.map(c => `
    <div class="course-card" onclick="openCourse('${c.slug}','${encodeURIComponent(c.title)}')">
      <div class="course-card-img"
           style="background-image:url('${c.img}')"
           onerror="this.style.backgroundColor='#E1E9FD'"></div>
      <div class="course-card-body">
        <h2>${c.title}${c.subtitle ? '<br><small style="font-size:13px;color:var(--muted);font-weight:400">' + c.subtitle + '</small>' : ''}</h2>
        <button class="btn-gaa-til">GÅ TIL KURSET</button>
      </div>
    </div>
  `).join('');

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
  const curriculum = getCurriculum();
  const totalLessons = curriculum.reduce((n,s) => n + s.items.filter(i=>i.type==='lesson').length, 0);
  const totalQuizzes = curriculum.reduce((n,s) => n + s.items.filter(i=>i.type==='quiz').length, 0);

  const curriculumHtml = curriculum.map((sec, si) => `
    <div class="curriculum-section">
      <div class="curriculum-section-header" onclick="toggleSection(${si})">
        <span>${sec.title}</span>
        <span class="curriculum-section-meta">${sec.items.length} opgaver</span>
        <span id="chev-${si}" style="color:var(--primary);transition:transform .25s">▼</span>
      </div>
      <div class="curriculum-section-body ${si===0?'open':''}" id="sec-body-${si}">
        ${sec.items.map(item => `
          <div class="curriculum-item">
            <span class="item-icon">${item.type==='quiz' ? '❓' : '📄'}</span>
            <span class="item-title">${item.title}</span>
            <span class="item-locked">🔒</span>
            ${item.dur ? `<span class="item-dur">${item.dur}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    ${renderBreadcrumb([
      {label:'Gymnasium',page:'gymnasium'},
      {label:'HF',page:'hf'},
      {label:'HF C Niveau',page:'hf-c'}
    ])}
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
            <h3>Tal og Algebra:</h3>
            <p>Dette kursus giver dig en grundlæggende forståelse af talsystemet, regningsarterne og simpel algebra. Vi bygger et stærkt fundament, der gør det lettere for dig at arbejde med matematik og problemløsning.</p>
            <p><strong>Hvad lærer du?</strong></p>
            <ul>
              <li>Talsystemet — naturlige, hele, rationale og reelle tal</li>
              <li>Regningsarternes hierarki</li>
              <li>Simpel algebra</li>
              <li>Potens og rod</li>
            </ul>
            <p><strong>Kurset er for:</strong> dig der ønsker at bygge en stærk matematisk base til dagligdagen og fremtidige studier.</p>
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
          <button class="btn-start-kursus" onclick="openLesson(0,0)">Start Kursus</button>
          <button class="btn-kob-med">Køb Medlemskab</button>
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
  const contentHtml = `
    <div class="lesson-video-wrap">
      ${isQuiz ? `
        <div class="lesson-video-placeholder">
          <div class="play-icon">❓</div>
          <span>Quiz — ${item.dur || ''}</span>
        </div>` : item.ytId ? `
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
      ${!isQuiz ? `<p class="lesson-desc">${item.dur ? `⏱ ${item.dur}` : ''}</p>` : ''}
    </div>
    <div class="lesson-complete-area">
      <button id="btn-complete"
        class="btn-mark-complete${isCompleted(currentSection, currentItem) ? ' done' : ''}"
        onclick="markComplete()"
        ${isCompleted(currentSection, currentItem) ? 'disabled' : ''}>
        ${isCompleted(currentSection, currentItem) ? '✅ Gennemført!' : isQuiz ? '✅ Markér quiz som færdig' : '✅ Markér som gennemført'}
      </button>
      ${!isCompleted(currentSection, currentItem) ? `<span class="lesson-complete-hint">Klik når du er færdig med ${isQuiz ? 'quizzen' : 'videoen'}</span>` : ''}
    </div>`;

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

function getLessonKey(si, ii) { return `${si}-${ii}`; }

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

// ── FADE-IN PÅ NAVIGATE ──
const _origNavigate = navigate;

// Override render til at tilføje fade
const _origRender = render;
function render() {
  _origRender();
  const app = document.getElementById('app');
  if (app) {
    app.style.animation = 'none';
    app.offsetHeight; // reflow
    app.style.animation = 'fadeIn .25s ease';
  }
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
