import FiguraGeometrica from "./figura_geometrica.js";

class Rectangulo extends FiguraGeometrica {
    _altura;
    _base;

    constructor(altura, base){
        super();
        this._altura = altura;
        this._base = base;

        this.calcularDatos();
    }

    calcularDatos() {
        this._superficie = (this._altura * this._base) / 2;

        // Calcular la hipotenusa usando el teorema de Pitágoras
        const hipotenusa = Math.sqrt(this._base ** 2 + this._altura ** 2);

        // Calcular el perímetro
        this._perimetro = this._base + this._altura + hipotenusa;
    }

    dibujar() {
        let figura = '';
        for (let i = 1; i <= this._altura; i++) {
          for (let j = 1; j <= i; j++) {
            figura += '*';
          }
          figura += '\n';
        }
        return figura;
    }

    toString(){
        return super.toString() + '\n' +
               `Base: ${this._base}\n` +
               `Altura: ${this._altura}\n` +
               `Figura:\n${this.dibujar()}`;
    }
}

const rectangulo = new Rectangulo(10, 5);

console.log(rectangulo.toString());