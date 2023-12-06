const validarTexto = (input, min, max) => {
  const texto = input.value;
  if (texto.length === 0) {
    input.classList.add("is-invalid");
    return false;
  } else if (texto.length >= min && texto.length <= max) {
    input.classList.add("is-valid");
    return true;
  }
};

const validarCategoria = (select) => {
  const categoria = select.value;
  if (
    categoria === "Accion" ||
    categoria === "Fantasia" ||
    categoria === "Aventura" ||
    categoria === "Terror" ||
    categoria === "Animado" ||
    categoria === "Deporte"
  ) {
    select.classList.add("is-valid");
    return true;
  } else {
    select.classList.add("is-invalid");
    return false;
  }
};

const validarRam = (select) => {
  const ram = select.value;
  if (ram === "4Gb" || ram === "8Gb" || ram === "16Gb" || ram === "32Gb") {
    select.classList.add("is-valid");
    return true;
  } else {
    select.classList.add("is-invalid");
    return false;
  }
};

const validarAlmacenamiento = (select) => {
  const almacenamiento = select.value;
  if (
    almacenamiento === "40Gb" ||
    almacenamiento === "80Gb" ||
    almacenamiento === "128Gb" ||
    almacenamiento === "240Gb" ||
    almacenamiento === "512Gb"
  ) {
    select.classList.add('is-valid');
    return true;
  }else{
    select.classList.add('is-invalid');
    return false;
  }
};
