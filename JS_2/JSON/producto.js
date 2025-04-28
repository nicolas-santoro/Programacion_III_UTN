class Producto {
    codigo_barras;
    nombre;
    precio;
    fecha_vencimiento;

    constructor (codigo_barras, nombre, precio, fecha_vencimiento){
        this.codigo_barras = codigo_barras;
        this.nombre = nombre;
        this.precio = precio;
        this.fecha_vencimiento = fecha_vencimiento;
    }
}

let producto = new Producto(1234567890123, "Poción", 505, "2026-12-31");


const productoJSON = JSON.stringify(producto, null, 2);

console.log(productoJSON);

export default Producto;