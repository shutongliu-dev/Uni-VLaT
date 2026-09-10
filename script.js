const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.video-gallery-section').forEach(section => {
  const viewport = section.querySelector('.video-gallery-container');
  const track = section.querySelector('.video-gallery');
  const buttons = section.querySelectorAll('[data-direction]');
  const updateButtons = () => {
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    buttons.forEach(button => {
      button.disabled = Number(button.dataset.direction) < 0
        ? viewport.scrollLeft <= 1 : viewport.scrollLeft >= maxScroll - 1;
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const step = (track.firstElementChild?.getBoundingClientRect().width || 300) + 15;
    viewport.scrollBy({left: Number(button.dataset.direction) * step,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }));
  viewport.addEventListener('scroll', updateButtons, {passive: true});
  new ResizeObserver(updateButtons).observe(viewport);
  track.querySelectorAll('img').forEach(img => img.addEventListener('load', updateButtons));
  updateButtons();
});
document.getElementById('copy-citation').addEventListener('click', async () => {
  const code = document.getElementById('citation-text');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    status.textContent = 'Provisional BibTeX copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Press Control+C or Command+C to copy.';
  }
});
