// Obtener los elementos del DOM
var fechaInput = document.getElementById("fechaInput");
var agregarBtn = document.getElementById("agregarBtn");
var lista = document.getElementById("lista");

// Agregar un evento al botón para manejar la acción de agregar a la lista
agregarBtn.addEventListener("click", function() {
  // Obtener el valor de la fecha
  var fecha = fechaInput.value;

  // Crear un nuevo elemento de lista
  var nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = fecha;

  // Agregar el nuevo elemento a la lista
  lista.appendChild(nuevoElemento);

  // Limpiar el valor del campo de fecha
  fechaInput.value = "";
});
