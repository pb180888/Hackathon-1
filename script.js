const firstScore = 20;
let score = 20;
let highscore = 0;
let between = document.querySelector(".between");
const audio = document.querySelector(".win");
const audio1 = document.querySelector(".lose");
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
// function which explain a process of game
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
    audio.play();
    audio.currentTime = 0;
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
      audio1.play();
      audio1.currentTime = 0;
      displayNumber(secretNumber);
      document.querySelector(".number").style.backgroundColor = "red";
      displayMessage(`You lose`);
      displayScore(0);
      document.querySelector(".check").style.visibility = "hidden";
    }
  }
}
// for checking your result you can use to options - button "check" and key "Enter"
document.querySelector(".check").addEventListener("click", play);
document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    play();
  }
});
// create function for again action(to start the game again)
let againBtn = document.querySelector(".again");
function again() {
  document.querySelector(".number").style.backgroundColor = "#eee";
  audio.pause();
  audio1.pause();
  score = 20;
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".check").style.visibility = "visible";
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = `15rem`;
  document.querySelector(".message").style.fontSize = `2rem`;
  document.querySelector(".message").style.height = `3rem`;
  displayMessage(`Start guessing...`);
  if (accept && valueMaxNumber.value > 0) {
    between.textContent = `(Between 1 and ${valueMaxNumber.value})`;
    secretNumber = Math.trunc(Math.random() * valueMaxNumber.value) + 1;
  } else {
    between.textContent = `(Between 1 and 100)`;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
  }
  console.log(secretNumber);
  // console.log(accept);
}
// turn on button and key esc for "again"
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
// add "setting button"
const settingBtn = document.querySelector(".setting");
const closeBtn = document.querySelector(".close");
const acceptBtn = document.querySelector(".accept");
const set = document.querySelector(".set");
settingBtn.addEventListener("click", function () {
  set.style.display = "block";
});
// close button of setting
closeBtn.addEventListener("click", function () {
  set.style.display = "none";
});
// accept button of setting
const valueMaxNumber = document.querySelector(".maxNumber");
valueMaxNumber.addEventListener("submit", function (e) {
  e.preventDefault();
});
console.log(secretNumber);
let accept = false;
acceptBtn.addEventListener("click", function () {
  if (valueMaxNumber.value < 1 || !valueMaxNumber.value) {
    alert("Enter number is greater than 0");
    accept = false;
  } else {
    between.textContent = `(Between 1 and ${valueMaxNumber.value})`;
    secretNumber = Math.trunc(Math.random() * valueMaxNumber.value) + 1;
    accept = true;
  }
  console.log(secretNumber);
  console.log(accept);
});
// end
