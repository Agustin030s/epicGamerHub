import { Reseña } from "./clases/classJuego.js";

let d = document
let containerReseña = d.getElementById('reseñas')
let añadirReseñaBtn = d.getElementById('añadirReseñaBtn')
let textoReseña = d.getElementById('textoReseña')
let btnLike = d.getElementById('btnLike')
let btnDisLike = d.getElementById('btnDislike')
let pLikes = d.getElementById('pLikes');
let pDislikes =d.getElementById('pDislikes');

let reseña = new Reseña()


/*
Funcion para mostrar comentarios
*/
let mostrarComentarios = (comentarios) => {
    comentarios.map(e => {
        let div = d.createElement('div')
        let p = d.createElement('p')
        p.textContent = e
        p.classList.add('text-light')
        p.classList.add('containerComentario')
        div.appendChild(p)
        containerReseña.appendChild(div)

    })
}

/*Se crea la logica para guardar las reseñas*/ 
let reseñasData = JSON.parse(localStorage.getItem('reseñas')) || { comentarios: [],likes:0,dislike:0 };



if(reseñasData.comentarios.length > 0){
    let parrafoPrincipal = d.createElement('p')
    parrafoPrincipal.classList.add('parrafoPrincipal')
    parrafoPrincipal.innerHTML = `Se muestran ${reseñasData.comentarios.length} reseñas con un total de  <b id="promedio">${(reseñasData.likes + reseñasData.dislike )/ 2}</b> ${(reseñasData.likes + reseñasData.dislike )/ 2 > 50 ? '<b id="positivos">"Muy Positivos"</b>' : '<b id="negativos">"Muy Negativos"</b>'}`
    containerReseña.appendChild(parrafoPrincipal)

    mostrarComentarios(reseñasData.comentarios)

}else{
    containerReseña.innerHTML = 'El juego aun no tiene reseñas... Quieres añadir?'
}


/*Logica para añadir las reseñas*/ 
añadirReseñaBtn.addEventListener('click',(e)=>{
    let texto = textoReseña.value
    reseña.agregarComentario(texto)

    reseñasData.comentarios.push(texto);
    localStorage.setItem('reseñas', JSON.stringify(reseñasData));

    mostrarComentarios(reseñasData.comentarios)

    location.reload()
    
})

pLikes.innerHTML = reseñasData.likes
pDislikes.innerHTML = reseñasData.dislike

btnLike.addEventListener('click',(e)=> {
    reseñasData.likes += 1
    reseña.agregarVotoPositivo()
    localStorage.setItem('reseñas', JSON.stringify(reseñasData));

    pLikes.innerHTML = reseñasData.likes
    pDislikes.innerHTML = reseñasData.dislike
})

btnDisLike.addEventListener('click',(e)=> {
    reseñasData.dislike += 1
    reseña.agregarVotoPositivo()
    localStorage.setItem('reseñas', JSON.stringify(reseñasData));

    pLikes.innerHTML = reseñasData.likes
pDislikes.innerHTML = reseñasData.dislike   
})