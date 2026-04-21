// =====================================================
// RETO #2 PARA LOS ALUMNOS — Nivel: un escalón más arriba
// =====================================================
// Cómo correrlo:   node archivo
//
// INSTRUCCIONES:
// 1) NO corras el archivo todavía.
// 2) Lee el código con calma. Hay async/await, promises
//    anidadas y setTimeouts mezclados.
// 3) Escribe en una hoja el orden EXACTO de los console.log
//    (las letras A, B, C, D... te guían).
// 4) Corre el archivo y compara.
// 5) Si fallaste, márcalo con rojo y escribe en 1 línea
//    POR QUÉ te equivocaste. Ese "por qué" es el oro.
// =====================================================

console.log("A - 1"); // 1 - 1

setTimeout(() => {
  console.log("B - 6"); // 6 - 6
  Promise.resolve().then(() => console.log("C - 7")); // 7 - 7
}, 0);

Promise.resolve().then(()  => {
  console.log("D - 4"); // 5 - 4
  setTimeout(() => console.log("E - 8"), 0); // 8 - 8
});

async function cocinar() {
  console.log("F - 2"); // 3 - 2
  await Promise.resolve();
  console.log("G - 5"); // 4 -5
}

cocinar();

console.log("H - 3"); // 2 - 3