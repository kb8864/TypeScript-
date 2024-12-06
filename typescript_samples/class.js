"use strict";
class Item {
    constructor() {
        // プロパティ
        this.name = '';
        this.stock = 0;
    }
    // メソッド
    buy(count) {
        if (count <= this.stock) {
            this.stock -= count;
            return true;
        }
        else {
            return false;
        }
    }
}
let peach = new Item();
peach.name = 'もも';
peach.stock = 3;
console.log(peach.name);
console.log(peach.buy(2));
console.log(peach.buy(1));
let grapes = new Item();
grapes.name = 'ぶどう';
grapes.stock = 5;
console.log(grapes.name);
