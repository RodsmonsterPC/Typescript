let personas: string[] = ["Victor", "Rodolfo", "Fran"];
personas.push("Marian");

let years: number[] = [2000, 2001, 2002];

years.push(2003);

console.log(personas, years);
//personas.push(1)

//Tuplas

let pelicula: [string, boolean, number] = ["Bataman Begins", true, 1990];

pelicula.push("hola");

console.log(typeof pelicula, pelicula.length);

//Enum -enumaración
enum DatosPersonales {
  nombre = "Rodolfo",
  dni = 3456345,
  direccion = "Calle Rio Frio",
  ciudad = "Tampico",
}

console.log(DatosPersonales.nombre, DatosPersonales.dni);

//Cast o convertir a toro tipo de dato

let valor_desconocido: any = 1234567;

let frase_final: string = <string>valor_desconocido;
