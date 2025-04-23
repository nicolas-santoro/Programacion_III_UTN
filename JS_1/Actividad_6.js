const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarNombreApellido(nombre, apellido){
    let n = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    let a = apellido.toUpperCase();
    console.log(`${n}, ${a}`);
}

rl.question("Ingrese su nombre: ", (nombre) => {
  rl.question("Ingrese su apellido: ", (apellido) => {
    mostrarNombreApellido(nombre, apellido)

    rl.close();
  });
});