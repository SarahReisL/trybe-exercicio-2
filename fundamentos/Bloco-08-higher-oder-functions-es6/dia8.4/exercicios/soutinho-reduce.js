const players = [
  { 
  fullName: 'Adriano Imperador', 
  email: 'didico@futebol.br' 
  },
  { 
  fullName: 'Ronaldinho Gaúcho', 
  email: 'bruxo@futebol.br' 
  },
  { 
  fullName: 'Ronaldo Fenômeno',
  email: 'cortedocascao@futebol.br' 
  },
];

const emailPlayers = players.reduce( (emailPlayers, emailAtual) => {
  console.log(emailAtual); //{ fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' } { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' }


});