const fs = require('fs');
const file = './puzzle_data.txt';
const textFileArray = fs.readFileSync(file).toString().split('\r\n');

const gameData = {};

for (let index = 0; index < textFileArray.length; index++) {
    const line = textFileArray[index];
    const gameNumber = index + 1;
    const scoresStart = line.indexOf(":") + 2;
    
    const gamesText = line.substring(scoresStart)
    const gamesArray = gamesText.replaceAll(";", ",");
    const gameScoresArray = gamesArray.split(',');
    gameData[gameNumber] = gameScoresArray

}

let totalCounter = 0;
for (gameNumber in gameData) {
    const game = gameData[gameNumber]
    let gamePossible = true;
    game.forEach(turn => {
        const turnTrim = turn.trim(); 
        const spaceLocation = turnTrim.indexOf(' ');
        const num = turnTrim.slice(0, spaceLocation)

        if (turnTrim.indexOf('red') !== -1){
            if(num > 12) gamePossible = false;
        } else if (turnTrim.indexOf('green') !== -1) {
            if(num > 13) gamePossible = false;
        } else if  (turnTrim.indexOf('blue') !== -1) {
            if(num > 14) gamePossible = false;
        }
    });
    if(gamePossible) {totalCounter += Number(gameNumber)}
}
console.log(totalCounter)

