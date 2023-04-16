'use strict'

document.querySelector('.between').textContent;
document.querySelector('.again').textContent;
document.querySelector('.number').textContent;
document.querySelector('.guess').value;
document.querySelector('.check').value;
document.querySelector('.message').textContent;
document.querySelector('.highscore').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	if(!guess){
		document.querySelector('.message').textContent = 'No number!';
	}else if (guess === secretNumber){
		displayMessage ('Correct number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').style.fontSize = '10rem';

		if (score > highScore){
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
		
	}else if(guess > secretNumber){
		if (score > 1){
			displayMessage ('Too High!')
			score --;
			document.querySelector('.score').textContent = score;
		}else{
			document.querySelector('.message').textContent = 'You lost the game!'
		}
	}else if(guess < secretNumber){
		if (score > 1){
			displayMessage('Too Low!');
			score --;
			document.querySelector('.score').textContent = score;
		}else{
			displayMessage('You lost the game!');
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	// highScore = 0;

	displayMessage ('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').style.fontSize = '6rem';
});