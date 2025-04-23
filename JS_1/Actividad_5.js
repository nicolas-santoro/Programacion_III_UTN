const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número: ", (num) => {
  const numero = Number(num);
  
  rl.question("Ingrese un texto (opcional, puede dejarlo en blanco): ", (texto) => {
    if (texto.trim() !== "") {
      for (let i = 0; i < numero; i++) {
        console.log(texto);
      }
    } 
    
    else {
      console.log(1 / numero);
    }

    rl.close();
  });
});