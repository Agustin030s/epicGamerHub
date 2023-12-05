export default class Usuario{
    #usuario;
    #correo;
    #contrasenia;
    #rol;
    constructor(usuario, correo, contrasenia, rol){
        this.#usuario = usuario;
        this.#correo = correo;
        this.#contrasenia = contrasenia;
        this.#rol = rol;
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

    get rol(){
        return this.#rol;
    }

    set rol(newRol){
        this.#rol = rol;
    }
}