// deben hacer obtener el formulario previamente y luego pasarlo por parametro a esta función, asi se puedan obtener todos los input y selects en caso que corresponda y quitar las clases valid o invalid y luego limpiar el form.
export const limpiarFormularios = (form) =>{
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');

    if(selects.length > 0){
        selects.forEach((select) => {
            select.classList.remove('is-valid', 'is-invalid');
        });
    }

    inputs.forEach((input) => {
        input.classList.remove('is-valid', 'is-invalid');
    });

    form.reset();
}

export const key = 'clave-super-secreta';

export const encriptarContrasenia = (password, key) => {
    const encrypted = CryptoJS.AES.encrypt(password, key).toString();
    return encrypted;
};

export const desencriptarContrasenia = (encryptedPassword, key) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedPassword, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
};