

 function computerPlay() {
    const names = ['rock', 'paper', 'scissors']
    return names[Math.floor(Math.random() * names.length)]

 };
 // The Rock, Paper, Scissors variables are chosen at random


 let playerScore = 0;
 let computerScore = 0;

 function chooseOne(playerSelection, computerSelection) {
      const lowerCase = playerSelection.toLowerCase()
      if (lowerCase === 'scissors' && computerSelection === 'paper' ) {
         playerScore++;
         return "You Win! Scissors beats paper!";
      } else if(lowerCase === 'paper' && computerSelection === 'scissors') {
         computerScore++;
         return "You Lose! Scissors beats paper"; 
      } else if (lowerCase === 'paper' && computerSelection === 'rock') {
            playerScore++;
         return "You Win! Paper beats rock!"; 
      } else if (lowerCase === 'rock' && computerSelection === "paper"){
         computerScore++;
         return "You Lose! Paper beats rock! ";
      }  else {
      return "tie";
      }    
 };
         // made the rules

 function game() {
   for (let i = 0; i < 5; i += 1) {   // The computer is incrementing to 5 loops - 5 rounds
      const playerSelection = prompt("Enter your choice") // The player is asked to enter their chosen string 
      const computerSelection = computerPlay(); // The computer notices this and runs the computerPlay function within this one
      const result = chooseOne(playerSelection, computerSelection); // the chooseOne function runs with this function. it matches up w/ the entered string
      console.log(result); // this is the final instruction, the console will display chooseOne function

      console.log(`Your score is: ${playerScore}`);
      console.log(`The computer's score is: ${computerScore}`);

      /*
         playerScore is related to playerSelection, computerScore is related to computerSelection. 
         They need to be linked.
         They add up each player's score with ++, like i++
         
            console.log(playerScore++);
            console.log(playerScore);
            console.log(computerScore++)
            console.log(computerScore);
      */
   }

}

  

  

    

