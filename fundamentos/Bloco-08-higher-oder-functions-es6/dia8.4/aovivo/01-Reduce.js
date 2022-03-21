const numbers = [2, 3, 4, 6, 7, 12, 24]; //meu array

// Cold Call - Somatório com FOR
// let accumulator = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   accumulator =+ numbers[i];
  //OU: accumulator = accumulator + numbers[i];
// }
// console.log(accumulator);


// Somatorio com o Reduce

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
  //sem tem que retornar o accumulator que foi passado no 1º parametro.
  //valor atual, tem que passar no 2ºparametro
  //
  console.log(`${accumulator} ${currentValue}`);
  return accumulator + currentValue;
}, 0);