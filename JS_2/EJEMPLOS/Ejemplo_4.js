const mascotas = [
    {
        "nombre": "Eva",
        "edad": 10
    },
    {
        "nombre": "Máxima",
        "edad": 12
    },
    {
        "nombre": "Poli",
        "edad": 13
    }
];

let nombresMascotas = mascotas.map((mascota, indice, mascotas) => mascota.nombre);
console.log(nombresMascotas);