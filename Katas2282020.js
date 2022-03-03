let letras = 'AAAABBBCCDAABBB';

let arrayLetras = letras.split('');
let tablaDeVerdad = arrayLetras.includes("A");


var uniqueInOrder=function(iterable){
    let arrayLetras = iterable.split('');
    let result = [];
    for(let i =0; i < arrayLetras.length; i++) {
        if(arrayLetras.includes(arrayLetras[i])){
            let result = [...arrayLetras[i]];
            console.log(result);
        }
    }
    
}

console.log(uniqueInOrder(letras));

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

let letras = 'Pig latin is cool' + ' Hello world !';
let splitWords = letras.split(' ').map(x => x.split(''));
console.log(splitWords);
if(isCharacterALetter(splitWords[0])) {
    let result = (splitWords[0][0] = splitWords[0][splitWords[0].length - 1] + splitWords[0].slice(1, splitWords[0].length - 1) + splitWords[0][0] + 'ay');
    console.log(result);
}


let letras = 'Pig latin is cool' + ' Hello world !';
function pigIt (str) {
    let result = [];
    function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
    }
    let splitWords = str.split(' ').map(x => x.split(''));
    for(let i =0; i < splitWords.length; i++) {
        if(isCharacterALetter(splitWords[i])) {
            let word = `${splitWords[i].slice(1).reduce((x , y) => x + y )}${splitWords[i][0]}ay`;
            result.push(word);
        }else {
            result.push(splitWords[i].reduce((x, y)=> x + y));
        }
    }
    return result.reduce((x , y) => x + ' ' + y);
}
console.log(pigIt(letras));
