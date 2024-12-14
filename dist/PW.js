"use strict";
const seed = [
    'A',
    'B',
    'C',
    'a',
    'b',
    'c',
    '1',
    '2',
    '3',
    '!',
    '@',
    '#',
    '&',
];
//パラメータをコマンドラインから受け取れるようにする
const password_lenght = Number(process.argv[2]);
let password = '';
let random;
for (let i = 0; i < password_lenght; i++) {
    //プロパティの上限値を使って、配列の値を増やせるようする
    random = Math.floor(Math.random() * seed.length);
    password += seed[random];
}
console.log(password);
