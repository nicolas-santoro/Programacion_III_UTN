const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar() {
  rl.question("Escribí un número (o 'N' para terminar): ", (respuesta) => {
    if (respuesta.toUpperCase() === "N") {
      rl.close();

      return;
    }

    const numero = parseInt(respuesta);

    if (isNaN(numero)) {
      console.log("No es un número válido...");
    } 
    
    else {
      console.log(numero % 2 === 0 ? `El número ${numero} es PAR` : `El número ${numero} es IMPAR`);
    }

    // Volvemos a preguntar
    preguntar();
  });
}

preguntar();