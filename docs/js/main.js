// Elivelton Polimentos & Martelinho de Ouro — interações
document.addEventListener('DOMContentLoaded', () => {

  // Header state on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Nav overlay
  const nav = document.querySelector('.nav-overlay');
  const openBtn = document.querySelector('[data-nav-open]');
  const closeBtn = document.querySelector('[data-nav-close]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const toggleNav = (open) => {
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  openBtn && openBtn.addEventListener('click', () => toggleNav(true));
  closeBtn && closeBtn.addEventListener('click', () => toggleNav(false));
  navLinks.forEach(a => a.addEventListener('click', () => toggleNav(false)));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .statement');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));

  // Sequence frames crossfade caption emphasis (subtle, no pin needed)
  const frames = document.querySelectorAll('.sequence-frame');
  const fio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.setProperty('--vis', entry.isIntersecting ? 1 : 0.4);
    });
  }, { threshold: 0.5 });
  frames.forEach(f => fio.observe(f));

  // Year in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
