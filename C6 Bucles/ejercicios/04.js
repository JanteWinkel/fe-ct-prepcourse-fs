function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  var entra = "Allowed";
  var noentra = "Not allowed";
  if (edad >= 18){
    return entra;
  } else {
    return noentra;
  }
}

module.exports = mayoriaDeEdad;
