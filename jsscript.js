const rps = ["Rock", "Scissors", "Paper"];

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
/*function game() {
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
        console.log("You lost the game! You were beaten by the computer!");
    }
}/*


/* call the playround function for a single round
console.log(playRound(playerSelection, computerSelection)); */

/*printing both selections
console.log(`\nPlayer selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`); */

// test game function best of five
//game();

//select all 3 buttons
const btn_choice = document.querySelectorAll('.btns');

//select my choice image
const you_choice = document.querySelector(".you").firstElementChild;
//select computer choice image
const comp_choice = document.querySelector(".computer").firstElementChild;

//select player score
const score_you = document.querySelector(".you").lastElementChild;
//select computer score
const score_computer = document.querySelector(".computer").lastElementChild;

//select round
const round_now = document.querySelector(".round");

//select commentary
const commentary_now = document.querySelector(".commentary");

//main
const main = document.querySelector("main");

//playagain
const playagain = document.querySelector(".playagain");

//inititalise score variables and round and commentary
let playerLives = 5;
let computerLives = 5;
let round = 0;
let commentary = "";

// function for playagain
function resetGame() {
    playagain.addEventListener('click', () => {
      window.location.reload();
    });
  }

btn_choice.forEach((button) => {
    button.addEventListener('click', () => {
        // initialise computer's choice
        let getcmp_choice = getComputerChoice();

        // see which button the user chose
        // replace question mark with the icon associated with the spell
        if(button === btn_choice[0]) {
            you_choice.removeAttribute("style");
            you_choice.removeAttribute("class");
            you_choice.setAttribute("class", "fa-solid fa-face-dizzy fa-4x");
            you_choice.style.color = "#af84db";
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-face-dizzy fa-4x");
                comp_choice.style.color = "#af84db";
                //draw
                commentary = "Duel Commentary: It's a Draw! You have to cast again!";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-bolt fa-4x");
                comp_choice.style.color = "#99CCFF";
                //player wins
                computerLives--;
                commentary = "Duel Commentary: You win! In order to cast a Patronus you must be able to focus your thoughts on things that make you happy.  Under a Confundus Charm you would be unable to focus."
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-lock fa-4x");
                comp_choice.style.color = "#FBBF77";
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! You can't cast a curse if you can't move your arms.  Petrificus Totalus is the Full Body-Bind Curse and is pretty effective."
            }
            // play round
            //playRound("rock", getcmp_choice);
            score_you.textContent = `Your lives: ${playerLives}`;
            score_computer.textContent = `Opponent's lives: ${computerLives}`;
            commentary_now.textContent = commentary;
        }
        else if(button === btn_choice[1]) {
            you_choice.removeAttribute("style");
            you_choice.removeAttribute("class");
            you_choice.setAttribute("class", "fa-solid fa-bolt fa-4x");
            you_choice.style.color = "#99CCFF";
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-face-dizzy fa-4x");
                comp_choice.style.color = "#af84db";
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! In order to cast a Patronus you must be able to focus your thoughts on things that make you happy.  Under a Confundus Charm you would be unable to focus.";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-bolt fa-4x");
                comp_choice.style.color = "#99CCFF";
                //draw
                commentary = "Duel Commentary: It's a Draw! You have to cast again!";
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-lock fa-4x");
                comp_choice.style.color = "#FBBF77";
                //player wins
                computerLives--;
                commentary = "You win! Expecto Patronum is a simpler spell to cast if you know how to do it and a Patronus, when conjured properly, can have physical effect on its target.  Since it takes a bit more wand work to cast Petrificus Totalus, the Patronus would have your opponent on the ground before the spell could be cast.";
            }
            score_you.textContent = `Your lives: ${playerLives}`;
            score_computer.textContent = `Opponent's lives: ${computerLives}`;
            commentary_now.textContent = commentary;
        }
        else {
            you_choice.removeAttribute("style");
            you_choice.removeAttribute("class");
            you_choice.setAttribute("class", "fa-solid fa-lock fa-4x");
            you_choice.style.color = "#FBBF77";
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-face-dizzy fa-4x");
                comp_choice.style.color = "#af84db";
                //player wins
                computerLives--;
                commentary = "Duel Commentary: You win! You can't cast a curse if you can't move your arms.  Petrificus Totalus is the Full Body-Bind Curse and is pretty effective.";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-bolt fa-4x");
                comp_choice.style.color = "#99CCFF";
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! Expecto Patronum is a simpler spell to cast if you know how to do it and a Patronus, when conjured properly, can have physical effect on its target.  Since it takes a bit more wand work to cast Petrificus Totalus, the Patronus would have your opponent on the ground before the spell could be cast.";
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                comp_choice.removeAttribute("style");
                comp_choice.removeAttribute("class");
                comp_choice.setAttribute("class", "fa-solid fa-lock fa-4x");
                comp_choice.style.color = "#FBBF77";
                //draw
                commentary = "Duel Commentary: It's a Draw! You have to cast again!";
            }
            score_you.textContent = `Your lives: ${playerLives}`;
            score_computer.textContent = `Opponent's lives: ${computerLives}`;
            commentary_now.textContent = commentary;

        }
        //increaase round
        round++;
        round_now.textContent = `Round: ${round}`;

        //stop condition
        //last message
        if(playerLives == 0) {
            commentary = "You lost this duel! The opponent beat you in a fair fight!";
            commentary_now.textContent = commentary;
            btn_choice.forEach(item => {
                item.disabled = true;
            }
                )
            playagain.style.visibility = "visible";
            resetGame();

        }
        if(computerLives == 0) {
            commentary = "Congratulations! You won this duel! You got the better out of your opponent!";
            commentary_now.textContent = commentary;
            btn_choice.forEach(item => {
                item.disabled = true;
            }
                )
            playagain.style.visibility = "visible";
            resetGame();
        }
    })
})
