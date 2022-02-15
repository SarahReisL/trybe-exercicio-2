//1 Acesse o elemento #elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//2. Acesse pai a partir de #elementoOndeVoceEsta e adicione uma color a ele.
const corPai = elementoOndeVoceEsta.parentElement;
corPai.style.color = 'purple';

//3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "E-PrimeiroFilhoDoFilho - A vida é bela";

// 4 Acesse o primeiroFilho a partir de pai .
let corprimeiroFilho = document.getElementById('pai').firstElementChild;
// const corprimeiroFilho = pai.firstElementChild

// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let backPrimeiroFilho = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// gabarito Way:
// let backPrimeiroFilho = elementoOndeVoceEsta.previousElementSibling;

// testando a chamada:
backPrimeiroFilho.style.background = 'grey';

//******6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let elem = document.getElementById('pai');
el.removeChild(el.lastChild);

// gabarito Way:
// const textElement = elementoOndeVoceEsta.nextSibling;

// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

//8 Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho2 = document.getElementById('elementoOndeVoceEsta').lastElementChild.previousElementSibling;

//  PARTE 02
// 1 Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
    const irmaoElementoOndeVoceEsta = document.createElement('section');
      //cria um ID para a nova section criada.
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    irmaoElementoOndeVoceEsta.innerText = 'quintoEIrmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta);

// 2 Crie um filho para elementoOndeVoceEsta .
const paiElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
  const filhoElementoOndeVoceEsta = document.createElement('section');
  //cria um ID para a nova section criada.
  filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
  filhoElementoOndeVoceEsta.innerText = 'E-filhoElementoOndeVoceEsta';
  elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// 3 Crie um filho para primeiroFilhoDoFilho .
  const paiPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
  const filhoPrimeiroFilhoDoFilho = document.createElement('section');
  //cria um ID para a nova section criada.
  filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
  filhoPrimeiroFilhoDoFilho.innerText = 'EP-filhoPrimeiroFilhoDoFilho';
  paiPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// 4 A partir desse filho criado, acesse terceiroFilho .
  const terceiroFilho3 = document.getElementById('filhoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;
  //para visualizar no console.
  console.log(terceiroFilho3);

  // PARTE 03

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
// let removeFilhos = document.getElementById('pai');
// removeFilhos.remove('pai');
const pai = document.getElementById('pai');
// for decrementa e remove todos os filhos da seção pai:
for(let index = pai.childNodes.length - 1; index >= 0; index -= 1){
  const atualChildren = pai.childNodes[index];
  if (atualChildren.id !== 'elementoOndeVoceEsta') {
    atualChildren.remove();
  }
}
//remove irmão do primeiro filho
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
  
  