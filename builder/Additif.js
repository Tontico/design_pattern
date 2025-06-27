const Element = require('./Element');


class Additif extends Element {
    constructor(name, value, unit, quantity) {
        super(name, value, unit);
        this.quantity = quantity;
    }

    getQuantity() {
        return this.quantity;
    }


    getAllInfo() {
        return `${this.getInfo()}, Quantité : ${this.quantity}`;
    }
}
module.exports = Additif;