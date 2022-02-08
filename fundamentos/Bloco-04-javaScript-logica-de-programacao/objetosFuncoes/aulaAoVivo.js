// PARTE 1 -Funções- tem responsa unica e pode reutilizar o código.
// 
//declarando
function morningGreeting() {
  console.log('Bom dia!');
}
// pra chamar a função
morningGreeting();

//return
function morningGreeting() {
  return 'Bom dia!'
}
// pra chamar a função
console.log(morningGreeting());
// let retorno = morningGreeting();

// Parâmetro
function morningGreeting3(nome) {
  return 'bom dia, ' + nome + '!';
}
console.log(morningGreeting3('Sarah'));
console.log(morningGreeting3('Amanda'));

//2 parametros
function sum (num1, num2){
  return num1 + num2;
}
console.log (sum(5,10)); // 5,10 sao num1 e num2

//Bônus = lessThan - else desnecessário(TALVES LINTER)
function lessThan(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2; 
  }
}
console.log(lessThan(20,1));

//PARTE 2 - OBJETOS
let person = {
  name: 'Sarah',
  age: 16/03/1998,
  eyeColor: 'Preto',

  nickName: {
   name: 'Sarah', author: 'Reis' 
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

//Dot notation - Atribuindo
person.name = 'Amanda';
//Dot notation - Acessando-dando saida
console.log(person.name);

//Bracket notation - atribuindo []
person['name'] = 'Vitor';
//Bracket notation - Acessando-dando saida
console.log(person['name']);

//FOR IN - KEY = FORMA MAIS INCHUTA DE TRABALHAR
//aparece todas as minhas CHAVES, o index esta sendo controlado pelo for in
for (let key in person) {
  console.log(key);
}
// mostrar todos os valores (person[key])
for (let key in person) {
  console.log(person[key]);
}
//sempre q precismos acessar as prop de um obj. de forma dinamica,utilizamos a notação por colchetes.



