// let tax: number = 1.1;↓↓↓
let tax = 1.1; //型推論
console.log(500 * tax);
console.log(300 * tax);

let tax: any = 1.1;
tax = 1.08;
console.log(1000 * tax);
