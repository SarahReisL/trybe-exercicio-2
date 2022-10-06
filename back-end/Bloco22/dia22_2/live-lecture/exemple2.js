function soma(a, b) {
  console.log(a + b);
}

// funcao especial que retorna um promise
function main() {
  soma(1, 5);
  soma(4, 4);
// fluxo de execução javascript
  setTimeout(() => { 
      console.log('Executando callback');
  }, 3 * 1000);

  soma(1, 0);
  soma(5, 5);
}

main();