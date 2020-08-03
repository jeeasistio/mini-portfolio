(() => {

  // output the address
  const outputAddress = async (e) => {
    const input = document.querySelector('#location-input');
    const ul = document.querySelector('.result-ul');
    const key = '6b61cf11e33b4232a10a51c0e823a9ef';
    const form = document.querySelector('#location-form');
    const location = input.value;

    // prevent form from submitting
    e.preventDefault();

    // reset results
    ul.innerHTML = '';

    // fetch data
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${key}`)
    const data = await response.json();
    const {
      results
    } = data

    // output data
    results.map(result => {
      const {
        annotations: {
          flag
        },
        formatted,
        geometry: {
          lat, lng
        }} = result;
      ul.innerHTML += `
      <li class="result-item">
      <h3 class="result-title">${formatted}</h3>
      <p class="result-position"><strong>lat:</strong> ${lat} , <strong>long:</strong> ${lng}</p>
      </li>
      `
    })

    // reset input
    form.reset();
  }

  document.querySelector('#location-form').addEventListener('submit', outputAddress);
})();