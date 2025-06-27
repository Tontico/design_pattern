
const Element = require('./Element');

class Marque extends Element {
    constructor(name, description) {
        super(name);
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getAllInfo() {
        return `Marque: ${this.name}, Description: ${this.description}`;
    }
}
module.exports = Marque;