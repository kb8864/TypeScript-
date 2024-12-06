import BaseItem, { tax } from './Item.js';

class Food extends BaseItem {
    getTaxPrice(): number {
        return this.price * 1.08;
    }
}

const peach = new Food();
peach.price = 150;
console.log(peach.getTaxPrice());