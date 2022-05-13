const fetch = require('node-fetch');

    //usando apenas async await
// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((dataOfURL) => dataOfURL.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//     console.log(result);
// }

// fetchJoke();

    //usando async await e try e o catch
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {  
    const response = await fetch(url);
    const dataOfURL = await response.json();
    console.log(dataOfURL.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();
