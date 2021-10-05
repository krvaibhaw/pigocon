'use strict';

// Selecting Elements
const p1 = document.querySelector('.player--0')
const p2 = document.querySelector('.player--1')
const score1 = document.querySelector('#score--0')
const score2 = document.getElementById('score--1')
const curr1 = document.getElementById('current--0')
const curr2 = document.getElementById('current--1')
const dice = document.querySelector('.dice')
const bnew = document.querySelector('.btn--new')
const broll = document.querySelector('.btn--roll')
const bhold = document.querySelector('.btn--hold')


let currscore, activePlayer, tscore, playing

// Starting conditions
const init = function () {
    
    currscore = 0
    activePlayer = 0
    tscore = [0, 0]
    playing = true

    score1.textContent = 0
    score2.textContent = 0
    
    curr1.textContent = 0
    curr1.textContent = 0
    
    dice.classList.add('hidden')

    p1.classList.add('player--active')
    p2.classList.remove('player--active')

    p1.classList.remove('player--winner')
    p2.classList.remove('player--winner')
}

init()


const switchPlayer = function () {
    currscore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = (activePlayer === 0) ? 1 : 0
    p1.classList.toggle('player--active')
    p2.classList.toggle('player--active')
}


// Adding rolling dice functionality
broll.addEventListener('click', function () {

    if (playing) {

        // 1. generating a random dice roll
        let num = Math.trunc(Math.random()*6) + 1

        // 2. Display dice
        dice.classList.remove('hidden')
        dice.src = `/image/dice-${num}.png`

        // 3. Check for roll 1; if true, then switch to next player
        if (num !== 1) {
            currscore += num
            document.getElementById(`current--${activePlayer}`).textContent = currscore
        }
        else {
            switchPlayer()
        }
    }
})


// Adding hold functionality
bhold.addEventListener('click', function () {

    if (playing) {

        // 1. Add current score to active player's total score
        tscore[activePlayer] += currscore
        document.getElementById(`score--${activePlayer}`).textContent = tscore[activePlayer]
        //`score${activePlayer + 1}`.textContent += tscore[activePlayer]   ::  It didn't worked

        // 2. Check if active player's score is >= 100, 
        // If so then finish the game
        if (tscore[activePlayer] >= 101) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            dice.classList.add('hidden')
        }

        else {
            // If not then switch to next player
            switchPlayer()
        }
    }
})


// Adding new game functionality
bnew.addEventListener('click', init )