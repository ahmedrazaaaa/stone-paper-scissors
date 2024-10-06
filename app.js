let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const currUserScore = document.querySelector("#user-score");
const currCompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return choice[randIdx];
};

const draw = () => {
  result.innerText = "Game was draw";
  result.style.backgroundColor = "grey";
};

const wOl = (userWin, compChoice) => {
  if (userWin) {
    userScore++;
    currUserScore.innerText = userScore;
    result.innerText = `You win, computer chose ${compChoice}`;
    result.style.backgroundColor = "green";
  } else {
    compScore++;
    currCompScore.innerText = compScore;
    result.innerText = `You lose, computer chose ${compChoice}`;
    result.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    wOl(userWin, compChoice);
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userChoice = option.getAttribute("id");
    playGame(userChoice);
  });
});
