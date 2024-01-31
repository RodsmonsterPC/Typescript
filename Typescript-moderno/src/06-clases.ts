class Coche {
  //   marca: string;
  //   modelo: string;
  //   year: number;
  //   color: string;
  //   arrancado: boolean;
  //   velocidad: number;

  //   constructor(marca: string, modelo: string, year: number, color: string) {
  //     this.marca = marca;
  //     this.modelo = modelo;
  //     this.year = year;
  //     this.color = color;
  //     this.arrancado = false;
  //     this.velocidad = 0;
  //   }

  //public: assecible desde cualquier parte
  //protected: desde dentro de la clase y clases hijas
  //privadas: solo desde dentro de esta clase

  public prueba: string;
  constructor(
    public marca: string,
    public modelo: string,
    public year: number,
    public color: string,
    public arrancado: boolean = false,
    public velocidad: number = 0
  ) {
    this.prueba = "Rodolfo";
  }

  arrancar(): void {
    console.log("clase padre");
    this.arrancado = true;
  }

  apagar(): void {
    this.arrancado = false;
  }

  public set darrColor(color: string) {
    this.color = color;
  }

  public get getColor(): string {
    return this.color;
  }

  static saludar(): string {
    return "Hola que tal";
  }
}

class Camioneta extends Coche {
  constructor(
    public marca: string,
    public modelo: string,
    public year: number,
    public color: string,
    public arrancado: boolean = false,
    public velocidad: number = 0
  ) {
    super(marca, modelo, year, color);
  }

  public arrancar() {
    console.log("clase hija");
    this.arrancado = true;
    this.velocidad = 200;
  }
  public mostrar() {
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
