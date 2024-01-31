"use strict";
//Clase
class Fifa {
    constructor(titulo, categoria, edad, duración, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duración = duración;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log("Buscando actualizaciones....");
        return "Actualizado";
    }
}
let fifa23 = new Fifa("fifa 23", "Futbol", 4, 25, true);
console.log(fifa23.mostrar());
//Interfaz objeto literal
let gta = {
    titulo: "GTA 5",
    categoria: "Acción",
    edad: 18,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("Buscando actualizaciones....");
        return "Actualizado";
    },
};
