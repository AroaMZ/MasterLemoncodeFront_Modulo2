console.log("************** DELIVERABLE 02 *********************");

/*2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/

console.log("CONCAT")
const concat =<T>(...arrays: T[][]) => {
  let result: T[] = [];
  arrays.forEach((array: T[]) => {
    array.forEach((element: any) => {//Como evitaria el any?
      result = result + element; 
    });
  });
  return result;
};
let result = concat([123], [456]);
console.log(result);


// Implementation here.

/*Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/


console.log('...........................');