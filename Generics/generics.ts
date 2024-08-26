const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = [
  "raindrops on roses", 
  "whiskers on kittens", 
  "bright copper kettles", 
  "warm woolen mittens"
];

const voters = [
  { 
    name: "Alice", 
    age: 42 }, 
  { 
    name: "Bob", 
    age: 77 
  }]

  //`<Type>` is a generics type where we can use much safer than `: any`. 
  // the generic type feels like making our variables, 
  // existing functions, types etc. automatically creates types. 
  // we can see this if we hover getLastItem(voters) i.e (`getLastItem`) 
  // where it automatically creates types for us. 
  // also this is like a variable where we can name it anything we want.
function getLastItem<Type>(array: Type[]): Type | undefined{
  return array[array.length - 1]
};

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))