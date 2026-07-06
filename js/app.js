
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
    for (const usuario of datos.items) {
        const respuestaDetalle = await fetch(`https://api.github.com/users/${usuario.login}`);
        const detalle = await respuestaDetalle.json(); 
        tarjetas += `
        <div class="card">
            <img src="${detalle.avatar_url}" alt="Avatar de ${detalle.login}">
            <h3>${detalle.name || "Sin nombre"}</h3>
            <p class="username">@${detalle.login}</p>
            <p><strong>Empresa:</strong> ${detalle.company || "No especificada"}</p>
            <p><strong>Repositorios:</strong> ${detalle.public_repos}</p>
            <a href="${detalle.html_url}" target="_blank">Ver Perfil</a>
        </div> 
        `  
        console.log(detalle);
    }; 
    contenedorResultados.innerHTML = tarjetas;
        
    } catch (error) {
        errorMessage.hidden = false; // Mostrar mensaje de error si ocurre un problema
        console.error(error);
    } finally {
        loader.hidden = true;
    }
    
}