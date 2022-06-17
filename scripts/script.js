console.log("hello world");

function computerPlay() {
    var randomNumber = Math.random() * 10;
    if (randomNumber < 4) return "rock";
    else if (randomNumber < 7) return "scissors";
    else return "paper";
}

function playerSelection() {
    const playerChoice = prompt(
        "Select Rock, Scissors or Paper"
    ).toLocaleLowerCase();

    return playerChoice === "scissors" ||
        playerChoice === "rock" ||
        playerChoice === "paper" ?
        playerChoice :
        "none";
}

function playRound() {
    const playerChoice = playerSelection();
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

function game() {
    let wins = 0;
    let loses = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        let playResult = playRound();
        if (playResult.includes("lose")) loses++;
        else if (playResult.includes("win")) wins++;
        else if (playResult.includes("tie")) tie++;
        console.log(playResult);
    }
    console.log(`You win: ${wins}, lose: ${loses}, and tie: ${tie}`);
}