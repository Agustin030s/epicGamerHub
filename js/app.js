import { getLocalStorage } from "./dataStorageManager.js";

const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('contenedorJuegos');

const juegosConDescuento = listaDeJuegos.map(juego => ({
    ...juego,
    precioConDescuento: juego.precio - 10
}));

// Funcion para mostrar los juegos 
const mostrarJuegos = () => {
    if (listaDeJuegos.length !== 0) {
        contenedorJuegos.innerHTML = '';
        for (let i = 0; i < listaDeJuegos.length; i++) {
            contenedorJuegos.innerHTML += `
            <div class="col-sm-6 col-md-5 col-lg-3 mb-5">
            <div class="card card-customized pb-3 h-100">
              <div class="img-card-container p-1">
                <img
                  src="${listaDeJuegos[i].imagen}"
                  alt="Portada del juego"
                />
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h3 class="fs-4 fw-bold text-light">${listaDeJuegos[i].nombre}</h3>
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="fs-6 genero">${listaDeJuegos[i].categoria}</h4>
                    <div class="text-secondary">
                      <i class="bi bi-playstation fs-5"></i>
                      <i class="bi bi-xbox fs-5"></i>
                      <i class="bi bi-windows fs-5"></i>
                    </div>
                  </div>
                </div>       
                <div>
                  <p class="price">$${listaDeJuegos[i].precio}</p>
                  <button class="btn-customized" id="masInfoBtn">Más información</button>
                </div>
              </div>
            </div>
          </div>`
        }
    } else {
        contenedorJuegos.innerHTML = '<h2 class="fs-2 mt-5 text-center text-secondary">No hay peliculas para mostrar</h2>'
    }
}

mostrarJuegos();
