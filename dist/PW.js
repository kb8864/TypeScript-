"use strict";
const uppercase = ['A', 'B', 'C'];
const lowercase = ['a', 'b', 'c'];
const numbers = ['0', '1', '2', '3', '4'];
const symbols = ['!', '@', '#', '&'];
const allCharacters = [
    ...uppercase,
    ...lowercase,
    ...numbers,
    ...symbols,
];
//パラメータをコマンドラインから受け取れるようにする
const passwordLenght = Number(process.argv[2]);
let password = [];
// 各カテゴリから1文字ずつ追加
password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
password.push(numbers[Math.floor(Math.random() * numbers.length)]);
password.push(symbols[Math.floor(Math.random() * symbols.length)]);
// 残りの文字数をランダムに選択
for (let i = 4; i < passwordLenght; i++) {
    const randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    password.push(randomChar);
}
// パスワードをシャッフルする
password = password.sort(() => Math.random() - 0.5);
console.log(password.join(''));
