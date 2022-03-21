// Principais usos de destructuring (Object / Array):

// Manipulação de informações de uma forma mais simples;

// Organização e melhor interpretação do código;

// Desmembramos o objeto/array em variáveis mais fáceis de serem trabalhadas.

// Principais usos de default destructuring:

// Atribuir um valor padrão a alguma chave / índice que porventura seja undefined.

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};
// desestruração
  const {name, birthplace, jobs } = richestDuckInTheWorld;
  const [firstjob, secondJob, thirdJob] = jobs;
  
  console.log(firstjob)
  console.log(secondJob)
  console.log(thirdJob)

describe('testa concatenação de dados de um objeto', () => {
test('verifica se é possivel concatenar os dados do objeto richestDuckInTheWorld', () => {
  expect(`${name} from ${birthplace}`).toBe('Scrooge McDuck from Glasgow, Scotland');
});
});