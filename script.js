let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 1){
        console.log("rock")
        return "rock"
    } else if (computerChoice === 2){
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    } 
};

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper or Scissors").toLowerCase()
    if (humanChoice === "rock"){
        console.log("rock")
        return "rock"
    } else if (humanChoice === "paper"){
        console.log("paper")
        return "paper"
    } else if (humanChoice === "scissors") {
        console.log("scissors")
        return "scissors"
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "Draw!"
    } else if (humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("Player Wins Round!"+ humanScore)
    } else {
        computerScore++
        console.log("Computer Wins!"+ computerScore)
    }
  };

function playGame() {
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice(); 
let humanScore = 0
let computerScore = 0

  while (humanScore != 5 || computerScore != 5) {
    playRound();
  }
  if (humanScore = 5){
    console.log("HUMA")
  }
};
playGame();