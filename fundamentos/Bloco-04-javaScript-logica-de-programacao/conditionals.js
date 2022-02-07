// Exemplo: Permissão para dirigir-submer a idade a um teste logico.

// if - se
// else - senão
// age maior ou igual a 18

// let age = '18';

// if (age >= 18){
//     console.log('Pode dirigir!');
// } else if (age === 18){
//     console.log('Dirija com cuidado, carteira provisória');
// }
//  else {
//     console.log('Não pode dirigir!');
// }

// Course-Nota de um desafio técnico.
//Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!
//Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//Se a nota for menor que 60, imprima "Você foi reprovada(o)"


const nota = 59;//Altere o valor da nota para verificar se as condições que você implementou funcionam;

if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
} else if(nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera");
} else{
    console.log("Você foi reprovada(o)");
}

 
