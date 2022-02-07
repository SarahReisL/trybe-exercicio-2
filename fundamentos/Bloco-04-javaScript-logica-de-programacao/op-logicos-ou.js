// OU - || - isso ou aquilo
// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }
//// Como é o resultado de cada operação
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false - os dois precisam ser falsos

// //WEEK DAY
// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
// Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

let weekDay = "domingo";
if(weekDay === "segunda-feira" || weekDay ===  "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if(weekDay === "sábado" || weekDay === "domingo"){
    console.log("FINALMENTE, descanso merecido UwU");
}   