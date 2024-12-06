"use strict";
const num1 = 7;
const num2 = 3;
const text1 = 'Hello, ';
const text2 = 'World!';
// 足し算を行う関数
function addNumbers(a, b) {
    return a + b;
}
// 文字列を連結する関数
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
const sum = addNumbers(num1, num2);
console.log(`足し算の式： ${num1} + ${num2} = ${sum}`);
const concatenatedString = concatenateStrings(text1, text2);
console.log(`文字列の連携: "${concatenatedString}"`);
