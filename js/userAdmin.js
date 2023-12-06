import Usuario from './clases/classUsuario.js';

const email = document.querySelector('#correoRegister'),
        contrasenia = document.querySelector('#contraseniaRegister'),
        contrasenia2 = document.querySelector('#contraseniaRegisterConfirm'),
        termCondiciones = document.querySelector('#checkboxRegister');

const crearUsuario = (e) => {
    e.preventDefault();
    const usuario = new Usuario()
}