// "use strict";
// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ];
// let cashInRegister = 100;
// let nextOrderId = 0;
// const orderQueue = [];
// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }
// console.log('test');
// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`);
//         return;
//     }
//     cashInRegister += selectedPizza.price;
//     const newOrder = {
//         id: ++nextOrderId,
//         pizza: selectedPizza,
//         status: "ordered",
//     };
//     orderQueue.push(newOrder);
//     return newOrder;
// }
// function completeOrder(orderId) {
//     const order = orderQueue.find(order => order.id === orderId);
//     if (!order) {
//         console.log(`${order} ID is not found`);
//         return undefined;
//     }
//     order.status = "completed";
//     console.log(orderQueue);
//     return order;
// }
// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ name: "BBQ Chicken", price: 12 });
// addNewPizza({ name: "Spicy Sausage", price: 11 });
// placeOrder("BBQ Chicken");
// completeOrder(1);
// console.log("Menu", menu);
// console.log("Cash in register", cashInRegister);
// console.log("Order queue", orderQueue);
