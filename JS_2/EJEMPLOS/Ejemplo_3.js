class Vehiculo {
    #marca;

    constructor(marca, color){
        this.#marca = marca;
    }

    toString() {
        return `Marca del auto: ${this.#marca}.`;
    }
}


class Auto extends Vehiculo {
    color;

    constructor(marca, color){
        super(marca);
        this.color = color;
    }

    toString(){
        return `Marca y color del auto:\n ${super.toString()}\n Color del auto: ${this.color}.`;
    }
}

const auto = new Auto("Chevrolet", "Azul");
console.log(auto.toString());


class Abstracta {
    constructor(){
        if (this.constructor === Abstracta){
            throw new Error("NO SE PUEDE INSTANCIAR UNA CLASE ABSTRACTA");
        }
    }
}

class Concreta extends Abstracta {
    constructor (){
        super();
    }
}

const objConc = new Concreta();
//const objAbs = new Abstracta(); Tira el error de la clase Abstracta