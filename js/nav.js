const toggleNav = (navUL, navBtn) => {
  navBtn.addEventListener('click', () => navUL.classList.toggle('active-ul'));
}

export default toggleNav;