// objetos ts

type empresas = {
  nombre: string;
  sector: string;
  servicios: string[];
  facturacion: number;
  mostrar: () => string;
};

let empresaNueva: empresas = {
  nombre: "Micorsoft",
  sector: "Informatica",
  servicios: ["Sisitemas operaticos", "ofimatica", "consolas"],
  facturacion: 55_000_000_000,
  mostrar() {
    return this.nombre + " " + this.sector;
  },
};

console.log(empresaNueva.mostrar());
