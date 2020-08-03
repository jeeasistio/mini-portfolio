const game = (() => {
  let pScore = 0;
  let cScore = 0;

  //   start game
  const startGame = (() => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  })();

  //   play match
  const playMatch = (() => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //     AI
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        playerHand.src = option.getAttribute("src");
        switch (computerChoice) {
          case "rock":
            computerHand.src = "https://i.ibb.co/3NG0DMh/rock.png";
            break;
          case "paper":
            computerHand.src = "https://i.ibb.co/KDQSj5q/paper.png";
            break;
          case "scissors":
            computerHand.src = "https://i.ibb.co/CnVwTTq/scissors.png";
            break;
        }
        compareHands(this.textContent, computerChoice);
      });
    });
  })();

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "Draw!";
      return;
    }

    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        }
        break;

      case "paper":
        if (computerChoice === "scissors") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        }
        break;
    }
  };
})();