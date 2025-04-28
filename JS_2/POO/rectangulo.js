import Punto from './punto.js';

class Rectangulo{
    constructor(v1, v3) {
        // Asignación de los vértices 1 y 3
        this._vertice1 = v1;
        this._vertice3 = v3;

        // Calcular los vértices 2 y 4 (ya que la base es horizontal)
        this._vertice2 = new Punto(v3.x, v1.y); // Vértice 2 (mismo Y que v1 y mismo X que v3)
        this._vertice4 = new Punto(v1.x, v3.y); // Vértice 4 (mismo X que v1 y mismo Y que v3)

        // Calcular los lados, área y perímetro
        this._ladoUno = Math.abs(v1.x - v3.x); // Distancia horizontal
        this._ladoDos = Math.abs(v1.y - v3.y); // Distancia vertical

        // Área y perímetro
        this._area = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }

    get area(){
        return this._area;
    }

    get perimetro(){
        return this._perimetro;
    }

    toString() {
        return ` 
            Vértice 1: (${this._vertice1.x}, ${this._vertice1.y}),
            Vértice 2: (${this._vertice2.x}, ${this._vertice2.y}),
            Vértice 3: (${this._vertice3.x}, ${this._vertice3.y}),
            Vértice 4: (${this._vertice4.x}, ${this._vertice4.y}),
            Lado Uno: ${this._ladoUno},
            Lado Dos: ${this._ladoDos},
            Área: ${this._area},
            Perímetro: ${this._perimetro}.`;
    }
};

// Crear puntos para los vértices
let v1 = new Punto(0, 0); // Vértice 1 (0, 0)
let v3 = new Punto(5, 3); // Vértice 3 (5, 3)

// Crear el rectángulo con los vértices 1 y 3
let rectangulo = new Rectangulo(v1, v3);

// Mostrar el resultado en consola
console.log(rectangulo.toString());