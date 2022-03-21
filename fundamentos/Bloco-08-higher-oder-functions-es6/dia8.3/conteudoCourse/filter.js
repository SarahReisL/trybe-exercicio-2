/* FILTER é igual o FOR- filtra alguma condiçao de um array, no caso abaixo filta os num. pares de um array */
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);
console.log(isEven); //[30, 22]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven); // [30, 22]

/* Permição para dirigir usando FILTER */
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];
const verifyAgeDrive = (arrayOfPeople) => (arrayOfPeople.filter((callback) => (callback.age > 18)));
console.log(verifyAgeDrive(objPeople));

/* Removr item do array com FILTER*/
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
const newListStudants = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudants); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]


/*AO VIVO*/
//na mão pra numeros impares:
const numbers = [1, 2, 3, 4, 5];
//sem HOF e sem filter:
const filtrarNumerosImparesComFor = (array) => {
  const numImpares = [];
  for (let index = 0; index < array.length; index++) {
    console.log('teste');
    if (array[index] % 2 === 1) {
      numImpares.push(array[index])
    }
  }
  return numImpares;
}
console.log(filtrarNumerosImparesComFor(numbers));

//Com FILTER:
//com HOF-arrow function
const filtrarComFilter = (array) => {
  array.filter((cadaItemDoArray) => cadaItemDoArray % 2 ===1)
}
console.log(cadaItemDoArray);

//function comum
function filtrar (array) {
  const resultado = array.filter( (item) => item % 2 === 1 );
  return resultado;
}
console.log('Filtrado com filter:', filtrarComFilter(numbers) );


/*FILTER COM OBJS*/

const users = [
  {name: 'Homer', lastName: 'Simpsons', isDriver: true},
  {name: 'Marge', lastName: 'Simpsons', isDriver: true},
  {name: 'Homer', lastName: 'Simpsons', isDriver: false},

]

const filtrerQuemDirigeComFor = (array) => {
  
  const naoDirige = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index].isDriver === false) {
      naoDirige.push(array[index])
    }
  }
}
const resultado = filtrerQuemDirigeComFor(users);
console.log(resultado);

function filtrarElementos(elemento) {
  const resultado = elemento.isDriver === false;
  return resultado;
};
users.filter(filtrarElementos);

//em uma linha
const users = [
  {name: 'Homer', lastName: 'Simpsons', isDriver: true},
  {name: 'Marge', lastName: 'Simpsons', isDriver: true},
  {name: 'Bart', lastName: 'Simpsons', isDriver: false},

]

const filtrarNoDriver2 = (array) => array.filter( (elemento) => elemento.isDriver === false );
console.log(filtrarNoDriver2(users));


const filtrarNoDriver = (array) => {
  const resultado = array.filter( (cadaElementoDoArray) => cadaElementoDoArray.isDriver === false );
  return resultado;
}; 

console.log(filtrarNoDriver(users));