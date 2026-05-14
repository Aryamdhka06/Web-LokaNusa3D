/* ════════════════════════════════════════
   NusaVerse 3D — script.js
════════════════════════════════════════ */

// ═══════════════════════════════
// DATA: 38 PROVINCES
// ═══════════════════════════════

const provinces = [
  { name: "Aceh",                   icon: "assets/provinsi/aceh.svg" },
  { name: "Sumatera Utara",         icon: "assets/provinsi/sumut.svg" },
  { name: "Sumatera Barat",         icon: "assets/provinsi/sumbar.svg" },
  { name: "Riau",                   icon: "assets/provinsi/riau.svg" },
  { name: "Kepulauan Riau",         icon: "assets/provinsi/kepri.svg" },
  { name: "Jambi",                  icon: "assets/provinsi/jambi.svg" },
  { name: "Sumatera Selatan",       icon: "assets/provinsi/sumsel.svg" },
  { name: "Kep. Bangka Belitung",   icon: "assets/provinsi/bangbel.svg" },
  { name: "Bengkulu",               icon: "assets/provinsi/bengkulu.svg" },
  { name: "Lampung",                icon: "assets/provinsi/lampung.svg" },
  { name: "DKI Jakarta",            icon: "assets/provinsi/jakarta.svg",},
  { name: "Banten",                 icon: "assets/provinsi/banten.svg" },
  { name: "Jawa Barat",             icon: "assets/provinsi/jabar.svg" },
  {
    name: "Jawa Tengah",
    icon: "assets/provinsi/jateng.svg"
  },
  { name: "D.I. Yogyakarta",        icon: "assets/provinsi/yogya.svg",},
  { name: "Jawa Timur",             icon: "assets/provinsi/JATIM.svg" },
  { name: "Bali",                   icon: "assets/provinsi/bali.svg" },
  { name: "NTB",                    icon: "assets/provinsi/ntb.svg" },
  { name: "NTT",                    icon: "assets/provinsi/ntt.svg" },
  { name: "Kalimantan Barat",       icon: "assets/provinsi/kalbar.svg" },
  { name: "Kalimantan Tengah",      icon: "assets/provinsi/kalteng.svg" },
  { name: "Kalimantan Selatan",     icon: "assets/provinsi/kalsel.svg" },
  { name: "Kalimantan Timur",       icon: "assets/provinsi/kaltim.svg" },
  { name: "Kalimantan Utara",       icon: "assets/provinsi/kalut.svg" },
  { name: "Sulawesi Utara",         icon: "assets/provinsi/sulaut.svg" },
  { name: "Gorontalo",              icon: "assets/provinsi/gorontalo.svg" },
  { name: "Sulawesi Tengah",        icon: "assets/provinsi/sulteng.svg" },
  { name: "Sulawesi Barat",         icon: "assets/provinsi/sulbar.svg" },
  { name: "Sulawesi Selatan",       icon: "assets/provinsi/sulsel.svg" },
  { name: "Sulawesi Tenggara",      icon: "assets/provinsi/sultenga.svg" },
  { name: "Maluku",                 icon: "assets/provinsi/maluku.svg" },
  { name: "Maluku Utara",           icon: "assets/provinsi/malut.svg" },
  { name: "Papua",                  icon: "assets/provinsi/papua.svg" },
  { name: "Papua Barat",            icon: "assets/provinsi/pabar.svg" },
  { name: "Papua Barat Daya",       icon: "assets/provinsi/pabada.png" },
  { name: "Papua Pegunungan",       icon: "assets/provinsi/panung.svg" },
  { name: "Papua Selatan",          icon: "assets/provinsi/pasel.png" },
  { name: "Papua Tengah",           icon: "assets/provinsi/pateng.png" },
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/&/g, 'dan')
    .replace(/\s+/g, '-');
}

