
const inputBusqueda = document.getElementById("searchInput");
const contenedorResultados = document.getElementById("results");
const loader = document.getElementById("loader");
const mensajeError = document.getElementById("errorMessage");
const botonTema = document.getElementById("themeButton");

let tiempoEspera; // Variable para almacenar el temporizador

inputBusqueda.addEventListener("input", () => {
    clearTimeout(tiempoEspera); // Limpiar el temporizador anterior
    tiempoEspera = setTimeout(() => {
        buscarUsuarios();
    }, 500); // Esperar 500 ms después de que el usuario deje de escribir


});     

async function buscarUsuarios() {
    contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores
    const usuario = inputBusqueda.value.trim();
    if (usuario === "") {
        return; // No realizar la búsqueda si el campo está vacío
    }
    loader.hidden = false;
    errorMessage.hidden = true; // Ocultar mensaje de error al iniciar la búsqueda
    try {
        const url = `https://api.github.com/search/users?q=${usuario}&per_page=3`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json(); 
    if (datos.items.length === 0) {
        errorMessage.hidden = false; // Mostrar mensaje de error si no se encuentran resultados
        return;
    }
    console.log(datos.items.length);
    let tarjetas = "";
    datos.items.forEach(usuario => {
        tarjetas += `
        <div class="card">
            <img src="${usuario.avatar_url}" alt="Avatar de ${usuario.login}">
            <h3>${usuario.login}</h3>
            <a href="${usuario.html_url}" target="_blank">Ver Perfil</a>
        </div> 
        `  
        console.log(usuario.login);
    }); 
    contenedorResultados.innerHTML = tarjetas;
        
    } catch (error) {
        errorMessage.hidden = false; // Mostrar mensaje de error si ocurre un problema
        console.error(error);
    } finally {
        loader.hidden = true;
    }
    
}