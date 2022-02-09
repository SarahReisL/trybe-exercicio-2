//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome(word) {
  let string = word.split('');
  let invertedString = string.slice();
  invertedString.reverse();
  console.log(string.join(''));
  console.log(invertedString.join(''));
    if(string.join('') === invertedString.join('')) {
      return true;
    } 
       return false;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('-vr-'));
console.log(verificaPalindrome('palindromo'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 
//Array de teste: [2, 3, 6, 7, 10, 1]; . Valor esperado no retorno da função: 4 .

//usamos para For para percorrer, no caso for in
function HighestValueIndex(numbers) {
  let indexHigher = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[indexHigher]) {
      indexHigher = index;
    }
  }
      return indexHigher;
}
console.log(HighestValueIndex([0, 3, 6, 7, 10, 1]));
//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; . Valor esperado no retorno da função: 6 .
function LowestValueIndex(numbers) {
  let indexLow = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[indexLow]) {
      indexLow = index;
    }
  }
      return indexLow;
}
console.log(LowestValueIndex([02, 4, 6, 7, 10, 0, -3]));
//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];. Valor esperado no retorno da função: 2.
function RepetingIndex(numbers) {
  let indexRepeat = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[indexRepeat]) {
      indexRepeat = index;
    }
  }
      return indexRepeat;
}
console.log(RepetingIndex([2, 3, 2, 5, 8, 2, 3]));


// let indexRepeat = 0;
// let maxnumber = highestArray[0];
// for (let index = 1; index < highestArray.length; index += 1) {
//   if(highestArray[index] > maxnumber){
//     maxnumber = highestArray[index];
//   }
// } 
// for (let i = 0; i < highestArray.length; i += 1) {
//   if(maxnumber == highestArray[i]){
//     maxnumber += 1;
//   }
// } 
// return indexRepeat;
// } 