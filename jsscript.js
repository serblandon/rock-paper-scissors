const rps = ["Rock", "Paper", "Scissors"];

// returns the random indice corresponding to rock paper or scissors
function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

// function for playing a single round
function playRound(playerSelection, computerSelection) {

    // if both participants select the same nothing happens and it's a draw
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw!";
    }
    // if choices are different
    else {
        // testing outcomes for player selection = rock
        if(playerSelection.toLowerCase() === "rock") {
            if(computerSelection.toLowerCase() === "paper") {
                return "You lose! Paper beats Rock!";
            }

            if(computerSelection.toLowerCase() === "scissors") {
                return "You win! Rock beats Scissors!";
            }
        }
        // testing outcomes for player selection = paper
        if(playerSelection.toLowerCase() === "paper") {
            if(computerSelection.toLowerCase() === "scissors") {
                return "You lose! Scissors beats Paper!";
            }

            if(computerSelection.toLowerCase() === "rock") {
                return "You win! Paper beats Rock!";
            }
        }
        // testing outcomes for player selection = scissors
        if(playerSelection.toLowerCase() === "scissors") {
            if(computerSelection.toLowerCase() === "rock") {
                return "You lose! Rock beats Scissors!";
            }

            if(computerSelection.toLowerCase() === "paper") {
                return "You win! Scissors beats Paper!";
            }
        }
    }
    
}

// initialize selections for both players
playerSelection = "rock";
computerSelection = getComputerChoice();

// call the playround function for a single round
console.log(playRound(playerSelection, computerSelection));

//printing both selections
console.log(`\nPlayer selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);