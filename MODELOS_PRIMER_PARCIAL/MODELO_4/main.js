const listaTareas = document.getElementById("listaTareas");
const formulario = document.getElementById("formulario");
const tareaQueHacer = document.getElementById("tareaQueHacer");

let tareas = [];

const cargarTareas = async () => {
    try {
        const respuesta = await fetch('tareas.json');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        tareas = await respuesta.json();
        console.log('Tareas cargadas:', tareas);
    } 
    
    catch (error) {
        console.error('Error al cargar las tareas:', error);
        tareas = [];
    }
};

const mostrarTareas = () => {
    listaTareas.innerHTML = "";

    tareas.forEach((tarea) => {
        const ul = document.createElement("ul");

        ul.innerHTML = `<button class="completar" data-id="${tarea.id}">
                        ${tarea.completada ? '✅' : '❌'}
                        </button>
                        <span style="text-decoration: ${tarea.completada ? 'line-through' : 'none'}; color: ${tarea.completada ? 'gray' : 'black'}">
                            ${tarea.texto}
                        </span>
                        <button class="eliminar" data-id="${tarea.id}">🗑️</button>`;

        listaTareas.appendChild(ul);
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (confirm("¿Estás seguro de que querés eliminar esta tarea?")){
                alert("¡Tarea eliminada correctamente!")
                const id = parseInt(e.target.dataset.id);
                eliminarTarea(id);
            }

            else{
                alert("Eliminación cancelada...")
            }
        });
    });

    document.querySelectorAll(".completar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            completarTarea(id);
        });
    });
};

const agregarTarea = (e) => {
    e.preventDefault();

    const texto = tareaQueHacer.value;
    const completada = false;

    if (!texto) {
        alert("Por favor, complete correctamente el campo");

        return;
    }

    const nuevaTarea = {
        id: Date.now(),
        texto,
        completada
    };

    tareas.push(nuevaTarea);
    mostrarTareas();
    formulario.reset();
};

const eliminarTarea = (id) => {
    tareas = tareas.filter(tarea => tarea.id !== id);
    mostrarTareas();
};

const completarTarea = (id) => {
    tareas = tareas.map(tarea => {
        if (tarea.id === id) {
            return {
                ...tarea,
                completada: !tarea.completada
            };
        }
        return tarea;
    });

    mostrarTareas();
};

document.addEventListener("DOMContentLoaded", async () => {
    await cargarTareas();
    mostrarTareas();
    formulario.addEventListener("submit", agregarTarea);
});