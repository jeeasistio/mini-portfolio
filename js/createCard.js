const addCard = (appendTo, card) => appendTo.appendChild(card);

const createCard = (img, name, gitRepo) => {
  const card = document.createElement('article');
  card.classList.add('project-card');
  card.innerHTML = `
    <div>
      <img src="${img}" />
      <h4>${name}</h4>
      <p>${gitRepo}</p>
    </div>
  `;
  return card;
}

export { addCard, createCard };