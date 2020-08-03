// selectors
const output = document.getElementById('output-num');
const history = document.getElementById('history-num');
const erase = document.getElementById('erase');
const buttons = document.getElementById('buttons');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

// output on click
const printOutput = num => output.textContent += num;

// print to history
const printHistory = num => history.textContent = num;

// clear
const clearOutput = onOutput => onOutput.textContent = '';

// clear all
const clearAll = (onOutput, onHistory) => {
  onOutput.textContent = '';
  onHistory.textContent = '';
};

// erase
const eraseFunc = onOutput => {
  onOutput.textContent = onOutput.textContent.substring(0, onOutput.textContent.length - 1);
}

// button listeners
buttons.addEventListener('click', e => {
  const clicked = e.target;

  if (clicked.getAttribute('data-type') === 'clickable') {
    history.style.color = '#ccc'
    history.style.fontSize = '1.5rem'
    printOutput(clicked.textContent);
  }

  if (clicked === equals) {
    if (output.textContent.match(/^[\+\-\*\/]/)) {
      const expression = history.textContent + output.textContent;
      printHistory(eval(expression))
    } else {
      printHistory(eval(output.textContent));
    }
    clearOutput(output);
    history.style.color = '#0cf'
    history.style.fontSize = '2rem'
  }
});

// clear button
clear.addEventListener('click', () => clearAll(output, history));

// erase button
erase.addEventListener('click', () => eraseFunc(output));