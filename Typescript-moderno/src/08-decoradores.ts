let mostrarMensaje = () => console.log("Proyectando la pelicula");

// let proyectar = (activar: boolean): any => {
//   if (activar) {
//     return mostrarMensaje();
//   } else {
//     return null;
//   }
// };

// let proyectar = (constructor: Function) => {
//   constructor.prototype.hacerProyeccion = function (activar: boolean): void {
//     if (activar) {
//       console.log("Proyectando la pelicual", this.titulo);
//     } else {
//       console.log("Cine cerrado");
//     }
//   };
// };
let proyectar = (metadatos: any) => {
  return (constructor: Function) => {
    constructor.prototype.hacerProyeccion = function (activar: boolean): void {
      if (metadatos.activar) {
        console.log("Proyectando la pelicual", this.titulo);
      } else {
        console.log("Cine cerrado");
      }
    };

    constructor.prototype.agregarASeleccion = function (): string[] {
      let peliculas = metadatos.seleccion;
      peliculas.push(this.titulo);

      return peliculas;
    };
  };
};

@proyectar({
  activar: true,
  seleccion: ["Superman", "Gran Torino", "Spiderman 3"],
})
class Pelicula {
  constructor(
    public titulo: string,
    public genero: string,
    public proyectando: boolean
  ) {}
}

let batman: any = new Pelicula("Batman Begins", "Accion", false);
batman.hacerProyeccion();
console.log(batman.agregarASeleccion());
