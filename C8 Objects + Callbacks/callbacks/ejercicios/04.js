function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   // Sumar todos los números del arreglo
   let suma = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
   
   // Llamar al callback con el resultado de la suma
   cb(suma);
}

module.exports = sumarArray;
