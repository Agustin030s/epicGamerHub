import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";

const listaJuegos = getLocalStorage('juegos');
const listaFavoritos = getLocalStorage('favoritos');

const parametroURL = new URLSearchParams(window.location.search);
const codigoDeJuego = parametroURL.get('codigo');

const btnAgregarFavorito = document.getElementById('btnAgregarFavorito'),
        btnFavoritos = document.getElementById('btnFavoritos');
const offCanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasFavoritos'));

const agregarFavorito = () =>{
    const juego = listaJuegos.find(game => game.codigo === codigoDeJuego);
    if(juego){
        if(validarJuego(codigoDeJuego)){
            listaFavoritos.push(juego);
            insertLocalStorage('favoritos', listaFavoritos);
            crearCardFavorito(juego);
        }
    }
};

const crearCardFavorito = (juego) =>{
    const canvas = document.querySelector('.offcanvas-body');
    canvas.innerHTML += `<div class="card card-customized mt-3">
    <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${juego.imagen}" alt="Imagen del juego" class="img-fluid">
      </div>
      <div class="col-md-8">
        <div class="card-body text-end">
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0" aria-label="Eliminar"></button>
          <h5 class="card-title text-light mb-4">${juego.nombre}</h5>
          <button class="btn-customized" onclick="verDetalle('${juego.codigo}')">Ver detalles</button>
        </div>
      </div>
    </div>
  </div>`;
}

const validarJuego = (codigo) =>{
    if(listaFavoritos.length !== 0){
        const juegoBuscado = listaFavoritos.find(game => game.codigo === codigo);
        if(juegoBuscado){
            Swal.fire({
                title: "Ups!",
                text: "Ya agregaste este juego a favoritos",
                icon: "warning",
                confirmButtonText: "Aceptar",
              });
              return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}

const cargaInicialDeFavoritos = () =>{
    if(listaFavoritos.length !== 0){
        listaFavoritos.map(fav => crearCardFavorito(fav));
    }
}

const abrirCanvas = () =>{
    offCanvas.show();
}

window.verDetalle = (codigoDeJuego) => {
    window.location.href = window.location.origin + '/pages/detalleJuego.html?codigo=' + codigoDeJuego;
}

btnAgregarFavorito.addEventListener('click', agregarFavorito);
btnFavoritos.addEventListener('click', abrirCanvas);

cargaInicialDeFavoritos();