// ═══════════════════════════════
// RENDER PROVINCE GRID
// ═══════════════════════════════
function renderProvinces() {
  const grid = document.getElementById('provGrid');
  if (!grid) return;

  provinces.forEach((prov) => {
    const card = document.createElement('div');

    card.className =
      'prov-card reveal' +
      (prov.highlight ? ' highlighted' : '');

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Jelajahi ' + prov.name);

    card.innerHTML = `
      <img src="${prov.icon}" class="prov-logo" alt="${prov.name}" loading="lazy">
      <div class="prov-name">${prov.name}</div>
    `;

    const openDetail = () => {
  const slug = createSlug(prov.name);

  showProvinceToast(prov.name, prov.icon);

  setTimeout(() => {
    window.location.href =
      `/pages/provinsi/provinsi.html?provinsi=${slug}`;
  }, 1200);
};

    card.addEventListener('click', openDetail);

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetail();
      }
    });

    grid.appendChild(card);
  });
}

// ═══════════════════════════════
// TOAST NOTIFICATION
// ═══════════════════════════════
function showProvinceToast(name, iconSrc) {
  // Remove existing toast
  const old = document.querySelector('.nv-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'nv-toast';
  toast.innerHTML = `
    <img src="${iconSrc}" alt="${name}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0;">
    <div>
      <div style="font-size:12px;font-weight:600;color:#e8c97a;">${name}</div>
      <div style="font-size:10px;color:rgba(245,240,232,0.6);">Membuka 3D Experience...</div>
    </div>
    <div class="toast-spinner"></div>
  `;

  // Inline styles injected once
  if (!document.getElementById('toast-style')) {
    const s = document.createElement('style');
    s.id = 'toast-style';
    s.textContent = `
      .nv-toast {
        position: fixed; bottom: 28px; right: 28px; z-index: 9999;
        background: rgba(4,13,30,0.96);
        border: 0.5px solid rgba(201,168,76,0.4);
        border-radius: 14px; padding: 14px 18px;
        display: flex; align-items: center; gap: 12px;
        backdrop-filter: blur(16px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.6);
        animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
        min-width: 220px;
      }
      @keyframes toastIn {
        from { opacity:0; transform:translateY(20px) scale(0.95); }
        to   { opacity:1; transform:translateY(0) scale(1); }
      }
      .toast-spinner {
        width: 18px; height: 18px; border-radius: 50%;
        border: 2px solid rgba(201,168,76,0.2);
        border-top-color: #c9a84c;
        animation: spin 0.8s linear infinite;
        flex-shrink: 0; margin-left: auto;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(s);
  }

  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; }, 2400);
  setTimeout(() => toast.remove(), 2800);
}

// ═══════════════════════════════
// SCROLL REVEAL OBSERVER
// ═══════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
        siblings.forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 90);
        });
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ═══════════════════════════════
// NAVBAR — SCROLL SHADOW & ACTIVE
// ═══════════════════════════════
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nv-menu a');

  window.addEventListener('scroll', () => {
    // Shadow on scroll
    if (window.scrollY > 12) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ═══════════════════════════════
// MOBILE NAV TOGGLE
// ═══════════════════════════════
function initMobileNav() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    btn.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("active");
    });
  });
}

// ═══════════════════════════════
// ANIMATED STAT COUNTER
// ═══════════════════════════════
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let start    = 0;
      const step   = Math.ceil(target / 50);
      const timer  = setInterval(() => {
        start += step;
        if (start >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = start + suffix;
        }
      }, 28);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => counterObserver.observe(c));
}

// ═══════════════════════════════
// SMOOTH SCROLL FOR NAV LINKS
// ═══════════════════════════════
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ═══════════════════════════════
// MAP MARKER TOOLTIP
// ═══════════════════════════════
const mapMarkers = [
  { cx: 18,  cy: 48,  label: "Aceh" },
  { cx: 95,  cy: 77,  label: "Jakarta" },
  { cx: 145, cy: 80,  label: "Bali" },
  { cx: 170, cy: 52,  label: "Makassar" },
  { cx: 215, cy: 50,  label: "Papua" },
  { cx: 138, cy: 50,  label: "Balikpapan" },
];

// ═══════════════════════════════
// INIT ALL
// ═══════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProvinces();
  initReveal();
  initNavbar();
  initMobileNav();
  initCounters();
  initSmoothScroll();
});


