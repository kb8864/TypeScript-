"use strict";
class Item {
    constructor() {
        this.name = "";
        this.price = 0;
    }
}
class Food extends Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class Stationery extends Item {
    getTaxPrice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
peach.name = "もも";
console.log(peach.name);
const pencil = new Stationery();
pencil.price = 80;
console.log(pencil.getTaxPrice());
