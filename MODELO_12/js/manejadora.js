document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mostrar").addEventListener("click", mostrarUsuarios);
    document.getElementById("mostrarChi").addEventListener("click", mostrarChilenos);
    document.getElementById("mostrarToc").addEventListener("click", mostrarTocayos);

    document.getElementById("formulario").addEventListener("submit", agregarUsuario);
});

async function mostrarUsuarios(){
    const panel = document.getElementById("panel-derecha");
    panel.innerHTML = "<div class='spinner-border text-primary' role='status'></div>";

    try{
        const res = await fetch("https://utnfra-api-usuarios.onrender.com/usuarios");
        const data = await res.json();

        let tabla = "<table class='table table-dark table-striped'>";
        tabla += "<thead><tr><th>#</th><th>Nombre</th><th>Correo</th><th>País</th><th>Acciones</th></tr></thead>";
        tabla += "<tbody>";

        data.forEach(user => {  
            tabla += `<tr>
                        <td><a href="#" onclick="cargarUsuario(${user.id})">${user.id}</a></td>
                        <td>${user.nombre}</td>
                        <td>${user.email}</td>
                        <td>${user.pais}</td>
                        <td><button type="button" class="btn btn-danger btn-sm" onclick="eliminarUsuario(${user.id})">Eliminar</button></td>
                    </tr>`;
        });

        tabla += "</tbody></table>";
        panel.innerHTML = tabla;
        
    }
    
    catch(error){
        alert("Error al cargar los usuarios");
        console.log(error);
    }
}

async function agregarUsuario(e) {
    e.preventDefault();

    if(!validarFormulario()) return;

    const usuario = obtenerDatosFormulario();

    try{
        const res = await fetch("https://utnfra-api-usuarios.onrender.com/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if(res.ok){
            mostrarUsuarios();
            limpiarFormulario();
        }
        
        else{
            alert("Error al agregar el usuario");
        }
        
    }
    
    catch(error){
        alert("Error al agregar el usuario");
        console.log(error);
    }
    
}

function limpiarFormulario(){
    document.getElementById("formulario").reset();
}

function validarFormulario(){
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const clave = document.getElementById("clave");
    const pais = document.getElementById("pais");
    const terminos = document.getElementById("terminos");

    let valid = true;

    //Limpieza
    [nombre, email, clave, pais].forEach(element => {
        element.classList.remove("is-invalid");
    });

    if(!nombre.value.trim()){
        nombre.classList.add("is-invalid");
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)){
        email.classList.add("is-invalid");
        valid = false;
    }

    const claveRegex = /^[a-zA-Z0-9]{3,8}$/;

    if(!claveRegex.test(clave.value)){
        clave.classList.add("is-invalid");
        valid = false;
    }

    if(!pais.value.trim()){
        pais.classList.add("is-invalid");
        valid = false;
    }

    if(!terminos.checked){
        alert("Debe aceptar los términos y condiciones");
        valid = false;
    }

    return valid;
}

function obtenerDatosFormulario(){
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;
    const pais = document.getElementById("pais").value;

    return {id, nombre, email, clave, pais};
}

async function cargarUsuario(id){
    try{
        const res = await fetch(`https://utnfra-api-usuarios.onrender.com/usuarios/${id}`);
        const data = await res.json();

        document.getElementById("id").value = data.id;
        document.getElementById("nombre").value = data.nombre;
        document.getElementById("email").value = data.email;
        document.getElementById("clave").value = data.clave;
        document.getElementById("pais").value = data.pais;

        const form = document.getElementById("formulario");
        form.removeEventListener("submit", agregarUsuario);
        form.addEventListener("submit", modificarUsuario);
    }
    
    catch(error){
        alert("Error al cargar el usuario");
        console.log(error);
    }
}

async function modificarUsuario(e){
    e.preventDefault();

    if(!validarFormulario()) return;

    const usuario = obtenerDatosFormulario();

    console.log(usuario);

    try{
        const res = await fetch(`https://utnfra-api-usuarios.onrender.com/usuarios/${usuario.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if(res.ok){
            mostrarUsuarios();
            limpiarFormulario();
        }
        
        else{
            alert("Error al modificar el usuario");
        }
    }
    
    catch(error){
        alert("Error al modificar el usuario");
        console.log(error);
    }
}

async function eliminarUsuario(id){
    if(!confirm(`¿Está seguro que desea eliminar el usuario ${id}`)) return;

    try{
        const res = await fetch(`https://utnfra-api-usuarios.onrender.com/usuarios/${id}`, {
            method: "DELETE"
        });

        if(res.ok){
            mostrarUsuarios();
        }else{
            alert("Error al eliminar el usuario");
        }
    }
    
    catch(error){
        alert("Error al eliminar el usuario");
        console.log(error);
    }
}

async function mostrarChilenos() {
    const panel = document.getElementById("panel-derecha");
    panel.innerHTML = "<div class='spinner-border text-primary' role='status'></div>";

    try{
        const res = await fetch("https://utnfra-api-usuarios.onrender.com/usuarios");
        const data = await res.json();

        let tabla = "<table class='table table-dark table-striped'>";
        tabla += "<thead><tr><th>#</th><th>Nombre</th><th>Correo</th><th>País</th><th>Acciones</th></tr></thead>";
        tabla += "<tbody>";

        data.forEach(user => {  
            if (user.pais === "Chile"){
                tabla += `<tr>
                        <td><a href="#" onclick="cargarUsuario(${user.id})">${user.id}</a></td>
                        <td>${user.nombre}</td>
                        <td>${user.email}</td>
                        <td>${user.pais}</td>
                        <td><button type="button" class="btn btn-danger btn-sm" onclick="eliminarUsuario(${user.id})">Eliminar</button></td>
                    </tr>`;
            }
        });

        tabla += "</tbody></table>";
        panel.innerHTML = tabla;
        
    }
    
    catch(error){
        alert("Error al cargar los usuarios");
        console.log(error);
    }
}

async function mostrarTocayos() {
    const panel = document.getElementById("panel-derecha");
    panel.innerHTML = "<div class='spinner-border text-primary' role='status'></div>";

    const nombre = prompt("Ingrese su nombre:");

    try{
        const res = await fetch("https://utnfra-api-usuarios.onrender.com/usuarios");
        const data = await res.json();

        let tabla = "<table class='table table-dark table-striped'>";
        tabla += "<thead><tr><th>#</th><th>Nombre</th><th>Correo</th><th>País</th><th>Acciones</th></tr></thead>";
        tabla += "<tbody>";

        data.forEach(user => {  
            if (user.nombre === nombre){
                tabla += `<tr>
                        <td><a href="#" onclick="cargarUsuario(${user.id})">${user.id}</a></td>
                        <td>${user.nombre}</td>
                        <td>${user.email}</td>
                        <td>${user.pais}</td>
                        <td><button type="button" class="btn btn-danger btn-sm" onclick="eliminarUsuario(${user.id})">Eliminar</button></td>
                    </tr>`;
            }
        });

        tabla += "</tbody></table>";
        panel.innerHTML = tabla;
        
    }
    
    catch(error){
        alert("Error al cargar los usuarios");
        console.log(error);
    }
}