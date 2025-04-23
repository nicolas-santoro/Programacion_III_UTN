function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
        return cadena.slice(0, longitud - 1) + '…'; // Restamos 1 para incluir el "…"
    }

    return cadena; // Si la cadena no excede la longitud, la devolvemos tal cual.
    }

console.log(truncate("Este es un texto muy largo que vamos a truncar", 20));
// Salida: "Este es un texto mu…"

console.log(truncate("Hola", 10));
// Salida: "Hola" (sin truncar)

console.log(truncate("JavaScript", 5));
// Salida: "Java…"