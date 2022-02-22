function game(){

    // randomly returns either ROCK, PAPER, or SCISSORS
    function computerPlay(){
        let answer = Math.floor(Math.random() * 3);
        if (answer === 0) {
            return "ROCK";
        } else if (answer === 1) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
    }
    
    // request the user to enter a non-case-sensitive string containing ROCK, PAPER, or SCISSORS
    function getPlayerSelection(){
        let playerSelection = (prompt("Type ROCK, PAPER, or SCISSORS", "ROCK")).toUpperCase();
    
        if(playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS"){
            alert("Enter in a valid response");
            getPlayerSelection();
        }
        return playerSelection;
    }
    
    // 
    function getWinner (playerSelection, computerSelection){
        if (playerSelection === computerSelection) {
            return "TIE"
        } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            computerScore++;
            return "COMPUTER WINS"
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            playerScore++;
            return "USER WINS"
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            playerScore++;
            return "USER WINS"
        } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            computerScore++;
            return "COMPUTER WINS"
        } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            computerScore++;
            return "COMPUTER WINS"
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            playerScore++;
            return "USER WINS"
        } 
    }
    
    for (let i = 1; i<=5; i++){
    let computerSelection = computerPlay();
    let playerSelection = getPlayerSelection();

    alert(`Round ${i}
    You chose ${playerSelection} and computer chose ${computerSelection}.
    ${getWinner(playerSelection, computerSelection)}`);
    }
}
let playerScore = 0;
let computerScore = 0;
game()
if(playerScore > computerScore){
    alert(`The score is ${playerScore} to ${computerScore}.
User wins!`)
} else if (playerScore < computerScore){
    alert(`The score is ${playerScore} to ${computerScore}.
Computer wins!`)
} else {
    alert("It's a tie!")
}







// get rock/paper/scissors from user
// computer generates rock/paper/scissors
// compare answers and return winner

