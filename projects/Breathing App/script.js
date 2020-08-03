const container = document.getElementById('container');
const text = document.getElementById('text');
const totalTime = 7500;
const breathingTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheFunc();

function breatheFunc() {
  text.innerHTML = 'Breathe In';
  container.className = 'grow';

  setTimeout(() => {
    text.innerHTML = 'Hold';

    setTimeout(() => {
      text.innerHTML = 'Breathe Out';
      container.className = 'shrink'

    }, holdTime)
  }, breathingTime);
}

setInterval(breatheFunc, totalTime);