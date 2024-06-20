function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let con = 0;
  for (let i =0; i < arrayOfNums.length; i++){
    con += arrayOfNums[i];
  }
  return con;
}

module.exports = agregarNumeros;
