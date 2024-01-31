let mi_objeto = {
  nombre: "Rodolfo",
  apellidos: "Pérez Cerecedo",
  correo: "rodolfo.perez01@iest.edu.mx",
};

let objeto_string = JSON.stringify(mi_objeto);
localStorage.setItem("Objeto", objeto_string);
