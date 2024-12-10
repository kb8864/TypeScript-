"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//100回サイコロを振って1がでたら終わり
let dice;
for (let i = 0; i < 100; i++) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
    if (dice === 1) {
        break; //繰り返しを中断する}
        //    console.log('結果は１以外でした');
    }
}
