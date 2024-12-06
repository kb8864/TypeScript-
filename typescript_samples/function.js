"use strict";
function getDice() {
    return Math.floor(Math.random() * 6 + 1);
}
function sayHello() {
    console.log('こんにちは');
    return true;
}
sayHello();
console.log(getDice());
console.log(getDice());
console.log(getDice());
