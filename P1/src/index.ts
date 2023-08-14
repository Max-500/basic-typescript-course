// Basic Types
const username: string = "Leonardo Maximoff";
const age: number = 19;
const myBoolean: boolean = true;

// Arrays
let arrNumber: number[] = [1, 2, 3, 4, 5];
let arrNumber2: Array<number> = [6, 7, 8, 9, 10];

let arrString: string[] = ["Hello!", "My name us", "Leonardo Maximoff"];
let arrString2: Array<string> = ["and", "19", "years old!!!"];

let arrAny: any[] = [1, "Hello", true];
let arrAny2: Array<any> = [2, "World!!!", false]

// Tupla
// Es un array que se especifica cuantos datos tendra y los tipos de cada uno
let tupleArr: [string, number, boolean] = ["Hello", 5, true];

// Tupla de Arrays
let arrTuple: [string, number][];
arrTuple = [
    ["Hello", 1],
    ["Wordl", 2]
]

// Unions
let union: string | number | null | undefined


console.log(`Hello! My name is ${username} and ${age} years old!!!`);