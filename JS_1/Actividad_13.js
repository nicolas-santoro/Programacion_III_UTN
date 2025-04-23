function obtenerSumaMaxima(arr) {
    let maxSuma = 0;
    let sumaActual = 0;

    for (let num of arr) {
        sumaActual += num;

        if (sumaActual > maxSuma) {
            maxSuma = sumaActual;
        }

        if (sumaActual < 0) {
            sumaActual = 0;
        }
    }

    return console.log(maxSuma);
}


obtenerSumaMaxima([1, -3, 5, 7, -2, 4]); // 14
obtenerSumaMaxima([-1, 2, 3, -9]) //5
obtenerSumaMaxima([2, -1, 2, 3, -9]) //6
obtenerSumaMaxima([-1, 2, 3, -9, 11]) //11
obtenerSumaMaxima([-2, -1, 1, 2]) //3
obtenerSumaMaxima([100, -9, 2, -3, 5]) //100
obtenerSumaMaxima([1, 2, 3]) //6
obtenerSumaMaxima([-1, -2, -3]) // 0