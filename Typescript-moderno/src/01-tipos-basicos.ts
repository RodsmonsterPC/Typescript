// Tipos de datos básicos

let texto:string = "Hola que tal!!"

texto = "hola";

let numero:number = 10;

numero=12.4;

let verdadero:boolean = true;

verdadero = false;

let normal:any = "caulquier cosa";

normal = true;
normal = 14;


let persona:string = "Rodolfo"

persona = "Pérez"

//persona = null

let cualquiera:unknown = "Soy un texto"

cualquiera=1;
cualquiera=true;

if(typeof cualquiera === "number"){
    
    let mi_numero:number = cualquiera
    console.log(mi_numero)
}


