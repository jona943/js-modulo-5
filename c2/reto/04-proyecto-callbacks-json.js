// ============================================================
// DEMO 4 — PROYECTO DEL DÍA
// Leer usuarios.json con un callback asíncrono, procesarlos y
// mostrarlos en consola.
// ============================================================
//
// Conceptos que se juntan aquí:
//   • fs.readFile → función asíncrona que acepta callback.
//   • JSON.parse → convertir el texto leído en objetos JS.
//   • Callbacks propios → para filtrar/transformar datos.
// ============================================================

const fs = require("fs");
const path = require("path");

const RUTA = path.join(__dirname, "usuarios.json");


// ------------------------------------------------------------
// 1) Leer archivo y parsear JSON usando un callback estilo Node.
// ------------------------------------------------------------
// Firma típica: callback(error, datos)
function leerUsuarios(ruta, callback) {
  fs.readFile(ruta, "utf-8", function (err, contenido) {
    if (err) {
      return callback(err);
    }
    try {
      const datos = JSON.parse(contenido);
      callback(null, datos);
    } catch (parseError) {
      callback(parseError);
    }
  });
}


// ------------------------------------------------------------
// 2) Callbacks propios para procesar los datos.
// ------------------------------------------------------------
function soloActivos(usuarios) {
  return usuarios.filter((u) => u.activo);
}

function mostrarEnConsola(usuarios) {
  console.log("\n📋 Usuarios activos:");
  usuarios.forEach((u, i) => {
    console.log(
      `  ${i + 1}. ${u.nombre} (${u.edad} años) — hobbies: ${u.hobbies.join(", ")}`
    );
  });
  console.log(`\nTotal: ${usuarios.length} usuarios activos.`);
}


// ------------------------------------------------------------
// 3) Unir todo
// ------------------------------------------------------------
leerUsuarios(RUTA, function (err, usuarios) {
  if (err) {
    console.error("❌ Error leyendo el archivo:", err.message);
    return;
  }

  console.log(`📥 Leídos ${usuarios.length} usuarios desde JSON.`);

  const activos = soloActivos(usuarios);
  mostrarEnConsola(activos);

  // Bonus: guardar el resultado como JSON bonito en un nuevo archivo
  const salida = path.join(__dirname, "usuarios-activos.json");
  fs.writeFile(salida, JSON.stringify(activos, null, 2), (err) => {
    if (err) return console.error("❌ No pude guardar:", err.message);
    console.log(`\n💾 Guardado en ${salida}`);
  });
});


// ============================================================
// 🧪 Para correr:
//    node 04-proyecto-callbacks-json.js
// ============================================================
