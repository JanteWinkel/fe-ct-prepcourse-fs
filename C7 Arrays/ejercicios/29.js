function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  // Calculamos la suma total esperada de la secuencia completa
  let n = numeros.length + 1; // Ya que falta un número
  let sumaTotal = (n * (n + 1)) / 2;

  // Calculamos la suma real de los números en el array
  let sumaReal = numeros.reduce((suma, num) => suma + num, 0);

  // El número faltante es la diferencia entre la suma total y la suma real
  let numeroFaltante = sumaTotal - sumaReal;

  // Si no encontramos ningún número faltante, devolvemos null
  if (numeroFaltante === 0) {
    return null;
  }

  // Devolvemos el número faltante
  return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;