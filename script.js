'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random()*20) + 1; 
let score = 20;
let highSocore = 0;


const button = document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
// when no input
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No Number!';
        // when he wins
    }else if(guess === SecretNumber){
        document.querySelector('.message').textContent = '👍 Correect Number!';
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highSocore){
            highSocore = score;
            document.querySelector('.highscore').textContent = highSocore;
        }
        document.querySelector('.check').disabled = true;

        // guess too low
    }else if(guess > SecretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '😒 Too higher';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤦‍♂️🤦‍♀️😢 lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        // guess too high
    }else if(guess < SecretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '😁 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤦‍♂️🤦‍♀️😢 lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    SecretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.check').disabled = false;
});


