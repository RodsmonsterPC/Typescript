"use strict";
//Uso Normal
let saludo = (nombre) => "Un saludo para " + nombre;
console.log(saludo("Rodolfo"));
//Nada / Void
let mostrar_fecha = () => console.log("20 - 01 - 2023");
mostrar_fecha();
//Never / fin de la aplicacion
let finApp = () => {
    throw new Error("La apliación se ha cerrado");
};
//Parametros funciones
let mostrarPais = (pais, continente) => {
    let resultado = "Faltan datos";
    if (pais && continente) {
        return pais + " " + continente;
    }
    return resultado;
};
console.log(mostrarPais("Mexico", "America"));
// Tipo funcion
let grupos;
grupos = (datos) => {
    return "Mis grupos favoritos son " + datos.toString();
};
console.log(grupos(["Natos y waor", "La fuga", "metalica"]));
let tekken = (personaje, atuendo) => `El personaje es ${personaje} y lleva el atuendo ${atuendo}`;
console.log(tekken("Tigre", 2));
