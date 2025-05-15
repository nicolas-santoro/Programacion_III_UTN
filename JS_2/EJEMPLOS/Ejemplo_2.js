class Usuario {
    nombre; // Público
    #dni; // Protegido
    _edad; // Privado
    static estatico;

    constructor(nombre, dni){
        this.nombre = nombre;
        this.#dni = dni;
        this._edad = 0;
        Usuario.estatico = "valor estático";
    }

    get edad(){
        return this._edad;
    }

    set edad(value){
        if (value.length > 0){
            console.log("Ingrese una edad mayor a cero.");

            return;
        }

        this._edad = value;
    }

    get dni(){
        return this.#dni;
    }

    saludar(){
        console.log(`Hola ${this.nombre}!!!\n Tu DNI es: ${this.#dni}.\n Tu edad es de ${this._edad} años.`);
    }

    static saludarEstatico(obj){
        obj.saludar;
    }
}

const obj = new Usuario("Nicolás", 47297658);

//console.log(obj.#dni); Error, es privado

console.log(obj.dni);
console.log(obj.nombre);

obj.nombre = "Lucio";
console.log(obj.nombre);

console.log(obj.dni);
obj.dni = 0;
console.log(obj.dni); // No cambia. Es solo lectura

obj.edad = 18;

obj.saludar();