
// Agregar evento click al botón de enviar del formulario
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor

    alert('Formulario enviado');

    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
});

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar formato de email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return false;
    }

    // Si todo está correcto, enviar el formulario
    alert('¡Formulario enviado!');
    return true;
}

// Función para agregar un nuevo destino
function agregarDestino() {
    // El nuevo destino que se quiere agregar
    const nombreDestino = "buga";

    // Seleccionar la lista de destinos
    const listaDestinos = document.getElementById("destinos").querySelector("ul");

    // Crear un nuevo elemento "li"
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nombreDestino;

    // Agregar el nuevo elemento a la lista
    listaDestinos.appendChild(elementoLista);
  }

  // Llamada a la función
  agregarDestino();
  
  // Función para modificar el texto de un título (H2)
  function modificarTitulo(seccionId, nuevoTexto) {
    const seccion = document.getElementById(seccionId);
    const titulo = seccion.querySelector("h2");
    titulo.textContent = nuevoTexto;
   }



  
  // Función para eliminar una imagen de la sección "Super Promo"
  function eliminarImagen(indice) {
  const imagenes = document.querySelectorAll("section > img");
  if (indice >= 0 && indice < imagenes.length) {
    imagenes[indice].parentNode.removeChild(imagenes[indice]);
 }
}
  
  // Ejemplo de uso de las funciones
 
 modificarTitulo("ofertas", "¡Ofertas imperdibles para tu viaje soñado!");
 eliminarImagen(2); // Elimina la tercera imagen de la sección "Super Promo"