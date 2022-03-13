'use strict';

// SELECTING ELEMENTS
const player0El = document.querySelector('.player--0'); //selecting player in html code so we can change players turn, manipulate when player wins
//and when starting a new game
const player1El = document.querySelector('.player--1'); //selecting player in html code
const score0El = document.querySelector('#score--0'); //main score that we want to save
const score1El = document.getElementById('score--1'); //main score that we want to save
const current0El = document.getElementById('current--0'); //current score we see while we play
const current1El = document.getElementById('current--1'); //current score we see while we play
const diceEl = document.querySelector('.dice'); //to set visibilty of dice while we play
const btnNew = document.querySelector('.btn--new'); //connect button new with html code to start new game
const btnRoll = document.querySelector('.btn--roll'); //connect button roll for rolling the dice
const btnHold = document.querySelector('.btn--hold'); //connect button hold for holding current score and save it for main score

//

//STARTING CONDITIONS
score0El.textContent = 0; //change main score to 0 at start of the match
score1El.textContent = 0;
diceEl.classList.add('hidden'); //on start we add class hidden so we dont see dice at start

let scores = [0, 0]; //2 score koji smo vec sacuvali

let currentScore = 0; //score koji cemo da cuvamo
let currentHighScore = 0;
let activePlayer = 0; //koji od 2 igraca igra
let playing = true; //da li smo dobili 100

//funkcija za menjanje igraca u toku igre
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //Pre promene igraca vracamo trenutni score na 0
  activePlayer = activePlayer === 0 ? 1 : 0; //change player, we ask if it is player 0 we want new active player 1, if not we want new player to be 0
  currentScore = 0; //
  player0El.classList.toggle('player--active'); //mchange active player with toggle
  player1El.classList.toggle('player--active');
}

init();

function init() {
  scores = [0, 0]; //
  currentScore = 0; //score koji cemo da cuvamo
  activePlayer = 0; //koji od 2 igraca igra
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

btnNew.addEventListener('click', init);

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
