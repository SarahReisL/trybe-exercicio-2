// 1.Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const title = document.getElementById("page-title");
  title.innerText = "A vida é bela";
// 2.Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
let sinopse = document.getElementById("second-paragraph");
  sinopse.innerText = "Durante a Segunda Guerra Mundial na Itália, o judeu Guido e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.";
// 3.Por fim, recupere o subtítulo e altere-o também.
let subTitle = document.getElementById("subtitle")
  subTitle.innerText = "Excelente filme para ver com a família.";

//2. Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName ;
//3. Altere algum estilo do primeiro deles.
let p = document.getElementsByClassName("p")
for (let index = 0; index < p.length; index += 1) {
  p[index] = p[index].style.fontSize = "20px";
}
//OU 
// paragraphs[0].style.fontSize = '1.5rem';
// paragraphs[0].style.color = 'green';

// 4. Recupere o subtítulo e altere a cor dele usando a função `getElementsByTagName`.
let subTitle1 = document.getElementsByTagName("h4")[0];
  subTitle1.style.color = "red";