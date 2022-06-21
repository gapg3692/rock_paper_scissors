let result = "";
let wins = 0;
let loses = 0;
let tie = 0;
let games = 1;

function computerPlay() {
    var randomNumber = Math.random() * 10;
    if (randomNumber < 4) return "rock";
    else if (randomNumber < 7) return "scissors";
    else return "paper";
}

// function playerSelection() {
//     const playerChoice = prompt(
//         "Select Rock, Scissors or Paper"
//     ).toLocaleLowerCase();

//     return playerChoice === "scissors" ||
//         playerChoice === "rock" ||
//         playerChoice === "paper" ?
//         playerChoice :
//         "none";
// }

function playRound(id) {
    const playerChoice = id.target.id;
    // const playerChoice = playerSelection();
    const computerChoice = computerPlay();

    if (computerChoice === playerChoice)
        return `Computer choose: ${computerChoice} and the player choose: ${playerChoice}. That's a tie, you have to repeat`;
    else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock")
    )
        return `Computer choose: ${computerChoice} and the player choose: ${playerChoice}. You lose because ${computerChoice} beats ${playerChoice}`;
    else if (playerChoice === "none")
        return "Select a valid option: Rock, Paper o Scissors";
    else
        return `Computer choose: ${computerChoice} and the player choose: ${playerChoice}. You win because ${playerChoice} beats ${computerChoice}`;
}

function showResult(text = "") {
    divResult.innerText = `${result}<br>You have ${wins} wins ${loses} loses and ${tie} ties<br>${text}`;
}

function game(event) {
    result = playRound(event);
    if (result.includes("lose")) loses++;
    else if (result.includes("win")) wins++;
    else if (result.includes("tie")) tie++;
    if (games !== 5) {
        games++;
        showResult();
    } else if (wins > loses) {
        showResult(`You win the series of 5 games`);
        games = 1;
        wins = 0;
        loses = 0;
        tie = 0;
    } else if (wins < loses) {
        showResult(`You lose the series of 5 games`);
        games = 1;
        wins = 0;
        loses = 0;
        tie = 0;
    } else if (wins == loses) {
        showResult(`You tie the series of 5 games`);
        games = 1;
        wins = 0;
        loses = 0;
        tie = 0;
    }
}

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((button) => {
    button.addEventListener("click", game);
});

const container = document.querySelector("body");

const divResult = document.createElement("p");

container.appendChild(divResult);