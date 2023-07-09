console.log("************** DELIVERABLE 03 *********************");
/*
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
*/
console.log("CLONE")
interface objeto {
  name: string;
  address: string;
}

const obj: objeto = {
    name: "aaa",
    address: "xxxx",
  };
  
  const clone = (source: objeto) => {
    let copySource = { ...source };
    return copySource;
  };
  
  let copy = clone(obj);
  console.log(copy);
  
  console.log('...........................');

  /*
Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:

*/
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
/*
el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
TIP: Puedes usar la función "clone" del apartado A.
*/
console.log("MERGE")
const merge = (source, target) => {
  for (const prop in source) {
    let namePropertySource = `${prop}`;
    for (const prop in target) {
      if (namePropertySource === `${prop}`) {
        delete target[namePropertySource];
      }
    }
  }
  let copySource = { ...source, ...target };
  return copySource;
};

console.log(merge(a, b));

console.log('...........................');

function merge2(source, target){
  const mixing = {
    ...target,
    ...source
  }
  console.log(mixing)
}

console.log(merge2(a, b));