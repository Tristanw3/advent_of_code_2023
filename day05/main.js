const fs = require('fs');
const file = './puzzle_data.txt';
const text = fs.readFileSync(file).toString()
const cleanedText = text.replaceAll('\r', '').replaceAll('\n', '');