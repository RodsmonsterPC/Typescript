import deleteOfList from "./delete.js";
import edit from "./edit.js";
export default class List {
  constructor() {
    //Seleccionr Elementos del dom a usar
    this.content = document.querySelector("#content");
  }

  peliTemplate(peli) {
    return `<article id="peli-${peli.id}" class="peli-item">
        <h3 class="title">${peli.title}</h3>
        <p class="description">${peli.description}</p>
        <button class="edit" data-id=${peli.id}></button>
        <button class="delete" data-id=${peli.id}></button>
      </article>`;
  }

  show(pelis) {
    //Vaciar dom del contendor de peliculas
    this.content.innerHTML = "";

    //Recorrer y mostrar todos los objetos/peliculas del localstorage
    pelis.forEach((peli) => {
      this.content.innerHTML += this.peliTemplate(peli);
    });

    // Funcionalidad botones de borrado
    deleteOfList();
    //Funcionalidad botones de edicion
    edit();
  }
}
