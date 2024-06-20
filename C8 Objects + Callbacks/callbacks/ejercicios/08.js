const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Utilizar el callback para evaluar si el elemento actual cumple la condición
    if (callback(array[i])) {
        // Si el callback devuelve true, retornar el elemento encontrado
        return array[i];
    }
}

// Si no se encontró el elemento, retornar el mensaje indicado
return "No se encontró el elemento";
};

module.exports = buscarElemento;
