// Variable declaration
let compBtns = document.querySelectorAll(".comp-btn");
let playerBtns = document.querySelectorAll(".player-btn");
let buttons = document.querySelectorAll(".game-btn");
let startScore = document.querySelector("#startScore");
let resetBtn = document.querySelectorAll(".reset");
let wins = 0, draws = 0 , losses = 0, playCounter = 0;


// Function to generate choice for computer
function computerPlay() {
    let compChoice = ["Rock", "Paper", "Scissors"];
    return (compChoice[Math.floor(Math.random() * 3)])
}

// Function to reset game
function reset() {
    wins = 0, draws = 0 , losses = 0, playCounter = 0;
    startScore.textContent = (`COMP: ${String(losses)} || ${String(wins)} :YOU`);
}

// Function to play a single round
function playRound(e) {
    if(wins < 5 && losses < 5) {
        playCounter++;
        compBtns.forEach(btn => btn.classList.remove("playing"))
        let compSelection = computerPlay();
        switch(compSelection) {
            case 'Rock':
                compRock.classList.add('playing');
                if(e.target.id == "playerRock") {
                    draws++;
                } else if(e.target.id == "playerPaper") {
                    wins++;
                } else if(e.target.id == "playerScissors") {
                    losses++;
                }
                break;
            case 'Paper':
                compPaper.classList.add('playing');
                if(e.target.id == "playerRock") {
                    losses++;
                } else if(e.target.id == "playerPaper") {
                    draws++;
                } else if(e.target.id == "playerScissors") {
                    wins++;
                }
                break;
            case 'Scissors': 
                compScissors.classList.add('playing');
                if(e.target.id == "playerRock") {   
                    wins++;
                } else if(e.target.id == "playerPaper") {
                    losses++;
                } else if(e.target.id == "playerScissors") {
                    draws++;
                }
                break;
        }
        
        startScore.textContent = (`COMP: ${String(losses)} || ${String(wins)} :YOU`);
    }

    if(wins == 5 || losses == 5) {
        if(wins > losses) {
            startScore.textContent = ("You Win! Play Again?")
        } else if(wins == losses) {
            startScore.textContent = ("Draw! Play Again?")
        } else if(wins < losses) {
            startScore.textContent = ("Comp Wins! Play Again?")
        }

        startScore.addEventListener("click", reset);
        return ;
    } 
}


// Call using doc ready and reset
playerBtns.forEach(btn => btn.addEventListener('mousedown', playRound));
resetBtn.forEach(btn => btn.addEventListener('click', reset));



