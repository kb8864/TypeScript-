"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//サイコロで1が出るまで繰り返し
let dice = 0;
while (dice !== 1) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
}
