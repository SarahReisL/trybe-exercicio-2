/* O operador ternário sintetiza uma conticional com if/else e switch case onde 1 condição é avaliada para retorno de 2 possibilidade */
//tradicional
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Pode dirigir`;
  } else {
    return `Nao pode dirigir ainda..`
  }  
}
console.log(checkIfElse(22));

//com ternary operator
  const checkTernary = (age) => (age >= 18 ? `Pode dirigir` : `Nao pode`);
  console.log(checkTernary(17));