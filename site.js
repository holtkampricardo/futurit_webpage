/**
 * Futurit launch site
 */
const FUTURIT_SITE = {
  formspreeEndpoint: 'https://formspree.io/f/mnjrjjdj',
  contactEmail: 'legal@futurit.app',
  supportEmail: 'soporte@futurit.app',
};

const COOKIE_CONSENT_KEY = 'futurit-cookie-consent';

const translations = {
  es: {
    'nav-privacy': 'Privacidad',
    'nav-features': 'Funciones',
    'nav-showcase': 'Vista previa',
    'nav-compare': 'Por qué',
    'nav-faq': 'FAQ',
    'notify-me': 'Avísame',
    'hero-badge': 'Simulación patrimonial',
    'hero-title': 'Haz crecer tu visión del patrimonio',
    'hero-title-accent': ['patrimonio'],
    'hero-subtitle-prefix': 'Modela tus',
    'hero-subtitle-suffix': ' con claridad. Tus datos, en tu dispositivo.',
    'hero-rotate-words': ['activos', 'metas', 'escenarios'],
    'hero-explore': 'Explorar funciones',
    'hero-coming': 'Próximamente en iOS y Android',
    'hero-local': 'Datos en el dispositivo',
    'notify-me-cta': 'Avísame cuando esté disponible',
    'hero-disclaimer':
      'Futurit es una herramienta educativa de simulación. No ofrece asesoramiento financiero ni de inversión regulado.',
    'float-scenario': 'Escenario base',
    'float-goal': 'Meta activa',
    'ui-wealth': 'Patrimonio proyectado',
    'ui-goal': 'Fondo emergencia',
    'mq-1': 'Patrimonio proyectado',
    'mq-2': 'Escenarios múltiples',
    'mq-3': 'Metas con plazo',
    'mq-4': 'Import CSV / Excel',
    'mq-5': 'Privacidad local',
    'mq-6': 'Coach IA opcional',
    'mq-7': 'Time Travel',
    'mq-8': 'Inflación real',
    'mq-9': 'Sin suscripción',
    'mq-10': 'Exporta tus datos',
    'mq-11': 'Crew patrimonial',
    'mq-12': 'Herramienta educativa',
    'principle-1': 'Local-first',
    'principle-2': 'Sin suscripción',
    'principle-3': 'Herramienta educativa',
    'principle-4': 'iOS y Android',
    'stat-1': 'Datos almacenados en tu dispositivo. Sin cuenta obligatoria.',
    'stat-2': 'Optimista, base y pesimista para cada proyección.',
    'stat-2-suffix': ' escenarios',
    'stat-3': 'Lanzamiento en App Store y Google Play. Lista de espera abierta.',
    'stat-3-value': 'iOS + Android',
    'section-features': 'Funciones',
    'section-process': 'Cómo funciona',
    'process-title': 'De tus activos a tu futuro, en tres pasos',
    'step-1-title': 'Registra tu patrimonio',
    'step-1-desc':
      'Añade activos manualmente o importa desde CSV/Excel. Organiza por titular con tu crew.',
    'step-2-title': 'Define metas y escenarios',
    'step-2-desc': 'Fija objetivos con plazo y modela bandas optimista, base y pesimista.',
    'step-3-title': 'Visualiza y decide',
    'step-3-desc':
      'Explora proyecciones, Time Travel y evolución mensual. Tú mantienes el control.',
    'section-showcase': 'Vista previa',
    'features-title': 'Todo lo que necesitas para modelar tu futuro financiero',
    'features-subtitle':
      'Sin hojas de cálculo. Sin asesoramiento opaco. Solo claridad patrimonial en tu bolsillo.',
    'f1-title': 'Patrimonio proyectado',
    'f1-desc':
      'Dashboard con evolución mensual, inflación nominal o real y Time Travel para revisar el pasado.',
    'f2-title': 'Mis activos y crew',
    'f2-desc': 'Cartera por titular. Importa y exporta CSV o Excel.',
    'f3-title': 'Metas financieras',
    'f3-desc': 'Objetivos con plazo y seguimiento sin confundir patrimonio total.',
    'f4-title': 'Escenarios',
    'f4-desc': 'Bandas optimista, base y pesimista de tu patrimonio futuro.',
    'f5-title': 'Coach de IA (opcional)',
    'f5-desc': 'Tu clave de Google Gemini. Sin clave, no se envía nada a terceros.',
    'f6-title': 'Privacidad local',
    'f6-desc': 'Sin cuenta obligatoria. Tú controlas exportar y borrar.',
    'showcase-title': 'Preparando el lanzamiento',
    'showcase-desc':
      'Futurit llegará pronto a iOS y Android. Claridad patrimonial sin asesoramiento opaco.',
    'perk-1': 'Sin hojas de cálculo',
    'perk-2': 'Sin asesoramiento opaco',
    'perk-3': 'Tus datos, tu dispositivo',
    'viz-title': 'Proyección año 10',
    'viz-pill': 'Escenario base',
    'viz-growth': 'Crecimiento anual',
    'viz-growth-val': '+8,2%',
    'viz-horizon': 'Horizonte',
    'viz-horizon-val': '10 años',
    'chat-user': '¿Cómo va mi meta de emergencia?',
    'chat-ai': 'Llevas el 72% del objetivo. A este ritmo lo completas en 8 meses.',
    'privacy-badge': 'On-device',
    'section-compare': 'Por qué Futurit',
    'compare-title': 'Deja la hoja de cálculo atrás',
    'compare-subtitle':
      'Arrastra el control para ver la diferencia entre un Excel patrimonial y Futurit.',
    'compare-left': 'Excel',
    'compare-right': 'Futurit',
    'compare-aria': 'Comparar Excel y Futurit',
    'section-faq': 'Preguntas',
    'faq-title': 'Lo que suele preguntarse',
    'faq-q1': '¿Futurit es asesoramiento financiero?',
    'faq-a1':
      'No. Es una herramienta educativa de simulación. No ofrece recomendaciones de inversión reguladas ni sustituye a un asesor profesional.',
    'faq-q2': '¿Dónde se guardan mis datos?',
    'faq-a2':
      'En la app, los datos permanecen en tu dispositivo. Esta web solo recoge tu email si te apuntas a la lista de espera.',
    'faq-q3': '¿Cuándo estará disponible?',
    'faq-a3':
      'Estamos preparando el lanzamiento en la App Store y Google Play. Apúntate a la lista y te avisaremos cuando Futurit esté listo.',
    'faq-q4': '¿Tiene coste la app?',
    'faq-a4':
      'Futurit será gratuito en su lanzamiento. El coach de IA opcional usa tu propia clave de Google Gemini.',
    'cta-title': '¿Quieres ser de los primeros?',
    'cta-subtitle': 'Lista de espera para el lanzamiento en iOS y Android.',
    'cta-perk-1': 'Acceso anticipado al aviso de lanzamiento',
    'cta-perk-2': 'Sin spam: solo novedades de Futurit',
    'cta-perk-3': 'Puedes darte de baja cuando quieras',
    'cta-placeholder': 'tu@email.com',
    'cta-button': 'Unirme',
    'terms-text':
      'Confirmo que tengo al menos 16 años y que he leído y acepto los <span class="modal-link" data-type="terms">Términos y Condiciones</span>, la <span class="modal-link" data-type="privacy">Política de Privacidad</span> y el <span class="modal-link" data-type="legal">Aviso Legal</span>.',
    'marketing-text':
      'Acepto recibir correos promocionales y novedades sobre Futurit (opcional). Puedo darme de baja en cualquier momento.',
    'privacy-policy':
      'Tu correo se usa solo para gestionar la lista de espera. Los envíos se procesan mediante <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>, nuestro proveedor de formularios. No vendemos tus datos. Consulta nuestra <span class="modal-link" data-type="privacy">Política de Privacidad</span>.',
    'disclaimer-short':
      'Futurit está en desarrollo. Apuntarse a la lista no garantiza acceso, fecha de lanzamiento ni disponibilidad en tu región.',
    'footer-terms': 'Términos',
    'footer-privacy': 'Privacidad',
    'footer-legal': 'Aviso Legal',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contacto',
    'footer-disclaimer':
      'Futurit es un proyecto en desarrollo. Los contenidos de esta web son informativos y no constituyen asesoramiento financiero ni oferta.',
    'footer-rights': 'Todos los derechos reservados.',
    'cookie-text':
      'Usamos almacenamiento esencial (idioma) y servicios de terceros (Formspree, fuentes). Consulta nuestra <span class="modal-link" data-type="cookies">Política de Cookies</span>.',
    'cookie-reject': 'Rechazar no esenciales',
    'cookie-accept': 'Aceptar',
    'form-success': '¡Gracias! Te avisaremos cuando Futurit esté disponible.',
    'form-error': 'No se pudo enviar. Escríbenos a soporte@futurit.app',
    'form-config': 'Configura Formspree en site.js (formspreeEndpoint).',
  },
  en: {
    'nav-privacy': 'Privacy',
    'nav-features': 'Features',
    'nav-showcase': 'Preview',
    'notify-me': 'Notify me',
    'hero-badge': 'Wealth simulation',
    'hero-title': 'Grow your view of your wealth',
    'hero-title-accent': ['wealth'],
    'hero-subtitle-prefix': 'Model your',
    'hero-subtitle-suffix': ' with clarity. Your data stays on your device.',
    'hero-rotate-words': ['assets', 'goals', 'scenarios'],
    'hero-explore': 'Explore features',
    'hero-coming': 'Coming soon on iOS & Android',
    'hero-local': 'Data on your device',
    'notify-me-cta': 'Notify me when it launches',
    'hero-disclaimer':
      'Futurit is an educational simulation tool. It does not provide regulated financial or investment advice.',
    'float-scenario': 'Base scenario',
    'float-goal': 'Active goal',
    'ui-wealth': 'Projected wealth',
    'ui-goal': 'Emergency fund',
    'mq-1': 'Projected wealth',
    'mq-2': 'Multiple scenarios',
    'mq-3': 'Goals with deadlines',
    'mq-4': 'Import CSV / Excel',
    'mq-5': 'On-device privacy',
    'mq-6': 'Optional AI coach',
    'mq-7': 'Time Travel',
    'mq-8': 'Real inflation',
    'mq-9': 'No subscription',
    'mq-10': 'Export your data',
    'mq-11': 'Wealth crew',
    'mq-12': 'Educational tool',
    'stat-1': 'Data stored on your device. No account required.',
    'stat-2': 'Optimistic, base and pessimistic for every projection.',
    'stat-2-suffix': ' scenarios',
    'stat-3': 'App Store and Google Play launch coming. Waitlist is open.',
    'stat-3-value': 'iOS + Android',
    'principle-4': 'iOS & Android',
    'section-features': 'Features',
    'section-process': 'How it works',
    'process-title': 'From your assets to your future in three steps',
    'step-1-title': 'Register your wealth',
    'step-1-desc':
      'Add assets manually or import from CSV/Excel. Organize by holder with your crew.',
    'step-2-title': 'Set goals and scenarios',
    'step-2-desc': 'Define targets with deadlines and model optimistic, base and pessimistic bands.',
    'step-3-title': 'Visualize and decide',
    'step-3-desc':
      'Explore projections, Time Travel and monthly evolution. You stay in control.',
    'section-showcase': 'Preview',
    'features-title': 'Everything you need to model your financial future',
    'features-subtitle':
      'No spreadsheets. No opaque advice. Just wealth clarity in your pocket.',
    'f1-title': 'Projected wealth',
    'f1-desc':
      'Dashboard with monthly evolution, nominal or real inflation and Time Travel to revisit the past.',
    'f2-title': 'Assets & crew',
    'f2-desc': 'Portfolio by holder. Import and export CSV or Excel.',
    'f3-title': 'Financial goals',
    'f3-desc': 'Targets with deadlines without mixing up total wealth.',
    'f4-title': 'Scenarios',
    'f4-desc': 'Optimistic, base and pessimistic bands for your future wealth.',
    'f5-title': 'AI coach (optional)',
    'f5-desc': 'Your own Google Gemini API key. No key, no data sent to third parties.',
    'f6-title': 'On-device privacy',
    'f6-desc': 'No account required. You control export and deletion.',
    'showcase-title': 'Launch coming soon',
    'showcase-desc':
      'Futurit is heading to iOS and Android. Clear wealth insights without opaque advice.',
    'perk-1': 'No spreadsheets',
    'perk-2': 'No opaque advice',
    'perk-3': 'Your data, your device',
    'viz-title': 'Year 10 projection',
    'viz-pill': 'Base scenario',
    'viz-growth': 'Annual growth',
    'viz-growth-val': '+8.2%',
    'viz-horizon': 'Horizon',
    'viz-horizon-val': '10 years',
    'chat-user': 'How is my emergency fund goal going?',
    'chat-ai': 'You are at 72% of the target. At this pace you finish in 8 months.',
    'privacy-badge': 'On-device',
    'section-compare': 'Why Futurit',
    'compare-title': 'Leave the spreadsheet behind',
    'compare-subtitle': 'Drag the control to compare a wealth spreadsheet with Futurit.',
    'compare-left': 'Excel',
    'compare-right': 'Futurit',
    'compare-aria': 'Compare Excel and Futurit',
    'section-faq': 'Questions',
    'faq-title': 'Common questions',
    'faq-q1': 'Is Futurit financial advice?',
    'faq-a1':
      'No. It is an educational simulation tool. It does not provide regulated investment recommendations or replace a professional advisor.',
    'faq-q2': 'Where is my data stored?',
    'faq-a2':
      'In the app, data stays on your device. This website only collects your email if you join the waitlist.',
    'faq-q3': 'When will it be available?',
    'faq-a3':
      'We are preparing the App Store and Google Play launch. Join the waitlist and we will notify you when Futurit is ready.',
    'faq-q4': 'Does the app cost money?',
    'faq-a4':
      'Futurit will be free at launch. The optional AI coach uses your own Google Gemini API key.',
    'cta-title': 'Want to be among the first?',
    'cta-subtitle': 'Join the waitlist for the iOS and Android launch.',
    'cta-perk-1': 'Early access to launch notifications',
    'cta-perk-2': 'No spam: Futurit updates only',
    'cta-perk-3': 'Unsubscribe anytime',
    'cta-placeholder': 'you@email.com',
    'cta-button': 'Join waitlist',
    'terms-text':
      'I confirm I am at least 16 years old and I have read and accept the <span class="modal-link" data-type="terms">Terms & Conditions</span>, the <span class="modal-link" data-type="privacy">Privacy Policy</span> and the <span class="modal-link" data-type="legal">Legal Notice</span>.',
    'marketing-text':
      'I agree to receive promotional emails and Futurit updates (optional). I can unsubscribe at any time.',
    'privacy-policy':
      'Your email is used only to manage the waitlist. Submissions are processed by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>, our form provider. We do not sell your data. See our <span class="modal-link" data-type="privacy">Privacy Policy</span>.',
    'disclaimer-short':
      'Futurit is in development. Joining the waitlist does not guarantee access, launch date, or availability in your region.',
    'footer-terms': 'Terms',
    'footer-privacy': 'Privacy',
    'footer-legal': 'Legal Notice',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contact',
    'footer-disclaimer':
      'Futurit is a project in development. Site content is for information only and is not financial advice or an offer.',
    'footer-rights': 'All rights reserved.',
    'cookie-text':
      'We use essential storage (language preference) and third-party services (Formspree, fonts). See our <span class="modal-link" data-type="cookies">Cookie Policy</span>.',
    'cookie-reject': 'Reject non-essential',
    'cookie-accept': 'Accept',
    'form-success': 'Thanks! We will notify you when Futurit is available.',
    'form-error': 'Could not submit. Email us at soporte@futurit.app',
    'form-config': 'Configure Formspree in site.js (formspreeEndpoint).',
  },
};

