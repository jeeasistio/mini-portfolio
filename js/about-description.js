const toggleInactive = (img, text, skills, showing) => {
  img.addEventListener('click', () => {
    if (showing === text) {
      text.style.display = 'none';
      skills.style.display = 'flex';
      showing = skills;
    } else {
      skills.style.display = 'none';
      text.style.display = 'block';
      showing = text;
    }
  })
}

export default toggleInactive;