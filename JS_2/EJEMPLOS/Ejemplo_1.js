const persona = {"nombre": "Nicolás", "edad": 18};

console.log(persona);


let cadenaJSON = `objeto = ${persona.nombre} - ${persona.edad}`;

console.log(cadenaJSON);


cadenaJSON = `array = ${persona["nombre"]} - ${persona["edad"]}`;

console.log(cadenaJSON);


persona.appelido = "Santoro";

persona.dni = 47297658;

console.log(persona);


delete persona.dni;

console.log(persona);

const otraPersona = JSON.parse(`{"prop_1": "valor_1", "prop_2": "valor_2"}`);

console.log(otraPersona);

otraPersona.prop_3 = "valor_3";

console.log(otraPersona);

let otraCadenaJSON = JSON.stringify(otraPersona);

console.log(otraCadenaJSON);

const personas = [
    {"nombre": "Nicolás", "edad": 18},
    {"nombre": "Lucio", "edad": 18},
    {"nombre": "Matías", "edad": 19}
];

console.log(personas);

personas.forEach(p => {
    console.log(p);
});

for (let index = 0; index < personas.length; index++){
    const p = personas[index];

    console.log(p);
};

let cadena = "";

const personaFunc = {
    "nombre": "Nicolás",
    "edad": 18,
    "saludar": function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años.\n`;
    }
}

cadena = personaFunc.saludar();

console.log(cadena)


personaFunc.amigos = [
    {"nombre": "Lucio", "edad": 18},
    {"nombre": "Matías", "edad": 19}
];

personaFunc.saludarAmigos = function(){
    let ret = "";

    for (let i = 0; i < this.amigos.length; i++){
        ret += `Hola soy ${this.amigos[i].nombre} y tengo ${this.amigos[i].edad} años.\n\n`
    };

    return ret;
};

console.log(personaFunc.saludarAmigos());