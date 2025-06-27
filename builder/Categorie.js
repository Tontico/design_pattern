
const Element = require('./Element');

class Categorie extends Element {
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
        return `Catégorie: ${this.name}, Description: ${this.description}`;
    }

}
module.exports = Categorie;