// 1. SELECCIÓN: Enlazamos el formulario, los 3 inputs y el párrafo del mensaje
const formulario = document.getElementById('miFormulario');
const inputNombre = document.getElementById('nombre');
const inputTelefono = document.getElementById('telefono');
const inputDireccion = document.getElementById('direccion');
const mensaje = document.getElementById('mensaje');

// 2. ESCUCHA: Esperamos a que se intente enviar el formulario
formulario.addEventListener('submit', function(evento) {
  
  // Frenamos el comportamiento por defecto (que no se recargue la página)
  evento.preventDefault(); 

  // Capturamos los valores de los 3 campos limpiando espacios vacíos
  const valorNombre = inputNombre.value.trim();
  const valorTelefono = inputTelefono.value.trim();


  // 3. VALIDACIÓN: Evaluamos si AL MENOS UNO de los campos está vacío
  if (valorNombre === "" || valorTelefono === "") {
    
    // Si falta algún dato, el DOM inyecta el mensaje de error en rojo
    mensaje.textContent = " Todos los campos son obligatorios.";
    mensaje.className = "mensaje error"; 
    
  } else {
    
    // Si los tres campos tienen texto, el DOM inyecta el mensaje de éxito en verde
    mensaje.textContent = " ¡Éxito! Datos validados correctamente.";
    mensaje.className = "mensaje exito";
    
  }
});