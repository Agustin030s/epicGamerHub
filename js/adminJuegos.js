import { Juego, RequisitosDelSistema } from './clases/classJuego.js';
import { limpiarFormularios, mostrarAlerta } from './auxiliarFunctions.js';
import { getLocalStorage, insertLocalStorage } from './dataStorageManager.js';

const formJuegos = document.getElementById('formJuegos');
const modalJuegos = new bootstrap.Modal(document.getElementById('modalJuegos'));

formJuegos.addEventListener('submit', function (event) {
    event.preventDefault();

    const nuevoJuego = validarYObtenerDatos();

    if (nuevoJuego) {
        const juegos = getLocalStorage('juegos') || [];

        juegos.push(nuevoJuego);

        insertLocalStorage('juegos', juegos);

        limpiarFormularios(formJuegos);
        modalJuegos.hide();
        console.log('Juego agregado exitosamente');
        mostrarAlerta('Juego agregado exitosamente', 'success');
    }
});

function validarYObtenerDatos() {
    const codigo = uuidv4();
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (!nombre || isNaN(precio) || !categoria || !imagen || !descripcion) {
        mostrarAlerta('Por favor, completa todos los campos', 'error');
        return null;
    }

    const sistOperativo = document.getElementById('sistOperativo').value.trim();
    const procesador = document.getElementById('procesador').value.trim();
    const ram = document.getElementById('ram').value;
    const tarjGraf = document.getElementById('tarjGraf').value.trim();
    const almacenamiento = document.getElementById('almacenamiento').value;

    if (!sistOperativo || !procesador || !ram || !tarjGraf || !almacenamiento) {
        mostrarAlerta('Por favor, completa todos los campos de requisitos del sistema', 'error');
        return null;
    }

    const requisitos = new RequisitosDelSistema(sistOperativo, procesador, ram, tarjGraf, almacenamiento);

    const sistOperativoMin = document.getElementById('sistOperativoMin').value.trim();
    const procesadorMin = document.getElementById('procesadorMin').value.trim();
    const ramMin = document.getElementById('ramMin').value;
    const tarjGrafMin = document.getElementById('tarjGrafMin').value.trim();
    const almacenamientoMin = document.getElementById('almacenamientoMin').value;

    if (!sistOperativoMin || !procesadorMin || !ramMin || !tarjGrafMin || !almacenamientoMin) {
        mostrarAlerta('Por favor, completa todos los campos de requisitos mínimos', 'error');
        return null;
    }

    const requisitosMinimos = new RequisitosDelSistema(sistOperativoMin, procesadorMin, ramMin, tarjGrafMin, almacenamientoMin);

    const desarrollador = document.getElementById('desarrollador').value.trim();

    if (!desarrollador) {
        mostrarAlerta('Por favor, ingresa el nombre del desarrollador', 'error');
        return null;
    }

    const nuevoJuego = new Juego(codigo, nombre, precio, categoria, imagen, descripcion, requisitos, requisitosMinimos, desarrollador);

    return nuevoJuego;
}
