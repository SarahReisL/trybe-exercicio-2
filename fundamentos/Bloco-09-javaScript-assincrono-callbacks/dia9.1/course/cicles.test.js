let cities = []; // lista de cidades

const addCity = (city) => { // arrow que add cidades ao arrow
  cities.push(city);
};

const removeCity = (city) => { // remove cidade do array
  cities = cities.filter((eachCity) => eachCity !== city);
};


// beforeEach(() => {
//   cities = ['Pindamonhangaba'];
// });

// afterEach(() => {
//   cities = [];
// });

// test('Testa a função addCity utilizando o beforeEach', () => {
//   expect.assertions(3);
//   addCity('Piraporinha');
//   expect(cities).toHaveLength(2);
//   expect(cities).toContain('Pindamonhangaba');
//   expect(cities).toContain('Piraporinha');
// });

// test('Testa a função removeCity utilizando o beforeEach', () => {
//   expect.assertions(2);
//   removeCity('Pindamonhangaba');
//   expect(cities).not.toContain('Pindamonhangaba');
//   expect(cities).toHaveLength(0);
// });

// COM DESCRIBE- BLOCO POR BLOCO
test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});