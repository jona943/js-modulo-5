// =====================================================
// RETO PARA LOS ALUMNOS
// =====================================================
// Cómo correrlo:   node 03-reto-alumnos.js
//
// INSTRUCCIONES:
// 1) Lee el código sin ejecutarlo.
// 2) Escribe en una hoja el orden EXACTO en que crees
//    que se imprimirán los console.log.
// 3) Corre el archivo y compara con tu predicción.
// 4) Si te equivocaste, intenta explicar por qué.
// =====================================================


console.log("🍳 Empieza la cocina"); // 1  - 1 

setTimeout(() => {
  console.log("🥩 Plato del horno listo (timeout 0)"); // 3 - 5
}, 0);

setTimeout(() => {
  console.log("🥗 Ensalada lista (timeout 50)");// 6 - 6
}, 50);

Promise.resolve().then(() => {
  console.log("🍞 Pan recién horneado (promise 1)"); // 4 - 3
});

Promise.resolve().then(() => {
  console.log("🧈 Mantequilla derretida (promise 2)"); // 5 - 4
});

console.log("🔪 Cortando ingredientes"); // 2 - 2

/*
ORDEN DE EJECUCION:
 
   1. Síncrono: Imprime "🍳 Empieza la cocina". --> Codigo sincrono
                    
                   (No se ejecutan, quedan en espera)
   2. Agendar: Ve el setTimeout(..., 0), lo manda a la cola de Macrotareas.  --> Macrotarea
   3. Agendar: Ve el setTimeout(..., 50), lo manda a la cola de Macrotareas. --> Macrotarea
   4. Agendar: Ve la Promise 1, manda su contenido a la cola de Microtareas. --> Microtarea
   5. Agendar: Ve la Promise 2, manda su contenido a la cola de Microtareas. --> Microtarea

   6. Síncrono: Imprime "🔪 Cortando ingredientes". --> Codigo sincrono

   7. Limpieza de Microtareas: El código síncrono terminó. Ahora JavaScript mira
      su lista de prioridades. Ve que hay dos promesas esperando. Imprime "🍞
      Pan..." y luego "🧈 Mantequilla...". (4 y 5 aqui si se ejecutan)

   8. Macrotareas: Ahora que no queda ninguna microtarea, JavaScript mira los
      setTimeout. Ejecuta el de 0ms (2 se ejecuta) y finalmente el de 50ms (3 se ejecuta) .
*/