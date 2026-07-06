
const inputBusqueda = document.getElementById("searchInput");
const contenedorResultados = document.getElementById("results");
const loader = document.getElementById("loader");
const mensajeError = document.getElementById("errorMessage");
const botonTema = document.getElementById("themeButton");


inputBusqueda.addEventListener("input", () => {
    buscarUsuarios();
});

async function buscarUsuarios() {
    console.log("Nueva búsqueda");
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores
    const usuario = inputBusqueda.value.trim();
    if (usuario === "") {
        return; // No realizar la búsqueda si el campo está vacío
    }

    const url = `https://api.github.com/search/users?q=${usuario}&per_page=3`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos.items.length);
    datos.items.forEach(usuario => {
        contenedorResultados.innerHTML += `
        <div class="card">
            <img src="${usuario.avatar_url}" alt="Avatar de ${usuario.login}">
            <h3>${usuario.login}</h3>
            <a href="${usuario.html_url}" target="_blank">Ver Perfil</a>
        </div> 
        `  
        console.log(usuario.login);
    }); 
    console.log(datos.items[0].login);
}