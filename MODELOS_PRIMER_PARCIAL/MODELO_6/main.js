document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación de campos vacíos
    if (!nombre || !mail || !mensaje) {
      mostrarMensaje("Por favor completá todos los campos.", "error");
      return;
    }

    try {
      // Simulación de envío con fetch
      const respuesta = await fetch("respuesta.json");
      if (!respuesta.ok) throw new Error("Error en el envío");

      mostrarMensaje("¡Formulario enviado correctamente! ✅", "exito");
      formulario.reset(); // Opcional: limpia el formulario
    } catch (error) {
      mostrarMensaje("Hubo un error al enviar. Intentá de nuevo. ❌", "error");
    }
  });

  function mostrarMensaje(texto, tipo) {
    // Elimina mensaje anterior si hay
    const mensajeExistente = document.querySelector(".mensaje-estado");
    if (mensajeExistente) mensajeExistente.remove();

    const div = document.createElement("div");
    div.textContent = texto;
    div.className = `mensaje-estado ${tipo}`;
    formulario.appendChild(div);
  }
});