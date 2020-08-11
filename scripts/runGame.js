const logWriter = document.querySelector("#results");
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scisscorBtn = document.querySelector('#scissors')
let playerSelection
let computerSelection
let p1score = 0
let p2score = 0 

function checkScore(){

    if (p1score == 5){
        alert("You win!")
    } else if (p2score == 5){
        alert("The computer won!")
    } else{
        return;
    }

    p1score = -1
    p2score = -1
    p1Score();
    p2Score();

    while (logWriter.firstChild != null){
        logWriter.removeChild(logWriter.firstChild)
    }
}

function p2Score(){
    const newScore = document.querySelector("#p2Score").firstChild;
    p2score += 1
    newScore.replaceData(24, 1, p2score);
}

function p1Score(){
    const newScore = document.querySelector("#p1Score").firstChild;
    p1score += 1
    newScore.replaceData(14, 1, p1score); 
}

function computerPlay(){
    let choice = random(3);

    if (choice == 0){
        return 'rock';
    }  else if (choice == 1){
        return 'paper';
    }  else{
        return 'scissors';
    }
}

function playRound (a, b, players){
    if (players == 1){
        if (a == 'rock'){
        if (b == 'rock'){
            return "Draw! Rock ties rock";
        } else if (b == 'paper'){
            p2Score();
            return "You Lose! Paper beats Rock.";
        } else if (b == 'scissors'){
            p1Score();
            return "You Win! Rock beats Scissors";
        }
        } else if (a == 'paper'){
        if (b == 'rock'){
            p1Score();
            return "You Win! Paper beats Rock";
        } else if (b == 'paper'){
            return "Draw! Paper ties Paper";
        } else if (b == 'scissors'){
            p2Score();
            return "You Lose! Scissors beats Paper.";
        }
        } else if (a == 'scissors'){
        if (b == 'rock'){
            p2Score();
            return "You Lose! Rock beats Scissors.";
        } else if (b == 'paper'){
            p1Score();
            return "You Win! Scissors beats Paper";
        } else if (b == 'scissors'){
            return "Draw! Scissors ties Scissors";
        }
        }
    }
}

function random(n) {
    return Math.floor(Math.random()*n);
}

function rockFunct() {
    computerSelection = computerPlay()
    check = playRound("rock", computerSelection, 1)

    const newP = document.createElement("p");
    newP.textContent = p1score + " " + p2score + " " + check
    logWriter.appendChild(newP);

    checkScore();
}

function paperFunct() {
    computerSelection = computerPlay()
    check = playRound("paper", computerSelection, 1)

    const newP = document.createElement("p");
    newP.textContent = p1score + " " + p2score + " " + check
    logWriter.appendChild(newP);

    checkScore();
}

function scissorFunct() {
    computerSelection = computerPlay()
    check = playRound("scissors", computerSelection, 1)

    const newP = document.createElement("p");
    newP.textContent = p1score + " " + p2score + " " + check
    logWriter.appendChild(newP);

    checkScore();
}

rockBtn.onclick = rockFunct;
paperBtn.addEventListener('click', paperFunct);
scisscorBtn.addEventListener('click', scissorFunct);