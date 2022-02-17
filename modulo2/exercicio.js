const input = require("readline-sync");

//CALCULADORA
var notas = new Array;
var notasNum = new Array;
var soma = 0;

for (let i = 0; i < 5; i++) { 
    notas[i] = input.question(`Insira sua nota ${i+1}:`)
    notasNum.push(parseFloat(notas[i]));
    soma = soma + notasNum[i];
}

media = (soma / 5).toFixed(2);

if (media < 3) {
    console.log(`Você foi reprovado com nota ${media}. Que pena!`)
    
} else if (media > 3 && media < 7) {
    console.log(`Você está na recuperação com nota ${media}.`)  

} else {
    console.log(`Você foi aprovado com nota ${media}`)
}

//CONTADOR DE LETRAS

function contaLetras(){
    var vazios = 0;
    var frase = input.question("Insira uma palavra ou frase:")
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == ' ') {
            vazios = vazios + 1;
        }   
    }
    letras = frase.length - vazios;
    console.log(`A frase inserida possui ${letras} letras.`);
}
contaLetras()

//INVERSOR DE LETRAS
function inverteLetras(){
    var frase = input.question("Insira uma palavra ou frase:")
    var invert = frase.split('').reverse().join('');
    console.log(invert);
}
inverteLetras()