  
const formTarea = document.getElementById("formTarea");
const mensaje = document.getElementById("mensaje");
const tablaTareas = document.getElementById("tablaTareas");
const contador = document.getElementById("contador");
const btnLimpiar = document.getElementById("btnLimpiar");
const tarea = document.getElementById("tarea");
const ingresar = document.getElementById("botoningresaar")

// Arreglo global para almacenar los objetos de tareas temporalmente
let tareas = [];


formTarea.addEventListener("submit", function(evento) {
  
    evento.preventDefault();

   
    const nombreTarea = document.getElementById("tarea").value.trim();
    const responsable = document.getElementById("responsable").value.trim();
    const prioridad = document.getElementById("prioridad").value;

 
    if (nombreTarea === "" || responsable === "" || prioridad === "") {
        mensaje.textContent = "Debe completar todos los campos antes de agregar la tarea.";
        mensaje.style.color = "RED"; // Color rojo de error
        return;
    }

    // MEJORA 9: Validación de longitud mínima (al menos 5 caracteres)
    if (nombreTarea.length < 3) {
        mensaje.textContent = "El nombre de la tarea debe tener al menos 5 caracteres.";
        mensaje.style.color = "RED";
        return;
    }
  

    // Crear el objeto con la estructura de la nueva tarea
    const nuevaTarea = {
        tarea: nombreTarea,
        responsable: responsable,
        prioridad: prioridad
    };

    // Registrar el objeto dentro del arreglo de tareas
    tareas.push(nuevaTarea);

    // Notificar al usuario que la acción fue exitosa
    mensaje.textContent = "Tarea agregada en la base de datos .";
    mensaje.style.color = "#52df73"; // Color verde 

    // Resetear los campos del formulario para dejarlos limpios
    formTarea.reset();

    // Renderizar la tabla actualizada y refrescar el contador
    mostrarTareas();
});


function mostrarTareas() {
   
    tablaTareas.innerHTML = "";

   
    tareas.forEach(function(item) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.tarea}</td>
            <td>${item.responsable}</td>
            <td>${item.prioridad}</td>
        `;

      
        tablaTareas.appendChild(fila);
    });

   
    contador.textContent = tareas.length;
}


btnLimpiar.addEventListener("click", function() {
    if (tareas.length === 0) {
        mensaje.textContent = "No hay tareas para eliminar.";
        mensaje.style.color = "red";
        return;
    }

   
    tareas = [];
    
    mostrarTareas();
    
    mensaje.textContent = "Se han borrado todas las tareas del panel.";
    mensaje.style.color = "blue"; // Azul informativo
});