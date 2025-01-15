let humanScore = 0
let computerScore = 0
let numOfRounds = 0
let buttons = document.querySelectorAll('button');

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 1){
        console.log('computer choice is rock')
        return 'rock'
    } else if (computerChoice === 2){
        console.log('computer choice is paper')
        return 'paper'
    } else {
        console.log('computer choice is scissors')
        return 'scissors'
    } 
};

humanChoice = buttons.forEach(function(elem) {
    elem.addEventListener("input", (event) =>{
        let target = event.target;
        switch(target.id){
            case 'rock' :
                humanChoice = 'rock';
                break;
            case 'paper' :
                humanChoice = 'paper';
                break;
            case 'scissors' :
                humanChoice = 'scissors';
                break;
        };console.log('Human Choice Is '+ humanChoice)
    });
});


    /*if (humanChoice === 'rock'){
        humanChoice = 'rock'
        console.log('rock')
        return 'rock'
    } else if (humanChoice === 'paper'){
        humanChoice = 'paper'
        console.log('paper')
        return 'paper'
    } else if (humanChoice === 'scissors') {
        humanChoice = 'scissors'
        console.log('scissors')
        return 'scissors'
    }*/

function playRound(humanChoice, computerChoice) {
    console.log('playing round')
        numOfRounds++
        roundNum.textContent = numOfRounds
        getComputerChoice();
        if (humanChoice === computerChoice){
            result.textContent = ("Round Draw! Human Score Is "+humanScore
                + "Computer Score Is " +computerScore);
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper'
            || humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++
            result.textContent = ("Player Wins Round! Human Score Is "+humanScore
                + "Computer Score Is " +computerScore
            )
        } else 
        {   
            computerScore++
            result.textContent = ("Computer Wins Round! Human Score Is "+humanScore
                + " Computer Score Is " +computerScore) 
        }

    

    if(numOfRounds % 5 === 0)
        if (computerScore === humanScore){
            result.textContent = ("Noone Wins The Game! Human score is "
                + humanScore + ", Computer score is "+ computerScore )
        } else if (humanScore < computerScore){
            result.textContent = ("Computer Wins The Game! Human score is "
                + humanScore + ", Computer score is "+ computerScore)
        } else {
            result.textContent = ("Human Wins The Game Human score is "
                + humanScore + ", Computer score is "+ computerScore)
        }
}

  buttons.forEach(function(elem) {
    elem.addEventListener("click", () => playRound(humanChoice, getComputerChoice));
});