const UnitEnum = require("./Unit.js");
const Ingredient = require("./Ingredient.js");
const Allergene = require("./Allergene.js");
const Additif = require("./Additif.js");

class ElementFactory {
    static create(type, name, value, unit, quantity) {
        switch (type) {
            case "ingredient":
                return new Ingredient(name, value, unit, quantity);
            case "additif":
                return new Additif(name, value, unit, quantity);
            case "allergene":
                return new Allergene(name, value, unit, quantity);
            default:
                throw new Error(`Type d'élément inconnu: ${type}`);
        }
    }
    static createIngredient(name, value, unit, quantity) {
        return new Ingredient(name, value, unit, quantity);
    }
    static createAllergene(name, value, unit, quantity) {
        return new Allergene(name, value, unit, quantity);
    }
    static createAdditif(name, value, unit, quantity) {
        return new Additif(name, value, unit, quantity);
    }

}

const example1 = ElementFactory.create("ingredient", "Vitamine C", 100, UnitEnum.mg, 50);
// const fakeExample2 = ElementFactory.create("plat", "Gluten", 200, UnitEnum.mg, 30);
const example3 = ElementFactory.createIngredient("Calcium", 500, UnitEnum.mg, 20);
const example4 = ElementFactory.createAllergene("Lactose", 300, UnitEnum.μg, 10);
const example5 = ElementFactory.createAdditif("Colorant", 50, UnitEnum.mg, 5);

console.log(example1.getAllInfo());
// console.log(fakeExample2.getAllInfo());
console.log(example3.getAllInfo());
console.log(example4.getAllInfo());
console.log(example5.getAllInfo());

