"use strict";
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}
console.log(getRandomChar('a', '1', 'あああ'));
console.log(getRandomChar(1, 2, 3));
