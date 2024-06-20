function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let cont = 0;
  
  for ( let i=0; i < resultadosTest.length; i++){
    cont += resultadosTest[i];
  }
  return cont / resultadosTest.length;
}

module.exports = promedioResultadosTest;
