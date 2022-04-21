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
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return("It's a Tie");
    }
    else if(playerSelection==="rock" && computerSelection==="scissor"){
        return("You WON! Rock breaks Scissor");
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        return("You lose :( paper consumes rock");
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return("You WON! Paper consumes rock");
    }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        return("You lose :( scissor cuts paper");
    }
    else if(playerSelection==="scissor" && computerSelection==="paper"){
        return("You WON! scissor cuts paper");
    }
    else if(playerSelection==="scissor" && computerSelection==="rock"){
        return("You lose :( rock breaks scissor");
    }
    else {
        return(-1);
    }
}
function game(playerSelectio){
    let humanScore=0;
    let computerScore=0;
    let whoWon;
    for(let i=1;i<=5;i++){
        console.log(`round ${i}`);
        let userInput = prompt('rock/paper/scissor');
        let computerInput=computerPlay();
        console.log(`computer Input ${computerInput}`);
        whoWon=playRound(userInput,computerInput);
        console.log(whoWon);
        if(whoWon.includes("WON!")){
            humanScore+=1;
        }
        else{
            computerScore+=1;
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
const playerSelection="paper"
console.log(game());