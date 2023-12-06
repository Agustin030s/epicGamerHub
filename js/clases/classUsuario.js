export default class Usuario{
    #codigo;
    #usuario;
    #correo;
    #contrasenia;
    #rol;
    constructor(codigo = uuidv4() ,usuario, correo, contrasenia, rol){
        this.#codigo = codigo;
        this.#usuario = usuario;
        this.#correo = correo;
        this.#contrasenia = contrasenia;
        this.#rol = rol;
    }

    get codigo(){
        return this.#codigo;
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

    toJSON(){
        return{
            codigo: this.codigo,
            usuario: this.usuario,
            correo: this.correo,
            contrasenia: this.contrasenia,
            rol: this.rol
        }
    }
}