const copyButton = document.getElementById('copy-citation');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyStatus.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Citation selected. Press Ctrl+C (or Command+C) to copy.';
  }
});
