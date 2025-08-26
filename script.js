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
let playing = true;

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

function resetGame() {
  playersFinalScores[0] = 0;
  playersFinalScores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  diceImageElement.classList.add('hidden');
  rollButtonElement.classList.remove('hidden');
  holdButtonElement.classList.remove('hidden');
}

rollButtonElement.addEventListener('click', function () {
  if (playing) {
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
  }
});

holdButtonElement.addEventListener('click', function () {
  if (playing) {
    playersFinalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playersFinalScores[activePlayer];

    if (playersFinalScores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      rollButtonElement.classList.add('hidden');
      holdButtonElement.classList.add('hidden');
      diceImageElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newGameButtonElement.addEventListener('click', resetGame);
