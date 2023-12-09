import {mostrarJuegos} from "./auxiliarFunctions.js";
import {getLocalStorage} from "./dataStorageManager.js";

const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('gamesContainer');
const buscarJuegos = document.getElementById('searchGames');
const inputJuego = document.getElementById('inputGames');

// Mostramos todos los juegos guardados en el localStorage
mostrarJuegos(listaDeJuegos,listaDeJuegos.length,contenedorJuegos);

window.verDetalle = (codigoDeJuego) => {
    window.location.href = './detalleJuego.html?codigo=' + codigoDeJuego;
}

// Función para buscar juegos por texto 
const busquedaDeJuegos = (e) => {
    e.preventDefault();
    const juegoBuscado = listaDeJuegos.filter((juego) => juego.nombre.includes(inputJuego.value));
    let mensaje = `<h3 class="order-first d-block text-center text-light fs-1 mb-5">Se muestran resultados de busqueda de '${inputJuego.value}'</h3>`;

    if (juegoBuscado.length !== 0) {
        if (juegoBuscado.length === listaDeJuegos.length) {
            // En caso que el usuario pulse buscar con el input vacio, se mostraran todos los juegos sin el mensaje 
            mostrarJuegos(listaDeJuegos,listaDeJuegos.length,contenedorJuegos);
        } else {
            mostrarJuegos(juegoBuscado,juegoBuscado.length,contenedorJuegos);
            contenedorJuegos.innerHTML += mensaje;
        }
    } else {
        contenedorJuegos.innerHTML = `<p class="text-center text-secondary display-6">No se encontro el juego buscado</p>`
        contenedorJuegos.innerHTML += mensaje;
    }
}

buscarJuegos.addEventListener('submit',busquedaDeJuegos);