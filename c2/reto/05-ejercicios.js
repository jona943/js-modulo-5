// ============================================================
// EJERCICIOS — Clase 2 (Callbacks y JSON)
// ============================================================
// Completa los TODO. No borres las pistas.
// Corre con: node 05-ejercicios.js
// ============================================================


// ------------------------------------------------------------
// EJERCICIO 1 — Tu primer callback
// ------------------------------------------------------------
// Crea una función `operar(a, b, operacion)` que reciba dos
// números y una función como tercer argumento. La función debe
// llamar a `operacion(a, b)` y devolver el resultado.
//
// Úsala con una suma y con una resta.
// Pista: `operacion` es el callback.

function operar(a, b, operacion) {
  // TODO
  return operacion(a, b);
}



// Debe imprimir 7
console.log(operar(3, 4, (x, y) => x + y));

// Debe imprimir 5
console.log(operar(10, 5, (x, y) => x - y));


// ------------------------------------------------------------
// EJERCICIO 2 — JSON ↔ objeto
// ------------------------------------------------------------
// Tienes el siguiente string JSON. Conviértelo a objeto,
// incrementa la edad en 1 y vuelve a convertirlo a string JSON.

const entrada = '{"nombre":"Diego","edad":17,"activo":true}';

const usuario = JSON.parse(entrada);
// console.log(usuario);
usuario.edad = usuario.edad + 1;
// console.log(usuario.edad);
const resultado = JSON.stringify(usuario);
console.log(resultado);

// TODO: parsear
// TODO: modificar edad
// TODO: stringificar y hacer console.log del resultado


// ------------------------------------------------------------
// EJERCICIO 3 — Detecta el JSON inválido
// ------------------------------------------------------------
// De estos 3 strings, solo UNO es JSON válido. Usa try/catch
// con JSON.parse para averiguar cuál.

const a = "{'nombre': 'Ana'}";
const b = '{"nombre": "Ana",}';
const c = '{"nombre": "Ana"}';

// TODO: recorre [a, b, c] y dime cuál es válido.




// ------------------------------------------------------------
// EJERCICIO 4 — Filtra con callback
// ------------------------------------------------------------
// Crea una función `filtrar(arr, condicion)` que devuelva un
// nuevo array SOLO con los elementos donde `condicion(elemento)`
// sea true. NO uses `.filter`. Hazlo con un for.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar(arr, condicion) {
  // TODO
}

// Debe devolver [2, 4, 6, 8, 10]
// console.log(filtrar(numeros, (n) => n % 2 === 0));


// ------------------------------------------------------------
// EJERCICIO 5 — Callback asíncrono
// ------------------------------------------------------------
// Crea una función `enviarEn(ms, mensaje, callback)` que use
// setTimeout para esperar `ms` milisegundos y luego llame al
// callback con `mensaje`.

function enviarEn(ms, mensaje, callback) {
  // TODO
}

// Debería imprimir "hola!" después de 800ms
// enviarEn(800, "hola!", (texto) => console.log("Recibido:", texto));
