function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a >= 0 && a < 10) {
      return true;
    } else {
      return false;
    }
}
//vi que tienen un error en el test y espera 0 como numero positivo

module.exports = esPositivoOInferiorA10;
