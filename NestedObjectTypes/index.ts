type Address = {
  street: string,
  city: string,
  country: string
}

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  //putting "?" beside the property will make it optional so not all person needs an address, but it will reduce the type safety
  address?: Address,
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
}

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "456 Main",
    city: "Wheretown",
    country: "UK"
  }
}

function displayInfo(person: Person) {
  // if(!person.address) {
  //   console.log(`${person.name} address is not found`)
  //   return
  // }
  console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)
// displayInfo(person2)


