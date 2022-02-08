//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome (str) {
  for(let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) 
      return false;
      return true;
  }
}
console.log(verificaPalindrome("radar"));
console.log(verificaPalindrome("reviver"));
console.log(verificaPalindrome("palindromo"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
