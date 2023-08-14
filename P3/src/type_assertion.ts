// Type Assertion
let example: any = "Leonardo Maximoff";

let exampleStr1 = example as string;
let exampleStr2 = <string>example;

const myCanvas = document.getElementById('body');

const myCanvas1 = <HTMLCanvasElement> myCanvas;
const myCanvas2 = myCanvas as HTMLCanvasElement;