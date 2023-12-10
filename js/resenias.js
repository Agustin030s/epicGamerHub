import { Reseña } from "./clases/classJuego.js";
import { getLocalStorage, insertLocalStorage } from "./dataStorageManager.js";

let d = document;
let titleJuego = d.getElementById("tituloJuego");
let containerReseña = d.getElementById("reseñas");
let añadirReseñaBtn = d.getElementById("añadirReseñaBtn");
let textoReseña = d.getElementById("textoReseña");
let btnLike = d.getElementById("btnLike");
let btnDisLike = d.getElementById("btnDislike");
let pLikes = d.getElementById("pLikes");
let pDislikes = d.getElementById("pDislikes");

let reseña = new Reseña();

/*
Funcion para mostrar comentarios
*/
let mostrarComentarios = (comentarios) => {
  containerReseña.innerHTML = "";
  comentarios.map((e) => {
    let div = d.createElement("div");
    let p = d.createElement("p");
    p.textContent = e;
    div.classList.add("containerComentario");
    p.classList.add("pComentario");
    div.appendChild(p);
    containerReseña.appendChild(div);
  });
};

/*Se crea la logica para guardar las reseñas*/
//let reseñasData = getLocalStorage("juegos") || { comentarios: [],likes:0,dislike:0 };

let juegos = getLocalStorage("juegos");

let juego = juegos.find((e) => e.nombre === titleJuego.textContent);
let juegoIndex = juegos.findIndex((e) => e.nombre === titleJuego.textContent);

let reseniasData = {
  comentarios: juego.resenias.comentarios || [],
  likes: juego.resenias.likes || 0,
  dislikes: juego.resenias.dislikes || 0,
};

if (reseniasData.comentarios.length > 0) {
  let parrafoPrincipal = d.createElement("p");
  parrafoPrincipal.classList.add("parrafoPrincipal");
  parrafoPrincipal.innerHTML = `Se muestran ${
    reseniasData.comentarios.length
  } reseñas con un total de  <b id="promedio">${
    (reseniasData.likes + reseniasData.dislikes) / 2
  }</b> ${
    (reseniasData.likes + reseniasData.dislikes) / 2 > 50
      ? '<b id="positivos">"Muy Positivos"</b>'
      : '<b id="negativos">"Muy Negativos"</b>'
  }`;
  containerReseña.appendChild(parrafoPrincipal);

  mostrarComentarios(reseniasData.comentarios);
} else {
  containerReseña.innerHTML =
    "El juego aun no tiene reseñas... Quieres añadir?";
}

/*Logica para añadir las reseñas*/

añadirReseñaBtn.addEventListener("click", (e) => {
  let texto = textoReseña.value;
  reseña.agregarComentario(texto);

  reseniasData.comentarios.push(texto);
  juego.resenias = reseniasData;

  insertLocalStorage("juegos", juegos);

  mostrarComentarios(reseniasData.comentarios);
});

pLikes.innerHTML = reseniasData.likes;
pDislikes.innerHTML = reseniasData.dislikes;

btnLike.addEventListener("click", (e) => {
  reseniasData.likes += 1;
  reseña.agregarVotoPositivo();
  juego.resenias = reseniasData;
  insertLocalStorage("juegos", juegos);

  pLikes.innerHTML = reseniasData.likes;
  pDislikes.innerHTML = reseniasData.dislikes;
});

btnDisLike.addEventListener("click", (e) => {
  reseniasData.dislikes += 1;
  reseña.agregarVotoPositivo();
  juego.resenias = reseniasData;
  //localStorage.setItem('reseñas', JSON.stringify(reseñasData));
  insertLocalStorage("juegos", juegos);

  pLikes.innerHTML = reseniasData.likes;
  pDislikes.innerHTML = reseniasData.dislikes;
});
