document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const pageContent = document.querySelector('.page-content');

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('hidden');

    if (pageContent) {
      setTimeout(() => {
        pageContent.classList.add('visible');
        document.body.classList.remove('loading');

        const heroStagger = document.querySelector('.hero-stagger');
        if (heroStagger) heroStagger.classList.add('animate');

        const heroLine = document.querySelector('.hero-line');
        if (heroLine) heroLine.classList.add('animate');

        document.querySelectorAll('.hero-side-fade').forEach(el => {
          el.style.animationPlayState = 'running';
        });
      }, 100);
    }
  }, 1800);
});
