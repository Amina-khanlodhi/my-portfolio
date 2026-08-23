/* ==========================================================================
   Runs after every /sections/*.js file has injected its HTML
   (script tags execute in document order, so the DOM is ready by here).
   ========================================================================== */

/* ---------- 1. THEME (persisted, respects system preference) ---------- */
(function theme(){
  const root = document.documentElement;
  const stored = localStorage.getItem('al-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (stored) root.setAttribute('data-theme', stored);
  else if (prefersLight) root.setAttribute('data-theme', 'light');

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('al-theme', next);
  });
})();

/* ---------- 2. PRELOADER ---------- */
(function preloader(){
  const el = document.getElementById('preloader');
  if (!el) return;
  const bar = document.getElementById('preloader-ring-bar');
  const pctEl = document.getElementById('preloader-pct');
  const circumference = 2 * Math.PI * 52; // matches the SVG circle's r="52"

  if (bar) {
    bar.style.strokeDasharray = `${circumference}`;
    bar.style.strokeDashoffset = `${circumference}`;
  }

  document.body.style.overflow = 'hidden';

  let progress = 0;
  const tick = () => {
    progress = Math.min(100, progress + Math.random() * 16 + 6);
    if (bar) bar.style.strokeDashoffset = `${circumference * (1 - progress / 100)}`;
    if (pctEl) pctEl.textContent = String(Math.floor(progress)).padStart(2, '0');

    if (progress >= 100) {
      window.setTimeout(() => {
        el.classList.add('is-hidden');
        document.body.style.overflow = '';
        runIntro();
      }, 350);
      return;
    }
    window.setTimeout(tick, 90 + Math.random() * 140);
  };
  window.setTimeout(tick, 200);
})();

/* ---------- 3. CUSTOM CURSOR (desktop only) ---------- */
(function cursor(){
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });

  function loop(){
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a, button, .magnetic, [data-tilt]').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
  });
})();

/* ---------- 4. MAGNETIC BUTTONS ---------- */
(function magnetic(){
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.35;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });
})();

/* ---------- 5. MOBILE NAV ---------- */
(function mobileNav(){
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('.mobile-link').forEach((l) => l.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));
})();

/* ---------- 6. GSAP INTRO + SCROLL REVEALS ---------- */
function runIntro(){
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('.hero-kicker', { opacity: 1, y: 0, duration: .6 })
    .to('.hero-title', { opacity: 1, y: 0, duration: .9 }, '-=.35')
    .to('.hero-sub', { opacity: 1, y: 0, duration: .7 }, '-=.55')
    .to('.hero-cta', { opacity: 1, y: 0, duration: .6 }, '-=.45')
    .to('.hero-stats', { opacity: 1, y: 0, duration: .6 }, '-=.4')
    .to('.hero-stage', { opacity: 1, y: 0, duration: .9 }, '-=.9');

  document.querySelectorAll('.section [data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 87%', once: true },
    });
  });

  ScrollTrigger.refresh();
}

/* ---------- 7. HERO SIGNATURE — tech-orbit hover labels ---------- */
(function techOrbitLabel(){
  const items = document.querySelectorAll('.tech-item[data-tool]');
  const label = document.getElementById('tech-label');
  if (!items.length || !label) return;

  const defaultText = label.textContent;
  items.forEach((item) => {
    const icon = item.querySelector('.tech-icon');
    if (!icon) return;
    icon.addEventListener('mouseenter', () => { label.textContent = item.dataset.tool; });
    icon.addEventListener('focus', () => { label.textContent = item.dataset.tool; });
    icon.addEventListener('mouseleave', () => { label.textContent = defaultText; });
    icon.addEventListener('blur', () => { label.textContent = defaultText; });
  });
})();

/* ---------- 8. HERO GLASS PANEL — parallax tilt + cursor glare ---------- */
(function heroTilt(){
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  const panel = document.querySelector('.glass-panel');
  const stage = document.querySelector('.hero-stage');
  if (!panel || !stage) return;

  stage.addEventListener('mousemove', (e) => {
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    panel.style.transform = `perspective(1000px) rotateX(${py * -6}deg) rotateY(${px * 6}deg)`;

    // Move the cursor-follow glare (see .glass-panel::after in style.css)
    const pr = panel.getBoundingClientRect();
    const mx = ((e.clientX - pr.left) / pr.width) * 100;
    const my = ((e.clientY - pr.top) / pr.height) * 100;
    panel.style.setProperty('--mx', `${mx}%`);
    panel.style.setProperty('--my', `${my}%`);
  });
  stage.addEventListener('mouseleave', () => {
    panel.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    panel.style.setProperty('--mx', '50%');
    panel.style.setProperty('--my', '50%');
  });
})();

