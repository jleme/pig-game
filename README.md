# pig-game

Pig is a dice rolling game: https://en.wikipedia.org/wiki/Pig_(dice_game)

The purpose of this project was to learn Javascript. I developed this project in 2021, but didn't go any further in my studies than this simple game.

This game is a little different from the Wikipedia's description. The Gameplay is:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- If the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
- The first player to reach 100 points or more on GLOBAL score wins the game

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-6, after which she chooses to hold, and adds her turn total of 23 points to her score. 

