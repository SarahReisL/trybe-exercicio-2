/*MAP- array.map(); cria outro array com a quati do array original*/

const users = [
  {name: 'Homer', lastName: 'Simpsons', isDriver: true},
  {name: 'Marge', lastName: 'Simpsons', isDriver: true},
  {name: 'bart', lastName: 'Simpsons', isDriver: false},
  {name: 'ggg', lastName: 'Simpsons', isDriver: false},
]

//SITUAÇÃO MANUAL
function userComFor (){
  const firstName = [];
  for (let index = 0; index < users.length; index++) {
    firstName.push(users[index].firstName)
  }
  return firstName;
}
console.log(userComFor());

//com map
//user é o array-e o map transforma os primeiros nomes e imprimiu 
const resultadoDoMap = users.map((elemento) => {
  console.log(elemento, 'elemento map');
  return elemento.firstName;
})
console.log(resultadoDoMap);

/*o Objeto cities do exemplo está no livelectures*/

//1. Transforme (Mapeie) o -array de objetos[{}]- cities em um array de string com o seguinte formato:

  //essa function recebe como parametro um array(posso colocar qualquer nome no paramentro)
function cityAndState(array) {
  // a const resultado, agora recebe do map
  const resultado = array.map((elementoDoArray) => `${elementoDoArray.name} - ${elementoDoArray.state}`);
  return['Manaus - AM', 'Jericoacoara -CE']
}
console.log(cityAndState(cities));

//2. Traz nome das cidade para seus respectivos estados:
// juntou 2 array e 
// quero passar por cara item do array 'cities'-a variavel city, recebe 
const city = cities.map((elementoDeCities) => {
  //log() pra verificar no inicio se a function vai funcionar
  console.log(`A cidade de ${elementoDeCities.name} fica no estado de ${nomeDoEstado}`);
})  
const state = state.find((elementoDoStates) => {
  const d = elementoDoStates.short === 'AM';
  return d;
})
console.log(state);
//quero que state seja igual a short-compara-


