// selectors
const form = document.getElementById('form');
const textarea = document.getElementById('textarea');
const rate = document.getElementById('rate');
const rateValue = document.getElementById('rate-value');
const pitch = document.getElementById('pitch');
const pitchValue = document.getElementById('pitch-value');
const select = document.getElementById('select');
const wave = document.getElementById('wave');

// synth speech api
const synth = window.speechSynthesis;

// get voices
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  // create select options
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    select.appendChild(option);
  })
}

getVoices();

if (!synth.onvoiceschanged) synth.onvoiceschanged = getVoices;

// speak text
const speak = () => {

  // check speaking
  if (synth.speaking) {
    alert('Speaking...');
    return;
  }

  if (textarea !== '') {
    // wave background
    wave.style.background = '#141414 url("./gif/wave.gif")';
    wave.style.backgroundSize = '100% 100%'

    // get speech
    const speech = new SpeechSynthesisUtterance(textarea.value);

    // onerror
    speech.onerror = () => alert('Something went wrong');

    // onend
    speech.onend = () => wave.style.background = '#141414';

    // selected voice
    const selectedVoice = select.selectedOptions[0].getAttribute('data-name');

    voices.forEach(voice => {
      if (voice.name === selectedVoice) speech.voice = voice;

    })

    // rate and speech
    speech.rate = rate.value;
    speech.pitch = pitch.value;

    // speak
    synth.speak(speech);
  }
}

// event listener
form.addEventListener('submit', e => {
  e.preventDefault();
  textarea.blur();
  speak();
});

rate.addEventListener('input', () => rateValue.textContent = rate.value);
pitch.addEventListener('input', () => pitchValue.textContent = pitch.value);