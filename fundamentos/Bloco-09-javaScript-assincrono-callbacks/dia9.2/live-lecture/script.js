function append(data) {
    const ul = document.querySelector('ul');
    
    const li = document.createElement('li');
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

 
  // 2. Refatore a função fetchPokemon para utilizar encadeamento


  // 3. Crie uma função requestPokemons que vai chamar a função fetchPokemon para adquirir alguns Pokémons


  //4. Adicione o tratamento de erro para o fetch

  // 5. Refatorar a função fetchPokemon criando a função extractNameAndImage


  //6. Criar uma função que utilize o async/await para fazer as requisições 
  
  