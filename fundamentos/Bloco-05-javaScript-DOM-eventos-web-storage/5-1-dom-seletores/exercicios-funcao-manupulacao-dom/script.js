//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  let paragraph = document.getElementsByTagName('p');
  paragraph[0].innerText = 'Dev, conquistando independencia financeira, ganhando em euro, viajando quando quiser, morando onde  quiser.';
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// que é uma classe. fiz o for para selecionar toda a class
let main = document.getElementsByClassName("main-content")
for (let index = 0; index < main.length; index += 1) {
  main[index].style.backgroundColor = "rgb(76,164,109)";
}
//  Crie uma função que mude a cor do quadrado vermelho para branco.
let sectionCenter = document.getElementsByClassName("center-content")
for (let index = 0; index < sectionCenter.length; index += 1) {
  sectionCenter[index].style.backgroundColor = "white";
}
//  Crie uma função que corrija o texto da tag <h1>.
let title = document.getElementsByTagName('h1');
  title[0].innerText = "Exercício 5.1 - JavaScript";
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let maiusculo = document.getElementsByTagName('p');
maiusculo[0].style.textTransform = "upperCase";
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    

