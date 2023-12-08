import { getLocalStorage, insertSessionStorage } from "./dataStorageManager.js";
import { desencriptarContrasenia, key } from "./auxiliarFunctions.js";
import { limpiarFormularios} from "./auxiliarFunctions.js";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    console.log("Formulario enviado");
  
    event.preventDefault(); 
  
    const correo = document.getElementById("correo").value;
    const contrasenia = document.getElementById("contrasenia").value;
  
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasenia);
  
    const usuarios = getLocalStorage("usuarios");
  
    console.log("Usuarios en localStorage:", usuarios);
  
    const usuario = usuarios.find((user) => (user.correo === correo));
  
    console.log("Usuario encontrado:", usuario);
  
    if (!usuario) {
      Swal.fire({
        title: "Error",
        text: "Credenciales incorrectas. Verifica tu correo electrónico y contraseña.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return false; 
    }
  
    const contraseniaDesencriptada = desencriptarContrasenia(usuario.contrasenia, key);
  
    if (contrasenia === contraseniaDesencriptada) {
      insertSessionStorage('sesion', usuario);
      if (usuario.rol === "administrador") {
        Swal.fire({
          title: "Bienvenido Admin!",
          icon: "success",
          confirmButtonText: "Aceptar",
          willClose: () => {
            window.location.href = window.location.origin + '/pages/administrador.html';
          },
        });
      }else{
        window.location.href = window.location.origin + '/index.html';
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Contraseña incorrecta. Intentalo nuevamente",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      limpiarFormularios(document.getElementById("loginForm")); 
      return false; 
    }
});