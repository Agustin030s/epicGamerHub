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

//Favoritos
export const crearCardFavorito = (juego) =>{
    const canvas = document.querySelector('.offcanvas-body');
    canvas.innerHTML += `<div class="card card-customized mt-3">
    <div class="row g-0 justify-content-center align-items-center">
      <div class="col-md-4">
        <img src="${juego.imagen}" alt="Imagen del juego" class="img-fluid">
      </div>
      <div class="col-md-8">
        <div class="card-body text-end">
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0" aria-label="Eliminar" onclick="eliminarFavorito('${juego.codigo}')"></button>
          <h5 class="card-title text-light mb-4">${juego.nombre}</h5>
          <button class="btn-customized" onclick="verDetalle('${juego.codigo}')">Ver detalles</button>
        </div>
      </div>
    </div>
  </div>`;
}

export const cargaInicialDeFavoritos = (arrayFavoritos) =>{
    if(arrayFavoritos.length !== 0){
        arrayFavoritos.map(fav => crearCardFavorito(fav));
    }else{
        const canvas = document.querySelector('.offcanvas-body');
        canvas.innerHTML += `<p class='parraFav'>Aún no tienes juegos favoritos<p>`;
    }
}

export function mostrarAlerta(mensaje, tipo) {
  const tiposValidos = ['success', 'error', 'warning', 'info'];

  if (!tiposValidos.includes(tipo)) {
      console.error('Tipo de alerta no válido. Use uno de: success, error, warning, info');
      return;
  }

  Swal.fire({
      icon: tipo,
      title: mensaje,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
  });
}