const choices = ["Rock", "Paper", "Scissors"]
const outcomes = ["PlayerWin", "CPUWin", "Tie"]

let getComputerChoice = () => {
  const choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}


// WORK IN PROGRESS
const CPUChoice = getComputerChoice();
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {

  }
}


let game = () => {
  let playerInput = prompt("Choose one of Rock, Paper, and Scissors!")
  playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
  console.log(playerChoice);
  console.log(computerSelection);

  return playRound(playerChoice, computerSelection);
}

