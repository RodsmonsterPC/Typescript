//Comprobar que el navegador es compatible
if (typeof Storage !== "undefined") {
  window.location.href = "youtube.com";
}

//Guardar datos en el navegador

localStorage.setItem("Nombre", "Rodolfo");
localStorage.setItem("Prueba", "Hola");

//Recuperar datos

let datos = localStorage.getItem("Nombre");

//Borrar datos
localStorage.removeItem("Prueba");
