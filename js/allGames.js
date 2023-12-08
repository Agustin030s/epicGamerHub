import {mostrarJuegos} from "./auxiliarFunctions.js";
import {getLocalStorage} from "./dataStorageManager.js";

const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('gamesContainer');

// Mostramos loe juegos en la pagina 
mostrarJuegos(listaDeJuegos,listaDeJuegos.length,contenedorJuegos);

window.verDetalle = (codigoDeJuego) => {
    window.location.href = './detalleJuego.html?codigo=' + codigoDeJuego;
}
