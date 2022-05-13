/* callback é uma função passada como parâmetro para outra função  */
/* 1 const é um array de obj com gastos/mes, 2 const é a renda */
// Declaramos nossa variável de despesas
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];
// Declaramos nossa renda
const renda = 1000;
// impressao de balanço de entradas e saidas do mes
//function despesaMensal que recebe 3 param. callcback retornará o a soma de todos os gastos contidos no array. 
// Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
  // que vai receber nosso parâmetro/variável "despesas"
const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  // Definimos nosso saldo final, que é nossa renda - nossa despesa total
  const saldoFinal = renda - despesaTotal;
  console.log(`Balanço do mês:
  Recebido: R$${renda},00
  Gasto: R$${despesaTotal},00
  Saldo: R$${saldoFinal},00 `);

};
//function callback declarada depois que declaramos o callback
// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  // Separamos cada item do nosso array de despesas e fazemos um reduce para somar os valores
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};
// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)
// Executamos a função principal com as variáveis renda, despesas e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(renda, despesas, somaDespesas);
// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00

/* PARA FIXAR */
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);