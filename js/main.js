/* ===== main.js — 共通処理 ===== */

/* ── スクロールアニメーション（IntersectionObserver）── */
(function initScrollAnimations() {
  const animClasses = [
    '.anim-fade-up',
    '.anim-slide-left',
    '.anim-slide-right',
    '.anim-scale-in',
    '.section-title-wrap',
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(animClasses.join(',')).forEach((el) => {
    observer.observe(el);
  });
})();

/* ── ナビゲーション スクロール変化 ── */
(function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    nav.classList.toggle('scrolled', y > 80);

    if (y > lastScroll && y > 200) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    lastScroll = y;
  }, { passive: true });
})();

/* ── ハンバーガーメニュー ── */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // モバイルメニューのリンクをクリックしたら閉じる
  mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ── Heroテキスト文字アニメーション ── */
function animateHeroTitle(selector, baseDelay = 400) {
  const el = document.querySelector(selector);
  if (!el) return;

  const chars = el.textContent.split('');
  el.innerHTML = chars.map((c, i) =>
    `<span class="char" style="transition-delay:${baseDelay + i * 80}ms">${c === ' ' ? '&nbsp;' : c}</span>`
  ).join('');

  setTimeout(() => {
    el.querySelectorAll('.char').forEach((s) => s.classList.add('visible'));
  }, 100);
}

/* ── Heroパーティクル（Canvas）── */
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();

  const particles = Array.from({ length: 28 }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    r:       Math.random() * 1.8 + 0.4,
    speed:   Math.random() * 0.4 + 0.15,
    opacity: Math.random() * 0.5 + 0.15,
    drift:   (Math.random() - 0.5) * 0.3,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 110, ${p.opacity})`;
      ctx.fill();

      p.y       -= p.speed;
      p.x       += p.drift;
      p.opacity -= 0.0008;

      if (p.y < -10 || p.opacity <= 0) {
        p.x       = Math.random() * canvas.width;
        p.y       = canvas.height + 10;
        p.opacity = Math.random() * 0.5 + 0.15;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    resize();
    particles.forEach((p) => {
      p.x = Math.random() * canvas.width;
    });
  }, { passive: true });
}

/* ── アクティブナビリンク設定 ── */
(function setActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── DOMContentLoaded でHero初期化 ── */
document.addEventListener('DOMContentLoaded', () => {
  animateHeroTitle('.hero-title', 400);
  initParticles('hero-particles');
});
