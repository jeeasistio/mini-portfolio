const convert = (() => {
  document.querySelector('#weight-input').addEventListener('input', () => {
    const lbs = document.querySelector('#weight-input').value;
    const grams = document.querySelector('.grams');
    const kilograms = document.querySelector('.kilograms');
    const ounces = document.querySelector('.ounces');
    document.querySelector('.g-output').innerHTML = lbs / 0.0022046;
    document.querySelector('.kg-output').innerHTML = lbs / 2.2046;
    document.querySelector('.oz-output').innerHTML = lbs * 16;
    
    if (!lbs) {
      grams.style.animation = 'outputNone 0.5s ease 0.2s both';
      kilograms.style.animation = 'outputNone 0.5s ease 0.1s both';
      ounces.style.animation = 'outputNone 0.5s ease 0s both';
    } else {
      grams.style.animation = 'output 0.5s ease 0.2s forwards';
      kilograms.style.animation = 'output 0.5s ease 0.1s forwards';
      ounces.style.animation = 'output 0.5s ease 0s forwards';
    }
  })
})();