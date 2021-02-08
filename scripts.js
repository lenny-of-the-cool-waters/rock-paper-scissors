//Importing modules
const prompt = require('prompt-sync')();

// Function to generate choice for computer
let computerPlay = () => {
    let compChoice = ["Rock", "Paper", "Scissors"];
    return (compChoice[Math.floor(Math.random() * 3)])
}


// Function to play a single round
let playRound = (playerSelection, computerSelection) => {
    switch(playerSelection.toLowerCase()) {
        case 'rock': 
            if(computerSelection == "Paper") {
                return ({
                    msg: "You lose! Paper beats Rock",
                    score: "loss"
                })
            } else if(computerSelection == "Scissors") {
                return ({
                    msg: "You win! Rock beats Scissors",
                    score: "win"
                })
            } else {
                return ({
                    msg: "Draw!",
                    score: "draw"
                })
            }

        case 'paper': 
            if(computerSelection == "Scissors") {
                return ({
                    msg: "You lose! Scissors beat Paper",
                    score: "loss"
                })
            } else if(computerSelection == "Rock") {
                return ({
                    msg: "You win! Paper beats Rock",
                    score: "win"
                })
            } else {
                return ({
                    msg: "Draw!",
                    score: "draw"
                })
            }

        case 'scissors': 
            if(computerSelection == "Rock") {
                return ({
                    msg: "You lose! Rock beats Scissors",
                    score: "loss"
                })
            } else if(computerSelection == "Paper") {
                return ({
                    msg: "You win! Scissors beat Paper",
                    score: "win"
                })
            } else {
                return ({
                    msg: "Draw!",
                    score: "draw"
                })
            }
    }
}

// Function to play 5 rounds and get final score
let game = () => {
    let wins = 0, draws = 0, losses = 0;

    for(let i=0; i<5; i++) {
        let playerChoice = prompt("Rock, Paper or Scissors? ");
        let compChoice = computerPlay();
        let result = playRound(playerChoice, compChoice);
        console.log(result.msg)

        if(result.score == "win") {
            wins++
        } else if(result.score == "loss") {
            losses++
        } else { draws++ }
    }

    if(wins > losses) {
        console.log("\n\t ~~~~~ You beat the computer ~~~~~\n")
    } else if(wins == losses) {
        console.log("\n\t ~~~~~ Even Match ~~~~~\n")
    } else if(wins < losses) {
        console.log("\n\t ~~~~~ The computer beat you ~~~~~\n")
    }
}

game();

