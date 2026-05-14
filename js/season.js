/* ===== season.js — 季節テーマ自動切替 ===== */

const SEASONS = {
  spring: {
    months:  [3, 4, 5],
    img:     'assets/images/hero/spring.jpg',
    accent:  '#d4a0a0',
    label:   '春',
    heroGrad: 'var(--grad-hero-spring)',
    fallback: 'linear-gradient(160deg, #2e1a1a 0%, #4a2828 40%, #2a1818 100%)',
  },
  summer: {
    months:  [6, 7, 8],
    img:     'assets/images/hero/summer.jpg',
    accent:  '#4a7c59',
    label:   '夏',
    heroGrad: 'var(--grad-hero-summer)',
    fallback: 'linear-gradient(160deg, #1a2e1f 0%, #2d4a32 50%, #1a2e1f 100%)',
  },
  autumn: {
    months:  [9, 10, 11],
    img:     'assets/images/hero/autumn.jpg',
    accent:  '#b85c38',
    label:   '秋',
    heroGrad: 'var(--grad-hero-autumn)',
    fallback: 'linear-gradient(160deg, #2e1a0f 0%, #4a2518 50%, #2e1a0f 100%)',
  },
  winter: {
    months:  [12, 1, 2],
    img:     'assets/images/hero/winter.jpg',
    accent:  '#7090a0',
    label:   '冬',
    heroGrad: 'var(--grad-hero-winter)',
    fallback: 'linear-gradient(160deg, #1a2030 0%, #2a3545 50%, #1a2030 100%)',
  },
};

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  const entry = Object.entries(SEASONS).find(([, v]) => v.months.includes(month));
  return entry ? entry[0] : 'spring';
}

function applySeason(seasonKey) {
  const season = SEASONS[seasonKey];
  if (!season) return;

  document.documentElement.style.setProperty('--season-accent', season.accent);
  document.body.dataset.season = seasonKey;

  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  const img = new Image();
  img.onload = () => {
    heroBg.style.backgroundImage = `url('${season.img}')`;
    // Hero オーバーレイを季節に合わせて更新
    const overlay = document.querySelector('.hero-overlay');
    if (overlay) {
      overlay.style.background = season.heroGrad;
    }
  };
  img.onerror = () => {
    // 画像が見つからない場合はフォールバックグラデーション
    heroBg.style.backgroundImage = 'none';
    heroBg.style.background = season.fallback;
  };
  img.src = season.img;
}

document.addEventListener('DOMContentLoaded', () => {
  applySeason(getCurrentSeason());
});
