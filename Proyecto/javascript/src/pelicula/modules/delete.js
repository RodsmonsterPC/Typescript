import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //Crear objetos
  const storage = new Storage();
  const list = new List();

  //Datos de las peliculas disponibles
  let pelis_stored = storage.getData();
  let pelis_viewed = document.querySelectorAll("#content .peli-item");

  //Recorrer peliculas mostradas
  pelis_viewed.forEach((peli) => {
    //Capturar el botón
    let delete_btn = peli.querySelector(".delete");
    //Aplicar un evento click
    delete_btn.onclick = function () {
      //Conseguir el id de la pelicula que quiero borrar
      const peli_id = this.getAttribute("data-id");

      //Filtrar el array para que elimine la que no quiero
      const new_pelis_stored = pelis_stored.filter(
        (peli) => peli.id !== parseInt(peli_id)
      );

      //Actualizar datos en LocalStorage
      storage.save(new_pelis_stored);

      //Mostrar la nueva lista
      list.show(new_pelis_stored);
    };
  });
}
