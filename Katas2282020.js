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

let index = [-1];
let letras = 'Pig latin is cool' + ' Hello world !';
let trying = [1,2,3,"",4];
let removing = trying.splice(trying.indexOf(""),1);
console.log(removing);
console.log(trying);
function letArran (str) {
    function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
    }
    let index = [];
    let arrOfStr = str.split('');
    let strTT = arrOfStr.indexOf(' ');
    while (strTT != -1){
        if(isCharacterALetter(arrOfStr[strTT-1])) {index.push(strTT)};
        strTT = arrOfStr.indexOf( ' ', strTT + 1);
    }
    let firstLetter = [`${arrOfStr[0]}ay`,...index.map(x => isCharacterALetter(arrOfStr[x +1 ]) ? `${arrOfStr[x + 1]}ay` : index.splice((index.indexOf(x)),1) )];
    let test =
    console.log(firstLetter);
    console.log(index);
}

