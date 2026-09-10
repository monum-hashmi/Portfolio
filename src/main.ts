// Progressive enhancement only: scroll-reveal, nav state, light hero parallax.
// No storage, no network. Everything degrades to a fully visible page.

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/* Reveal-on-scroll ------------------------------------------------ */
const revealables = Array.from(
  document.querySelectorAll<HTMLElement>('[data-reveal]')
);

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        // Stagger siblings a touch for a premium cascade.
        const siblings = Array.from(el.parentElement?.children ?? []);
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = `${Math.min(idx, 6) * 60}ms`;
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealables.forEach((el) => io.observe(el));
}

/* Sticky nav background once scrolled off the hero ---------------- */
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Subtle hero parallax on the media layer ------------------------- */
if (!reduceMotion) {
  const media = document.querySelector<HTMLElement>('.hero__media');
  if (media) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, window.innerHeight);
          media.style.transform = `translate3d(0, ${y * 0.15}px, 0) scale(1.05)`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }
}
