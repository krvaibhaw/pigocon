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
