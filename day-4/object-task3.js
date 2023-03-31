let coffeeShop = {
    branch: "Glasgow",
    drink: [
        "Mocha",
        "Latte",
        "Hot Chocolate",
        "Cortado",
        "Espresso",
        "Cappuccino",
        "Tea"],
    drinkPrice: [
        2.5,
        2,
        1.5,
        1,
        1,
        2,
        1.5,],
    food: [
        "Vegan Bacon Roll",
        "Sausage Roll",
        "Biscuit",
        "Banana loaf",
        "Carrot Cake",
        "Chicken Skewer",
    ],
    foodPrice: [
        2,
        1.5,
        1,
        1,
        1,
        8,],
    
        
            drinksOrdered() {
                return `Your drinks order is ${this.drink[3]}, and the price is £${this.drinkPrice[3]}.`
            },
            foodOrdered() {
                return `Your food order is ${this.food[5]}, and the price is £${this.foodPrice[5]}.`
            },
            totalCost() {
                return (this.drinkPrice[3]+this.foodPrice[5])
            },
            totalCostTxt() {
                return `is the total cost of your order.`
            }
}

console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrdered())
console.log("£",coffeeShop.totalCost(),coffeeShop.totalCostTxt())