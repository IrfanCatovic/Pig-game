'use strict';

// SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  //1.Genereting a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check rolled number
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //Change later
  }
  //If it is 1 change player
  else {
  }
});
