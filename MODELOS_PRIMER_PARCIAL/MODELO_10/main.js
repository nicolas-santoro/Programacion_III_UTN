const listaContactos = document.getElementById("listaContactos");
const formulario = document.getElementById("formulario");
const nombreContacto = document.getElementById("nombreContacto");
const mailContacto = document.getElementById("mailContacto");
const telefonoContacto = document.getElementById("telefonoContacto");

let contactos = [];

const cargarContactos = async () => {
    try {
        const respuesta = await fetch('./contactos.json');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        contactos = await respuesta.json();
        console.log('Contactos cargados:', contactos);
    } 
    
    catch (error) {
        console.error('Error al cargar los contactos:', error);
        contactos = [];
    }
};

const mostrarContactos = () => {
    listaContactos.innerHTML = "";

    contactos.forEach((contacto) => {
        const li = document.createElement("li");

        li.innerHTML = `<span>${contacto.nombre} - ${contacto.telefono} - ${contacto.email}</span>
                        <button class="eliminar" data-id="${contacto.id}">🗑️</button>`;

        listaContactos.appendChild(li);
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            eliminarContacto(id);
        });
    });
};

const agregarContacto = (e) => {
    e.preventDefault();

    const nombre = nombreContacto.value.trim();
    const telefono = telefonoContacto.value;
    const email = mailContacto.value;

    if (!nombre || !telefono || !email) {
        alert("Por favor, complete todos los campos");

        return;
    }

    const nuevoContacto = {
        id: Date.now(),
        nombre,
        telefono,
        email
    };

    contactos.push(nuevoContacto);
    mostrarContactos();
    formulario.reset();
};

const eliminarContacto = (id) => {
    contactos = contactos.filter(contacto => contacto.id !== id);
    mostrarContactos();
};

document.addEventListener("DOMContentLoaded", async () => {
    await cargarContactos();
    mostrarContactos();
    formulario.addEventListener("submit", agregarContacto);
});