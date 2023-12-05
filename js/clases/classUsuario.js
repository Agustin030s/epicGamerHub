class Usuario{
    #usuario;
    #correo;
    #contrasenia;
    constructor(usuario, correo, contrasenia){
        this.#usuario = usuario;
        this.#correo = correo;
        this.#contrasenia = contrasenia;
    }

    get usuario(){
        return this.#usuario;
    }

    set usuario(user){
        this.#usuario = user;
    }

    get correo(){
        return this.#correo;
    }

    set correo(newCorreo){
        this.#correo = newCorreo;
    }

    get contrasenia(){
        return this.#contrasenia;
    }

    set contrasenia(clave){
        this.#contrasenia = clave;
    }
}