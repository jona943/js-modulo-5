document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !fecha || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    //  ---- NUEVAS VALIDACIONES  ----

    // Validacion de nombre 
    if (nombre.trim().length < 3) {
        alert('Ingresa un nombre valido..!! (Minimo de 3 caracteres)');
        return;
    }
    // ------------------

    // Validacion de Telefono a 10 digitos ni mayor ni menor
    const valorTelefono = 10;
    if (telefono.length < valorTelefono) {
        alert(`Tu numero de telefono debe de ser de 10 digitos..!!`)
        return;
    } 

    if (telefono.length > valorTelefono) {
        alert(`Su número de teléfono es mayor a 10 dígitos.`);
        alert(`Solo se permite un máximo de ${valorTelefono} Digitos`);
        return;
    }
    // ------------------

    // Validacion de fecha que no sea pasada
    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date()
    console.log(hoy);
    hoy.setHours(0, 0, 0, 0); // Limpieza de hora para comparacion directa de fechas

    if (fechaSeleccionada < hoy) {
        alert('La fecha del evento no puede ser una fecha pasada ');
        return;
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});
