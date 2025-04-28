export class FiguraGeometrica {
    // Atributos protegidos
    _superficie = 0;
    _perimetro = 0;

    constructor() {
        if (new.target === FiguraGeometrica) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
    }

    calcularDatos() {
        throw new Error("El método 'calcularDatos' debe ser implementado en la subclase...");
    }

    dibujar() {
        throw new Error("El método 'dibujar' debe ser implementado en la subclase...");
    }

    toString() {
        return `Superficie: ${this._superficie}\n` + 
        `Perímetro: ${this._perimetro}`;
    }

    get superficie() {
        return this._superficie;
    }

    get perimetro() {
        return this._perimetro;
    }
}

export default FiguraGeometrica;