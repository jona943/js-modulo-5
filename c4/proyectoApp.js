// Usaremos la API de usuarios para este ejemplo
const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 Reto Principal función con async/await
 */
async function obtenerUsuarios() {
    try {
        // 'await' pausa la ejecución hasta que la promesa se resuelve
        const respuesta = await fetch(API_URL);

        // Si la respuesta no es exitosa 
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();
        
        console.log("--- Lista de Usuarios ---");
        datos.forEach(user => console.log(`Nombre: ${user.name}`));

    } catch (error) {
        // Capturamos cualquier error (de red, de sintaxis o lanzados manualmente)
        console.error("Hubo un problema con la solicitud:", error.message);
        alert("Lo sentimos, no pudimos cargar los datos. Inténtalo más tarde.");
    }
}

// Llamada a la función
obtenerUsuarios();
