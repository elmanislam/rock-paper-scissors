/* Global variables for counting wins */
let playerWinCount = 0, computerWinCount = 0;
let isGameDone = false;


function getPlayerSelection() {
// ask user to type "rock" "paper" or "scissors" 
// trim input and set to lowercase
  let playerSelection = prompt("choose rock paper or scissors").toLowerCase().trim();

  while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")) {
  //if input is not one of the 3 choices ask again

    alert("your choice was not recognized");
    playerSelection = prompt("choose rock paper or scissors").toLowerCase().trim();
  }

//return the input
  return playerSelection;
} 

function getComputerSelection() {

  //randomly select a number between zero and two
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) return "rock";
  else if (choice == 1) return "paper";
  else if (choice == 2) return "scissors";
  else {
    console.log("ERROR: unrecognized computer choice");
  }

}

function playRound(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerSelection();
  const result = document.querySelector('#result');

  let message;


  if (playerSelection == "rock")
  {
    message = (computerSelection == "paper") ? "You lose! paper beats rock" :
    (computerSelection == "scissors") ? "You win! rock beats scissors" :
    "Tie! You both picked rock";

  }

  if (playerSelection == "paper")
  {
    message = (computerSelection == "scissors") ? "You lose! scissors beats paper" :
    (computerSelection == "rock") ? "You win! paper beats rock" :
    "Tie! You both picked paper";
    
  }
  if (playerSelection == "scissors")
  {
    message = (computerSelection == "rock") ? "You lose! rock beats scissors" :
    (computerSelection == "paper") ? "You win! scissors beats paper" :
    "Tie! You both picked scissors";
    
  }
  console.log(message);
  result.textContent = message;

  if (!isGameDone)
  {
    if ((playerWinCount < 5) && (computerWinCount < 5))
    {
      updateScore(message);
    }

    if (playerWinCount == 5)
    {
      declareWinner("PLAYER");
      isGameDone = true;
    }

    else if (computerWinCount == 5)
    {
      declareWinner("CPU");
      isGameDone = true;
    }

    console.log(`${playerWinCount}, ${computerWinCount}`);

  }

  return message;

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', playRound);
});

function updateScore(roundResultMessage) {

  const score = document.querySelector('#score');

  if (roundResultMessage.substring(4, 7).toLowerCase() == "win")
  {
    playerWinCount++;
  }

  else if (roundResultMessage.substring(4, 8).toLowerCase() == "lose")
  {
    computerWinCount++;
  }

  else return;
  score.textContent = `PLAYER ${playerWinCount} - - - - - ${computerWinCount} CPU`;

}

function declareWinner(winnerName) {
  const score = document.querySelector('#score');
  score.textContent = score.textContent + `, WINNER: ${winnerName}`;

}



function game()
{
  let playerSelection, computerSelection;
  let result; //store result of playRound
  let playerWinCount = 0, computerWinCount = 0;

    
  for (let i = 0; i < 5; i++)
  {



    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    console.log(`You picked ${playerSelection}\nThe Computer picked ${computerSelection}`)

    result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.substring(4, 7).toLowerCase() == "win")
    {
      playerWinCount++;
    }

    else if (result.substring(4, 8).toLowerCase() == "lose")
    {
      computerWinCount++;
    }
  
    console.log(`SCORE: player ${playerWinCount}, computer ${computerWinCount}`);

  } 

  if (playerWinCount > computerWinCount)
  {
    console.log("Congratulations, you won against the computer!");
  }
  
  else if (playerWinCount < computerWinCount)
  {
    console.log("The computer beat you in rock paper scissors");
  }
  else if (playerWinCount == computerWinCount)
  {
    console.log("The game ends in a tie!");
  }

}


