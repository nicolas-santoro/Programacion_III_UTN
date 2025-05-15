// 1. Función básica (sin parámetros)
function saludar() {
    console.log("¡Hola Mundo!");
  }
  
saludar(); // 👉 "¡Hola Mundo!"
  
  
// 2. Función con parámetros predeterminados
function saludarConNombre(nombre = "desconocido") {
    console.log(`¡Hola, ${nombre}!`);
}

saludarConNombre("Nico");   // 👉 "¡Hola, Nico!"
saludarConNombre();         // 👉 "¡Hola, desconocido!"


// 3. Función con parámetros REST (para recibir muchos valores)
function sumarNumeros(...numeros) {
    let suma = 0;

    numeros.forEach(num => suma += num);

    console.log("La suma es:", suma);
}

sumarNumeros(5, 10);           // 👉 "La suma es: 15"
sumarNumeros(1, 2, 3, 4, 5);   // 👉 "La suma es: 15"


// Función flecha que calcula el cuadrado de un número
const cuadrado = num => num * num;

console.log(cuadrado(5)); // 👉 25


const saludarConHora = (nombre) => {
    const hora = new Date().getHours();
    
    return `Hola, ${nombre}. Son las ${hora}hs`;
};
  
console.log(saludarConHora("Nico"));

// Función para poner todo en mayúsculas
const aMayusculas = (texto) => texto.toUpperCase();

console.log(aMayusculas("hola mundo")); // 👉 "HOLA MUNDO"


// Función para poner todo en minúsculas
const aMinusculas = (texto) => texto.toLowerCase();

console.log(aMinusculas("HOLA MUNDO")); // 👉 "hola mundo"


// Función para capitalizar una oración / palabra (Para un título, por ejemplo)
const capitalizar = (texto) => {
  return texto
    .toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
};

console.log(capitalizar("hola mundo javascript")); // 👉 "Hola Mundo Javascript"