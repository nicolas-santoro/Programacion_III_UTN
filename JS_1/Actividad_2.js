for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      continue; // Salta los pares
    }

    if (i > 15) {
      break; // Se detiene en el 15
    }

    console.log(i);
  }  