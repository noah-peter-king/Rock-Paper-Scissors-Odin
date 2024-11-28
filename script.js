let humanScore = 0
let computerScore = 0


function getComputerChoice(min, max){
    computerChoice = Math.floor(Math.random() * (max - min + 1) + min)


    if (computerChoice === 1){
        console.log("rock")
    } else if (computerChoice === 2){
        console.log("paper")
    } else {
        console.log("scissors")
    }
    
}

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper or Scissors")
    if (humanChoice === "rock"){
        humanChoice = 1
        console.log("rock")
    } else if (humanChoice === "paper"){
        humanChoice = 2
        console.log("paper h")
    } else if (humanChoice === "scissors") {
        humanChoice = 3
        console.log("scissors h")
    }
}

// function called playRound