/* ---------- 8b. HERO 3D ORB — rotating wireframe icosahedron behind the card ---------- */
(function heroOrb(){
  const wrap = document.getElementById('orb-wrap');
  const canvas = document.getElementById('hero-orb');
  if (!wrap || !canvas) return;
  if (typeof THREE === 'undefined') { wrap.style.display = 'none'; return; }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Wireframe icosahedron — echoes the "CAD line-art" feel of the design system
  const geo = new THREE.IcosahedronGeometry(1.55, 1);
  const edges = new THREE.EdgesGeometry(geo);
  const lineMat = new THREE.LineBasicMaterial({ color: 0xFF6B4A, transparent: true, opacity: 0.55 });
  const wireObject = new THREE.LineSegments(edges, lineMat);
  scene.add(wireObject);

  // faint inner solid for depth cueing
  const solidMat = new THREE.MeshBasicMaterial({ color: 0x17121C, transparent: true, opacity: 0.25 });
  const solidObject = new THREE.Mesh(geo, solidMat);
  scene.add(solidObject);

  // orbiting reference points, lavender to echo the accent color
  const pointsGeo = new THREE.BufferGeometry();
  const pointCount = 20;
  const positions = new Float32Array(pointCount * 3);
  for (let i = 0; i < pointCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / pointCount);
    const theta = Math.sqrt(pointCount * Math.PI) * phi;
    positions[i * 3] = 1.9 * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = 1.9 * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = 1.9 * Math.cos(phi);
  }
  pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pointsMat = new THREE.PointsMaterial({ color: 0xB9A6E8, size: 0.045, transparent: true, opacity: 0.6 });
  const pointCloud = new THREE.Points(pointsGeo, pointsMat);
  scene.add(pointCloud);

  function resize(){
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Gentle whole-page mouse parallax (works even off-canvas, feels alive)
  let targetX = 0, targetY = 0;
  if (!window.matchMedia('(hover: none), (pointer: coarse)').matches) {
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientY / window.innerHeight - 0.5) * 0.5;
      targetY = (e.clientX / window.innerWidth - 0.5) * 0.5;
    });
  }

  function animate(now){
    requestAnimationFrame(animate);
    const idleSpin = reduceMotion ? 0 : now * 0.00014;
    wireObject.rotation.y = idleSpin + targetY;
    wireObject.rotation.x = idleSpin * 0.6 + targetX;
    solidObject.rotation.copy(wireObject.rotation);
    pointCloud.rotation.y = -idleSpin * 0.4;
    pointCloud.rotation.x = targetX * 0.4;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);

  wrap.classList.add('is-ready');
})();

/* ---------- 9. MARQUEE — duplicate content for a seamless loop ---------- */
(function marquee(){
  const track = document.getElementById('marquee-track');
  if (!track) return;
  track.innerHTML += track.innerHTML; // duplicate once for the -50% loop trick
})();

/* ---------- 10. EXPERIENCE / EDUCATION TABS ---------- */
(function tabs(){
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.timeline-panel');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      panels.forEach((p) => p.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.getElementById(btn.dataset.tab)?.classList.add('is-active');
    });
  });
})();

/* ---------- 10b. TESTIMONIALS — auto-rotating carousel (one at a time) ---------- */
(function testimonialCarousel(){
  const track = document.getElementById('testi-track');
  const dots = document.getElementById('testi-dots');
  if (!track || !dots) return;

  const slides = Array.from(track.querySelectorAll('.testi-card'));
  const dotEls = Array.from(dots.querySelectorAll('.testi-dot'));
  if (!slides.length) return;

  let current = 0;
  const AUTO_DELAY = 5000;
  let timer = null;

  function goTo(index){
    if (index === current) return;
    const prevSlide = slides[current];
    const nextSlide = slides[index];

    prevSlide.classList.add('is-leaving');
    prevSlide.classList.remove('is-active');
    window.setTimeout(() => prevSlide.classList.remove('is-leaving'), 500);

    nextSlide.classList.add('is-active');

    dotEls[current]?.classList.remove('is-active');
    dotEls[index]?.classList.add('is-active');

    current = index;
  }

  function next(){
    goTo((current + 1) % slides.length);
  }

  function startAuto(){
    stopAuto();
    timer = window.setInterval(next, AUTO_DELAY);
  }
  function stopAuto(){
    if (timer) window.clearInterval(timer);
  }

  dotEls.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.goto, 10);
      if (!Number.isNaN(idx)) goTo(idx);
      startAuto(); // reset the timer after a manual click
    });
  });

  const carousel = track.closest('.testi-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  }

  startAuto();
})();

/* ---------- 11. PROJECT / TESTIMONIAL 3D TILT ---------- */
(function tiltCards(){
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  document.querySelectorAll('[data-tilt]:not(.testi-card)').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rotY = (px - 0.5) * 10;
      const rotX = (0.5 - py) * 10;
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0)'; });
  });
})();

/* ---------- 11b. CARD CURSOR-GLOW — services, testimonials, contact cards ---------- */
(function glowCards(){
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  document.querySelectorAll('.service-card, .testi-card, .contact-card, .project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty('--mx', `${mx}%`);
      card.style.setProperty('--my', `${my}%`);
    });
  });
})();

/* ---------- 12. CONTACT FORM VALIDATION ---------- */
(function contactForm(){
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fields = {
    name: { el: document.getElementById('name'), validate: (v) => v.trim().length > 1 },
    email: { el: document.getElementById('email'), validate: (v) => emailRe.test(v.trim()) },
    message: { el: document.getElementById('message'), validate: (v) => v.trim().length > 9 },
  };

  const setState = (key, valid) => fields[key].el.closest('.form-field').classList.toggle('has-error', !valid);

  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener('input', () => setState(key, fields[key].validate(fields[key].el.value)));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    Object.keys(fields).forEach((key) => {
      const valid = fields[key].validate(fields[key].el.value);
      setState(key, valid);
      if (!valid) allValid = false;
    });
    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields before sending.';
      status.className = 'form-status is-error';
      return;
    }

    // No backend wired up — connect this to Formspree, Netlify Forms,
    // or your own API route when you deploy.
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-label').textContent = 'Sending…';
    status.textContent = ''; status.className = 'form-status';

    window.setTimeout(() => {
      status.textContent = "Message sent — I'll get back to you soon!";
      status.className = 'form-status is-success';
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-label').textContent = 'Send message';
      form.reset();
      Object.keys(fields).forEach((key) => setState(key, true));
    }, 1100);
  });
})();

/* ---------- 13. FOOTER YEAR ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();