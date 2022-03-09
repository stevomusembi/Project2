let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper"
    return "Sciccors";  
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats  ${convertToWord(computerChoice)} You Win! 🔥🔥🔥`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('green-glow'), 300);

}
function loss(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to  ${convertToWord(computerChoice)} You Lost💩💩💩!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} is same as  ${convertToWord(computerChoice)} You Drawwww!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice+ computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r")); 
    paper_div.addEventListener('click',() => game("p")); 
    scissors_div.addEventListener('click',()=> game("s")); 
}
main();