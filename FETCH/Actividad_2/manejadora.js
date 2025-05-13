document.addEventListener("DOMContentLoaded", () => {
    listarUsuarios();
});

function armarListadoHTML(params) {
    const usuarios = params.data;

    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Correo</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
    `;

    usuarios.forEach(({ id, email, first_name, last_name, avatar }) => {
        html += `
            <tr>
                <td>${id}</td>
                <td>${email}</td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td><img src="${avatar}" alt="Avatar de ${first_name}" width="50" height="50"></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}

let paginaActual = 1;

document.addEventListener("DOMContentLoaded", () => {
    listarUsuarios(paginaActual);

    document.getElementById("anterior").addEventListener("click", () => {
        if (paginaActual > 1) {
            paginaActual--;
            listarUsuarios(paginaActual);
        }
    });

    document.getElementById("siguiente").addEventListener("click", () => {
        paginaActual++;
        listarUsuarios(paginaActual);
    });
});

async function listarUsuarios(pagina) {
    try {
        const opciones = {
            method: "GET",
            headers: { "x-api-key": "reqres-free-v1" }
        };

        let res = await manejadorFetch(`${API_URL}users?page=${pagina}`, opciones);
        let resJSON = await res.json();

        if (pagina > resJSON.total_pages) {
            paginaActual = resJSON.total_pages;
            return;
        }

        document.querySelector("#listado").innerHTML = armarListadoHTML(resJSON);
    } catch (err) {
        alert(err);
    }
}