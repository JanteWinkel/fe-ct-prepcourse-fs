function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a>b) [a, b] = [b,a];
  let x = 1;
  for ( let i=a ;i<=b; i++){
    if (i=== 0){
      x= 0;
      break;
    }
    x*=i;
  }
  return x;
}

module.exports = productoEntreNúmeros;