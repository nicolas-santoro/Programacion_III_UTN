const listaFotos = document.getElementById("listaFotos");

let fotos = [];

const cargarFotos = async () => {
    try {
        const respuesta = await fetch('imagenes.json');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        fotos = await respuesta.json();
        console.log('Fotos cargadas:', fotos);
    } 
    
    catch (error) {
        console.error('Error al cargar las fotos:', error);
        fotos = [];
    }
};

const mostrarFotos = () => {
    listaFotos.innerHTML = "";

    fotos.forEach((foto) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${foto.url}" alt="${foto.titulo}">
            <h5>${foto.titulo}</h5>
            <button class="eliminar" data-id="${foto.id}">🗑️</button>
        `;

        listaFotos.appendChild(div);
    });

    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (confirm("¿Estás seguro de que querés eliminar esta foto?")){
                alert("¡Foto eliminada correctamente!");
                const id = parseInt(e.target.dataset.id);
                eliminarFoto(id);
            } else {
                alert("Eliminación cancelada...");
            }
        });
    });
};

const eliminarFoto = (id) => {
    const fotoElemento = document.querySelector(`button[data-id="${id}"]`).parentElement;
    
    fotoElemento.classList.add("saliendo");

    setTimeout(() => {
        fotos = fotos.filter(foto => foto.id !== id);
        mostrarFotos();
    }, 300); // Esperamos que la animación termine
};

// ⬇️ Esto es lo que te faltaba
document.addEventListener("DOMContentLoaded", async () => {
    await cargarFotos();
    mostrarFotos();
});