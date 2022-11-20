const rps = ["Rock", "Scissors", "Paper"];

// returns the random indice corresponding to rock paper or scissors
function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function updateButton(choice, imageString, colorString) {
    choice.removeAttribute("style");
    choice.removeAttribute("class");
    choice.setAttribute("class", imageString);
    choice.style.color = colorString;
}

// function for playagain
function resetGame() {
    playagain.addEventListener('click', () => {
      window.location.reload();
    });
  }

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

btn_choice.forEach((button) => {
    button.addEventListener('click', () => {
        // initialise computer's choice
        let getcmp_choice = getComputerChoice();

        // see which button the user chose
        // replace question mark with the icon associated with the spell
        if(button === btn_choice[0]) {
            updateButton(you_choice, "fa-solid fa-face-dizzy fa-4x", "#af84db");
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-face-dizzy fa-4x", "#af84db");
                //draw
                commentary = "Duel Commentary: It's a Draw! You have to cast again!";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-bolt fa-4x", "#99CCFF");
                //player wins
                computerLives--;
                commentary = "Duel Commentary: You win! In order to cast a Patronus you must be able to focus your thoughts on things that make you happy.  Under a Confundus Charm you would be unable to focus."
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-lock fa-4x", "#FBBF77");
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! You can't cast a curse if you can't move your arms.  Petrificus Totalus is the Full Body-Bind Curse and is pretty effective."
            }
            score_you.textContent = `Your lives: ${playerLives}`;
            score_computer.textContent = `Opponent's lives: ${computerLives}`;
            commentary_now.textContent = commentary;
        }
        else if(button === btn_choice[1]) {
            updateButton(you_choice, "fa-solid fa-bolt fa-4x", "#99CCFF");
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-face-dizzy fa-4x", "#af84db");
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! In order to cast a Patronus you must be able to focus your thoughts on things that make you happy.  Under a Confundus Charm you would be unable to focus.";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-bolt fa-4x", "#99CCFF");
                //draw
                commentary = "Duel Commentary: It's a Draw! You have to cast again!";
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-lock fa-4x", "#FBBF77");
                //player wins
                computerLives--;
                commentary = "You win! Expecto Patronum is a simpler spell to cast if you know how to do it and a Patronus, when conjured properly, can have physical effect on its target.  Since it takes a bit more wand work to cast Petrificus Totalus, the Patronus would have your opponent on the ground before the spell could be cast.";
            }
            score_you.textContent = `Your lives: ${playerLives}`;
            score_computer.textContent = `Opponent's lives: ${computerLives}`;
            commentary_now.textContent = commentary;
        }
        else {
            updateButton(you_choice, "fa-solid fa-lock fa-4x", "#FBBF77");
            // if computer chose rock
            if(getcmp_choice === "Rock") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-face-dizzy fa-4x", "#af84db");
                //player wins
                computerLives--;
                commentary = "Duel Commentary: You win! You can't cast a curse if you can't move your arms.  Petrificus Totalus is the Full Body-Bind Curse and is pretty effective.";
            }
            if(getcmp_choice === "Scissors") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-bolt fa-4x", "#99CCFF");
                //computer wins
                playerLives--;
                commentary = "Duel Commentary: You lose! Expecto Patronum is a simpler spell to cast if you know how to do it and a Patronus, when conjured properly, can have physical effect on its target.  Since it takes a bit more wand work to cast Petrificus Totalus, the Patronus would have your opponent on the ground before the spell could be cast.";
            }
            if(getcmp_choice === "Paper") {
                //computer choice
                updateButton(comp_choice, "fa-solid fa-lock fa-4x", "#FBBF77");
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
