import { getLocalStorage } from "./dataStorageManager.js";

const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('contenedorJuegos');

// Funcion para mostrar los juegos 
const mostrarJuegos = () => {
    if (listaDeJuegos.length !== 0) {
        contenedorJuegos.innerHTML = '';
        for (let i = 0; i < 8; i++) {
            contenedorJuegos.innerHTML += `
            
            `
        }
    } else {
        contenedorJuegos.innerHTML = '<h2 class="fs-2 mt-5 text-center text-secondary">No hay peliculas para mostrar</h2>'
    }
}

mostrarJuegos();

console.log(listaDeJuegos);