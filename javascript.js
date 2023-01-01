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

function playRound(playerSelection, computerSelection) {

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

  return message;

}

function game()
{
  let playerSelection, computerSelection;
  let result; //store result of playRound
  let playerWinCount = 0, computerWinCount = 0;

  for (let i = 0; i < 5; i++)
  {
    console.log(`ROUND ${i + 1}`);


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

game();

