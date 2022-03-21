// ...Spread operatos(espalha elementos)Espalha os valores de arrays e objetos-promove mutabilidade

const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos]; //[ 'Gol', 'HB20', 'Focus', 'Biz', 'R1' ]
const veiculos = ['UnO', ...carros, 'F40', ...motos]; //[ 'Gol', 'HB20', 'Focus', 'Biz', 'R1' ]
console.log(veiculos);


// colocando o retorno dentro de um terceiro objeto:
const pessoa = {
  nome: 'Sarah',
  idade: '24',
  cidade: 'BH',
}

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida',
}
console.log(pessoaTryber);

// com numeros:
const numbers = [1, 2, 3];

const newArray = [4, 5, 6, ...numbers];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// combinando arrays em uma única estrutura 'strings':
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// calculo de IMC- funçao recebe 2 param., retorna o resultado arredondado do IMC e salvar os dados do paciente em um array
const imc = (peso, altura) => (peso / (altura * altura).toFixed(2));
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo));


// com objetos
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

//PARA FIXAR:
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['bnn', 'pera', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'gioba', 'ff'];

const fruitSalad = (fruit, additional) => {
 return fruit + additional;
};

console.log(fruitSalad(...specialFruit, ...additionalItens));