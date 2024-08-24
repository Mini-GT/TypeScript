type Pizza = {
  id: number,
  name: string,
  price: number,
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed",
}

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 0;
const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
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

function completeOrder(orderId: number) {
  const order = orderHistory.find(order => order.id === orderId);
  if(!order) {
    console.error(`ID:${orderId} is not found`)
    throw new Error();
  }
  order.status = "completed";
  return order;
}

// type narrowing
export function getPizzaDetail(indentifier: number | string) {
  let pizzaDetail: Pizza | undefined;
  if(typeof indentifier === "string") {
    pizzaDetail = menu.find(pizza => pizza.name.toLowerCase() === indentifier.toLowerCase());
  } else {
    pizzaDetail = menu.find(pizza => pizza.id === indentifier);
  }
  if(!pizzaDetail) {
    console.error("Cannot find pizza");
  }
  console.log("Pizza detail", pizzaDetail);
}
getPizzaDetail("Veggie");

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price :12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price :12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price :11 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderHistory);



