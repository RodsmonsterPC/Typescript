"use strict";
let personas = ["Victor", "Rodolfo", "Fran"];
personas.push("Marian");
let years = [2000, 2001, 2002];
years.push(2003);
console.log(personas, years);
//personas.push(1)
//Tuplas
let pelicula = ["Bataman Begins", true, 1990];
pelicula.push("hola");
console.log(typeof pelicula, pelicula.length);
//Enum -enumaración
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Rodolfo";
    DatosPersonales[DatosPersonales["dni"] = 3456345] = "dni";
    DatosPersonales["direccion"] = "Calle Rio Frio";
    DatosPersonales["ciudad"] = "Tampico";
})(DatosPersonales || (DatosPersonales = {}));
console.log(DatosPersonales.nombre, DatosPersonales.dni);
//Cast o convertir a toro tipo de dato
let valor_desconocido = 1234567;
let frase_final = valor_desconocido;
