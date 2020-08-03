const app = (() => {
  // selectors
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');
  const sounds = document.querySelectorAll('.sound-picker button');
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');
  const outlineLength = outline.getTotalLength();
  let fakeDuration = 600;
  // outline
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;
  
  // change sounds
  sounds.forEach(option => {
    option.addEventListener('click', function() {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    })
  })
  
  // play event listener
  play.addEventListener('click', () => {
    checkPlaying(song);
  });
  
  // check if playing
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg'
    } else {
      song.pause();
      video.pause();
      play.src = './svg/play.svg'
    }
  }
  
  // animate play
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    let seconds = String(Math.floor(elapsed % 60)).padStart(2, '0');
    
    // animate circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    // animate numbers
    timeDisplay.textContent = `${minutes}:${seconds}`;
    
    if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = './svg/play.svg';
        video.pause();
      }
  }
  
  // time selection
  timeSelect.forEach(option => {
    option.addEventListener('click', function() {
      fakeDuration = this.getAttribute('data-time');
    })
  })
})();