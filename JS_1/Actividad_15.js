// Función para sumar los dígitos de un número
function sumaDigitos(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
// Función para obtener los factores primos de un número
function obtenerFactoresPrimos(num) {
    const factores = [];

    let divisor = 2;

    while (divisor <= num) {
        while (num % divisor === 0) {
            factores.push(divisor);
            num /= divisor;
        }

        divisor++;
    }

    return factores;
}
  
// Función para verificar si un número es un número de Smith
function esNumeroDeSmith(num) {
    if (num < 2) return false; // Los números menores a 2 no pueden ser números de Smith

    // Sumar los dígitos del número original
    const sumaOriginal = sumaDigitos(num);

    // Obtener los factores primos del número y sumar sus dígitos
    const factores = obtenerFactoresPrimos(num);
    
    const sumaFactores = factores.reduce((sum, factor) => sum + sumaDigitos(factor), 0);

    // Comparar las dos sumas
    return sumaOriginal === sumaFactores;
}
  
// Ejemplo de uso
console.log(esNumeroDeSmith(378)); // true
console.log(esNumeroDeSmith(22));  // true
console.log(esNumeroDeSmith(28));  // false  