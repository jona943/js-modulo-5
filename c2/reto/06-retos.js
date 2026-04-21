// ============================================================
// RETOS — Para los que terminan rápido 💪
// ============================================================

// ------------------------------------------------------------
// RETO 1 — Callback hell "a propósito"
// ------------------------------------------------------------
// Usando solo setTimeout y callbacks anidados, imprime en
// consola los números 1, 2, 3, 4, 5 con UN segundo de
// diferencia entre cada uno.
// No uses Promises ni async/await.
// Sentirás el dolor del callback hell. Ese es el punto 😈.


// ------------------------------------------------------------
// RETO 2 — Mini parser de configuración
// ------------------------------------------------------------
// Crea un archivo `config.json` con tus datos (nombre, tema,
// idioma, notificaciones: true/false). Desde Node:
//   1. Léelo con fs.readFile (callback).
//   2. Parséalo.
//   3. Cambia `tema` a "dark".
//   4. Guárdalo de nuevo con fs.writeFile (callback).


// ------------------------------------------------------------
// RETO 3 — Refactor del callback hell
// ------------------------------------------------------------
// Toma el código de `03-callback-hell.js` y refactorízalo
// extrayendo cada callback anidado a una función con nombre.
// El código seguirá siendo asíncrono pero se leerá mejor.
// Pista: named functions en lugar de anónimas.


// ------------------------------------------------------------
// RETO 4 — map manual con callback
// ------------------------------------------------------------
// Implementa tu propia función `miMap(arr, cb)` que haga lo
// mismo que `Array.prototype.map`. Pruébala transformando
// un array de nombres a mayúsculas.


// ------------------------------------------------------------
// RETO 5 (avanzado) — Resumen de usuarios
// ------------------------------------------------------------
// Usando `usuarios.json`:
//   1. Lee el archivo (callback).
//   2. Calcula edad promedio de usuarios activos.
//   3. Encuentra al usuario con más hobbies.
//   4. Imprime un "resumen" en consola con todo.
