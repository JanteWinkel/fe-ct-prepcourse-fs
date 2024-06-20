function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayusculas = array.map(function(elemento) {
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    } else {
      return elemento;
    }
  });
  return mayusculas;
}

module.exports = convertirStringAMayusculas;
