//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas.
// JS é uma linguagem de tipagem dinâmica ou fraca, porque ela não bloqueia quando mudamos o tipo da variável, como no exemplo do 'let salario'.
let num1 = 5; //Number literal
let num2 = 10; 
let num3 = '15';

let nome = "Sarah Lana Reis"; //string literal
let isValid = true; // boolean
let idade; //undefined=valores indefinido
idade = null; //nula=para o user poder preencher

let salario = 1000;
salario = 1200;
salario = true; //boolean ou é '1'false ou é '0'true

// typeof mostra qual o tipo da variável  

//Soma
let sum = num1 + num2; // 5 + 10
console.log(sum); //imprime o resultado

//Subtração
let subtraction = num1 - num2; // 5 - 10
console.log(subtraction); //imprime o resultado

//Divisão
let division = num1 / num2; // 5 / 10
console.log(division); //imprime o resultado

//Multiplicação
let multiplication = num1 * num2; // 5 * 10
console.log(multiplication); //imprime o resultado

// Como saber se o nº é par?
// % -> operador de resto. Se um numero é divisivel pelo outro, se o resto for igual a '0' ele é par se ñ é impar.
((num1 + num2) % 2) === 0;
((5 + 10) % 2) === 0;
15 % 2 === 0;

// Operador de relação 
let comparation = num1 > num2; //boolean-> sendo num1=5 e num2=10
console.log(comparation);