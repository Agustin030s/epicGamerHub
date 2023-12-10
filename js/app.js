import { Juego, RequisitosDelSistema } from "./clases/classJuego.js";
import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";
import Usuario from "./clases/classUsuario.js";
import {
  key,
  encriptarContrasenia,
  mostrarJuegos,
} from "./auxiliarFunctions.js";

//Carga inicial
const juegosIniciales = getLocalStorage("juegos");

if (juegosIniciales.length === 0) {
  let gta5 = new Juego(
      undefined, // Se generará automáticamente un código UUID
      "Grand Theft Auto V",
      29.99,
      "Accion",
      "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
      "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",
      new RequisitosDelSistema("Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1", "Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)", "8Gb", "NVIDIA GTX 660 2GB / AMD HD7870 2GB", "128Gb"), 
      new RequisitosDelSistema("Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit", "Intel Core 2 Quad CPU Q6600 a 2,4 GHz (4 CPU)/AMD Phenom 9850 Quad-Core (4 CPU) a 2,5 GHz.", "4Gb", " NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11).", "128Gb"),
      "Rockstar Games"
  );

  let hogwartLegacy = new Juego(
      undefined,
      "Hogwarts Legacy",
      17.99,
      "Fantasia",
      "https://th.bing.com/th/id/OIP.y8DjAgYGddJ9mn_BXvGMIQHaJ4?rs=1&pid=ImgDetMain",
      "Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado en el universo de los libros de Harry Potter. Embárcate en una aventura que te llevará por lugares nuevos y conocidos, mientras descubres animales mágicos, personalizas tu personaje, elaboras pociones, dominas hechizos, mejoras tus talentos y te conviertes en el mago que siempre has querido ser.\nDisfruta de Hogwarts en el siglo XIX. Tu personaje es un estudiante que tiene la clave de un antiguo secreto que amenaza con destruir el mundo mágico. Haz aliados, lucha contra magos tenebrosos y decide el destino del mundo mágico. Crea tu propio legado. Escribe tu propia historia.",
      new RequisitosDelSistema("64-bit Windows 10", "Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)", "16Gb", "NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770", "128Gb"),
      new RequisitosDelSistema("64-bit Windows 10", "Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)", "16Gb", "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB", "128Gb"),
      "Warner Bros"
  )

  let fifa24 = new Juego(
    undefined,
    "EA Sports FC 24",
    69.99,
    "Deporte",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/09/ea-sports-fc-24-1695890252985-3146700.jpg?tf=256x",
    "EA Sports FC 24 es un juego de fútbol para Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series y PC que forma parte de la saga de simuladores deportivos de Electronic Arts, siendo el sucesor de FIFA. Con modos en solitario y con énfasis en el online, así como con un FIFA Ultimate Team renovado, ofrece de nuevo todas las licencias de las principales ligas europeas y americanas, el retorno de modos clásicos y una ración de mejoras técnicas gráficas y jugables.",
    new RequisitosDelSistema("Windows 10 - 64-Bit", "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ", "12Gb", "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT", "100Gb"),
    new RequisitosDelSistema("Windows 10 - 64-Bit", "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ", "8Gb", "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB", "100Gb"),
    "EA Sports"
  );

  let rd2 = new Juego(
    undefined,
    "Red Dead Redemption 2",
    59.99,
    "Accion",
    "https://th.bing.com/th/id/R.7ec261ae278efed5d7bdc93560b5574e?rik=2JgSrluL3slBTA&pid=ImgRaw&r=0",
    "Arthur Morgan y la banda de Van der Linde son forajidos buscados. Con agentes federales y los mejores cazarrecompensas pisándoles los talones, la banda deberá abrirse camino por el salvaje territorio del corazón de Estados Unidos a base de robos y peleas para sobrevivir. Mientras las divisiones internas aumentan y amenazan con desmantelar el grupo, Arthur debe elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",
    new RequisitosDelSistema(
      "Windows 10 - April 2018 Update (v1803)",
      "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
      "16Gb",
      "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      "240Gb"
    ),
    new RequisitosDelSistema(
      "Windows 10 - April 2018 Update (v1803)",
      "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
      "16Gb",
      "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      "240Gb"
    ),
    "Rockstar Games"
  );

  let cyberPunk2077 = new Juego(
    undefined,
    "Cyberpunk 2077",
    44.99,
    "Accion",
    "https://th.bing.com/th/id/OIP.tfMKSSHfIFInXXYC0Gu9xwHaLH?rs=1&pid=ImgDetMain",
    "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en la megalópolis de Night City, donde te pondrás en la piel de un mercenario o una mercenaria ciberpunk y vivirás su lucha a vida o muerte por la supervivencia. Mejorado y con contenido nuevo adicional gratuito. Personaliza tu personaje y tu estilo de juego a medida que aceptas trabajos, te labras una reputación y desbloqueas mejoras. Las relaciones que forjes y las decisiones que tomes darán forma al mundo que te rodea. Aquí nacen las leyendas. ¿Cuál será la tuya?",
    new RequisitosDelSistema(
      "64-bit Windows 10",
      "Core i7-12700 or Ryzen 7 7800X3D",
      "16Gb",
      "GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770",
      "80Gb"
    ),
    new RequisitosDelSistema(
      "64-bit Windows 10",
      "Core i7-6700 or Ryzen 5 1600",
      "16Gb",
      "GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380",
      "80Gb"
    ),
    "CD PROJEKT RED"
  );

  let rs4 = new Juego(
    undefined,
    "Resident Evil 4 Remake",
    44.99,
    "Terror",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15e061dc-c1ce-4b8a-be3b-b7699ba68abe/dfs1tod-b99c85c0-b8c6-43b9-81ad-04ea0ad1106d.png/v1/fill/w_730,h_1095,q_70,strp/resident_evil_4__remake__official_poster_by_thesybian_dfs1tod-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcLzE1ZTA2MWRjLWMxY2UtNGI4YS1iZTNiLWI3Njk5YmE2OGFiZVwvZGZzMXRvZC1iOTljODVjMC1iOGM2LTQzYjktODFhZC0wNGVhMGFkMTEwNmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ytXPdVJGB28NH17pwR_fQONU4PXeF_wZVqIa-LyhCUE",
    "La supervivencia es solo el comienzo.\n\nSeis años han pasado desde el desastre biológico en Raccoon City.\nEl agente Leon S. Kennedy, uno de los sobrevivientes, tiene la misión de rescatar a la hija del presidente, que fue secuestrada.\nLa rastreó hasta una aldea europea aislada, donde algo terrible le ha ocurrido a los lugareños.\nY el telón se abre con esta historia de rescate osado y terror abrumador en la que la vida y la muerte, el miedo y la catarsis se encuentran.\n\nCon una jugabilidad modernizada, una historia reimaginada, y gráficos detallados y vívidos, Resident Evil 4 marca el renacimiento de un leviatán de la industria.\n\nRevive la pesadilla que revolucionó el terror de supervivencia.",
    new RequisitosDelSistema(
      "Windows 10 (64 bit)/Windows 11 (64 bit)",
      "AMD Ryzen 5 3600 / Intel Core i7 8700",
      "16Gb",
      "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
      "128GB"
    ),
    new RequisitosDelSistema(
      "Windows 10 (64 bit)",
      "AMD Ryzen 3 1200 / Intel Core i5-7500",
      "16Gb",
      "AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM",
      "128Gb"
    ),
    "CAPCOM"
  );

  let nba24 = new Juego(
    undefined,
    "NBA 2K24",
    59.99,
    "Deporte",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/nba-2k24-3076874.jpg?tf=3840x",
    "Arma tu equipo y vive el pasado, el presente y el futuro de la cultura del baloncesto en NBA 2K24. Disfruta de una experiencia auténtica y completa con opciones personalizadas ilimitadas de MyPLAYER, en MyCAREER. Colecciona una gran variedad de leyendas y arma tu alineación ideal en MyTEAM. Siente una mayor respuesta en el juego y disfruta de visuales mejoradas mientras juegas con tus equipos favoritos de la NBA y la WNBA en JUEGA AHORA.",
    new RequisitosDelSistema(
      "Windows 10 64-bit or Windows 11 64-bit",
      "Intel® Core™ i5-4430 @ 3 GHz/ AMD FX-8370 @ 3.4 GHz or better",
      "8Gb",
      "NVIDIA® GeForce® GTX 770 2GB/ ATI® Radeon™ R9 270 2GB or better",
      "240GB"
    ),
    new RequisitosDelSistema(
      "Windows 10 64-bit or Windows 11 64-bit",
      "Intel® Core™ i3-2100 @ 3.10 GHz/ AMD FX-6200 @ 3.80 GHz or better",
      "8Gb",
      "NVIDIA® GeForce® GT 450 1GB/ ATI® Radeon™ HD 7770 1 GB or better",
      "240Gb"
    ),
    "Visual Concepts 2K"
  );

  let arkAscended = new Juego(
    undefined,
    "ARK: Survival Ascended",
    20.99,
    "Aventura",
    "https://th.bing.com/th/id/OIP.vj6ypW3sUqaAKHV9GL7ktgHaJ4?rs=1&pid=ImgDetMain",
    "Respira en una nueva experiencia de supervivencia de dinosaurios más allá de tus sueños más salvajes ... ¡ya que Ark se reinventa desde cero a la próxima generación de la tecnología de videojuegos con Unreal Engine 5! Te despiertas en una misteriosa isla, tus sentidos abrumados por la luz del sol cegador y los colores brillantes que rebotan en todas las superficies que te rodean, las aguas azules de una isla verdante que se desplaza a tus pies descalzos. Un rugido profundo resuena de la jungla brumosa, que te pone en acción, y te pones de pie, sin miedo, pero intrigado. ¿Estás listo para formar una tribu, domesticar y criar cientos de especies de dinosaurios y otras criaturas primitivas, explorar, crear, construir y luchar hasta la cima de la cadena alimentaria?",
    new RequisitosDelSistema(
      "Windows 10/11 with updates",
      "AMD Ryzen 5 3600X, Intel i5-10600K",
      "32Gb",
      "AMD Radeon RX 6800, NVIDIA GeForce RTX 3080",
      "80Gb"
    ),
    new RequisitosDelSistema(
      "Windows 10/11 with updates",
      "AMD Ryzen 5 2600X, Intel Core i7-6800K",
      "16Gb",
      "AMD Radeon RX 5600 XT, NVIDIA GeForce 1080",
      "80Gb"
    ),
    "Studio Wilcard"
  );

  let eldenRing = new Juego(
    undefined,
    "Elden Ring",
    47.99,
    "Aventura",
    "https://th.bing.com/th/id/R.38da15a1143cff1c370395f63669b24d?rik=A7BuZ%2bxY2yp7mg&pid=ImgRaw&r=0",
    "EL NUEVO RPG DE ACCIÓN DE FANTASÍA.\nLevántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.\n\n• Un extenso mundo lleno de emoción\nUn extenso mundo donde los campos abiertos, con una amplia variedad de situaciones, y las enormes mazmorras, con diseños complejos y tridimensionales, se conectan con total fluidez. Al explorar, te acompaña el entusiasmo por descubrir amenazas desconocidas y abrumadoras, lo que produce una gran sensación de logro.\n\nEsto y mucho más...",
    new RequisitosDelSistema(
      "Windows 10/11",
      "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
      "16Gb",
      "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
      "80Gb"
    ),
    new RequisitosDelSistema(
      "Windows 10",
      "INTEL CORE I5-8400 or AMD RYZEN 3 3300X",
      "16Gb",
      "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
      "80Gb"
    ),
    "FromSoftware"
  );

  let theLastOfUsP1 = new Juego(
    undefined,
    "The Last of Us™ Part I",
    59.99,
    "Terror",
    "https://th.bing.com/th/id/OIP.BHm3-mWNtsJ2XsCgx1uTYgAAAA?rs=1&pid=ImgDetMain",
    "Experimenta la emocionante historia y los inolvidables personajes de The Last of Us, ganador de más de 200 premios Juego del Año.\n\nEn una civilización devastada donde se enfrentan infectados e insensibilizados sobrevivientes, alguien contrata a Joel, el cansado protagonista, para que escabulla en secreto a Ellie, de 14 años, fuera de una zona militar de cuarentena. Sin embargo, lo que comienza como un pequeño trabajo, se convierte en un viaje brutal a través del país.",
    new RequisitosDelSistema(
      "Windows 10 (Version 1909 or Newer)",
      "AMD Ryzen 5 3600X, Intel Core i7-8700",
      "16Gb",
      "AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)",
      "128Gb"
    ),
    new RequisitosDelSistema(
      "Windows 10 (Version 1909 or Newer)",
      "AMD Ryzen 5 1500X, Intel Core i7-4770K",
      "16Gb",
      "AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)",
      "128Gb"
    ),
    "Naughty Dog LLC"
  );

  let farCry6 = new Juego(
    undefined,
    "Far Cry® 6",
    47.99,
    "Accion",
    "https://th.bing.com/th/id/OIP.7_VJ2-NxsPIRLCysRJ2oJwHaKl?rs=1&pid=ImgDetMain",
    "Bienvenido a Yara, un paraíso tropical congelado en el tiempo. Como dictador de Yara, Antón Castillo está determinado a restaurar la antigua gloria de su nación a cualquier costo con su hijo Diego, siguiendo sus sangrientos pasos. Su opresivo mandato ha hecho estallar una revolución.\n\n- Juega como Dani Rojas, un nativo de Yara, conforme luchas junto a una guerrilla moderna en una revolución para liberar a Yara. Experimenta el juego completo en solitario o con un amigo en modo cooperativo.\n\n- Explora junglas, playas y ciudades a pie, a caballo o usando una gran selección de vehículos como lanchas y motos acuáticas mientras peleas contra el régimen de Castillo en el Far Cry más extenso hasta la fecha.",
    new RequisitosDelSistema(
      "Windows 10 (20H1 version or newer, 64-bit versions)",
      "AMD Ryzen 5 3600X @ 3.8 GHz or Intel Core i7-7700 @ 3.6 GHz (AVX, AVX2 and SSE 4.2 support required)",
      "16Gb",
      "AMD RX Vega 64 (8 GB) or NVIDIA GeForce GTX 1080 (8 GB)",
      "240Gb"
    ),
    new RequisitosDelSistema(
      "Windows 10 (20H1 version or newer, 64-bit versions)",
      "AMD Ryzen 3 1200 @ 3. GHz or Intel Core i5-4460 @ 3.1 GHz (AVX, AVX2 and SSE 4.2 support required)",
      "8Gb",
      "AMD RX 460 (4 GB) or NVIDIA GeForce GTX 960 (4 GB)",
      "240Gb"
    ),
    "Ubisoft"
  );

  let fh5 = new Juego(
    undefined,
    "Forza Horizon 5",
    32.78,
    "Carrera",
    "https://th.bing.com/th/id/R.128afa652858d37c24988dc45900dcd1?rik=hEAypVzdZZL2HQ&pid=ImgRaw&r=0",
    "Esta es tu próxima Aventura Horizon. \nConduce cientos de autos fenomenales de todo el mundo en emocionantes expediciones a lo largo y ancho de los impactantes paisajes de México, en un juego ambientado en un mundo abierto que está en constante evolución.",
    new RequisitosDelSistema(
      "Windows 10 version 18362.0 or higher",
      "Intel i5-8400 or AMD Ryzen 5 1500X",
      "16Gb",
      "NVidia GTX 1070 OR AMD RX 590",
      "128GB"
    ),
    new RequisitosDelSistema(
      "Windows 10 version 18362.0 or higher",
      "Intel i5-4460 or AMD Ryzen 3 1200",
      "8Gb",
      "NVidia GTX 970 OR AMD RX 470",
      "128Gb"
    ),
    "PlayGround Games"
  );

  juegosIniciales.push(gta5);
  juegosIniciales.push(fifa24);
  juegosIniciales.push(hogwartLegacy);
  juegosIniciales.push(rd2);
  juegosIniciales.push(cyberPunk2077);
  juegosIniciales.push(rs4);
  juegosIniciales.push(nba24);
  juegosIniciales.push(arkAscended);
  juegosIniciales.push(eldenRing);
  juegosIniciales.push(theLastOfUsP1);
  juegosIniciales.push(farCry6);
  juegosIniciales.push(fh5);

  insertLocalStorage("juegos", juegosIniciales);
}

