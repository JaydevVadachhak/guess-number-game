"use strict";

const btnPlayAgain = document.querySelector(".btn-again");
const btnCheckNumber = document.querySelector(".btn-check");

const inputGuessNumber = document.querySelector(".guess-number");
const body = document.querySelector("body");

let secretNumber = randomNumber(20);
let score = 20;
let highscore = 0;
let guessNumber;

// numberBlock.textContent = randomNumber;

function randomNumber(number) {
  return Math.trunc(Math.random() * number) + 1;
}

function displayMessage(message) {
  const labelTextMessage = document.querySelector(".text-message");
  labelTextMessage.textContent = message;
}

function displayGameScore(score) {
  const lableGameScore = document.querySelector(".score");
  lableGameScore.textContent = score;
}

function displayHighScore(highscore) {
  const labelHighScore = document.querySelector(".highscore");
  labelHighScore.textContent = highscore;
}

function displayNumberBlock(number) {
  const numberBlock = document.querySelector(".number-block");
  numberBlock.textContent = number;
}

btnCheckNumber.addEventListener("click", function () {
  guessNumber = Number(inputGuessNumber.value);
  if (!guessNumber || guessNumber > 20 || guessNumber <= 0) {
    displayMessage("❌ Invalid Entry! (1 to 20 valid)");
  } else if (guessNumber === secretNumber) {
    displayMessage("✨ Correct Number! Play Again!");
    displayNumberBlock(secretNumber);
    body.style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 0) {
      let msg =
        guessNumber > secretNumber
          ? "📈 Higher! Check again"
          : "📉 Lower! Check again";
      displayMessage(msg);
      score--;
      displayGameScore(score);
    } else {
      displayMessage("😢 You Lost the Game! Play Again!");
      displayGameScore(0);
    }
  }
});

btnPlayAgain.addEventListener("click", function () {
  //   window.location.reload(true);
  secretNumber = randomNumber(20);
  score = 20;

  displayNumberBlock("?");
  displayMessage("Start guessing...");
  inputGuessNumber.value = "1";
  displayGameScore("20");
  body.style.backgroundColor = "#000";
});
