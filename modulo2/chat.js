const input = require("readline-sync");

console.log("Seja bem vinde! Vamos fazer o seu login");

const idade = input.question("Qual a sua idade?");
const genero = input.question("Qual o seu genero? (F/M/NB)");

if(idade >= 16 && idade < 18){
    console.log("Pode entrar, mas não pode beber!")
} else if (idade >= 18){
    console.log("Pode entra e pode beber!")
} else{
    console.log("Entrada não permitida")
}

if (genero == "F" || genero == "M") {
    const generoObs = input.question("Voce e cis ou trans? (C/T)")
    if (generoObs == "T" && genero == "F") {
        console.log("Aqui você está protegida! Temos uma política forte e presente contra LGBTQIA+ fobia e contra o Machismo!")       
    } else if (generoObs == "C" && genero == "F"){
        console.log("Aqui você está protegida! Contamos com uma política forte e presente contra o Machismo!")
    } else if (generoObs == "T" && genero == "M"){
        console.log("Aqui você está protegido! Temos uma política forte e presente contra LGBTQIA+ fobia!")
    }else if (generoObs == "C" && genero == "M"){
        console.log("Obrigada pelas informações e aproveite!")
    }
} else {
    console.log("Aqui você está protegido! Temos uma política forte e presente contra LGBTQIA+ fobia!")
}

