"use strict";
class Coche {
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
        this.prueba = "Rodolfo";
    }
    arrancar() {
        console.log("clase padre");
        this.arrancado = true;
    }
    apagar() {
        this.arrancado = false;
    }
    set darrColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    static saludar() {
        return "Hola que tal";
    }
}
class Camioneta extends Coche {
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
    }
    arrancar() {
        console.log("clase hija");
        this.arrancado = true;
        this.velocidad = 200;
    }
    mostrar() {
        super.arrancar();
        console.log(this);
        return this.arrancado;
    }
}
let micamioneta = new Camioneta("Jeep", "Jeep", 1999, "Negro");
// let mi_coche: Coche = new Coche("Renaul", "clio", 2000, "azul");
// mi_coche.darrColor = "Rojo";
// console.log(mi_coche.getColor);
// console.log(Coche.saludar());
