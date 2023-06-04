const rock = document.querySelector(".rock");
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let roundWinner = document.createElement('h3'); 
const container = document.querySelector('h3');
let playerWin = 0;
let compWin = 0;
let compChoice = '',
    playerChoice = '';


function getComputerChoice(){
    let choice = ['rock','paper','scissor'];
    compChoice = choice[Math.floor(Math.random()*3)];
    
}

function restart(){
    playerChoice = '';
    compChoice = '';
    playerWin = 0;
    compWin = 0;
    container.removeChild(roundWinner);
}

function round(playerSelection, compSelection){
    if(playerSelection === compSelection)
        roundWinner.textContent ='its a tie Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    else if(playerSelection == 'rock' && compSelection == 'scissor')
    {   
        playerWin++;
        roundWinner.textContent ='You won! Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    else if(playerSelection == 'rock' && compSelection == 'paper')
    {
        compWin++
        roundWinner.textContent ='You lose! Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    else if(playerSelection == 'paper' && compSelection == 'scissor')
    {
        compWin++;
        roundWinner.textContent ='You lose!  Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    else if(playerSelection == 'paper' && compSelection == 'rock')
    {
        playerWin++;
        roundWinner.textContent ='You won! Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    else if(playerSelection == 'scissor' && compSelection == 'rock')
    {
        compWin++;
        roundWinner.textContent ='You lose! Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    else if(playerSelection == 'scissor' && compSelection == 'paper')
    {
        playerWin++;
        roundWinner.textContent ='You won! Computer Choice:' + compChoice + ' Computer Wins: '+ compWin + ' player Wins: ' + playerWin;
    }
    container.appendChild(roundWinner);
    
}

function game(){
        getComputerChoice();
        console.log(playerChoice);
        console.log(compChoice);
        round(playerChoice, compChoice);
        
    if (playerWin === 5)
    {
        alert('You won the game, well played');
        restart();
    }
    else if(compWin === 5)
    {
        alert('Computer won the game, better luck next time!') ;
        restart();
    }
}

rock.addEventListener('click',() =>{
    playerChoice = 'rock';
    console.log(playerChoice);
    game();

});

paper.addEventListener('click',() =>{
    playerChoice = 'paper';
    game();

});

scissor.addEventListener('click',() =>{
    playerChoice = 'scissor';
    game();

});

