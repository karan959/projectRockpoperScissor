// function to get computer option
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissor'];
    let compChoice = choice[Math.floor(Math.random() * 3)];
    return compChoice;
}
// function to get the player choice by prompt
function getPlayerChoice(){
    let playerChoice = prompt("choose rock,paper or scissor");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}
// function to compare computer choice and player choice with each other
function round(playerSelection, compSelection){
    if(playerSelection === compSelection)
        return 'its a tie';
    else if(playerSelection == 'rock' && compSelection == 'scissor')
        return 'You won! rock beats scissor';
    else if(playerSelection == 'rock' && compSelection == 'paper')
        return 'You lose! paper beats rock';
    else if(playerSelection == 'paper' && compSelection == 'scissor')
        return 'You lose! scissor beats paper';
    else if(playerSelection == 'paper' && compSelection == 'rock')
        return 'You won! paper beats rock';
    else if(playerSelection == 'scissor' && compSelection == 'rock')
        return 'You lose! rock beats scissor';
    else if(playerSelection == 'scissor' && compSelection == 'paper')
        return 'You won! scissor beats paper';
}
// function where the game is happening
function game(){
    
    let playerScore = 0,
        compScore = 0,
        results = '';

    for(let i=0; i<5; i++)
    {
        let playerSelection = getPlayerChoice(),
            compSelection = getComputerChoice();
        results = round(playerSelection, compSelection);
        if (results.includes('won'))
        {
            playerScore++;
            console.log('player won, computer selected:' + compSelection + ' player score:'+ playerScore + ' & computer score:'+ compScore);

        }
        else if(results.includes('tie')){
            console.log('it is a tie, player score:'+ playerScore + ' & computer score:'+ compScore);
        }
        else{
            compScore++;
            console.log('computer won, computer selected:' + compSelection + ' player score:'+ playerScore + ' & computer score:'+ compScore);
        }
    }
    if (playerScore>compScore)
        alert('player won the game');
    else if(playerScore===compScore)
        alert('it is a tie');
    else
        alert('computer won the game');
}
