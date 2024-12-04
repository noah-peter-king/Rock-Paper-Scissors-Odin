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
        humanChoice = "rock"
        console.log("rock")
        return "rock"
    } else if (humanChoice === "paper"){
        humanChoice = "paper"
        console.log("paper")
        return "paper"
    } else if (humanChoice === "scissors") {
        humanChoice = "scissors"
        console.log("scissors")
        return "scissors"
    }
};

/*function playRound(humanChoice, computerChoice) {
    getHumanChoice();
    getComputerChoice();
    if (humanChoice === computerChoice){
        return " Round Draw!"
    } else if (humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("Player Wins Round!"+ humanScore)
    } else {
        computerScore++
        console.log("Computer Wins Round!"+ computerScore)
    }
  }; */

// the function playRound is meant to run 5 times and annouce the winner in the end
// NOT waiting until one score equals 5
function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log("Round Draw!")
        } else if (humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
            || humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++
            console.log("Player Wins Round! "+ humanScore)
        } else {
            computerScore++
            console.log("Computer Wins Round! "+ computerScore)
        }
      }; 
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score is "+ humanScore + ", Computer score is "+ computerScore)
    } 
    while (true){
        if (computerScore === humanScore){
            console.log("Noone Wins The Game! ")
            break;
        } else if (humanScore < computerScore){
            console.log("Computer Wins The Game!")
            break;
        } else {
            console.log("Human Wins The Game")
            break;
        }
    }
}
playGame();