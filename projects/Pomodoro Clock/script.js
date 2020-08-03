// selectors
const timer = document.getElementById('timer');
const timeInput = document.getElementById('time-input');
const startBtn = document.getElementById('buttons__start');
const endBtn = document.getElementById('buttons__end');
const endText = document.getElementById('end');
let countdown;

// display output
const displayOutput = (timerText, num) => {
  mins = `${Math.floor(num / 60)}`.padStart(2, '0');
  sec = `${Math.floor(num % 60)}`.padStart(2, '0');
  timerText.textContent = `${mins}:${sec}`;
}

// display end time
const displayEndTime = (outputText, num) => {
  const end = new Date(num);
  const hrs = `${end.getHours()}`.padStart(2, '0');
  const mins = `${end.getMinutes()}`.padStart(2, '0');
  outputText.innerHTML = `Be back at <span id="end__time">${hrs}:${mins}</span>`;
}

// countdown function
const startCountdown = num => {
  const now = Date.now();
  const then = Date.now() + num * 1000;
  displayEndTime(endText, then);

  displayOutput(timer, num);
  countdown = setInterval(() => {
    num--;

    if (num <= 0) {
      clearInterval(countdown);
    }

    displayOutput(timer, num);
  },
    1000)

  timeInput.value = '';
};

// validate input
const validateCountdown = (startBtn, endBtn, timeInput) => {
  if (timeInput.value !== '') {
    startCountdown(timeInput.value * 60);
    animateStartBtn(startBtn, endBtn, timeInput)
  } else {
    timeInput.placeholder = 'Please enter a value';
    timeInput.classList.add('invalid');
    timeInput.addEventListener('animationend', () =>
      timeInput.classList.remove('invalid'))
  }
}

// animate start button
const animateStartBtn = (btn1, btn2, input) => {
  btn1.disabled = true;
  btn2.disabled = false;
  input.disabled = true;
  input.placeholder = 'Have a good break!'
}

// animate end button
const animateEndBtn = (btn1, btn2, input) => {
  btn1.disabled = false;
  btn2.disabled = true;
  input.disabled = false;
  input.placeholder = 'Enter time in minutes';
}

const endCountdown = (endText, outputText, countdown) => {
  endText.textContent = 'Take some break';
  outputText.textContent = '00:00';
  clearInterval(countdown);
}

// listeners
startBtn.addEventListener('click', () => validateCountdown(startBtn, endBtn, timeInput))

endBtn.addEventListener('click', () => {
  animateEndBtn(startBtn, endBtn, timeInput)
  endCountdown(endText, timer, countdown);
});