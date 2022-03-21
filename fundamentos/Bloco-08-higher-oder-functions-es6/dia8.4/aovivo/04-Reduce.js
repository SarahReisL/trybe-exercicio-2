// É um array[] e dentro do array tem objetos
const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];
  
// Reduza o array acima em um objeto conforme o exemplo abaixo
//transformando o array em objeto do zero
const player = {
	'Adriano Imperador': 'didico@futebol.br',
	'Ronaldinho Gaúcho': 'bruxo@futebol.br',
	'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
	'Marta Vieira da Silva': 'rainhamarta@futebol.br',
};

// Como inserir uma entrada num objeto?-com dot notacion
player['Sarah'] = 'sahreis16@gmail.com';
// Atenção para o tipo do retorno!

// Solução com reduce
//como paramentro opcional colocamos um objeto vazio {}, para que ele insira um objeto la dentro quando retornar;
const playerObj = players.reduce( (accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator;
}, {});
console.log(playerObj);