function crearArray(...numeros){
    let lista = [];

    for (let i = 0; i < numeros.length; i++){
        lista.push(numeros[i])
    }

    return lista;
}

console.log(crearArray(15, 16, 17, 18, 19, 20))