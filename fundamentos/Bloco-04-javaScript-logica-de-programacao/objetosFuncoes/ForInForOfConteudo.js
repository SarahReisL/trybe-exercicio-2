//FOR IN dentro de OBJETOS
//pedido de pizza
let pizzas = {
  sabor: "Carne seca",
  preco: 59.90,
  bordaCheddar: true
};
//criando o laço 'for', mostrando as propriedades/chaves.
for (let key in pizzas) {
  console.log(key);
}

// mostra todos os itens na quantidade de vezes do total de chaves.
for (let key in pizzas) {
  console.log(pizzas);
}

//mostra apenas o que esta depois de ponto.
for (let key in pizzas) {
  console.log(pizzas.preco);
}

//mostra o valor da propriedade 
for (let key in pizzas) {
  console.log(pizzas['bordaCheddar']);
}

//PASSAR POR TODAS PROP. E IMPRIME O VALOR DE CADA
for (let key in pizzas) {
  console.log(pizzas[key]);
}


//FOR IN dentro de ARRAYS
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
  console.log(key);
}

//mostrando um item específico do array
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
  console.log(pizzasDoces[key]);
}

//mostrando a posição de cada item do array/index.
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
  console.log(key, pizzasDoces[key]);
} 
//mostrando um item específico do array

