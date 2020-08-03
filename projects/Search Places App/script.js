const search = document.querySelector('#province-input');
const matchList = document.querySelector('.matchlist');

// search and filter
const searchStates = async str => {
  const res = await fetch('./PH/provinces.json');
  const provs = await res.json();

  // get matches
  let matches = provs.filter(prov => {
    const regex = new RegExp(`^${str}`, 'ig');
    return prov.name.match(regex) || prov.key.match(regex) || prov.region.match(regex);
  });

  if (str === '') {
    matches = [];
    matchList.innerHTML = '';
  };

  output(matches);
}

const output = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class="match">
      <h4 class="match-name">${match.name}, <span class="abbr">(${match.key})</span></h4>
      <p>Region: <span class="region">${match.region}</span></p>
      </div>
      `).join('');

    matchList.innerHTML = html;
  }
}

search.addEventListener('input', () => searchStates(search.value));