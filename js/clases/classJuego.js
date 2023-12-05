class Juego{
    #codigo;
    #nombre;
    #precio;
    #categoria;
    #imagenURL;
    #descripcion;
    #requisitos;
    #requisitosMinimos;
    #desarrollador;
    #reseñas;
    constructor(codigo = uuidv4(), nombre, precio, categoria, imagen, descripcion, requisitos, requisitosMinimos, desarrollador){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagenURL = imagen;
        this.#descripcion = descripcion;
        this.#requisitos = requisitos;
        this.#requisitosMinimos = requisitosMinimos;
        this.#desarrollador = desarrollador;
        this.#reseñas = new Reseña();
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(precio) {
        this.#precio = precio;
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(categoria) {
        this.#categoria = categoria;
    }

    get imagenURL() {
        return this.#imagenURL;
    }

    set imagenURL(imagen) {
        this.#imagenURL = imagen;
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }

    get requisitos() {
        return this.#requisitos;
    }

    set requisitos(requisitos) {
        this.#requisitos = requisitos;
    }

    get requisitosMinimos() {
        return this.#requisitosMinimos;
    }

    set requisitosMinimos(requisitosMinimos) {
        this.#requisitosMinimos = requisitosMinimos;
    }

    get desarrollador() {
        return this.#desarrollador;
    }
    
    set desarrollador(desarrollador) {
        this.#desarrollador = desarrollador;
    }

    get reseñas(){
        return this.#reseñas;
    }
}

class RequisitosDelSistema{
    #sistemaOperativo;
    #procesador;
    #ram;
    #tarjetaGrafica;
    #almacenamiento;
    constructor(sistOper, procesador, ram, tarjetaGraf, almacenamiento){
        this.#sistemaOperativo = sistOper;
        this.#procesador = procesador;
        this.#ram = ram;
        this.#tarjetaGrafica = tarjetaGraf;
        this.#almacenamiento = almacenamiento;
    }

    get sistemaOperativo(){
        return this.#sistemaOperativo;
    }

    set sistemaOperativo(so){
        this.#sistemaOperativo = so;
    }

    get procesador(){
        return this.#procesador;
    }

    set procesador(proces){
        this.#procesador = proces;
    }

    get ram(){
        return this.#ram;
    }

    set ram(rm){
        this.#ram = rm;
    }

    get tarjetaGrafica(){
        return this.#tarjetaGrafica;
    }

    set tarjetaGrafica(tarjGr){
        this.#tarjetaGrafica = tarjGr;
    }

    get almacenamiento(){
        return this.#almacenamiento;
    }

    set almacenamiento(almac){
        this.#almacenamiento = almac;
    }
}

class Reseña{
    #votosPositivos;
    #votosNegativos;
    #comentarios;
    constructor(){
        this.#votosPositivos = 0;
        this.#votosNegativos = 0;
        this.#comentarios = [];
    }

    get votosPositivos(){
        return this.#votosPositivos;
    }

    get votosNegativos(){
        return this.#votosNegativos;
    }

    get comentarios(){
        return this.#comentarios;
    }

    agregarVotoPositivo(){
        this.#votosPositivos++;
    }

    agregarVotoNegativo(){
        this.#votosNegativos++;
    }

    agregarComentario(comentario){
        this.#comentarios.push(comentario);
    }

    puntuacionDelJuego(){
        const total = this.votosPositivos + this.votosNegativos;
        let puntuacion = total === 0 ? 0 : (this.votosPositivos / total)*100;

        return puntuacion;
    }
}

// Crear un objeto de la clase RequisitosDelSistema
const requisitosMinimos = new RequisitosDelSistema("Windows 10", "8GB", "NVIDIA GeForce GTX 1050", "50GB");

// Crear un objeto de la clase Juego
const juego1 = new Juego(
  undefined, // Se generará automáticamente un código UUID
  "Ejemplo Juego",
  29.99,
  "Aventura",
  "imagenURL",
  "Descripción del juego...",
  requisitosMinimos,
  requisitosMinimos, // Aquí usamos los mismos requisitos mínimos, pero podrían ser diferentes
  "DesarrolladorXYZ"
);
// Agregar una reseña al juego
juego1.reseñas.agregarVotoPositivo();
juego1.reseñas.agregarVotoPositivo();
juego1.reseñas.agregarVotoNegativo();
juego1.reseñas.agregarComentario("¡Me encanta este juego! Altamente recomendado.");

// Obtener la puntuación del juego basada en las reseñas
const puntuacion = juego1.reseñas.puntuacionDelJuego();
console.log(`Puntuación del juego: ${puntuacion.toFixed(2)}`);

// Imprimir los comentarios de la reseña
console.log("Comentarios de la reseña:");
juego1.reseñas.comentarios.forEach((comentario, index) => {
  console.log(`${index + 1}. ${comentario}`);
});

console.log(juego1);