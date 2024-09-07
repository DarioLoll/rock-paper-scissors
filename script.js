let humanScore = 0;
let computerScore = 0;

let btnRock = document.querySelector(".rock");
let btnScissors = document.querySelector(".scissors");
let btnPaper = document.querySelector(".paper");

btnRock.addEventListener("click", () => playGame("rock"));
btnScissors.addEventListener("click", () => playGame("scissors"));
btnPaper.addEventListener("click", () => playGame("paper"));

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();

    displayUserChoice(humanSelection);
    displayComputerChoice(computerSelection);

    console.log(`You chose ${humanSelection}!`);
    console.log(`The computer chose ${computerSelection}`);

    let result = playRound(humanSelection, computerSelection);
    processRoundResult(result);
    displayScore();
}

function displayScore() {
    let userScoreText = document.querySelector("#user-score");
    userScoreText.textContent = humanScore;

    let computerScoreText = document.querySelector("#computer-score");
    computerScoreText.textContent = computerScore;
}

function displayUserChoice(choice) {
    let userChoiceImage = document.querySelector(".user-choice");
    displayChoice(userChoiceImage, choice);
}

function displayComputerChoice(choice) {
    let computerChoiceImage = document.querySelector(".computer-choice");
    displayChoice(computerChoiceImage, choice);
}

function displayChoice(imageElement, choice) {
    if (!(imageElement instanceof Image)) {
        console.log("Invalid image element")
        return;
    }
    imageElement.src = `images/${choice}.png`;
    imageElement.alt = choice;
}

function processRoundResult(result) {
    let userChoiceImage = document.querySelector(".user-choice");
    let computerChoiceImage = document.querySelector(".computer-choice");

    userChoiceImage.classList.remove("winner");
    computerChoiceImage.classList.remove("winner");

    if (result === 1) {
        humanScore++;
        console.log("You won!");
        userChoiceImage.classList.add("winner");
    } else if (result === -1) {
        computerScore++;
        console.log("The computer won!");
        computerChoiceImage.classList.add("winner");
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

