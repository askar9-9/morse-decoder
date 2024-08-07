const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let words = expr.split('**********');
    
    let decodedWords = words.map(word => {
        let characters = [];
        for (let i = 0; i < word.length; i += 10) {
            let symbol = word.slice(i, i + 10);
            let morseCode = '';
            for (let j = 0; j < symbol.length; j += 2) {
                let pair = symbol.slice(j, j + 2);
                if (pair === '10') morseCode += '.';
                if (pair === '11') morseCode += '-';
            }
            characters.push(MORSE_TABLE[morseCode]);
        }
        return characters.join('');
    });
    return decodedWords.join(' ');
}

module.exports = {
    decode
}