let currentLang = localStorage.getItem('futurit-lang') || 'es';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const litePerf = prefersReducedMotion || coarsePointer;

function throttleRAF(fn) {
  let ticking = false;
  let lastArgs = null;
  return (...args) => {
    lastArgs = args;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      fn(...lastArgs);
      ticking = false;
    });
  };
}

function renderHeroTitle(lang) {
  const el = document.getElementById('hero-title');
  if (!el) return;

  const text = translations[lang]['hero-title'];
  const accents = translations[lang]['hero-title-accent'] || [];
  const words = text.split(' ');

  el.innerHTML = words
    .map((word, i) => {
      const clean = word.replace(/[.,!?]/g, '');
      const cls = accents.some((a) => clean.toLowerCase() === a.toLowerCase()) ? 'word accent' : 'word';
      return `<span class="${cls}" style="transition-delay:${i * 0.07}s">${word}</span>`;
    })
    .join(' ');

  requestAnimationFrame(() => el.classList.add('is-visible'));
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('futurit-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('[data-lang-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-lang-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  renderHeroTitle(lang);
  initRotatingText(lang);

  const sw = document.getElementById('language-switcher');
  if (sw) sw.value = lang;
  const consentLang = document.getElementById('consent-language-field');
  if (consentLang) consentLang.value = lang;
  bindModalLinks();
}

function openLegalModal(type) {
  const doc = typeof LEGAL_TEXTS !== 'undefined' ? LEGAL_TEXTS[currentLang]?.[type] : null;
  if (!doc) return;
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = doc.title;
  document.getElementById('modal-content').innerHTML = doc.content;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  bindModalLinks();
}

function bindModalLinks() {
  document.querySelectorAll('.modal-link').forEach((link) => {
    link.replaceWith(link.cloneNode(true));
  });
  document.querySelectorAll('.modal-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal(link.getAttribute('data-type'));
    });
  });
  document.querySelectorAll('[data-type]').forEach((btn) => {
    if (!btn.classList.contains('modal-link') && btn.tagName === 'BUTTON') {
      btn.onclick = (e) => {
        e.preventDefault();
        openLegalModal(btn.getAttribute('data-type'));
      };
    }
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

let rotatingTimer = null;

function initRotatingText(lang = currentLang) {
  const el = document.getElementById('rotating-word');
  if (!el) return;

  const words = translations[lang]['hero-rotate-words'] || [];
  if (!words.length) return;

  if (rotatingTimer) clearInterval(rotatingTimer);

  let index = Math.max(0, words.indexOf(el.textContent.trim()));
  if (index < 0) index = 0;
  el.textContent = words[index];
  el.classList.remove('is-exit', 'is-enter');

  if (prefersReducedMotion || words.length < 2) return;

  rotatingTimer = setInterval(() => {
    const next = (index + 1) % words.length;
    el.classList.add('is-exit');
    setTimeout(() => {
      el.textContent = words[next];
      el.classList.remove('is-exit');
      el.classList.add('is-enter');
      requestAnimationFrame(() => {
        el.classList.remove('is-enter');
      });
      index = next;
    }, 280);
  }, 2800);
}

function initCompareSlider() {
  const wrap = document.getElementById('compare-wrap');
  const range = document.getElementById('compare-range');
  const appLayer = document.getElementById('compare-app-layer');
  const handle = document.getElementById('compare-handle');
  if (!wrap || !appLayer || !handle) return;

  const MIN = 8;
  const MAX = 92;
  let dragging = false;

  const clamp = (val) => Math.min(MAX, Math.max(MIN, Number(val)));

  const paint = (pct) => {
    const val = clamp(pct);
    const pctStr = `${val}%`;
    const rounded = String(Math.round(val));
    wrap.style.setProperty('--compare-pct', pctStr);
    appLayer.style.left = pctStr;
    appLayer.style.width = `calc(100% - ${pctStr})`;
    handle.style.left = pctStr;
    wrap.setAttribute('aria-valuenow', rounded);
    if (range) range.value = rounded;
  };

  const paintFromX = (clientX) => {
    const rect = wrap.getBoundingClientRect();
    if (!rect.width) return;
    paint(((clientX - rect.left) / rect.width) * 100);
  };

  const onPointerDown = (e) => {
    if (e.button > 0) return;
    e.preventDefault();
    dragging = true;
    wrap.setPointerCapture(e.pointerId);
    paintFromX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging || !wrap.hasPointerCapture(e.pointerId)) return;
    e.preventDefault();
    paintFromX(e.clientX);
  };

  const onPointerEnd = (e) => {
    if (wrap.hasPointerCapture(e.pointerId)) {
      wrap.releasePointerCapture(e.pointerId);
    }
    dragging = false;
  };

  wrap.addEventListener('pointerdown', onPointerDown);
  wrap.addEventListener('pointermove', onPointerMove);
  wrap.addEventListener('pointerup', onPointerEnd);
  wrap.addEventListener('pointercancel', onPointerEnd);

  wrap.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 8 : 4;
    const current = Number(range?.value ?? wrap.getAttribute('aria-valuenow') ?? 50);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      paint(current - step);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      paint(current + step);
    }
  });

  range?.addEventListener('input', (e) => paint(e.target.value));

  paint(range?.value ?? 50);
}

