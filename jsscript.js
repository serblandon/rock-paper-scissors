const rps = ["Rock", "Paper", "Scissors"];

// returns the random indice corresponding to rock paper or scissors
function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

// function for playing a single round
function playRound(playerSelection, computerSelection) {

    // if both participants select the same nothing happens and it's a draw
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a draw!");
    }
    
}

// initialize selections for both players
playerSelection = "rock";
computerSelection = getComputerChoice();

// call the playround function for a single round
playRound(playerSelection, computerSelection);

console.log(computerSelection);