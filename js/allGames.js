import {mostrarJuegos} from "./auxiliarFunctions.js";
import {getLocalStorage} from "./dataStorageManager.js";

const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('gamesContainer');

// Mostramos todos los juegos guardados en el localStorage
mostrarJuegos(listaDeJuegos,listaDeJuegos.length,contenedorJuegos);

window.verDetalle = (codigoDeJuego) => {
    window.location.href = './detalleJuego.html?codigo=' + codigoDeJuego;
}
