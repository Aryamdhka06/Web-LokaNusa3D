/* ═══════════════════════════════════════════════
   viewer.js — Rumah Gadang 3D Viewer
   ═══════════════════════════════════════════════ */

const viewer    = document.getElementById('viewer');
const overlay   = document.getElementById('loading-overlay');
const fill      = document.getElementById('progress-fill');
const btnReset  = document.getElementById('btn-reset');
const btnRotate = document.getElementById('btn-rotate');
const btnZoomIn = document.getElementById('btn-zoomin');
const btnZoomOut= document.getElementById('btn-zoomout');
const arTrigger = document.getElementById('ar-trigger');
const arSlotBtn = document.getElementById('ar-slot-btn');

/* Nilai default kamera — jauh supaya objek tidak terlalu besar */
const DEFAULT_ORBIT = '0deg 72deg 18m';
const DEFAULT_FOV   = '45deg';

/* ── ICON SVG ─────────────────────────────────── */
const ICON_PLAY  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
const ICON_PAUSE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;

/* ── LOADING PROGRESS ─────────────────────────── */
viewer.addEventListener('progress', (e) => {
  const pct = e.detail.totalProgress * 100;
  fill.style.width = pct + '%';
});

viewer.addEventListener('load', () => {
  /* Sembunyikan loading setelah model siap */
  setTimeout(() => overlay.classList.add('hidden'), 600);

  /* Cek dukungan AR di perangkat ini */
  
});

/* ── TOMBOL AR ────────────────────────────────── */
/* Tombol di luar model-viewer → panggil activateAR() secara programatik */
arTrigger.addEventListener('click', () => {
  /* activateAR() hanya bekerja kalau perangkat support & model sudah load */
  viewer.activateAR();
});

/* ── RESET KAMERA ─────────────────────────────── */
btnReset.addEventListener('click', () => {
  viewer.cameraOrbit = DEFAULT_ORBIT;
  viewer.fieldOfView = DEFAULT_FOV;
  viewer.resetTurntableRotation();
});

/* ── AUTO-ROTATE TOGGLE ───────────────────────── */
let rotating = true;

/* Status awal: sedang rotate → tampilkan ikon pause */
btnRotate.innerHTML = ICON_PAUSE;
btnRotate.classList.add('active');

btnRotate.addEventListener('click', () => {
  rotating = !rotating;
  viewer.autoRotate = rotating;

  if (rotating) {
    btnRotate.innerHTML = ICON_PAUSE;
    btnRotate.classList.add('active');
  } else {
    btnRotate.innerHTML = ICON_PLAY;
    btnRotate.classList.remove('active');
  }
});

/* ── ZOOM IN ──────────────────────────────────── */
btnZoomIn.addEventListener('click', () => {
  const orb  = viewer.getCameraOrbit();
  const newR = Math.max(6, orb.radius * 0.75);   /* min 6m */
  viewer.cameraOrbit = `${orb.theta}rad ${orb.phi}rad ${newR}m`;
});

/* ── ZOOM OUT ─────────────────────────────────── */
btnZoomOut.addEventListener('click', () => {
  const orb  = viewer.getCameraOrbit();
  const newR = Math.min(40, orb.radius * 1.35);  /* max 40m */
  viewer.cameraOrbit = `${orb.theta}rad ${orb.phi}rad ${newR}m`;
});

arTrigger.addEventListener('click', async () => {

  try {

    await viewer.activateAR();

  } catch(err){

    alert("Perangkat ini belum mendukung AR");

  }

});