'use strict';
//Getting buttons
const newGameButtonElement = document.querySelector('.btn--new');
const rollButtonElement = document.querySelector('.btn--roll');
const holdButtonElement = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//Get dice image element
const diceImageElement = document.querySelector('.dice');

const playersFinalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Function that returns the correct dice image
function selectDiceImage(diceNumber) {
  return `dice-${diceNumber}.png`;
}

function switchPlayer() {
  //Reset current score
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //Toggle player--active class
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
  //Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;
}

rollButtonElement.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImageElement.src = selectDiceImage(dice);
  diceImageElement.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdButtonElement.addEventListener('click', function () {
  playersFinalScores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    playersFinalScores[activePlayer];

  switchPlayer();
});
