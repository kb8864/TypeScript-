"use strict";
function getDice(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getDice(10, 15));
console.log(getDice(100, 200));
console.log(getDice());
console.log(getDice(3));
console.log(getDice(1, 8));
