// Verificar si ya existe la colección en localStorage
let jotasones = JSON.parse(localStorage.getItem('jotasones'));

// Si no existe en localStorage, inicializar la colección con un primer objeto
if (!jotasones) {
    jotasones = [{
        id: 1,
        nombre: 'Producto 1',
        precio: 100,
        descripcion: 'Descripción del Producto 1'
    }];
    // Guardar la colección en localStorage
    localStorage.setItem('jotasones', JSON.stringify(jotasones));

    console.log('Datos guardados en localStorage por primera vez');

    alert('Se guardaron los datos por primera vez.');
} 

else {
    // Si ya existe la colección, mostrar los datos recuperados
    console.log('Datos recuperados de localStorage');

    alert('Los datos fueron recuperados del localStorage.');
}

// Mostrar el contenido completo en consola
console.log(jotasones);

// Agregar un nuevo elemento a la colección, incrementando el último id
const ultimoElemento = jotasones[jotasones.length - 1];
const nuevoId = ultimoElemento.id + 1;

const nuevoProducto = {
    id: nuevoId,
    nombre: `Producto ${nuevoId}`,
    precio: 100 + nuevoId * 10,  // Solo un incremento arbitrario para el precio
    descripcion: `Descripción del Producto ${nuevoId}`
};

// Agregar el nuevo producto a la colección
jotasones.push(nuevoProducto);

// Guardar la colección actualizada nuevamente en localStorage
localStorage.setItem('jotasones', JSON.stringify(jotasones));

// Informar el valor del último ID agregado
alert(`El último ID agregado es: ${nuevoId}`);

function reiniciarContenido(){
    if (jotasones && jotasones.length > 0){
        let confirmar = confirm("¿Estás seguro de que deseas reiniciar el contenido del LocalSorage?");
        
        if (confirmar) {
            localStorage.clear();

            jotasones = [];

            alert("El reinicio se ha efectuado correctamente!");

            console.log('Contenido actualizado del LocoalStorage:', jotasones);
        }
        
        else {
            alert("El reinicio ha sido cancelada...");

            console.log(jotasones);
        }
    }

    else {
        alert("Imposible reiniciar, no hay contenidos guardados...");

        console.log('Contenido actualizado del LocoalStorage:', jotasones);
    }
}

function eliminarJotason() {
    if (jotasones && jotasones.length > 0) {
        let id_eliminar;
        
        // Bucle para seguir pidiendo un ID válido
        do {
            id_eliminar = prompt("Ingrese el ID del JOTASON que desea eliminar:");

            // Convertir a número y verificar si es un número válido
            id_eliminar = Number(id_eliminar); // Convertir el valor ingresado a número

            if (isNaN(id_eliminar)) {
                alert("Por favor, ingrese un ID válido (número).");
            }
        } while (isNaN(id_eliminar)); // Si el ID no es un número, sigue pidiendo
        
        // Busca el JOTASON con el ID ingresado
        let jotason = jotasones.find(jotason => jotason.id === id_eliminar);

        if (jotason) {
            // Elimina el JOTASON encontrado usando splice para eliminarlo por su índice
            let index = jotasones.indexOf(jotason);

            if (index > -1) {
                jotasones.splice(index, 1);
            }

            // Actualiza localStorage
            localStorage.setItem('jotasones', JSON.stringify(jotasones));

            alert("JOTASON eliminado...");

            console.log('Contenido actualizado del LocalStorage:', jotasones);
        } 
        
        else {
            alert("JOTASON no localizado, no existe...");
        }
    } 
    
    else {
        alert("Imposible eliminar productos de una lista vacía...");
    }
}