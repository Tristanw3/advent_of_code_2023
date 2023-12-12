const fs = require('fs');

const file = './puzzle_data.txt';

const textFileArray = fs.readFileSync(file).toString().split('\r\n');

let firstNumbers = [];
let secondNumbers = [];

for (const line of textFileArray) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = line.split('');
    for(const character of letters) {
        if(numbers.includes(character)) {
            firstNumbers.push(character);
            break
        }
    }

    const lettersBackwards = letters.reverse();
    for(const character of lettersBackwards) {
        if(numbers.includes(character)) {
            secondNumbers.push(character);
            break
        }
    }
}
var total = firstNumbers.reduce(function(previous, current, index) {
    var numberValue = Number(current + secondNumbers[index])
    return previous + numberValue
}, 0)

console.log(total)


