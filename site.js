/**
 * Futurit launch site — configura antes de publicar.
 * Formspree: https://formspree.io → crea un formulario y pega el endpoint.
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
    'notify-me': 'Avísame',
    'hero-badge': 'Simulación patrimonial',
    'hero-title': 'Haz crecer tu visión del patrimonio',
    'hero-subtitle':
      'Activos, metas, escenarios y coach de IA opcional. Tus datos, en tu iPhone.',
    'hero-coming': 'Próximamente en iOS',
    'notify-me-cta': 'Avísame cuando esté disponible',
    'hero-disclaimer':
      'Futurit es una herramienta educativa de simulación. No ofrece asesoramiento financiero ni de inversión regulado.',
    'features-title': '¿Qué puedes hacer con Futurit?',
    'features-subtitle': 'Todo para modelar tu futuro financiero sin hojas de cálculo.',
    'f1-title': 'Patrimonio proyectado',
    'f1-desc': 'Dashboard con evolución mensual, inflación nominal o real y Time Travel.',
    'f2-title': 'Mis activos y crew',
    'f2-desc': 'Cartera por titular. Importa y exporta CSV o Excel.',
    'f3-title': 'Metas financieras',
    'f3-desc': 'Objetivos con plazo y seguimiento sin confundir patrimonio total.',
    'f4-title': 'Escenarios',
    'f4-desc': 'Bandas optimista, base y pesimista de tu patrimonio futuro.',
    'f5-title': 'Coach de IA (opcional)',
    'f5-desc': 'Tu clave de Google Gemini. Sin clave, no se envía nada a terceros.',
    'f6-title': 'Privacidad local',
    'f6-desc': 'Sin cuenta obligatoria. Datos en el dispositivo; tú controlas exportar y borrar.',
    'showcase-title': 'Preparando el lanzamiento',
    'showcase-desc':
      'Futurit llegará pronto a la App Store. Claridad patrimonial sin asesoramiento opaco.',
    'cta-title': '¿Quieres ser de los primeros?',
    'cta-subtitle': 'Lista de espera para el lanzamiento en la App Store.',
    'cta-button': 'Unirme',
    'terms-text':
      'Confirmo que tengo al menos 16 años y que he leído y acepto los <span class="modal-link" data-type="terms">Términos y Condiciones</span>, la <span class="modal-link" data-type="privacy">Política de Privacidad</span> y el <span class="modal-link" data-type="legal">Aviso Legal</span>.',
    'marketing-text':
      'Acepto recibir correos promocionales y novedades sobre Futurit (opcional). Puedo darme de baja en cualquier momento.',
    'privacy-policy':
      'Tu correo se usa solo para gestionar la lista de espera. Los envíos se procesan mediante <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#a78bfa]">Formspree</a>, nuestro proveedor de formularios. No vendemos tus datos. Consulta nuestra <span class="modal-link" data-type="privacy">Política de Privacidad</span>.',
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
    'footer-instagram': 'Instagram',
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
    'notify-me': 'Notify me',
    'hero-badge': 'Wealth simulation',
    'hero-title': 'Grow your view of your wealth',
    'hero-subtitle':
      'Assets, goals, scenarios and optional AI coach. Your data stays on your iPhone.',
    'hero-coming': 'Coming soon on iOS',
    'notify-me-cta': 'Notify me when it launches',
    'hero-disclaimer':
      'Futurit is an educational simulation tool. It does not provide regulated financial or investment advice.',
    'features-title': 'What can you do with Futurit?',
    'features-subtitle': 'Everything to model your financial future without spreadsheets.',
    'f1-title': 'Projected wealth',
    'f1-desc': 'Dashboard with monthly evolution, nominal or real inflation and Time Travel.',
    'f2-title': 'Assets & crew',
    'f2-desc': 'Portfolio by holder. Import and export CSV or Excel.',
    'f3-title': 'Financial goals',
    'f3-desc': 'Targets with deadlines without mixing up total wealth.',
    'f4-title': 'Scenarios',
    'f4-desc': 'Optimistic, base and pessimistic bands for your future wealth.',
    'f5-title': 'AI coach (optional)',
    'f5-desc': 'Your own Google Gemini API key. No key, no data sent to third parties.',
    'f6-title': 'On-device privacy',
    'f6-desc': 'No account required. Data on device; you control export and deletion.',
    'showcase-title': 'Launch coming soon',
    'showcase-desc':
      'Futurit is heading to the App Store. Clear wealth insights without opaque advice.',
    'cta-title': 'Want to be among the first?',
    'cta-subtitle': 'Join the waitlist for the App Store launch.',
    'cta-button': 'Join waitlist',
    'terms-text':
      'I confirm I am at least 16 years old and I have read and accept the <span class="modal-link" data-type="terms">Terms & Conditions</span>, the <span class="modal-link" data-type="privacy">Privacy Policy</span> and the <span class="modal-link" data-type="legal">Legal Notice</span>.',
    'marketing-text':
      'I agree to receive promotional emails and Futurit updates (optional). I can unsubscribe at any time.',
    'privacy-policy':
      'Your email is used only to manage the waitlist. Submissions are processed by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#a78bfa]">Formspree</a>, our form provider. We do not sell your data. See our <span class="modal-link" data-type="privacy">Privacy Policy</span>.',
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
    'footer-instagram': 'Instagram',
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

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('futurit-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  const sw = document.getElementById('language-switcher');
  if (sw) sw.value = lang;
  const consentLang = document.getElementById('consent-language-field');
  if (consentLang) consentLang.value = lang;
  bindModalLinks();
}

function openLegalModal(type) {
  const doc =
    typeof LEGAL_TEXTS !== 'undefined' ? LEGAL_TEXTS[currentLang]?.[type] : null;
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

function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const colors = ['#8b5cf6', '#a78bfa', '#ec4899', '#c4b5fd'];
  let particles = [];

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    particles = [];
    const n = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        c: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x > canvas.width) p.x = 0;
      if (p.x < 0) p.x = canvas.width;
      if (p.y > canvas.height) p.y = 0;
      if (p.y < 0) p.y = canvas.height;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener('resize', resize);
}

function initParallax() {
  const container = document.getElementById('parallax-scene');
  if (!container) return;
  const items = container.querySelectorAll('.parallax-item');
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    items.forEach((item) => {
      const m = item.style.transform.match(/translateZ\((\d+)px\)/);
      const z = m ? parseFloat(m[1]) : 30;
      item.style.transform = `translate(${x * z / 2000}px, ${y * z / 2000}px) translateZ(${z}px)`;
    });
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
    document.getElementById('marketing-consent-field').value = document.getElementById(
      'marketing'
    )?.checked
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
      status.className = 'text-sm mt-4 text-amber-300';
      status.classList.remove('hidden');
      return;
    }

    const fd = new FormData(form);
    fd.append('_subject', '[Futurit] Waitlist');
    if (!fd.get('product')) fd.append('product', 'Futurit');

    status.classList.remove('hidden');
    status.textContent = '…';
    status.className = 'text-sm mt-4 text-[#94a3b8]';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = translations[currentLang]['form-success'];
        status.className = 'text-sm mt-4 text-[#4ade80]';
        form.reset();
        document.getElementById('privacy-accepted-field').value = 'no';
        document.getElementById('marketing-consent-field').value = 'no';
      } else {
        throw new Error('bad response');
      }
    } catch {
      status.textContent = translations[currentLang]['form-error'];
      status.className = 'text-sm mt-4 text-[#fb7185]';
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
  initParticles();
  initParallax();
  initCookieBanner();
  initWaitlistForm();
});
