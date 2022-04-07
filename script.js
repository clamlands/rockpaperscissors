   let roundNum = 0;
   const results = document.querySelector('#results');
   results.setAttribute('style', 'white-space: pre;');

   // event listeners for buttons that play a round
    const rockBtn = document.querySelector('#rock');
    let playerScore = 0;
    let computerScore = 0;

    rockBtn.addEventListener('click', () => {
        roundNum++;
        game('ROCK')
        
    });

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () => {
        roundNum++;
        game('PAPER')
        
    });

    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', () => {
        roundNum++;
        game('SCISSORS')
        
    });

// 
function game(playerSelection){
        if(roundNum === 6){
            results.textContent = "Results:";
            playerScore = 0;
            computerScore = 0;
            roundNum = 1;
        }

        let computerSelection = computerPlay();
        
        results.textContent += `\r\n Round ${roundNum} \r\n You chose ${playerSelection} and computer chose ${computerSelection}. \r\n ${getWinner(playerSelection, computerSelection)} \r\n`    
        results.textContent += ` The score is ${playerScore} to ${computerScore}. \r\n`
        
        if(roundNum === 5){
            if(playerScore > computerScore){
                results.textContent += '\r\n User wins the whole game!';
            } else if (playerScore < computerScore){
                results.textContent += '\r\n Computer wins the whole game!';
            } else {
                results.textContent += '\r\n The game ends in a tie!';
            }
        }
    }


    
    // computer randomly returns either ROCK, PAPER, or SCISSORS
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

    // decides if the user or computer won that round
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