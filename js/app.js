import { Juego, RequisitosDelSistema } from "./clases/classJuego.js";
import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";

//Carga inicial
const juegosIniciales = getLocalStorage('juegos') || [];

const gta5 = new Juego(
    undefined, // Se generará automáticamente un código UUID
    "Grand Theft Auto V",
    14.80,
    "Aventura",
    "https://assets-prd.ignimgs.com/2021/12/17/gta-5-button-2021-1639777058682.jpg",
    "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",
    new RequisitosDelSistema("Windows 8.1 de 64 bits, Windows 8 de 64 bits, Windows 7 de 64 bits con Service Pack 1", "Intel Core 2 Quad CPU Q6600 a 2,4 GHz (4 CPU)/AMD Phenom 9850 Quad-Core (4 CPU) a 2,5 GHz.", "4 GB de RAM", " NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11).", " 110 GB de espacio disponible"),
    new RequisitosDelSistema("Windows 8.1 de 64 bits, Windows 8 de 64 bits, Windows 7 de 64 bits con Service Pack 1", "Intel Core 2 Quad CPU Q6600 a 2,4 GHz (4 CPU)/AMD Phenom 9850 Quad-Core (4 CPU) a 2,5 GHz.", "4 GB de RAM", " NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11).", " 110 GB de espacio disponible"), // Aquí usamos los mismos requisitos mínimos, pero podrían ser diferentes
    "Rockstar"
);

let fifa24 = new Juego(
    undefined,
    "EA Sports FC 24",
    69.99,
    "Deportes",
    "https://th.bing.com/th/id/OIP.6nEdcAz1Nuszunxj6bIghgHaHa?rs=1&pid=ImgDetMain",
    "descripcion",
    new RequisitosDelSistema("Windows 10 - 64-Bit", "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ", " 8 GB de RAM", "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB", "100 GB"),
    new RequisitosDelSistema("Windows 10 - 64-Bit", " Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ", "12 GB de RAM", "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT", "100 GB"),
    "EA Sports"
)

if(juegosIniciales.length === 0){
  juegosIniciales.push(gta5);
  juegosIniciales.push(fifa24);
}

insertLocalStorage('juegos', juegosIniciales);

//Detalle de Juego

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
                  <p class="price fs-1">$${listaDeJuegos[i].precio}</p>
                  <button class="btn-customized" onclick="verDetalle('${listaDeJuegos[i].codigo}')">Más información</button>
                </div>
              </div>
            </div>
          </div>`
        }
    } else {
        contenedorJuegos.innerHTML = '<h2 class="fs-2 mt-5 text-center text-secondary">No hay peliculas para mostrar</h2>'
    }
}

window.verDetalle = (codigoDeJuego) => {
    window.location.href = './pages/detalleJuego.html?codigo=' + codigoDeJuego;
}

mostrarJuegos();
