/* HOF funções que recebem outras funçoes como parâmentro, e nos permite compactar açoes e ñ somente repassar valore-function-addEventListener */
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
     console.log(number, 'is even');
  }
});

/* PARA FIXAR */
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const phrase = () => {
  return ('Acordando!');
}
const printPhrase = (callback) => {
  console.log(callback());
}
printPhrase(phrase);

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const coffee = () => {
  return('Bora tomar café!!');
}
const printCoffee = (callback) => {
  console.log(callback());
}
printCoffee(coffee);

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => {
  return ('Partiu dormir!!');
}
const printSleep = (callback) => {
  console.log(callback());
}
printSleep(sleep);

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const wakeUp = () => {
  return (phrase, coffee, sleep);
}
const doingThings = (callback) => {
  console.log(callback());
}

// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!




// Objeto person
const person = {
    name: 'Caique',
    lastName: 'Coelho',
    greet: function(personName, callback) {
      return callback(personName);
    },
}
// console.log(person.name());

// Funçao de cumprimento amigável
// const lovelyGreet = () => {
//   return 'Olá, pessoa querida!!!';
// }
//
const lovelyGreet = (personName) => {
  return `Olá, ${personName}!!!`;
}
// Funçao bom dia
const goodMorning = (personName) => {
  return `Bom dia, ${personName}!!!`;
}

// Funçao de cumprimento de mau humor
const badMoodGreet = (personName) => {
  return `Oi, ${personName}!!!`;
}



// console.log(person.greet());
console.log(person.greet('Sarh', lovelyGreet));
