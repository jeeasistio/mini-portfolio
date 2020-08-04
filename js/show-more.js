const showMore = (showBtn, projects, fadeBg) => {
  let showingMore = false;
  showBtn.addEventListener('click', () => {
    projects.classList.toggle('toggleShow');
    fadeBg.classList.toggle('displayNone');

    if (!showingMore) {
      showBtn.textContent = 'Show less';
      showingMore = true;
    } else {
      showBtn.textContent = 'Show more';
      showingMore = false;
    }
  })
}

export default showMore;