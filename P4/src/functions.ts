const printPerson = (person:{ name:string, age?:number | string }):void => {
    if(person.age !==undefined){
        console.log(`My name is: ${person.name} and I am ${person.age} years old!!!`);
    }
    console.log(`My name is: ${person.name}`);
}

function getAge():number {
    return Math.floor(Math.random() * 31);
}

const age:number = getAge();

// Version 1
//printPerson({ name: "Leonardo Maximoff", age: age });

// Version 2
//printPerson({ name: "Leonardo Morningstar", age: age.toString() });

// Version 3
//printPerson({ name: "Leonardo Skywalker" });

interface Person {
    name: string,
    age: string | number,
    power: boolean
}

function getSuperPerson(human: { name:string, age?:number | string, power?:boolean }, tellMe: boolean):Person {

    if(human.age === undefined){
        human.age = 19;
    }

    if(human.power === undefined){
        human.power = false;
    }

    const person:Person = {
        name: human.name,
        age: human.age,
        power: human.power
    }

    if(tellMe && person.power){
        console.log(`My name is ${person.name} and I am ${person.age} years old and I am a simple boy`);
    }

    if(tellMe && !human.power){
        console.log(`My name is ${person.name} and I am ${person.age} years old and I am a super boy`);
    }

    return person;
}

let superPerson:Person = getSuperPerson({ name: "Leonardo Maximoff", age: age, power: false }, true);