if (juegosIniciales.length === 0) {
  juegosIniciales.push(gta5);
  juegosIniciales.push(fifa24);
}

// carga inicial de Usuario admin
const users = getLocalStorage("usuarios");
if (users.length === 0) {
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
  insertLocalStorage("usuarios", users);
}


const listaDeJuegos = getLocalStorage('juegos');
let contenedorJuegos = document.getElementById('gamesContainer');
const buscarJuegos = document.getElementById('searchGames');
const inputJuego = document.getElementById('inputGames');

// Funcion para mostrar los juegos en la pagina principal (solo mostramos 8 juegos)
if (listaDeJuegos.length >= 8) {
  mostrarJuegos(listaDeJuegos, 8, contenedorJuegos);
} else {
  mostrarJuegos(listaDeJuegos, listaDeJuegos.length, contenedorJuegos);
}

// Funcion para buscar juegos en la pagina principal 
const busquedaDeJuegos = (e) => {
  e.preventDefault();
  const juegoBuscado = listaDeJuegos.filter((juego) => juego.nombre.includes(inputJuego.value));
  let mensaje = `<h3 class="order-first d-block text-center text-light fs-1 mb-5">Se muestran resultados de busqueda de '${inputJuego.value}'</h3>`;

  if (juegoBuscado.length !== 0) {

    if (juegoBuscado.length === listaDeJuegos.length) {
      mostrarJuegos(listaDeJuegos,8,contenedorJuegos);
    } else if (juegoBuscado.length <= 8){
      mostrarJuegos(juegoBuscado,juegoBuscado.length,contenedorJuegos);
      contenedorJuegos.innerHTML += mensaje;
    }

  } else {
    contenedorJuegos.innerHTML = `<p class="text-center text-secondary display-6 mb-5">No se encontro el juego buscado</p>`
    contenedorJuegos.innerHTML += mensaje;
  }
}

buscarJuegos.addEventListener('submit',busquedaDeJuegos);

window.verDetalle = (codigoDeJuego) => {
  window.location.href = "./pages/detalleJuego.html?codigo=" + codigoDeJuego;
};