function initHeroSpotlight() {
  const hero = document.querySelector('.hero');
  const spotlight = document.getElementById('hero-spotlight');
  if (!hero || !spotlight || litePerf) return;

  const onMove = throttleRAF((e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlight.style.setProperty('--spot-x', `${x}%`);
    spotlight.style.setProperty('--spot-y', `${y}%`);
  });

  hero.addEventListener('mousemove', onMove, { passive: true });
}

function initSpotlightCards() {
  if (litePerf) return;

  const onMove = throttleRAF((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--card-x', `${x}%`);
    card.style.setProperty('--card-y', `${y}%`);
  });

  document.querySelectorAll('.spotlight-card').forEach((card) => {
    card.addEventListener('mousemove', onMove, { passive: true });
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

function formatCount(value, el) {
  if (el.id === 'balance-counter') {
    return Math.round(value).toLocaleString(currentLang === 'es' ? 'es-ES' : 'en-US');
  }
  return String(Math.round(value));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (prefersReducedMotion) {
      el.textContent = formatCount(target, el);
      return;
    }
    const duration = el.id === 'balance-counter' ? 1800 : 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatCount(target * eased, el);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function initScrollEffects() {
  const header = document.getElementById('site-header');
  const bar = document.getElementById('scroll-progress');
  const links = document.querySelectorAll('.header-nav a[href^="#"], .mobile-nav a[href^="#"]');

  const sections = [...links]
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { id, section } : null;
    })
    .filter(Boolean);

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;

    if (header) {
      header.classList.toggle('is-hidden', y > lastY && y > 120);
      lastY = y;
    }

    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }

    if (sections.length) {
      const offset = window.innerHeight * 0.35;
      let current = sections[0].id;
      sections.forEach(({ id, section }) => {
        if (section.getBoundingClientRect().top <= offset) current = id;
      });
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
      });
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

function initMarqueePause() {
  if (prefersReducedMotion) return;

  const sections = document.querySelectorAll('.marquee-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-paused', !entry.isIntersecting);
      });
    },
    { rootMargin: '50px 0px' }
  );

  sections.forEach((el) => observer.observe(el));
}

