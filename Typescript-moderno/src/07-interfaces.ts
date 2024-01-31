interface videojuego {
  titulo: string;
  categoria: string;
  edad: number;
  duracion?: number;
  lanzado?: boolean;
  mostrar(): void;
  actualizar(consola: string): string;
}

//Clase

class Fifa implements videojuego {
  constructor(
    public titulo: string,
    public categoria: string,
    public edad: number,
    public duración: number,
    public lanzado?: true
  ) {}
  mostrar(): void {
    console.log(this.titulo, this.categoria, this.edad);
  }
  actualizar(consola: string): string {
    console.log("Buscando actualizaciones....");
    return "Actualizado";
  }
}

let fifa23: Fifa = new Fifa("fifa 23", "Futbol", 4, 25, true);

console.log(fifa23.mostrar());
//Interfaz objeto literal

let gta: videojuego = {
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
