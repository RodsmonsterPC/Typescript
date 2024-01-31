function modmen(mostrar: boolean) {
  return function info(target: object, propertyKey: String, descriptor: any) {
    if (mostrar) {
      console.log(target);
      console.log(propertyKey);
      console.log(descriptor);
    } else {
      descriptor.value = function () {
        console.log("Método bloqueado");
      };
    }
  };
}

function mi_propiedad(
  target: any,
  propertyKey: String,
  parameterIndex: number
) {
  console.log(
    "Esta propiedad está en la clase " +
      target.constructor.name +
      " y la posicion del parametro es " +
      parameterIndex
  );
}

class Ordenador {
  marca: string = "Asus";
  @modmen(false)
  encender(@mi_propiedad mensaje: string) {
    console.log("Encendiendo....");
    console.log(mensaje);
  }
}

let pc = new Ordenador();
pc.encender("Estas en el PC de Rodolfo");
