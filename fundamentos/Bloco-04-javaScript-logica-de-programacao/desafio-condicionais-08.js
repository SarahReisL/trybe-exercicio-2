/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------csa

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
  // Desenvolva seu código nessa função
  let retorno = '';
  if (marinaAge < izaAge && marinaAge < silviaAge){
      retorno = 'Marina é a pessoa mais jovem e possui' + marinaAge + 'anos de idade';
  } else if (izaAge < marinaAge && izaAge < silviaAge){
      retorno = 'Iza é a pessoa mais jovem e possui' + izaAge + 'anos de idade';
  } else {
      retorno = 'Silvia é a pessoa mais jovem e possui' + silviaAge + 'anos de idade';
  }
}

console.log(findYoungerPerson(40, 34, 23));

module.exports = findYoungerPerson;
