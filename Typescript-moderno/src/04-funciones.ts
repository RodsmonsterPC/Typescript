//Uso Normal
let saludo = (nombre: string): string => "Un saludo para " + nombre;

console.log(saludo("Rodolfo"));

//Nada / Void

let mostrar_fecha = (): void => console.log("20 - 01 - 2023");

mostrar_fecha();

//Never / fin de la aplicacion

let finApp = (): never => {
  throw new Error("La apliación se ha cerrado");
};

//Parametros funciones

let mostrarPais = (pais?: string, continente?: string): string => {
  let resultado: string = "Faltan datos";
  if (pais && continente) {
    return pais + " " + continente;
  }
  return resultado;
};

console.log(mostrarPais("Mexico", "America"));

// Tipo funcion

let grupos: (datos: string[]) => string;

grupos = (datos: string[]) => {
  return "Mis grupos favoritos son " + datos.toString();
};

console.log(grupos(["Natos y waor", "La fuga", "metalica"]));

// Tipo literal
//atuendo: "especial" | 1 | 2 | 3 | 4

//Tipo personalizado o alias
type traje = "especial" | 1 | 2 | 3 | 4 | "comprado";

let tekken = (personaje: string, atuendo: traje): string =>
  `El personaje es ${personaje} y lleva el atuendo ${atuendo}`;

console.log(tekken("Tigre", 2));
