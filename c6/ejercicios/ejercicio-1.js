// =====================================================================
// EJERCICIO 1 — process.argv
// Imprime tu nombre recibido por argumento.
// Si no recibes nombre, imprime "Anónimo".
//
// Pruébalo:
//   node 05-ejercicios.js Ana
//   node 05-ejercicios.js
// =====================================================================

const nombre = process.argv[2] || "Anonimo";

console.log(nombre);
