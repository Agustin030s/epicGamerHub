const btnAgregarJuegos = document.getElementById('btnAgregarJuego');
const modalJuegos = new bootstrap.Modal(document.getElementById("modalJuegos"));

const mostrarSeccionModal = (numeroSeccion) =>{
    const secciones = document.querySelectorAll('.form-section');
    secciones.forEach(seccion => seccion.classList.add('d-none'));
    document.getElementById(`seccion${numeroSeccion}`).classList.remove('d-none');
}

const abrirModal = () =>{
    modalJuegos.show();
}

btnAgregarJuegos.addEventListener('click', abrirModal);

