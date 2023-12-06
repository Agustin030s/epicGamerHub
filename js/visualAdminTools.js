const btnAdministrarJuegos = document.getElementById('btnAdministrarJuegos'),
        btnAdministrarUsuarios = document.getElementById('btnAdministrarUsuarios'),
        seccionJuegos = document.getElementById('seccionJuegos'),
        seccionUsuarios = document.getElementById('seccionUsuarios'),
        titulo = document.querySelector('.tituloAdministracion');

const mostrarSeccionUsuarios = () =>{
    titulo.innerHTML = 'Administración de Usuarios';
    seccionJuegos.classList.add('d-none');
    seccionUsuarios.classList.remove('d-none');
}

const mostrarSeccionJuegos = () =>{
    titulo.innerHTML = 'Administración de Juegos';
    seccionUsuarios.classList.add('d-none');
    seccionJuegos.classList.remove('d-none');
}

const mostrarSeccionModal = (numeroSeccion) =>{
    const secciones = document.querySelectorAll('.form-section');
    secciones.forEach(seccion => seccion.classList.add('d-none'));
    document.getElementById(`seccion${numeroSeccion}`).classList.remove('d-none');
}

btnAdministrarUsuarios.addEventListener('click', mostrarSeccionUsuarios);
btnAdministrarJuegos.addEventListener('click', mostrarSeccionJuegos);