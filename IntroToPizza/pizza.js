"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 0;
var nextPizzaId = 0;
var orderHistory = [];
//`: void` return type is like a function where we DONT return any value
function addNewPizza(pizzaObj) {
    var newPizza = {
        id: nextPizzaId++,
        name: pizzaObj.name,
        price: pizzaObj.price,
    };
    menu.push(newPizza);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: ++nextOrderId,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("ID:".concat(orderId, " is not found"));
        throw new Error();
    }
    order.status = "completed";
    return order;
}
// type narrowing
function getPizzaDetail(indentifier) {
    if (typeof indentifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === indentifier.toLowerCase(); });
    }
    else if (typeof indentifier === "number") {
        return menu.find(function (pizza) { return pizza.id === indentifier; });
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}
getPizzaDetail("Veggie");
addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });
placeOrder("BBQ Chicken");
completeOrder(1);
console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderHistory);