function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
  });
}

function initPhoneTilt() {
  const phone = document.getElementById('phone-frame');
  const device = document.querySelector('.hero-device');
  if (!phone || !device || litePerf) return;

  const onMove = throttleRAF((e) => {
    const rect = device.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    phone.style.transform = `perspective(1200px) rotateY(${-8 + x * 10}deg) rotateX(${4 - y * 8}deg) translateY(-4px)`;
  });

  device.addEventListener('mousemove', onMove, { passive: true });
  device.addEventListener('mouseleave', () => {
    phone.style.transform = 'perspective(1200px) rotateY(-8deg) rotateX(4deg)';
  });
}

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const accept = document.getElementById('cookie-accept');
  const reject = document.getElementById('cookie-reject');
  if (!banner) return;

  if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
    banner.classList.remove('hidden');
  }

  const hide = () => banner.classList.add('hidden');

  accept?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    hide();
  });
  reject?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    hide();
  });
}

function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const termsChecked = document.getElementById('terms')?.checked;
    document.getElementById('privacy-accepted-field').value = termsChecked ? 'yes' : 'no';
    document.getElementById('marketing-consent-field').value = document.getElementById('marketing')?.checked
      ? 'yes'
      : 'no';
    document.getElementById('consent-language-field').value = currentLang;

    let tsField = form.querySelector('input[name="consent_timestamp"]');
    if (!tsField) {
      tsField = document.createElement('input');
      tsField.type = 'hidden';
      tsField.name = 'consent_timestamp';
      form.appendChild(tsField);
    }
    tsField.value = new Date().toISOString();

    const endpoint = FUTURIT_SITE.formspreeEndpoint;
    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      status.textContent = translations[currentLang]['form-config'];
      status.style.color = 'var(--caution)';
      status.classList.remove('hidden');
      return;
    }

    const fd = new FormData(form);
    fd.append('_subject', '[Futurit] Waitlist');
    if (!fd.get('product')) fd.append('product', 'Futurit');

    status.classList.remove('hidden');
    status.textContent = '…';
    status.style.color = 'var(--muted)';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = translations[currentLang]['form-success'];
        status.style.color = 'var(--positive)';
        form.reset();
        document.getElementById('privacy-accepted-field').value = 'no';
        document.getElementById('marketing-consent-field').value = 'no';
      } else {
        throw new Error('bad response');
      }
    } catch {
      status.textContent = translations[currentLang]['form-error'];
      status.style.color = '#fb7185';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const sw = document.getElementById('language-switcher');
  if (sw) sw.addEventListener('change', (e) => setLanguage(e.target.value));

  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  setLanguage(currentLang);
  initScrollReveal();
  initHeroSpotlight();
  initSpotlightCards();
  initCounters();
  initScrollEffects();
  initMarqueePause();
  initCompareSlider();
  initMobileNav();
  initPhoneTilt();
  initCookieBanner();
  initWaitlistForm();
});
