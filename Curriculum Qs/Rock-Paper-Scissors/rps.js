let choices = ['rock', 'paper', 'scissors'];
let random = Math.floor(Math.random()*choices.length);
let randomChoice = choices[random];
// let restart;

function question () {
  let userGuess = prompt('Rock, Paper, or Scissors?');
  console.log(userGuess);
  if(userGuess !== null) {
    if(userGuess.toLowerCase() === randomChoice) {
      alert("IT'S A TIE");
      question();
    } else if ((userGuess === 'rock' && randomChoice === 'paper') || (userGuess === 'paper' && randomChoice === 'scissors') || (userGuess === 'scissors' && randomChoice === 'rock')) {
      alert('YOU LOSE. Computer picked ' + randomChoice);
      question();
    } else if ((userGuess === 'rock' && randomChoice === 'scissors') || (userGuess === 'paper' && randomChoice === 'rock') || (userGuess === 'scissors' && randomChoice === 'paper')) {
      alert('YOU WIN WOOO!!');
      newGame();
      // if(restart === 'YES' || 'yes') {
      //   question();
      // } else {
      //   alert('Thank you for playing! :)')
      // }
    } else {
      alert('Invalid guess');
      question();
    }
  }
}

function newGame () {
  let restart = prompt('Want to play a new game?');
  if(restart === 'YES' || 'yes') {
    question();
  }
    alert('Thank you for playing! :)')
  
}
