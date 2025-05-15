// (1)
const numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

// Forma tradicional:
for (let i = 0; i < numeros.length; i++){
    cuadrados[i] = numeros[i] * numeros[i];
}

console.log(cuadrados);

// Con MAP:
cuadrados = numeros.map(function (numero){
    return numero * numero;
})

console.log(cuadrados);

// Con MAP y el ¨=>¨:
cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);


// (2)
const productos = [
    {id: 1, nombre: "Remera", },
    {id: 2, nombre: "Zapatilla", },
    {id: 3, nombre: "Zapato", },
    {id: 4, nombre: "Short", }
];