let humanScore = 0;
let computerScore = 0;

console.log("Welcome to the Rock-Paper-Scissors Game!");

const humanSelection = getValidHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

console.log(`You chose ${humanSelection}!`);
console.log(`The computer chose ${computerSelection}`);

playRound(humanSelection, computerSelection);
console.log(`Score: ${humanScore} -:- ${computerScore}`);

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("The computer won!");
        } else {
            humanScore++;
            console.log("You won!");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("The computer won!");
        } else {
            humanScore++;
            console.log("You won!");
        }
    } else {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log("The computer won!");
        } else {
            humanScore++;
            console.log("You won!");
        }
    }
}

function getComputerChoice() {
    let randomBetweenZeroAndOne = Math.random();
    let computerChoice;

    if (randomBetweenZeroAndOne <= 1 / 3) {
        computerChoice = "rock";
    } else if (randomBetweenZeroAndOne <= 2 / 3) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }

    return computerChoice;
}

function getValidHumanChoice() {
    let userInput = prompt("Enter rock / paper / scissors: ");
    while (userInput != "rock" && userInput != "scissors" && userInput != "paper") {
        userInput = prompt("Wrong input! Enter rock / paper / scissors: ");
    }
    return userInput;
}

