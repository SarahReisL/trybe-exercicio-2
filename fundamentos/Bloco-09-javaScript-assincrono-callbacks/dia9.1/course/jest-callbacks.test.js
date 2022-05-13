// const { expect } = require("@jest/globals");

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try{ //Enquanto o try tenta executar a função no seu escopo com sucesso
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//     } catch (error) { //o catch "captura" o erro, chamando a callback done
//       done(error);
//     }
//   }, 500)
// })
// //-------------
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

test('Testando asyncSum, soma 5 mais 10', (done) => { 
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  })
 })
