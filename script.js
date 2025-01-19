'use strict';
var secretNumber = Math.round(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent =
      '🚫 PLEASE ENTER A NUMBER!!!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      " 🎉 HURRAY...YOU'VE WON!!!🎉";
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    if (
      guessNumber === secretNumber &&
      document.querySelector('.score').textContent >
        document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent = Number(
        document.querySelector('.score').textContent
      );
    }
  } else if (guessNumber !== secretNumber) {
    if (guessNumber > secretNumber) {
      document.querySelector('.message').textContent = ' 📈 TOO HIGH!!!';
    } else if (guessNumber < secretNumber) {
      document.querySelector('.message').textContent = ' 📉 TOO LOW!!!';
    }
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
    if (Number(document.querySelector('.score').textContent) === 0) {
      document.querySelector('.message').textContent = ' ❌ Game Over ❌';
      document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)';
      document.querySelector('.check').addEventListener('click', reset);
    }
  }
});
document.querySelector('.again').addEventListener('click', reset);
function reset() {
  document.querySelector('.score').textContent = Number(20);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  if (
    guessNumber === secretNumber &&
    document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
  ) {
    document.querySelector('.highscore').textContent = Number(
      document.querySelector('.score').textContent
    );
  }
}
