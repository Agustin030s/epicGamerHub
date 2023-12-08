import { Juego, RequisitosDelSistema } from "./clases/classJuego.js";
import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";
import Usuario from "./clases/classUsuario.js";
import { key, encriptarContrasenia,mostrarJuegos } from "./auxiliarFunctions.js";

//Carga inicial
const juegosIniciales = getLocalStorage('juegos') || [];


if(juegosIniciales.length === 0){
  const gta5 = new Juego(
      undefined, // Se generará automáticamente un código UUID
      "Grand Theft Auto V",
      29.99,
      "Accion",
      "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
      "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",
      new RequisitosDelSistema("Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit", "Intel Core 2 Quad CPU Q6600 a 2,4 GHz (4 CPU)/AMD Phenom 9850 Quad-Core (4 CPU) a 2,5 GHz.", "4 GB de RAM", " NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11).", " 110 GB de espacio disponible"),
      new RequisitosDelSistema("Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1", "Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)", "4 GB de RAM", " NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11).", " 110 GB de espacio disponible"), // Aquí usamos los mismos requisitos mínimos, pero podrían ser diferentes
      "Rockstar Games"
  );
  
  let fifa24 = new Juego(
      undefined,
      "EA Sports FC 24",
      69.99,
      "Deportes",
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/09/ea-sports-fc-24-1695890252985-3146700.jpg?tf=256x",
      "EA Sports FC 24 es un juego de fútbol para Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series y PC que forma parte de la saga de simuladores deportivos de Electronic Arts, siendo el sucesor de FIFA. Con modos en solitario y con énfasis en el online, así como con un FIFA Ultimate Team renovado, ofrece de nuevo todas las licencias de las principales ligas europeas y americanas, el retorno de modos clásicos y una ración de mejoras técnicas gráficas y jugables.",
      new RequisitosDelSistema("Windows 10 - 64-Bit", "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ", " 8 GB de RAM", "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB", "100 GB"),
      new RequisitosDelSistema("Windows 10 - 64-Bit", " Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ", "12 GB de RAM", "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT", "100 GB"),
      "EA Sports"
  )
  
  juegosIniciales.push(gta5);
  juegosIniciales.push(fifa24);
  
  insertLocalStorage('juegos', juegosIniciales);
}


if(juegosIniciales.length === 0){
  juegosIniciales.push(gta5);
  juegosIniciales.push(fifa24);
}


// carga inicial de Usuario admin
const users = getLocalStorage('usuarios');
if(users.length === 0){
  const contraseniaEncriptada = encriptarContrasenia("Admin1234", key);
  const usuarioAdmin = new Usuario(
      undefined,
      "administrador",
      "administrador",
      "admin@admin.com",
      contraseniaEncriptada,
      "administrador"
    );
    users.push(usuarioAdmin);
    insertLocalStorage('usuarios', users);
}


const listaDeJuegos = getLocalStorage('juegos');
const contenedorJuegos = document.getElementById('contenedorJuegos');

// Funcion para mostrar los juegos en la pagina principal (solo mostramos 8 juegos)
mostrarJuegos(listaDeJuegos,8,contenedorJuegos);


window.verDetalle = (codigoDeJuego) => {
    window.location.href = './pages/detalleJuego.html?codigo=' + codigoDeJuego;
}
