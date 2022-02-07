
//// 1.Faça cinco programas, um para cada operação aritmética básica.
const a = 150;
const b = 50;
// Adição (a + b)
console.log(a + b);
//Subtração (a - b)
console.log(a - b);
//Multiplicação (a * b)
console.log(a * b);
//Divisão (a / b)
console.log(a / b);
//Módulo (a % b)
console.log(a % b);

////2.Faça um programa que retorne o maior de dois números.
// Operador de relação comparação
const num1 = 30;
const num2 = 20;
let comparation = num1 > num2; //boolean-> sendo num1=5 e num2=10
console.log(comparation);

////3. Faça um programa que retorne o maior de três números. 
const num1 = 60;
const num2 = 50;
const num3 = 40;
 //boolean-> sendo num1=5 e num2=10
 console.log(num1 > num2); // true
 console.log(num1 > num3); // true
 console.log(num3 > num2);

 ////4.
 const tryber = 'dad'; //pode ser de qualquer tipo pri
switch (tryber) {
    case 'positivo':
        console.log('positive');
        break;
    case 'negativo':
        console.log('negative');
        break; 
        default:
        console.log('0');
        break;              
}

////5.
const l1 = 40;
const l2 = 60;
const l3 = 60;
angulo = 180;
console.log(angulo)

////6.
let pecas = 'rei'; //pode ser de qualquer tipo pri
switch (pecas) {
    case 'rei':
        console.log('todas as direções');
        break;
    case 'dama':
        console.log('quantas casas quiser ou puder');
        break; 
    case 'bispo':
        console.log('diagonais');
        break; 
    case 'cavalo':
        console.log('em forma de L');
        break;   
    case 'torre':
        console.log('ortogonais');
        break;  
    case 'peão':
        console.log('vertical');
        break;            
        default:
        console.log('Essa peça não existe');
        break;              
}

////7.
let nota = '40';
let prova = '60';
if (prova >= 90){
    nota = 'A';
} else if (prova < 90 && prova >= 80){
    nota = 'B';
} else if (prova < 80 && prova >= 70){
    nota = 'C';
} else if (prova < 70 && prova >= 60){
    nota = 'D';
} else if (prova < 60 && prova >= 50){
  nota = 'E';
} else{
  nota = 'F';
}
return nota;   

////8.


