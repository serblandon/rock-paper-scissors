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

// function to display scores after each round
function getScores(plyrScore, cmptScore) {
    console.log(`Player score: ${plyrScore}`);
    console.log(`Computer score: ${cmptScore}`);
}

// printing both selections
function getChoices(plyrChoice, cmptChoice) {
    console.log(`Player selection: ${plyrChoice}`);
    console.log(`Computer selection: ${cmptChoice}`);
}

// game function
function game() {
    // initialize and declare score cards for both players
    let playerScore = 0;
    let computerScore = 0;

    // loop 5 times = play 5 rounds of the game
    while(playerScore != 5 && computerScore != 5) {
        // get input choice from player and computer
        let playerSelection = prompt("Choose: Rock/Paper/Scissors");
        let computerSelection = getComputerChoice();

        // call the play round fct each time
        console.log(playRound(playerSelection, computerSelection));
        
        // check if returned string contains win or lose
        if(playRound(playerSelection, computerSelection).includes("win")) {
            // increment player score if they won
            playerScore++;
        }
        else if(playRound(playerSelection, computerSelection).includes("lose")) {
            // increment computer score if player lost
            computerScore++;
        }
        // display scores after each round
        getScores(playerScore, computerScore);

        // display choices made by both players
        getChoices(playerSelection, computerSelection);
        console.log("\n");
    }
    // after loop is done the scores shall be checked and decide the winner
    if(playerScore == 5) {
        console.log("You won the game!!!");
    }
    else {
        console.log("You lost the game! You were beaten by the computer");
    }
}


/* call the playround function for a single round
console.log(playRound(playerSelection, computerSelection)); */

/*printing both selections
console.log(`\nPlayer selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`); */

// test game function best of five
game();
