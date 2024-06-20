function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let set = new Set();

  // Iteramos sobre el array de números
  for (let num of numeros) {
    // Si el elemento ya está en el conjunto, significa que es el primer elemento repetido
    if (set.has(num)) {
      return num;
    } else {
      // Agregamos el elemento al conjunto si no ha sido visto antes
      set.add(num);
    }
  }

  // Si no encontramos ningún elemento repetido, retornamos undefined o null según se prefiera
  return undefined; // O null
}

module.exports = encontrarElementoRepetido;