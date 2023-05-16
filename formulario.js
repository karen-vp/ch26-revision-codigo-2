// Esta aplicación crea una lista de invitados.
// Los invitados pueden ser agregados a través de un formulario
// Se pueden borrar invitados de la lista usando el botón
const lista = document.getElementById("lista-de-invitados")

//Cambie la palabra reservada var por const de todas las variables
const formulario = document.querySelector("form");

formulario.onsubmit = function (e) {

  e.preventDefault();

  const name = formulario.elements[0]
  const age = formulario.elements[1]
  const nationality = formulario.elements[2]

  const nombre = name.value
  const edad = age.value

  const index = nationality.selectedIndex
  const nacionalidad = nationality.options[index].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

}

botonBorrar.onclick = function () {
  // this.parentNode.style.display = 'none';
  // botonBorrar.parentNode.remove()
}

function crearElemento(descripcion, valor) {

  const elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
 

  const spanNombre = document.createElement("span");
  const inputNombre = document.createElement("input");
  const espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
  lista.appendChild(elementoLista);
}