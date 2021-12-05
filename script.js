'use strict';

let SecretNumber = Math.trunc(Math.random()*20) + 1; 
let score = 20;
let highSocore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}

const button = document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
// when no input
    if(!guess){
        displayMessage('🚫 No Number!');
        // when he wins
    }else if(guess === SecretNumber){
        displayMessage( '👍 Correect Number!');
        displayNumber(SecretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highSocore){
            highSocore = score;
            document.querySelector('.highscore').textContent = highSocore;
        }
        document.querySelector('.check').disabled = true;

        // guess too low
    }else if(guess !== SecretNumber){
        if(score > 1){
            displayMessage( guess > SecretNumber ? '😒 Too higher':  '😁 Too low');
            score--;
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('🤦‍♂️🤦‍♀️😢 lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 
});

document.querySelector('.again').addEventListener('click', function(){
    SecretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score = 20;
    displayNumber('?');
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.check').disabled = false;
});


