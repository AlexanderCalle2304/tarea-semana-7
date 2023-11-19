"use strict";

function calcAge(birthYear, actualyear) {
  return actualyear - birthYear;
}

let age = calcAge(parseInt(prompt("Ingresa tu edad")), 2023);
alert(`Tu edad es: ${age}`);
