/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// Para fade-in face-out: https://fvsch.com/transition-fade//test5.html

var scores, roundScore, activePlayer, isGamePlaying;

initializaGame();

document.querySelector('.btn-roll').addEventListener('click', playTurn); 
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', initializaGame);


function playTurn() {
    if (isGamePlaying) {
        var rolledNumbers = rollDice();
        if ((rolledNumbers[0] === 6) && (rolledNumbers[1] === 6)) {
            loosesEntireScore();
            alternatePlayer();
        } else if ((rolledNumbers[0] === 1) || (rolledNumbers[1] === 1)) {
            alternatePlayer();
        } else {
            updateRoundScore(rolledNumbers);
        }
    }    
}


function hold() {
    if (isGamePlaying) {
        updatePlayerScore();
        
        var finalScore = document.getElementById('final-score').value;
        
        if (!finalScore) finalScore = 100;
        
        if (scores[activePlayer] >= finalScore) {
            winner();
        } else {
            alternatePlayer();
        }
    }    
}


function rollDice() {
    var rolledNumbers = [];
    rolledNumbers[0] = Math.floor(Math.random() * 6) + 1;
    rolledNumbers[1] = Math.floor(Math.random() * 6) + 1;
    showDice(rolledNumbers);
    return rolledNumbers;
}


function showDice(numbers) {
    document.getElementById('dice-' + activePlayer).style.visibility = 'visible';
    var die0DOM = document.getElementById('die-p' + activePlayer + '-0');
    var die1DOM = document.getElementById('die-p' + activePlayer + '-1');
    die0DOM.src = 'dice-' + numbers[0] + '.png';
    die1DOM.src = 'dice-' + numbers[1] + '.png';
}


function loosesEntireScore() {
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
}


function alternatePlayer() {
    roundScore = 0;
    previousRoll = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}


function updateRoundScore(numbers) {
    roundScore = roundScore + numbers[0] + numbers[1];
    document.getElementById('current-' + activePlayer).textContent = roundScore;
}


function updatePlayerScore() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
}


function winner() {
    document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    isGamePlaying = false;
}


function initializaGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;
    previousRoll = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.getElementById('dice-0').style.visibility = 'hidden';
    document.getElementById('dice-1').style.visibility = 'hidden';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
}



