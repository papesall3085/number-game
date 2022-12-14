'use strict';

// define the secret number and the score

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


// add event listener on click and rules
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no imput
  if (!guess) {
    // document.querySelector('.message').textContent = 'βοΈ No Number!';
    displayMessage('βοΈ No Number!')

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('π Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  
    //  when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =  guess > secretNumber ? 'πTo high!' : 'πTo low!';
      displayMessage(guess > secretNumber ? 'πTo high!' : 'πTo low!');
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'π₯ You lost the game!';
      displayMessage('π₯ You lost the game!');
      document.querySelector('.score').textContent = 0;
    };
  
  //   // Whne guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'πTo high!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   };

  //   // When guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'πTo low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 5) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

});


