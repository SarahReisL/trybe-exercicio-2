// classe é o modelo 
class Conta {
    //atributos com types-e tornando ele private o user nao pode fazer alteracao
   private _saldo: number; 

   // chama o constructor pra criar o saldo inicial 
   constructor() {
    // o this represerta a instancia atual da classe
    this._saldo = 0;
   }
   // method debeto em conta
//    public debto(valor:number): void {
//     if(valor > this._saldo)
//    }

   // funcao da minha classe-para buscar o valor de saldo
   getSaldo() : number {
    return this._saldo;
   }
   // alterar algo 
//    set saldo(novoSaldo : number) : void {
//     this._saldo = novoSaldo;
//    }
}

// criando nova instancia
const conta = new Conta();
// console.log(conta.saldo);
// conta.getSaldo = 100;
// console.log(conta.saldo)
// ----------------------------------------------------------------

// class Person {
//     //atributos com types 
//     name: string;
//     height: number;
//     weight: number;
//     // constructor 
//     constructor(n: string, h: number, w: number){
//         console.log(`Creating person ${n}`);
//         // this is the  object that will be passed to the constructor function
//         this.name = n;
//         this.height = h;
//         this.weight = w;
//     }
//     // method to create a conditional sleep person
//     sleep() {
//         console.log(`${this.name}: zzzzz`);
//     }    
// }

// const person1 = new Person('Maria', 171, 58);
// const person2 = new Person('João', 175, 66);
// console.log(person1.name, person1.height, person1.weight);
// console.log(person2.name, person2.height, person2.weight);
// person1.sleep();
// person2.sleep();

