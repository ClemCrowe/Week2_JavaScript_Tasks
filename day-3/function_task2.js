let orderCount = 0;

const takeOrder = (topping, toppingTwo) => {
    console.log(`order count: ${orderCount} pizza with ${topping} and ${toppingTwo}`);
    orderCount++;
}

takeOrder("pineapple", "anchovies");
takeOrder("Cherry Tomatoes", "Artichoke");
takeOrder("Bob Marley Extra Crispy", "Peperoni");
takeOrder("Vegan Beef Meat", "No Cheese");
takeOrder("No Base", "No Cheese");