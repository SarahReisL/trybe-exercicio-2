//Array.reduce para manipular e construir arrays
//É uma HOF que recebe uma função por argumento e executa uma função para cada item do array.
/* Funçao que soma todos os valores de um array. */
const numbers = [32, 15, 3, 2, -5, 56, 10];

/*-apenas com o FOR: precisamos de uma var. para acumular o valor de cda iteração do for e de colocar um valor inicial para começar o loop.
*/
let sumNumbers = 0;
// A variável 'acumula', a cadda iteraçao do FOR, o resultado da operção feita lá!
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers +=numbers[index]  
}
console.log(sumNumbers);

/* usando .reduce: a funcao recebe 2 param., o 'result' como o accum. e o 'number' como o elemento do array de cada iteraçao. O retorno é salvo no accum.*/
const sumNumbers = numbers.reduce( (result, number) => result + number); 
// O parâmentro 'result' é o acumulador. Ele recebe, do 'reduce', o retorno da função a cda itera
console.log(sumNumbers);
// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers);
