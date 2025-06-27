
const UnitEnum = require("./Unit.js");
const Ingredient = require("./Ingredient.js");
const Allergene = require("./Allergene.js");
const Additif = require("./Additif.js");
const Categorie = require("./Categorie.js");
const Marque = require("./Marque.js");

class ElementBuilder {
    constructor() {
        this._name = null;
        this._value = null;
        this._unit = null;
        this._quantity = null;
        this._type = null;
        this._description = null;
    }

    setName(name) {
        this._name = name;
        return this;
    }

    setValue(value) {
        this._value = value;
        return this;
    }

    setUnit(unit) {
        if (!Object.values(UnitEnum).includes(unit)) {
            throw new Error(`Unité invalide: ${unit}`);
        }
        this._unit = unit;
        return this;
    }


    setQuantity(quantity) {
        this._quantity = quantity;
        return this;
    }



    setType(type) {
        const validTypes = ['ingredient', 'allergene', 'additif', "categorie", 'marque'];
        if (!validTypes.includes(type)) {
            throw new Error(`Type invalide: ${type}. Types valides: ${validTypes.join(', ')}`);
        }
        this._type = type;
        return this;
    }

    setDescription(description) {
        this._description = description;
        return this;
    }

    build() {

        switch (this._type) {
            case 'ingredient':
                return new Ingredient(this._name, this._value, this._unit, this._quantity);
            case 'allergene':
                return new Allergene(this._name, this._value, this._unit, this._quantity);
            case 'additif':
                return new Additif(this._name, this._value, this._unit, this._quantity);
            case 'categorie':
                return new Categorie(this._name, this._description);
            case 'marque':
                return new Marque(this._name, this._description);
            default:
                throw new Error(`Type non supporté: ${this._type}`);
        }
    }


}

const example1 = new ElementBuilder()
    .setName("Vitamine C")
    .setValue(100)
    .setUnit(UnitEnum.mg)
    .setQuantity(50)
    .setType("ingredient")
    .build();

const example2 = new ElementBuilder()
    .setName("Lactose")
    .setValue(300)
    .setUnit(UnitEnum.μg)
    .setQuantity(10)
    .setType("allergene")
    .build();

const example3 = new ElementBuilder()
    .setName("Colorant")
    .setValue(50)
    .setUnit(UnitEnum.mg)
    .setQuantity(5)
    .setType("additif")
    .build();

const example4 = new ElementBuilder()
    .setName("Catégorie Alimentaire")
    .setDescription("Description de la catégorie alimentaire")
    .setType("categorie")
    .build();

const example5 = new ElementBuilder()
    .setName("Marque Alimentaire")
    .setDescription("Description de la marque alimentaire")
    .setType("marque")
    .build();

// const falseExample = new ElementBuilder()
//     .setName("Gluten")
//     .setValue(200)
//     .setUnit(UnitEnum.mg)
//     .setQuantity(30)
//     .setType("plat")
//     .build();


console.log(example1.getAllInfo());
console.log(example2.getAllInfo());
console.log(example3.getAllInfo());
console.log(example4.getAllInfo());
console.log(example5.getAllInfo());
// console.log(falseExample.getAllInfo());


module.exports = ElementBuilder;