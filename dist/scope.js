"use strict";
const tax = 1.1;
let add_tax = (price) => {
    const tax = 1.1;
    return Math.floor(price * tax);
};
console.log(tax);
console.log(add_tax(100));
