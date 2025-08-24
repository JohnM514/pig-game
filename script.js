'use strict';
const rollButtonElement = document.querySelector('.btn--roll');
const diceImageElement = document.querySelector('.dice');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const currentScoreElement0 = document.querySelector('#current--0');
const currentScoreElement1 = document.querySelector('#current--1');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;

function selectDiceImage(diceNumber) {
  switch (diceNumber) {
    case 1:
      return 'dice-1.png';
    case 2:
      return 'dice-2.png';
    case 3:
      return 'dice-3.png';
    case 4:
      return 'dice-4.png';
    case 5:
      return 'dice-5.png';
    case 6:
      return 'dice-6.png';
  }
}

rollButtonElement.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceImageElement.src = selectDiceImage(dice);
  diceImageElement.classList.remove('hidden');
});
