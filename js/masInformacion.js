import { getLocalStorage } from "./dataStorageManager.js";

let d = document;

const parametroURL = new URLSearchParams(window.location.search);
const codigoDeJuego = parametroURL.get('codigo');

const listaDeJuegos = getLocalStorage('juegos');
const juego = listaDeJuegos.find((elemento) => elemento.codigo === codigoDeJuego);
console.log(listaDeJuegos)

let renderizarJuego = (juego) => {
    //Componentes para hacer el renderizado dinamico
    let tituloJuego = d.getElementById('tituloJuego')
    let imagenJuego = d.getElementById('imagenJuego');
    let desarrolladorJuego = d.getElementById('desarrolladorJuego');
    let precioJuego = d.getElementById('precioJuego');
    let descripcionJuego = d.getElementById('descripcionJuego');
    let categoriaJuego = d.getElementById('categoriaJuego');
    let sistemaOperativoJuegoM = d.getElementById('sistemaOperativoJuegoM');
    let procesadorM= d.getElementById('procesadorM');
    let ramM= d.getElementById('ramM');
    let tarjetaGraficaM= d.getElementById('tarjetaGraficaM');
    let espacioM= d.getElementById('espacioM');

    let sistemaOperativoJuegoR= d.getElementById('sistemaOperativoJuegoR');
    let procesadorR= d.getElementById('procesadorR');
    let ramR= d.getElementById('ramR');
    let tarjetaGraficaR= d.getElementById('tarjetaGraficaR');
    let espacioR= d.getElementById('espacioR');



    console.log(juego)
    if(juego){
        tituloJuego.textContent = juego.nombre
        imagenJuego.src = juego.imagen
        desarrolladorJuego.textContent = juego.desarrollador
        precioJuego.textContent = `$${juego.precio }`
        desarrolladorJuego.textContent = juego.desarrollador
        descripcionJuego.textContent = juego.descripcion 
        categoriaJuego.textContent = juego.categoria

        sistemaOperativoJuegoM.textContent = juego.requisitos.minimos.sistemaOperativo
        procesadorM.textContent = juego.requisitos.minimos.procesador
        ramM.textContent = juego.requisitos.minimos.ram
        tarjetaGraficaM.textContent = juego.requisitos.minimos.tarjetaGrafica
        espacioM.textContent = juego.requisitos.minimos.almacenamiento


        sistemaOperativoJuegoR.textContent = juego.requisitos.recomendados.sistemaOperativo
        procesadorR.textContent = juego.requisitos.recomendados.procesador
        ramR.textContent = juego.requisitos.recomendados.ram
        tarjetaGraficaR.textContent = juego.requisitos.recomendados.tarjetaGrafica
        espacioR.textContent = juego.requisitos.recomendados.almacenamiento

    }
}


//Renderizar el juego
renderizarJuego(juego)
