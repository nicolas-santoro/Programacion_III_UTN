const listaEventos = document.getElementById("listaEventos");
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombreEvento");
const fechaInput = document.getElementById("fechaEvento");

let eventos = [];

const cargarEventos = async () => {
    try {
        const respuesta = await fetch('./eventos.json');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        eventos = await respuesta.json();
        console.log('Eventos cargados:', eventos);
    } catch (error) {
        console.error('Error al cargar los eventos:', error);
        eventos = [];
    }
};

const mostrarEventos = () => {
    listaEventos.innerHTML = "";
    const hoy = new Date();

    eventos.forEach((evento) => {
        const li = document.createElement("li");

        const fechaEvento = new Date(evento.fecha);
        const esPasado = fechaEvento < hoy.setHours(0, 0, 0, 0);
        li.classList.add(esPasado ? "pasado" : "futuro");

        li.innerHTML = `<span>${evento.nombre} - ${evento.fecha}</span>
                        <button class="eliminar" data-id="${evento.id}">🗑️</button>`;

        listaEventos.appendChild(li);
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            eliminarEvento(id);
        });
    });
};

const agregarEvento = (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const fecha = fechaInput.value;

    if (!nombre || !fecha) {
        alert("Por favor, complete todos los campos");
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < hoy) {
        alert("No se pueden agregar eventos pasados...");
        return;
    }

    const nuevoEvento = {
        id: Date.now(),
        nombre,
        fecha
    };

    eventos.push(nuevoEvento);
    mostrarEventos();
    formulario.reset();
};

const eliminarEvento = (id) => {
    eventos = eventos.filter(evento => evento.id !== id);
    mostrarEventos();
};

document.addEventListener("DOMContentLoaded", async () => {
    await cargarEventos();
    mostrarEventos();
    formulario.addEventListener("submit", agregarEvento);
});