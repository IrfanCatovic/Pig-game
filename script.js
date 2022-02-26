'use strict';

// SELECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0]; //2 score koji smo vec sacuvali
let currentScore = 0; //score koji cemo da cuvamo
let activePlayer = 0; //koji od 2 igraca igra
let playing = true; //da li smo dobili 100

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //Pre promene igraca vracamo trenutni score na 0
  activePlayer = activePlayer === 0 ? 1 : 0; //change player, we ask if it is player 0 we want new active player 1, if not we want new player to be 0
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to score of active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check score if it is >= 100;
    if (scores[activePlayer] >= 15) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
  //switch to the next player
});

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Genereting a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check rolled number
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //If it is 1 change player
    else {
      switchPlayer();
    }
  }
});
