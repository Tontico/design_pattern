
const UnitEnum = require('./Unit');

class Element {
    constructor(name, value, unit) {
        this.name = name;
        this.value = value;
        this.unit = unit;
    }

    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
    getUnit() {
        return this.unit;
    }

    getInfo() {
        return `${this.name} : ${this.value} ${this.unit}`;
    }
    getAllInfo() {
        throw new Error("La méthode getAllInfo() doit être implémentée");
    }

}
module.exports = Element;
