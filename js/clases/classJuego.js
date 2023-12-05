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
    }
}

class RequisitosDelSistema{
    #sistemaOperativo;
    #ram;
    #tarjetaGrafica;
    #almacenamiento;
    constructor(sistOper, ram, tarjetaGraf, almacenamiento){
        this.#sistemaOperativo = sistOper;
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