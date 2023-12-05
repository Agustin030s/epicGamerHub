class Juego{
    #codigo;
    #nombre;
    #precio;
    #categoria;
    #imagenURL;
    #descripcion;
    #requisitos;
    #desarrollador;
    #reseñas;
    constructor(codigo = uuidv4(), nombre, precio, categoria, imagen, descripcion, requisitos, desarrollador){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagenURL = imagen;
        this.#descripcion = descripcion;
        this.#requisitos = requisitos;
        this.#desarrollador = desarrollador;
    }
}