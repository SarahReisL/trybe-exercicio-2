/* Atribuir funcoes à variáveis */
function sum (number1, number2) {
  return number1 + number2;
}
/* variavel chamando a funcao sum*/
const sumVariable = sum;

console.log(sumVariable); //[Function: sum]

// exemplo com arow functions
const sum = (number1, number2) => {
  return number1 + number2;
};

/* Passar funções como argumento para outras funções: */
const sayHello = () => {
  return ('hello');
}
const printGreeting = (callback) => {
  console.log(callback());
}

printGreeting(sayHello);

/* Para retornar uma função de outra função */
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

