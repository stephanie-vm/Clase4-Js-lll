/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el form
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");

const inputNombre = document.querySelector("input[type=name]");
const inputApellido = document.querySelector("input[type=text]");
const inputEmail = document.querySelector("input[type=email]");

const avisoError = document.createElement('h1');
avisoError.classList.add('mensaje-error');
const linea = document.querySelector('form > .line');
const lista = document.createElement('ul');
lista.classList.add('mensaje-error');
const item1 = document.createElement('li');
lista.appendChild(item1);
const item2 = document.createElement('li');
lista.appendChild(item2);
const item3 = document.createElement('li');
lista.appendChild(item3);
const mensajeConfirmacion = document.createElement('p');
mensajeConfirmacion.classList.add('js-mensaje');

function validacionFormulario() {
  if (inputNombre.value === '') {
    inputNombre.classList.add('js-error');
    avisoError.innerHTML = 'Ocurrio un error, verifica los siguientes campos:';
    form.insertBefore(avisoError, linea);
    item1.innerText = 'Nombre *';
    form.insertBefore(lista, linea);
  }else{
    inputNombre.classList.remove('js-error');
  }
  if (inputApellido.value === '') {
    inputApellido.classList.add('js-error');
    item2.innerText = 'Apellido *';
  }else{
    inputApellido.classList.remove('js-error');
  }
  if(inputEmail.value === '') {
    inputEmail.classList.add('js-error');
    item3.innerText = 'Email *';
  } else{
    inputNombre.classList.remove('js-error');
    mensajeConfirmacion.innerHTML= 'Su formulario fue enviado';
    form.appendChild(mensajeConfirmacion);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  validacionFormulario();
  console.log("FORMULARIO ENVIADO");
});
