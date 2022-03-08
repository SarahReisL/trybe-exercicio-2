/* ARROW FUNCTION(SINTETIZANDO UMA FUNCTION) - FUNÇÕES ANÔNIMAS */
//sem arrow function
const soma = function (num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

//usando arrow function
const soma = (num1, num2) => {
  return num1 + num2;
}
console.log(soma(2, 2));
// em uma linha
const soma = (num1, num2) => num1 + num2;
console.log(soma(2, 2));

/* contados de palavras */
//tradicional
function contaPalavras (frase) {
  return frase.split(' ').length;
}
console.log(contaPalavras('Ola tudo bem? Boa noite, boa sorte'));

// com arrow
const contaWords = frase => frase.split(' ').length;
console.log(contaWords('Ola tudo bem? Boa noite, boa sorte'));

/* objeto que imprime dados */
//tradicional
function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Sarah', 24));

//arrow function
const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('Joaquim', 25));
