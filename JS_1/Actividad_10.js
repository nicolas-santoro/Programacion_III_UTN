let estilos = ["Jazz", "Blues"];

console.log(estilos);


estilos.push("Rock-n-Roll");

console.log(estilos);


// Calcula la posición media del array
const mitad = Math.floor(estilos.length / 2);

// Inserta la nueva fruta en la mitad
estilos.splice(mitad, 1, "Heavy Metal");

console.log(estilos);


estilos.shift();

console.log(estilos);


estilos.unshift("Rap", "Reggae");

console.log(estilos);