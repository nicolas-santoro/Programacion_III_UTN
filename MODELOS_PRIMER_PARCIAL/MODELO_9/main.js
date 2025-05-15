const form = document.getElementById("formEncuesta");
const enviarBtn = document.getElementById("enviarBtn");
const mensajeExito = document.getElementById("mensajeExito");

let preguntas = [];

const cargarPreguntas = async () => {
    try {
        const res = await fetch("encuesta.json");

        if (!res.ok) throw new Error("No se pudo cargar la encuesta.");
            preguntas = await res.json();
            mostrarPreguntas();
    } 
    
    catch (err) {
        form.innerHTML = "<p>Error al cargar la encuesta.</p>";
        console.error(err);
    }
};

const mostrarPreguntas = () => {
    preguntas.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("pregunta");
        div.innerHTML = `<p><strong>${item.pregunta}</strong></p>`;

        const opciones = document.createElement("div");
        opciones.classList.add("opciones");

        item.opciones.forEach((opcion, i) => {
            const idRadio = `pregunta-${item.id}-opcion-${i}`;
            opciones.innerHTML += `
                <label>
                <input type="radio" name="pregunta-${item.id}" value="${opcion}" id="${idRadio}">
                ${opcion}
                </label>`;
        });

        div.appendChild(opciones);
        form.appendChild(div);
    });
};

enviarBtn.addEventListener("click", async () => {
    const respuestas = {};

    let validado = true;

    preguntas.forEach((p) => {
        const seleccionada = form.querySelector(`input[name="pregunta-${p.id}"]:checked`);
        if (!seleccionada) {
            validado = false;
        } 

        else {
            respuestas[p.id] = seleccionada.value;
        }
    });

    if (!validado) {
        alert("Por favor, respondé todas las preguntas.");
        return;
    }

    try {
        // Simulación de envío con fetch
        const res = await fetch("respuesta.json", {
        method: "POST",
        body: JSON.stringify(respuestas),
        headers: { "Content-Type": "application/json" }
        });

        mensajeExito.classList.remove("oculto");
        enviarBtn.disabled = true;
    } 
    
    catch (err) {
        alert("Ocurrió un error al enviar la encuesta.");
        console.error(err);
    }
});

// Cargar al inicio
document.addEventListener("DOMContentLoaded", cargarPreguntas);