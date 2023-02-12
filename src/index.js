const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' '    :  ' ',
};

function decode(expr) {
    // write your solution here
    let array = [];
    let morse ="";
    let matrix =[];

    for(let i = 0 ; i < expr.length; i += 10)
    {
        array.push(expr.slice(i, i + 10));
    }

    for(let i = 0; i < array.length; i++)
    {
        morse = '';
        if(array[i] == '**********') 
        {
            morse += " ";
        }
        else
        {
            for(let j = 0; j < 11; j += 2)
            {
                if (array[i][j] == '1' && array[i][j+1] == '0')
                {
                    morse += ".";
                }
                else if (array[i][j] == '1' && array[i][j+1] == '1')
                {
                    morse += "-";
                }
            }
        }
        matrix.push(morse);
    }
    morse = '';
    for(let i = 0; i < matrix.length; i++)
    {
        morse += MORSE_TABLE[matrix[i]];
    }
    return morse;
}

module.exports = {
    decode
}