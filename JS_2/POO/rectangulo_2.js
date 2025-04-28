import FiguraGeometrica from "./figura_geometrica.js";

class Rectangulo extends FiguraGeometrica {
    _ladoUno;
    _ladoDos;

    constructor(lado1, lado2){
        super();
        this._ladoUno = lado1;
        this._ladoDos = lado2;

        this.calcularDatos();
    }

    calcularDatos() {
        this._superficie = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }

    dibujar(){
        let figura = '';
        
        for (let i = 0; i < this._ladoDos; i++) {
            for (let j = 0; j < this._ladoUno; j++) {
                figura += '*';  // Coloca un asterisco en cada posición
            }

            figura += '\n';  // Al finalizar cada fila, agrega un salto de línea
        }

        return figura;
    }

    toString(){
        return super.toString() + '\n' +
               `Base: ${this._ladoUno}\n` +
               `Altura: ${this._ladoDos}\n` +
               `Figura:\n${this.dibujar()}`;
    }
}

const rectangulo = new Rectangulo(10, 5);

console.log(rectangulo.toString());