const toggleNav = (navUL, navBtn) => {
  navBtn.addEventListener('click', () => navUL.classList.toggle('active-ul'));
  navUL.addEventListener('click', () => navUL.classList.toggle('active-ul'));
}

export default toggleNav;