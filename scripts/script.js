console.log("hello world");

function computerPlay() {
    var randomNumber = Math.random() * 10;
    if (randomNumber < 4) return "ROCK";
    else if (randomNumber < 7) return "SCISSORS";
    else return "PAPER";
}