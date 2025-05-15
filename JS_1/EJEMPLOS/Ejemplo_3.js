let frutas = ["manzana", "banana", "naranja"];

console.log("Array inicial:", frutas);

// push() - Agrega al final
frutas.push("sandía");

console.log("Después de push('sandía'):", frutas);

// pop() - Elimina el último
frutas.pop();

console.log("Después de pop():", frutas);

// unshift() - Agrega al inicio
frutas.unshift("kiwi");
console.log("Después de unshift('kiwi'):", frutas);

// shift() - Elimina el primero
frutas.shift();
console.log("Después de shift():", frutas);

// includes() - ¿Existe en el array?
console.log("¿Contiene 'banana'?", frutas.includes("banana")); // true

// indexOf() - Posición de un elemento
console.log("Índice de 'naranja':", frutas.indexOf("naranja")); // 1

// splice() - Eliminar y/o insertar
frutas.splice(1, 1, "mango");

console.log("Después de splice(1, 1, 'mango'):", frutas); // reemplaza 'naranja' por 'mango'

// slice() - Obtener una parte sin modificar original
let subArray = frutas.slice(0, 2);

console.log("slice(0, 2):", subArray); // ["manzana", "mango"]

// join() - Convertir a string separado por lo que quieras
let texto = frutas.join(" - ");

console.log("join(' - '):", texto);

// forEach() - Recorrer cada elemento
console.log("Listado de frutas:");

frutas.forEach((fruta, index) => {
  console.log(`${index + 1}. ${fruta}`);
});