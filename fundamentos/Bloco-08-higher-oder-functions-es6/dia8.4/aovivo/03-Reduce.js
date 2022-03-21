const epic = ['A', 'Long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away...'];

//Concatene o array de string epic em uma única string.

const phrase = epic.reduce( (accumulator, currentValue) => {
  // DÁ erro: return accumulator + currentValue;-usanr template literals
    // console.log(accumulator);
return `${accumulator} ${currentValue}`;
}, 'd: ');
// se eu atribuo a forma que meu reduce funciona é diferente
console.log(phrase);