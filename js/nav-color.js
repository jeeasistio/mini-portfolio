const navColor = (navUL, navLi) => {
  navLi[0].style.color = 'var(--pink)';
  navLi[0].style.borderBottom = '2px solid var(--pink)';
  navUL.addEventListener('click', e => {
    navLi.forEach(li => {
      li.style.color = 'var(--black)';
      li.style.borderBottom = '';
      e.target.style.color = 'var(--pink)';
      e.target.style.borderBottom = '2px solid var(--pink)'
    })
  });
};

export default navColor;