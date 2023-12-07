import Usuario from "./clases/classUsuario.js";
import {
  validarTexto,
  validarContrasenia,
  validarEmail,
  validarCheckBox,
} from "./formValidation.js";

import { insertLocalStorage, getLocalStorage } from './dataStorageManager.js';
import {limpiarFormularios, key, encriptarContrasenia} from './auxiliarFunctions.js';

const email = document.querySelector("#correoRegister"),
        username = document.querySelector('#username'),
        contrasenia = document.querySelector("#contraseniaRegister"),
        contrasenia2 = document.querySelector("#contraseniaRegisterConfirm"),
        termCondiciones = document.querySelector("#checkboxRegister"),
        nombre = document.querySelector('#name');

const formRegister = document.querySelector("#formRegister");
const usuarios = getLocalStorage('usuarios');

const crearUsuario = (e) => {
  e.preventDefault();
  if (
    validarContrasenia(contrasenia) &&
    validarContrasenia(contrasenia2) &&
    validarTexto(email, 10, 320) &&
    validarTexto(username, 3, 50) &&
    validarTexto(nombre, 3, 200) &&
    validarEmail(email) &&
    validarCheckBox(termCondiciones)
  ) {
    if(contrasenia.value === contrasenia2.value){
        const contraseniaEncriptada = encriptarContrasenia(contrasenia.value, key);
        const user = new Usuario(undefined, username.value, nombre.value, email.value, contraseniaEncriptada, "invitado");
        usuarios.push(user);
        insertLocalStorage('usuarios', usuarios);
        limpiarFormularios(formRegister);
        Swal.fire({
            title: "Usuario creado!",
            text: "El usuario se creo exitosamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
            willClose: () => {
                window.location.href = window.location.origin + "/pages/login.html";
            }
        });
    }
  }
};

formRegister.addEventListener('submit', crearUsuario);
