import Storage from "./storage.js";
import List from "./list.js";
export default class Add {
  constructor() {
    //Crear Objetos
    this.storage = new Storage();
    this.list = new List();
    //Conseguir elementos del Dom a utilizar
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#description");
    this.saveBtn = document.querySelector("#save");
  }

  peliSave() {
    this.saveBtn.onclick = (e) => {
      e.preventDefault();
      //Cosneguir datos actualizados
      let pelis = this.storage.getData();
      let lastId = this.storage.getLastId();
      //Datos a guardar
      let title = this.title.value;
      let description = this.description.value;
      console.log(pelis, lastId);
      //Validar campos
      if (title != "" || description != "") {
        //crear objeto a guardar
        let peli = {
          id: lastId++,
          title,
          description,
        };

        //Añadir al array de objetos
        pelis.push(peli);
        //Guardar en el localstorage
        this.storage.save(pelis);
        //Actualizar el listado
        //this.list.addToList(peli, pelis);
        this.list.show(pelis);
      } else {
        alert("Introduce bien los datos en el formulario");
      }
      console.log("acabas de enviar el formulario de add", title, description);
      return false;
    };
  }
}
