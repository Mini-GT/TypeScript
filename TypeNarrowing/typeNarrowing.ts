type Pizza = {
  id: number,
  name: string,
  price: number,
}

type NewPizza = Partial<Pizza>;

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed",
}
let nextPizzaId: number = 0;
let cashInRegister: number = 100;
let nextOrderId: number = 0;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderHistory: Order[] = [];

//`: void` return type is like a function where we DONT return any value
function addNewPizza(pizzaObj: NewPizza): Pizza | undefined {
  if(!pizzaObj.name || !pizzaObj.price) {
    console.log(`${pizzaObj.name || pizzaObj.price} is missing`);
    return;
  }
  const newPizza = {
    id: nextPizzaId++,
    name: pizzaObj.name,
    price: pizzaObj.price,
  }
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined{
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: ++nextOrderId,
    pizza: selectedPizza,
    status: "ordered",
  }
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find(order => order.id === orderId);
  if(!order) {
    console.error(`ID:${orderId} is not found`)
    throw new Error();
  }
  order.status = "completed";
  return order;
}

// type narrowing
export function getPizzaDetail(indentifier: number | string): Pizza | undefined {
  if(typeof indentifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === indentifier.toLowerCase());
  } else if (typeof indentifier === "number") {
    return menu.find(pizza => pizza.id === indentifier);
  } else {
    throw new TypeError("Parameter `identifier` must be either a string or a number")
  }
}
getPizzaDetail("Veggie");

addNewPizza({ name: "Chicken Bacon Ranch", price :12 });
addNewPizza({ name: "BBQ Chicken", price :12 });
addNewPizza({ name: "Spicy Sausage", price :11 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderHistory);



