"use strict";
class Item {
    constructor(name, stock) {
        this._name = '';
        this._stock = 0;
        this.name = name;
        this.stock = stock;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set stock(value) {
        if (value >= 0) {
            this._stock = value;
        }
        else {
            this._stock = 0;
        }
    }
    get stock() {
        return this._stock;
    }
}
let peach = new Item("もも", -3);
console.log(peach.stock);
