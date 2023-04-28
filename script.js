const firstScore = 20;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayHighscore = function (message) {
  document.querySelector(".highscore").textContent = message;
};
const displayNumber = function (message) {
  document.querySelector(".number").textContent = message;
};
const displayScore = function (message) {
  document.querySelector(".score").textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 100) + 1;
function play() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage(`No number`);
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage(`You WIN!!!`);
    document.querySelector("body").style.backgroundColor = `green`;
    document.querySelector(".number").style.width = `25rem`;
    document.querySelector(".message").style.fontSize = `6rem`;
    document.querySelector(".message").style.height = `9rem`;
    displayHighscore(highscore);
    document.querySelector(".check").style.visibility = "hidden";
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high` : `Too low`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lose`);
      displayScore(0);
      document.querySelector(".check").style.visibility = "hidden";
    }
  }
}
document.querySelector(".check").addEventListener("click", play);
document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    play();
  }
});

let againBtn = document.querySelector(".again");
function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".check").style.visibility = "visible";
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = `15rem`;
  document.querySelector(".message").style.fontSize = `2rem`;
  document.querySelector(".message").style.height = `3rem`;
  displayMessage(`Start guessing...`);
}
againBtn.addEventListener("click", again);
document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    again();
  }
});

const clear = document.querySelector(".clear");
const highScore = document.querySelector(".highscore");
clear.addEventListener("click", function () {
  highScore.innerHTML = "0";
});
