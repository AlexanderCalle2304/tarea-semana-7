`use strict`;
function multiplicacion(multiplicador, multiplicando) {
  let sumatotal = 0;
  for (let i = 0; i < multiplicando; i++) {
    sumatotal = sumatotal + multiplicador;
  }
  return sumatotal;
}
let multiplicador = parseInt(prompt("Ingresa el primer numero"));
let multiplicando = parseInt(prompt("Ingresa el segundo numero"));
let respuesta = multiplicacion(multiplicador, multiplicando);
alert(`Respuesta ${respuesta}`);
