const copy = (btn, textarea) => {
  const git = btn.getAttribute('data-git');
  textarea.value = git;
  textarea.select();
  document.execCommand('Copy');
  btn.textContent = 'Copied!';
  btn.style.color = 'var(--white)';
  btn.style.background = 'var(--green)';
  btn.style.borderColor = 'var(--green)';
  setTimeout(() => {
    btn.textContent = 'Copy git'
    btn.style.background = '#d4d4d4';
    btn.style.color = 'var(--black)';
    btn.style.borderColor = 'var(--gray-darker)'
  }, 1500);
}

export default copy;