/* Reposição de estoque descentralizada-assincrona 
setTimeout-simular comportamentos assincronos
*/
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

/* sem set - o retorno */
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [1, 2, 3]
/* com setTimeout */
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 1000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
// console.log(numbers); // O retorno é [2, 3]\o console.log é uma função síncrona, ele é executado antes do setTimeout terminar
setTimeout(() => console.log(numbers), 3000); //o retorne [ 2, 3, 1 ], é necessário chamá-lo após 3000 milis. O código continua rodando, mesmo que ela ainda não tenha terminado de executar. o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1.
