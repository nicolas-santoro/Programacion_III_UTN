import Producto from './producto.js';

const productos = [
    new Producto("1111111111111", "Peluche de Pikachu", 4000, "2030-12-31"),
    new Producto("2222222222222", "Cartas Pokémon - Pack de 50", 2495, "2030-12-31"),
    new Producto("3333333333333", "Videojuego Pokémon Scarlet, Nintendo Switch", 6000, "2030-12-31")
];

const productosJSON = JSON.stringify(productos, null, 2);

console.log(productosJSON);

export default productos;