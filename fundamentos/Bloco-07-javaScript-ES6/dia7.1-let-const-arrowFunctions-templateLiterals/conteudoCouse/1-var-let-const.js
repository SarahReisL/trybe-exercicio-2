function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}  
userInfo();
/*Com o console.log fora da funçao a variavel declarada dentro da função ñ é reconhecida, sendo considerada como indefinida*/ 

//-------VÍDEO COURSE---------
/*
  usando vareavel do tipo 'var' ela vasa escopo.- NÃO USE
  usando vareavel do tipo 'let' quando é necessário reatribuir a variável como no 'loop for'
  usando vareavel do tipo 'const' no exem. de loop 'for' ñ seria possível pq é uma constante.
*/ 
function minhaIdade () {
  for (var idade = 78; idade <= 100; idade+=1) {
    console.log(idade);
  }
}
  minhaIdade();


/*CONST-como objeto podemos alterar as propriedades sem reatribuir um novo objeto*/
const estudante = {
  nome: 'Maria',
  idade: 23
} //chamando pela propriedade do objeto e alterando
  estudante.idade = 40;
  console.log(estudante);

const userInfo = {
  name: 'Claudio',
  id: '424-2',
  email: 'dad@email.com',
};
userInfo.name = 'Joao';
console.log(userInfo);


/* EXEMPLO-
'var' os dois console serão impressos, 
'let' dará erro no segundo console e ñ imprimirá nada, 
'const' ñ vasa o escopo e só imprime um console */
if (true) {
  //inicio do escopo do if
  var userAge = '20';
  console.log(userAge); //20
  //fim do escopo do if
}
// console.log(userAge); //20


/* 'var' pode ser sobrescritas sem gerar erros- 
se usar 'let'e 'const' imprimirá erro de 'userName' has already been declared */
var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas


/* diferenciando 'const' de 'let' */
const favoriteLanguage = 'JavaScript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); //Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); //Facial recognition


/*com 'array' podemos indiretamento add e ou remover um novo item sem sobrescrever o que já foi declarado
*/
const technologies = ['JavaScript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); //['JavaScript', 'CSS', 'HTML', 'React']

technologies = ['JavaScript', 'CSS', 'HTML', 'React']
console.log(technologies); //Erro pq é uma constante


/*HOISTING - mutabilidade que acontece com variáveis declaradas com var */
