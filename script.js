let humanScore = 0;
let computerScore = 0;

console.log("Welcome to the Rock-Paper-Scissors Game!");
testComputerChoice(3000);
playGame();

function testComputerChoice(iterations) {
    let rocks = 0;
    let scissors = 0;
    let papers = 0;
    for(let i = 0; i < iterations; i++) {
        let choice = getComputerChoice();
        if (choice === "rock") {
            rocks++;
        } else if (choice === "scissors") {
            scissors++;
        } else if (choice === "paper") {
            papers++;
        } else {
            console.log(`Error! The computer chose ${choice}`);
            return;
        }
    }
    console.log(`Test with ${iterations} iterations over.`);
    console.log(`Result: ${rocks} rocks, ${scissors} scissors, ${papers} papers.`);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getValidHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`You chose ${humanSelection}!`);
        console.log(`The computer chose ${computerSelection}`);

        let result = playRound(humanSelection, computerSelection);
        processRoundResult(result);
    }

    if (humanScore > computerScore) {
        console.log("Nice, you won!");
    } else if (computerScore > humanScore) {
        console.log("You lost bruh");
    } else {
        console.log("Draw, rematch now!");
    }

    console.log("Refresh the page to start a new game!");
}

function processRoundResult(result) {
    if (result === 1) {
        humanScore++;
        console.log("You won!");
    } else if (result === -1) {
        computerScore++;
        console.log("The computer won!");
    } else {
        console.log("It's a draw!");
    }
    console.log(`Score: ${humanScore} -:- ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return 0;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return -1;
        } else {
            return 1;
        }
    } else {
        if (computerChoice === "scissors") {
            return -1;
        } else {
            return 1;
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

