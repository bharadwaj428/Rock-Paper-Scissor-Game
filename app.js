let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');
let genCompChoice = () => {
  let choices = ['rock', 'paper', 'scissor'];
  let idx = Math.floor(Math.random() * 3);
  return choices[idx];
};
const drawGame = () => {
  msg.innerText = 'Game was Draw. Play again';
  msg.style.backgroundColor = '#081b31';
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = 'green';
  } else {
    msg.innerText = `You Loose! ${userChoice} beats with ${compChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = 'red';
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      userWin = compChoice === 'scissor' ? false : true;
    } else {
      userWin = compChoice === 'rock' ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});
