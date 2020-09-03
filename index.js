// Write your code here
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bifFluffyDog2 = new Dog("woody", "labrador");

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}