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
 let userOutputImage = document.getElementById('userOutputImage');
 let computerOutputImage = document.getElementById('computerOutputImage');
 let overlay = document.getElementById('overlay');




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
    updateChoices(input,computerSelection);
    console.log(input);
    console.log(computerSelection);
    updateScoreMessage();
    if(isGameOver()){
        openModal();
    }

}

function openModal(){
    if(humanScore===5){
      finalMessage.textContent = "You Won the Match!";
    }
    else{
        finalMessage.textContent = "You Lost,Computer Won!";
    }
    openM.classList.add('active');
    overlay.classList.add('active');

}

function closeModal(){
    openM.classList.remove('active');
    overlay.classList.remove('active');
    resartGame();

}
function resartGame(){
    humanScore = 0;
    computerScore = 0;
    roundWinner = '';
    openM.classList.remove('active');
    userOutputImage.src = "images/1574339.png";
    computerOutputImage.src = "images/1574339.png";
    updateScoreMessage();
}

function updateChoices(input,computerSelection){
    switch(input){
        case 'rock' : userOutputImage.src = "images/rock.webp";
        break;
        case 'paper' : userOutputImage.src = "images/hand.png";
        break;
        case 'scissor' : userOutputImage.src = "images/scissor.webp";
        break;
    }
    switch(computerSelection){
        case 'rock' : computerOutputImage.src = "images/rock.webp";
        break;
        case 'paper' : computerOutputImage.src = "images/hand.png";
        break;
        case 'scissor' : computerOutputImage.src = "images/scissor.webp";
        break;
    }
}



