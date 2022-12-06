//Simple counter

let box1Count = 0;
let box1Counter = document.getElementById("box1-Counter");
let kirbyRun = document.getElementById("kirbyRun");

function increment() {
    box1Count = box1Count + 1;
    box1Counter.innerText = box1Count;
}


//Rock Paper Scissors


let button = document.getElementById("playMe")

button.addEventListener("click", play);
let playerScore = 0;
let cpuScore = 0;
let playerCount = document.getElementById("playerScore");
let cpuCount = document.getElementById("cpuScore");

function play() {
    let userInput = window.prompt("Rock, Paper, or Scissors?");
        if (userInput === "Rock") {
            userInput = 1;
        } else if (userInput === "Paper") {
            userInput = 2;
        } else if (userInput === "Scissors") {
            userInput = 3;
        } else {
            alert("That is not a valid entry. Remember - Capitalization matters!");
        }
console.log(userInput);

        let draw = (Math.floor(Math.random() * 3 + 1))
        console.log(draw);
        if (userInput === draw) {
            alert("Whoops, it's a draw!");
            return;
        }

    let cpuInput = Math.floor(Math.random() * 3 + 1);
console.log(cpuInput);

        if (cpuInput === 3 && userInput === 1) {
            alert("You lose! Cpu player chose Paper!");
            cpuScore++;
        } else if (cpuInput === 3 && userInput === 2) {
            alert ("You lose! Cpu player chose Scissors!");
            cpuScore++;
        } else if (cpuInput === 3 && userInput === 3) {
            alert ("You lose! Cpu player chose Rock!");
            cpuScore++;
        }

        if (cpuInput !== 3) {
            if (userInput === 1) {
                alert("WINNER! Cpu chose Scissors");
                playerScore++;
            } else if (userInput === 2) {
                alert("WINNER! Cpu chose Rock!");
                playerScore++;
            } else if (userInput === 3) {
                alert("WINNER! Cpu chose Paper!");
                playerScore++;
            }
            
        }

playerCount.innerText = playerScore;
cpuCount.innerText = cpuScore;

}

// Simple Calculator

let calcOutput = document.getElementById("calcResult");

let addButton = document.getElementById("add");
let subButton = document.getElementById("subtract");
let divButton = document.getElementById("divide");
let multButton = document.getElementById("multiply");
addButton.addEventListener("click", add);
subButton.addEventListener("click", subtract);
divButton.addEventListener("click", divide);
multButton.addEventListener("click", multiply);

function add() {
    let calc1 = parseInt(prompt("First #"));
    let calc2 = parseInt(prompt("Second #"));
    let result = (calc1 + calc2)
    calcOutput.innerText = result;
}
function subtract() {
    let calc1 = parseInt(prompt("First #"));
    let calc2 = parseInt(prompt("Second #"));
    let result = (calc1 - calc2);
    calcOutput.innerText = result;
}
function divide() {
    let calc1 = parseInt(prompt("First #"));
    let calc2 = parseInt(prompt("Second #"));
    let result = (calc1 / calc2);
    calcOutput.innerText = result;
}
function multiply() {
    let calc1 = parseInt(prompt("First #"));
    let calc2 = parseInt(prompt("Second #"));
    let result = (calc1 * calc2);
    calcOutput.innerText = result;
}