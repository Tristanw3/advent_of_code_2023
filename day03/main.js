const fs = require('fs');
const file = './puzzle_data.txt';
const text = fs.readFileSync(file).toString()
const cleanedText = text.replaceAll('\r', '').replaceAll('\n', '');

// console.log(text.length)
console.log(cleanedText.length)
// console.log(140*140)

// console.log(cleanedText[137])

let currentNumber;

for (let index = 0; index < text.length; index++) {
    const char = text[index];
    if (!isNaN(char)) {
        currentNum += char;
    }
}

