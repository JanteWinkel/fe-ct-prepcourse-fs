function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) { // Verificar si no se pasaron argumentos
    return 0; // Si no se pasaron argumentos, devolver 0
  } else if (arguments.length === 1) { // Verificar si se pasó un solo argumento
    return arguments[0]; // Si se pasó un solo argumento, devolver ese argumento
  } else { // Si se pasaron más de un argumento
    let producto = 1; // Inicializar una variable para almacenar el producto
    for (let i = 0; i < arguments.length; i++) { // Iterar sobre los argumentos
      producto *= arguments[i]; // Multiplicar cada argumento con el producto acumulado
    }
    return producto; // Devolver el producto de todos los argumentos
  }
}

module.exports = multiplicarArgumentos;
