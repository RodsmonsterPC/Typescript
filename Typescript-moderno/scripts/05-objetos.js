"use strict";
// objetos ts
let empresaNueva = {
    nombre: "Micorsoft",
    sector: "Informatica",
    servicios: ["Sisitemas operaticos", "ofimatica", "consolas"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    },
};
console.log(empresaNueva.mostrar());
