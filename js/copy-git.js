const copy = (btn, textarea) => {
  const git = btn.getAttribute('data-git');
  textarea.value = git;
  textarea.select();
  document.execCommand('Copy');
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy git', 2000);
}

export default copy;