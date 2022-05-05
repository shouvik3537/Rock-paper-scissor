//declaration of all gloabal variable
let humanScore=0;
let computerScore=0;
let roundWinner = '';

//getting element by id
 let wonMessage = document.getElementById('whoWon');
 let humanScoreUpdate = document.getElementById('humanScore');
 let computerScoreUpdate = document.getElementById('computerScore');
 let finalMessage = document.getElementById('finalMessage');
 let openM = document.getElementById('openModal');
 document.getElementById('playagain').addEventListener('click', ()=> closeModal());




//player selecting
document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click',() => handleClick('paper'));
document.getElementById('scissor').addEventListener('click', () => handleClick('scissor'));



//returns a random selection of rock-paper-scissor 
function computerPlay(){
    const random= Math.floor(Math.random() * (3-1+1)+1);
    switch(random){
        case 1: return("rock");
        break;
        case 2: return("paper");
        break;
        case 3: return("scissor")
        break;
    }

}


function playRound(playerSelection, computerSelection){

    if(playerSelection===computerSelection){
        roundWinner = "It's a Tie";
    }
    else if(playerSelection==="rock" && computerSelection==="scissor"){
        roundWinner = "You WON-Rock breaks Scissor";
        humanScore++;
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        roundWinner = "You lose-paper consumes rock";
        computerScore++;

    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        roundWinner = "You WON-Paper consumes rock";
        humanScore++;
    }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        roundWinner = "You lose-scissor cuts paper";
        computerScore++;
    }
    else if(playerSelection==="scissor" && computerSelection==="paper"){
        roundWinner = "You WON-scissor cuts paper";
        humanScore++;
    }
    else if(playerSelection==="scissor" && computerSelection==="rock"){
        roundWinner = "You lose-rock breaks scissor";
        computerScore++;
    }
    updateScoreMessage(roundWinner,humanScore,computerScore);
}

function game(){
    let whoWon;
    while(humanScore<=5 || computerScore<=5){
        computerInput=computerPlay();
        whoWon = playRound(userInput,computerInput);
        if(whoWon.includes("WON!")){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    if(humanScore>computerScore){
        return("You won the battle against computer! congrats");
    }
    else if(humanScore<computerScore){
        return("You lost the battle")
    }
    else{
        return("it was a tie match, Good game");
    }
    
}
function isGameOver(){
    return humanScore=== 5 || computerScore===5;
}

function updateScoreMessage(){
    wonMessage.textContent = roundWinner;
    humanScoreUpdate.textContent = humanScore;
    computerScoreUpdate.textContent = computerScore;     
}

function handleClick(input){
    if(isGameOver()){
        openModal();
    }
    const computerSelection = computerPlay();
    playRound(input,computerSelection);
    // updateChoices(input,computerSelection);
    updateScoreMessage();
    if(isGameOver()){
        console.log('hoe');
        openModal();
    }

}

function openModal(){
    if(humanScore===5){
      finalMessage.textContent = "You Won";
    }
    else{
        finalMessage.textContent = "Computer Won";
    }
    openM.classList.add('active');
}

function closeModal(){
    openM.classList.remove('active');
    resartGame();

}
function resartGame(){
    humanScore = 0;
    computerScore = 0;
    roundWinner = '';
    openM.classList.remove('active');
    updateScoreMessage();
}




