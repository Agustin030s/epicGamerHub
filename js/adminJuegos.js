import { Juego, RequisitosDelSistema } from "./clases/classJuego.js";
import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";

const gta5 = new Juego(
    undefined, // Se generará automáticamente un código UUID
    "Grand Theft Auto V",
    14.80,
    "Accion",
    "https://th.bing.com/th/id/R.e94b9c3ff8c3df6575fbcd191de78996?rik=iDbm%2fMSi6cnJAQ&riu=http%3a%2f%2fjuegos.es%2fwp-content%2fuploads%2fGTAVportada.jpg&ehk=6vWapvXGNSyhWSfKDpe37%2b%2bh0zBJprUsmd2%2bw7G%2bm7I%3d&risl=&pid=ImgRaw&r=0",
    "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",
    new RequisitosDelSistema("","","","",""),
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
    "EA"
)


let juegos = [
    {
        codigo: gta5.codigo,
        nombre: gta5.nombre,
        precio: gta5.precio,
        categoria: gta5.categoria,
        imagen: gta5.imagenURL,
        descripcion: gta5.descripcion,
        requisitos: {
            minimos: {
                sistemaOperativo: gta5.requisitos.sistemaOperativo,
                procesador: gta5.requisitos.procesador,
                ram: gta5.requisitos.ram,
                tarjetaGrafica: gta5.requisitos.tarjetaGrafica,
                almacenamiento: gta5.requisitos.almacenamiento
            },
            recomendados: {
                sistemaOperativo: gta5.requisitosMinimos.sistemaOperativo,
                procesador: gta5.requisitosMinimos.procesador,
                ram: gta5.requisitosMinimos.ram,
                tarjetaGrafica: gta5.requisitosMinimos.tarjetaGrafica,
                almacenamiento: gta5.requisitosMinimos.almacenamiento
            }
        },
        desarrollador: gta5.desarrollador,
        resenias: []
    },
    {
        codigo: fifa24.codigo,
        nombre: fifa24.nombre,
        precio: fifa24.precio,
        categoria: fifa24.categoria,
        imagen: fifa24.imagenURL,
        descripcion: fifa24.descripcion,
        requisitos: {
            minimos: {
                sistemaOperativo: fifa24.requisitos.sistemaOperativo,
                procesador: fifa24.requisitos.procesador,
                ram: fifa24.requisitos.ram,
                tarjetaGrafica: fifa24.requisitos.tarjetaGrafica,
                almacenamiento: fifa24.requisitos.almacenamiento
            },
            recomendados: {
                sistemaOperativo: fifa24.requisitosMinimos.sistemaOperativo,
                procesador: fifa24.requisitosMinimos.procesador,
                ram: fifa24.requisitosMinimos.ram,
                tarjetaGrafica: fifa24.requisitosMinimos.tarjetaGrafica,
                almacenamiento: fifa24.requisitosMinimos.almacenamiento
            }
        },
        desarrollador: fifa24.desarrollador,
        resenias: []
    },
];

insertLocalStorage('juegos', juegos)
