abstract class Item {
    name: string = "";
    price: number = 0;
    abstract getTaxPrice(): number;
}

class Food extends Item {
    getTaxPrice(): number {
        return this.price * 1.08;
    }
}

class Stationery extends Item {
    getTaxPrice(): number {
        return this.price * 1.1;
    }
}

const peach = new Food();
peach.name = "もも";
console.log(peach.name);

const pencil = new Stationery();
pencil.price = 80;
console.log(pencil.getTaxPrice());