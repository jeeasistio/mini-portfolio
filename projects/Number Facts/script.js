(() => {
  const fact = document.querySelector('.fact');
  const numInput = document.querySelector('#number-input');
  const select = document.querySelector('select');
  let type = select.value;

  const getFact = async num => {
    const res = await fetch(`http://numbersapi.com/${num}/${type}`);
    const data = await res.text();

    if (num !== '' && num.match(/^\d+$/)) {
      fact.style.display = 'block';
      fact.textContent = `${data}`;
    } else if (type === 'date' && num.match(/\d{2}\/\d{2}$/)) {
      fact.style.display = 'block';
      fact.textContent = `${data}`;
    } else if (num.match(/[\D]/g)) {
      fact.style.display = 'block';
      fact.textContent = 'Please enter a number';
    } else {
      fact.style.display = 'none';
      fact.textContent = '';
    }
  }

  const typeChange = () => {
    type = select.value;
    type === 'date' ? numInput.placeholder = 'Enter a date... (mm/dd)':
    type === 'year' ? numInput.placeholder = 'Enter a year...':
    numInput.placeholder = 'Enter a number...';
  }

  numInput.addEventListener('input', () => getFact(numInput.value));
  select.addEventListener('change', typeChange);
})();