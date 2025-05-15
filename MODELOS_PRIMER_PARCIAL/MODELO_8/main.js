const listaPeliculas = document.getElementById("listaPeliculas");

let peliculas = [];

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch('peliculas.json');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo JSON");

        peliculas = await respuesta.json();
        console.log('Fotos cargadas:', peliculas);
    } 
    
    catch (error) {
        console.error('Error al cargar las peliculas:', error);
        peliculas = [];
    }
};

const mostrarPeliculas = () => {
    listaPeliculas.innerHTML = "";

    peliculas.forEach((pelicula) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${pelicula.img}" alt="${pelicula.titulo}">
            <h5>${pelicula.titulo}</h5>
            <button class="votar" data-id="${pelicula.id}">✅</button>
        `;

        listaPeliculas.appendChild(div);
    });

    document.querySelectorAll(".votar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (confirm("¿Estás seguro de que querés votar a esta pelicula?")){
                const id = parseInt(e.target.dataset.id);
                mostrarSoloPeliculaVotada(id);
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                });
            } 
            
            else {
                alert("Votación cancelada...");
            }
        });
    });
};

const mostrarSoloPeliculaVotada = (id) => {
    const peliculaSeleccionada = peliculas.find(p => p.id === id);

    if (!peliculaSeleccionada) return;

    // Limpiar la lista
    listaPeliculas.innerHTML = "";

    // Crear el elemento con la película votada
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${peliculaSeleccionada.img}" alt="${peliculaSeleccionada.titulo}">
        <h5>${peliculaSeleccionada.titulo}</h5>
        <p>✅ ¡Gracias por votar!</p>
        <button id="volver">🔁 Volver a ver todas</button>
    `;

    listaPeliculas.appendChild(div);

    // Evento para volver a mostrar todas las películas
    document.getElementById("volver").addEventListener("click", mostrarPeliculas);
};

document.addEventListener("DOMContentLoaded", async () => {
    await cargarPeliculas();
    mostrarPeliculas();
});