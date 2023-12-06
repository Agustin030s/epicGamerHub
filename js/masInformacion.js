import { getLocalStorage } from "./dataStorageManager.js";

let d = document
const queryString = window.location.search;
let params = new URLSearchParams(queryString)
//Este es el nombre del juego que nos llega desde el index
let nombreJuego = params.get('nombreJuego')



//Funcion para obtener el juego a renderizar
let getGame = () => {
    let listaJuegos = getLocalStorage('juegos')
    let juego = listaJuegos.filter((e) => e.nombre === nombreJuego)

    return juego[0]
}

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
let juego = getGame()
renderizarJuego(juego)



d.addEventListener('click',(e)=>{
    //Este es el nombre que mandaremos desde el index hasta la pagina detalle Juego
    let nombreJuego = e.target.parentNode.parentNode.querySelector('h3').textContent
    
    if(e.target.id === "masInfoBtn"){
        location.href = `./pages/detalleJuego.html?nombreJuego=${nombreJuego}`
    }
})

