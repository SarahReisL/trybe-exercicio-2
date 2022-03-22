function append(data) { // function de anexar
    const ul = document.querySelector('ul');
    
    const li = document.createElement('li'); // criando item pra ser add na lista
    const divNome = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img');
  
    divNome.innerHTML = data.name;
    img.src = data.imageUrl;
    divImage.appendChild(img);
  
    li.appendChild(divNome);
    li.appendChild(divImage);
  
    ul.appendChild(li);
  }

  // 1. Implemente a função fetchPokemon que vai buscar os dados dos Pokémons na API

  function fetchPokemon() {
    const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(promise);
    promise.then((response) => {
     const promiseJSON = response.json();
     promiseJSON.then((data) => {
       console.log(data);
       const pokemon = {
         name: data.name,
         imageUrl: data.sprites.front_default
       }
       append(pokemon)
     })
    })
  }
 
  // 2. Refatore a função fetchPokemon para utilizar encadeamento

  function fetchPokemon(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response) => {
      response.json()
     .then((data) => {
       const pokemon = {
         name: data.name,
         imageUrl: data.sprites.front_default
       }
       append(pokemon)
     })
    })
  }
  // 3. Crie uma função requestPokemons que vai chamar a função fetchPokemon para adquirir alguns Pokémons

function requestPokemons() {
  fetchPokemon("pikachu");
  fetchPokemon("charmander");
  fetchPokemon("squirtle");
  fetchPokemon("lapras");
  fetchPokemon("abra");
}
  //4. Adicione o tratamento de erro para o fetch

  function fetchPokemon(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((response) => {
        response.json()
          .then((data) => {
            const pokemon = {
              name: data.name,
              imageUrl: data.sprites.front_default
            }    
        append(pokemon)
      })
      .catch ((error) => console.log(error))
    })
  }

  // 5. Refatorar a função fetchPokemon criando a função extractNameAndImage
  function extractNameAndImage(data) {
    const pokemon = {
      name: data.name,
      imageUrl: data.sprites.front_default
    }
    return pokemon;
  }

  function fetchPokemons(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((response) => {
        response.json()
          .then((data) => {
            const pokemon = extractNameAndImage(data)   
            append(pokemon)
          })
      .catch ((error) => console.log(error))
    })
  }

  //6. Criar uma função que utilize o async/await para fazer as requisições 
  
  // async function fetchPokemon(poke) {

  // }

  async function fetchPokemon(poke) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      console.log(response)
      const data = await response.json();
      const pokemon = extractNameAndImage(data);
      append(pokemon)
      } catch (error) {
      console.log(error)
    }
  }

  window.onload = requestPokemons;