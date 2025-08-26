'use strict';
//Getting buttons
const newGameButtonElement = document.querySelector('.btn--new');
const rollButtonElement = document.querySelector('.btn--roll');
const holdButtonElement = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const diceImageElement = document.querySelector('.dice');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;

let currentScore = 0;
function selectDiceImage(diceNumber) {
  return `dice-${diceNumber}.png`;
}

rollButtonElement.addEventListener('click', function () {
  const activePlayer = document.querySelector('.player.player--active');
  const activePlayerScore = activePlayer.querySelector('.current-score');
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImageElement.src = selectDiceImage(dice);
  diceImageElement.classList.remove('hidden');

  if (dice === 1) {
    currentScore = 0;
    activePlayerScore.textContent = currentScore;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  } else {
    currentScore += dice;
    activePlayerScore.textContent = currentScore;
  }
});
