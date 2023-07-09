console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("------------------------------------");
/*101*/
console.log("Ejercicio 101");
/*
Biggest Word
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

function biggestWord(phrase) {
  // Implementation here
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
*/

function biggestWord(phrase) {
  let fraseSeparada = phrase.split(" ");
  let wordLargest = "";
  for (const word of fraseSeparada) {
    if (word.length > wordLargest.length) {
      wordLargest = word;
    }
  }
  console.log(wordLargest);
}

biggestWord("mundo hola aaaaaaaaaaaaaa");

console.log("------------------------------------");

/*102*/
console.log("Ejercicio 102");
/*
  Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};
Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4
function printAverage(classResults) {
  // Implementation here.
}
TIP: Rompe en tantas funciones auxiliares como necesites.

TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto. En Array.prototype también cuentas con otro método que podría resultarte útil para transformar un array a un único valor.
*/

function objectLenght(obj) {
  obj = Object.keys(obj).length;
  return obj;
}

function printAverage(eso2o) {
  let notaTotal = 0;
  for (let nota in eso2o) {
    let notas = eso2o[nota];
    notaTotal = notaTotal + notas;
  }
  let result = notaTotal / objectLenght(eso2o);
  switch (true) {
    case result >= 9:
      console.log("sobresaliente");
      break;
    case result >= 7:
      console.log("muy bien");
      break;
    case result >= 6:
      console.log("bien");
      break;
    case result >= 5:
      console.log("aprobado");
      break;
    case result < 5:
      console.log("suspendido");
      break;
  }
  console.log(result);
}

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

printAverage(eso2o);

console.log("------------------------------------");

/*103*/
console.log("Ejercicio 103");
/*
Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.

TIP: Piensa en el operador ternario y también en el operador OR.

TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.

function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}
*/

const f = (input: string) => {
  input === (null || undefined) ? console.log("unknown") : console.log(input);
};

f("aaaa");

console.log("------------------------------------");

/*104*/ //
console.log("Ejercicio 104");
console.log("Ejercicio de entregables Nº3");
/*
Apartado A
Implementa una función clone que devuelva un objeto clonado a partir de otro:

function clone(source) {
  // Implementation here.
}
Apartado B
Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

TIP: Usa la función clone del apartado A.

function merge(source, target) {
  // Implementation here.
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
*/

const clone1 = (source) => ({ ...source });

clone1({ name: "hola", age: 12 });

const merge1 = (source, target) => {
  for (const prop in Object) {
    for (const prop in Object) {
    }
  }
};

console.log("------------------------------------");

/*105*/
console.log("Ejercicio 105");
/*
Deep Equal
Apartado A
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene o no una propiedad concreta. Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso contrario false.

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
 ... // Implementation here
}

console.log(isEqual(user, clonedUser)); // true
*/

const isEqual = (a, b) => {
  let result: boolean;
  for (const prop in a) {
    let nameProperty = prop;
    result = b.hasOwnProperty(nameProperty);
    if (result === false) {
      break;
    }
  }
  console.log(result);
};

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

isEqual(user, clonedUser);

console.log("------------------------------------");

//PENDIENTE

/*
Apartado B
Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

TIP: Recuerda que el operador typeof en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, typeof 12 // "number" o typeof {} // "object".
*/
// var userB = {
//   name: "María",
//   age: 30,
//   address: { city: "Málaga", code: 29620 },
//   friends: ["Juan"],
// };
// var clonedUserB = {
//   name: "María",
//   age: 30,
//   address: { city: "Málaga", code: 29620 },
//   friends: ["Juan"],
// };

// function isDeepEqual(a, b) {
// }
// console.log(isDeepEqual(userB, clonedUserB)); // true

console.log("------------------------------------");

/*106*/
console.log("Ejercicio 106");
/*
Dices
Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

Hacer reset, poner a undefined o null ambos resultados.
Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
Imprimir el resultado por consola. Ten en cuenta lo siguiente:
Informa al usuario que debe tirar primero cuando corresponda.
Si saca doble 6, ¡dale un premio!
*/

function dados() {
   let primerDado: number = null;
    let segundoDado: number = null;
    alert("Tira los dados");
    function random() {
      primerDado = parseInt(Math.random() * (7 - 1) + 1);
      segundoDado = parseInt(Math.random() * (7 - 1) + 1);
      console.log(primerDado);
      console.log(segundoDado);
    }
    function premio() {
      if (primerDado === 6 && segundoDado === 6) {
        console.log("Has ganado un viaje a Bali!");
      }
    }
    random();
    premio();
  }

  dados();
