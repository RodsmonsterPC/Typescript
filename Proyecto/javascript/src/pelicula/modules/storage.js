export default class Storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    let pelis = JSON.parse(localStorage.getItem("Peliculas"));
    if (!pelis || pelis.length < 1) {
      pelis = [
        {
          id: 0,
          title: "Desarrollo Web",
          description: "rodolfo.perez01@iest.edu.mx",
        },
      ];
      this.id = 1;
    } else {
      this.id = pelis[pelis.length - 1].id + 1;
    }

    return pelis;
  }

  getLastId() {
    return this.id;
  }
  save(data) {
    localStorage.setItem("Peliculas", JSON.stringify(data));
  }
}
