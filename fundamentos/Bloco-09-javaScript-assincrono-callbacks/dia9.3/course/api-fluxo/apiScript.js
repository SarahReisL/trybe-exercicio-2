const url = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  console.log(fetch(url));
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(url, myObject)
    .then(response => response.json())
    .then(data => 
      document.getElementById('jokeContainer').innerHTML = data.joke);
};

window.onload = () => fetchJoke();
