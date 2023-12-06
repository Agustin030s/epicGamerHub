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
  }
};
