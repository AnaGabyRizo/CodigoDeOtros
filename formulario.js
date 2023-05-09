//Este código crea un formulario que permite al usuario ingresar información sobre invitados a una lista de eventos. 
//El formulario incluye campos para el nombre, edad y nacionalidad de cada invitado. 
//Cuando el usuario envía el formulario, se ejecuta una función que valida la información ingresada y agrega el invitado a la lista de invitados, mostrando su nombre, edad y nacionalidad. 
//También se agrega un botón "Eliminar invitado" que permite al usuario eliminar un invitado de la lista.

var form = document.querySelector("#form");
var nombreInput = form.elements[0]; // Se cambiaron los nombres de las variables n, e, y na a nombres 
var edadInput = form.elements[1];
var nacionalidadSelect = form.elements[2];
var lista = document.getElementById("lista-de-invitados");

form.onsubmit = function(event) {
  event.preventDefault();
  
  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var i = nacionalidadSelect.selectIndex;
  var nacionalidad = nacionalidadSelect.options[i].value;

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

if (nombre.length > 0 && (edad > 18 && edad < 120)) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

//var botonBorrar = document.createElement("button")
//botonBorrar.textContent = "Eliminar invitado"
//botonBorrar.id = "boton-borrar"
//var corteLinea = document.createElement("br")
//document.body.appendChild(corteLinea)
//document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

//var spanNombre = document.createElement("span")
//var inputNombre = document.createElement("input")
//var espacio = document.createElement("br")
//spanNombre.textContent = "Nombre: "
//nputNombre.value = nombre 
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)

// function crearElemento(descripcion, valor) {
//var spanNombre = document.createElement("span")
//var inputNombre = document.createElement("input")
//var espacio = document.createElement("br")
//spanNombre.textContent = descripcion + ": "
//inputNombre.value = valor 
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
botonBorrar.parentNode.remove();

function crearElemento(descripcion, valor) {
  var elemento = document.createElement("div");
  var spanNombre = document.createElement("span");
  }
}