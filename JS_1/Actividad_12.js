function esPalindromo(cadena) {
    // Normaliza: pasamos a minúsculas, quitamos espacios y acentos
    let normalizada = cadena
        .toLowerCase()
        .normalize("NFD")                     // separa acentos
        .replace(/[\u0300-\u036f]/g, "")     // elimina acentos
        .replace(/[^a-z0-9]/g, "");          // elimina espacios y signos

    // Invierte la cadena
    let invertida = normalizada.split('').reverse().join('');

    // Compara
    if (normalizada === invertida) {
        console.log("La cadena ES un palíndromo.");
    } 
    
    else {
        console.log("La cadena NO es un palíndromo.");
    }
}

// Ejemplos de prueba
esPalindromo("La ruta nos aporto otro paso natural");  // ✅ palíndromo
esPalindromo("Hola mundo");                            // ❌ no palíndromo