let tax: number = 1.1;
let add_tax = (price: number): number => {
    //tax = 1.08;
    const tax: number = 1.08;
    console.log(tax);
    return Math.floor(price * tax);
}

console.log(tax);
console.log(add_tax(100));
console.log(tax);