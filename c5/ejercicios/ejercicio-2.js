// =====================================================================
// EJERCICIO 2 — Módulo nativo `os`
// Importa el módulo `os` (es nativo, no necesitas instalarlo).
// Imprime: el sistema operativo (os.platform()) y la cantidad de cores
// (os.cpus().length).
// =====================================================================

// Importacion del modulo
const os = require('os');

// Obtenemos la plataforma del os 
const plataforma = os.platform();

// Cantidad de nucleos o cores
const catidad_de_cores = os.cpus().length;

// Imprecion en consola

console.log(`-- Infomacion del sistema --`);
console.log(`Sistema operatico: ${plataforma}`)
console.log(`Cantida de nucleos: ${catidad_de_cores}`);



