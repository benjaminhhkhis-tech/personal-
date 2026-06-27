// Credenciales válidas
const usuarioCorrecto = "justin";
const claveCorrecta = "1234";

// Selección de elementos
const formlogin = document.querySelector('#formLogin');
const usuario = document.querySelector('#Usuario');
const clave = document.querySelector('#clave');

const errorUsuario = document.querySelector('#errorUsuario');
const errorClave = document.querySelector('#errorClave');
const mensajeGeneral = document.querySelector('#mensajeGeneral');

const mostrarClave = document.querySelector('#mostrarClave');
const loginCard = document.querySelector('#logincard');
const panelBienvenida = document.querySelector('#panelBienvenida');
const nombreUsuario = document.querySelector('#nombreUsuario');
const btnCerrarSesion = document.querySelector('#btnCotraseña'); 

// Evento para mostrar/ocultar contraseña
mostrarClave.addEventListener("change", function() {
    if (mostrarClave.checked) {
        clave.type = "text";
    } else {
        clave.type = "password";
    }
});

// Evento para procesar el formulario
formlogin.addEventListener("submit", function(evento) {
    evento.preventDefault(); 
    
    limpiarMensaje();
    let valido = true;
    
    // Validar campos vacíos
    if (usuario.value.trim() === "") {
        mostrarError(usuario, errorUsuario, "Debe ingresar el usuario.");
        valido = false; 
    } else {
        marcarCorrecto(usuario);
    }

    if (clave.value.trim() === "") {
        mostrarError(clave, errorClave, "Debe ingresar la contraseña.");
        valido = false;
    } else {
        marcarCorrecto(clave);
    }

    // Si falta un campo, frena el código
    if (!valido) {
        mensajeGeneral.textContent = "Complete los campos requeridos.";
        mensajeGeneral.style.color = "#dc3545";
        return; 
    }

    // Verificar credenciales
    if (usuario.value === usuarioCorrecto && clave.value === claveCorrecta) {
        mensajeGeneral.textContent = "Acceso correcto";
        mensajeGeneral.style.color = "green";

        // Intercambio de pantallas limpio
        nombreUsuario.textContent = usuario.value;
        loginCard.classList.add("oculto");
        panelBienvenida.classList.remove("oculto");
    } else {
        mensajeGeneral.textContent = "Usuario o contraseña incorrecta.";
        mensajeGeneral.style.color = "#dc3545";
    }
});

// Evento para cerrar sesión
btnCerrarSesion.addEventListener("click", function() {
    usuario.value = "";
    clave.value = "";
    mostrarClave.checked = false;
    clave.type = "password";

    // Regresar pantallas a su estado inicial
    panelBienvenida.classList.add("oculto");
    loginCard.classList.remove("oculto");

    limpiarMensaje();
});

// Funciones de utilidad
function mostrarError(campo, espacioError, texto) {
    espacioError.textContent = texto;
    campo.classList.add("incorrecto");
}

function marcarCorrecto(campo) {
    campo.classList.remove("incorrecto");
}

function limpiarMensaje() {
    errorUsuario.textContent = "";
    errorClave.textContent = "";
    mensajeGeneral.textContent = "";
}