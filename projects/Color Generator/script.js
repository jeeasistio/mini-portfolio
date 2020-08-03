// get color function
const getColor = async () => {
  // selectors
  const body = document.body;
  const header = document.querySelector('header');
  const heading = document.querySelector('h1');
  const colorDescription = document.querySelector('.color');
  const colorHeading = document.querySelector('.color__heading');
  const colorName = document.querySelector('.color__name');
  const colorHex = document.querySelector('.color__hex');
  const colorRGB = document.querySelector('.color__rgb');
  const generateBtn = document.querySelector('.btn__generate');
  
  // fetch json
  const data = await fetch('colors/colors.json');
  const colors = await data.json();

  // get random color
  const color = colors[Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0];
  const name = color['name'];
  const hex = color['hex'];
  const rgb = color['rgb'];

  // changeDescription
  colorName.textContent = name;
  colorHex.textContent = hex;
  colorRGB.textContent = rgb;

  // list elements to be change
  const bg = [body, colorDescription, header, generateBtn];
  const c = [heading, colorName, colorHex, colorRGB, colorHeading, generateBtn];

  // change
  bg.map(elem => bgChange(elem, hex));
  c.map(elem => colorChange(elem, hex));
}

// change colors functions
const bgChange = (item, color) => item.style.backgroundColor = color;
const colorChange = (item, color) => item.style.color = color;

// listeners
document.querySelector('.btn__generate').addEventListener('click', getColor);