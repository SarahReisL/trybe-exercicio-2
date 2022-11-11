class Person {
    //atributos com types 
    name: string;
    height: number;
    weight: number;
    // constructor 
    constructor(n: string, h: number, w: number){
        console.log(`Creating person ${n}`);
        // this is the  object that will be passed to the constructor function
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    // method to create a conditional sleep person
    sleep() {
        console.log(`${this.name}: zzzzz`);
    }    
}

const person1 = new Person('Maria', 171, 58);
const person2 = new Person('João', 175, 66);
console.log(person1.name, person1.height, person1.weight);
console.log(person2.name, person2.height, person2.weight);
person1.sleep();
person2.sleep();