console.log("------------------------------------");
/*107*/ //PENDIENTE
console.log("Ejercicio 107");
console.log(
  `Apartado A: El resultado será el primero undefined, porque no estan declaradas antes de llamarlas y el segundo "good job"`
);
console.log(
  "Apartado B: El resultado de a, sera 1 y el de b y c dará error, porque no se puede acceder desde fuera a valores de las funciones. Pero he visto al ejercutar el codigo que b es 4, porque???"
);
console.log("Apartado C: no entiendo el b");
console.log("------------------------------------");
/*108*/
console.log("Ejercicio 108");

/*
Includes
En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si un determinado valor figura entre los items de un array dado. Crea una función en ES5 con el mismo comportamiento, es decir, una función que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.

function includes(array, value) {
  // Implementation here
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
Challenge
El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que devuelve el índice de un elemento dado.

TIP: Consulta la documentación en MDN sobre los arrays:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

function includes(array, value) {
  let result = false;
  for (const word in array) {
    if (array[word] === value) {
      result = true;
    }
  }
  return result;
}

console.log(includes([1, 2, 3], 3));
console.log(includes([1, 2, 3], 0));

function includes2(array, value) {
  return array.includes(value);
}

console.log(includes2([1, 2, 3], 3));
console.log(includes2([1, 2, 3], 0));
console.log("------------------------------------");

console.log("Ejercicio 110");
console.log("Ejercicio de entregables Nº4");

console.log("------------------------------------");
/*111*/
console.log("Ejercicio 111");

/*
Reverse Text
Dado un texto cualquiera, invierte el orden de las palabras.

TIP: Se hace en 1 sola línea.

Ejemplo: "Uno dos tres" --> "tres dos Uno"
TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

function reverseText(text) {
  // Implementation here.
}
*/

const frase = "Uno dos tres";
const reverseText = (text) => text.split(" ").reverse().join(" ");
console.log(reverseText(frase));

/*112*/
console.log("Ejercicio 112");

/*
Subsets
Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

function subsets(word) {
  // Implementation here
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
Challenge
Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

let word = "message";
function string(word) {
  let arrayPrueba = [];
  for (const key in word) {
    let palabraMenosUnaLetra = word.slice(key);
    arrayPrueba.push(palabraMenosUnaLetra);
  }
  console.log(arrayPrueba);
}
string(word);

console.log("------------------------------------");
/*114*/
console.log("Ejercicio 114");
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

// function values(obj) {
//   // Implementation here
// }

// // Ejemplo:
// console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

function showProps(obj) {
  console.log(Object.values(obj));
}

const obj1 = {
  id: 31,
  duration: 310,
  name: "long video",
  format: "mp4",
};
showProps(obj1);

console.log("------------------------------------");
/*115*/
console.log("Ejercicio 115");

// Zip
// Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores. Asumir que el array de claves tiene como mínimo la misma longitud que el de valores:

// function zipObject(keys, values) {
//   // Implementation here
// }

// // Ejemplo
// console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}


//console.log(Array.from(map, (["spanish", "english", "french"], ["hola", "hi", "salut"]) => value));

function zipObject(languages, words) {
  let obj3 = {};
  languages.forEach(function (language, index) {
    if(words[index]){
      obj3[language] = words[index];
    }
  });
  console.log(obj3);
}

zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
 // {spanish: "hola", english: "hi", french: "salut"}
zipObject(["spanish", "english", "french"], ["hola", "hi"])

// Challenge
// Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.

// // Ejemplo:
// console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

console.log("Ejercicio 116");
console.log("------------------------------------");
// Descifra el siguiente secreto:
let secret1 =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  for (let i = 0; i <= secret.length; i++) {
    for (let x = 0; x < cipher.length; x++) {
      if (cipher[x] === secret[i]) {
        let frase = [];
        frase.push(plain[i]);
     
      } 
    
    }
    
  }
  console.log(frase);
}

function decrypt2(secret){
  let frase = ""
  for (let i = 0; i <= secret.length; i++) {
    let letra = plain[cipher.indexOf(secret[i])]
    letra ?  letra : letra = " ";
    frase = frase + letra;
  }
  return frase
}

console.log(decrypt2(secret1))