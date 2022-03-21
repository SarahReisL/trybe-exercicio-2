const numbers = [2, 3, 4, 6, 7, 12, 24]; //meu array

// 1-Somar os núm. pares do array com reduce(que entrega um valor)
// Como eu sei que um núm. é par?
//number % 2 === 0
//Eu poderia separa os núims. pares primeiro?
//filtrando apenas numeros pares
//tradicional
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
})
//refatorada
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('filter:', evenNumbers);


// Consigo usar reduce? O que o reduce retorna?
const evenNumersSum = evenNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue);
//refatorado as duas funcoes, a de entrada e a de reducao
const evenNumersSum = numbers
.filter((number) => number % 2 === 0)
.reduce( (accumulator, currentValue) => accumulator + currentValue);

console.log(evenNumersSum);