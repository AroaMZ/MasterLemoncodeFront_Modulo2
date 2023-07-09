console.log("************** DELIVERABLE 01 *********************");
/* Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/
console.log("HEAD")
const head = <T>([...args]: T[]) => {
  const [first] = args;
  console.log(first);
}

//PORQUE NO FUNCIONA ESTA FUNCIÓN?
// const head2 = (arguments) => {
//   const [first] = arguments;
//   console.log(first);
// };

head([1, 2, 3]);

//head2([1, 2, 3]);

console.log("...........................");
/*
  Tail
  Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.*/
console.log("TAIL")
const tail =<T>([a, ...args]: T[]) => {
  console.log(...args);
}; // Implementation here.

tail([9, 8, 7]);

console.log("...........................");
/*
  Init
  Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.*/
console.log("INIT")
const init =<T>([...args]: T[]) => {
  args.pop();
  console.log(args);
}; // Implementation here.
init([1, 2, 3, 4, 5]);

console.log("...........................");
/*
  Last
  Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.*/
console.log("LAST")
const last =<T>(...args:T[]) => {
  const a = args.length;
  console.log(args[a - 1]);
}; // Implementation here.

last(1, 2, 3, 4, 77);

console.log("...........................");
