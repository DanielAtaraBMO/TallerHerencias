class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha() {
        return {
            titulo: this.titulo,
            genero: this.genero,
            anio: this.anio
        };
    }
    retirar() {
        this.disponible = false;
        console.log(`El contenido ${this.titulo} ha sido retirado `);
    }
    estado() {

        if (this.disponible == false) {
            console.log(`La pelicula ${this.titulo} no esta disponible`);
        } else {
            console.log(`La pelicula ${this.titulo} esta disponible`);
        }

    }
}
class Pelicula extends Contenido {
    constructor(titulo, genero, anio, tiempo) {
        super(titulo, genero, anio);
        this.duracion = tiempo;
    }
    duracionFormateada() {
        let conversion = (Math.floor(this.duracion / 60)) + "h" + (this.duracion % 60) + "min";
        return conversion;
    }
    ficha() {
        return {
            titulo: this.titulo,
            genero: this.genero,
            anio: this.anio,
            duracion: this.duracionFormateada()
        }
    }
}
class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio)
        this.temporadas = temporadas;
        this.episodeosPorTemporada = [];
    }
    registrarEpisodios(cantidad) {
        this.episodeosPorTemporada.push(cantidad);
    }
    totalEpisodios() {
        let todoslosEpisodios = 0;
        for (let i = 0; i < this.temporadas; i++) {
            todoslosEpisodios = todoslosEpisodios + this.episodeosPorTemporada[i];
        }
        return todoslosEpisodios;
    }
    ficha() {
        return {
            titulo: this.titulo,
            genero: this.genero,
            anio: this.anio,
            temporada: this.temporadas,
            episodios: this.totalEpisodios()
        };

    }
}
let Contenido1 = new Contenido("Anabelle", "Terror", 2014);

let Pelicula1 = new Pelicula("Spiderman", "Acción", 2004, 125)
let Pelicula2 = new Pelicula("Avengers", "Acción", 2016, 131)
let Pelicula3 = new Pelicula("Hasta el ultimo hombre", "Suspenso", 2018, 120)

let Serie1 = new Serie("Stranger Things", "Ciencia Ficción", 2016, 5)
let Serie2 = new Serie("One Piece", "Accion y Aventura", 2000, 1)
let Serie3 = new Serie("Breaking bad", "Suspenso", 2008, 5)

Serie1.registrarEpisodios(15);  //Temporada 1
Serie1.registrarEpisodios(12);  //Temporada 2
Serie1.registrarEpisodios(24);  //Temporada 3
Serie1.registrarEpisodios(10);  //Temporada 4
Serie1.registrarEpisodios(18);  //Temporada 5
console.log(`La serie ${Serie1.titulo} tiene un total de ${Serie1.totalEpisodios()} episodios`);

Serie2.registrarEpisodios(1164);//Temporada
console.log(`La serie ${Serie2.titulo} tiene un total de ${Serie2.totalEpisodios()} episodios`);

Serie3.registrarEpisodios(10);  //Temporada 1
Serie3.registrarEpisodios(10);  //Temporada 2
Serie3.registrarEpisodios(10);  //Temporada 3
Serie3.registrarEpisodios(12);  //Temporada 4
Serie3.registrarEpisodios(20);  //Temporada 5
console.log(`La serie ${Serie3.titulo} tiene un total de ${Serie3.totalEpisodios()} episodios`);

catalogo = [Pelicula1, Pelicula2, Pelicula3, Serie1, Serie2, Serie3];

for (let h = 0; h < catalogo.length; h++) {
    console.log(catalogo[h].ficha());
}



Pelicula2.retirar();
Serie2.retirar();

Pelicula2.estado();
Serie2.estado();

let conteo = 0;
for (let w = 0; w < catalogo.length; w++) {
    if (catalogo[w].disponible == true) 
        conteo += 1;    
}

console.log("El numero de series y peliculas disponibles es:", conteo);

/*
console.log(Pelicula1.duracionFormateada());
console.log(Pelicula1.ficha());
console.log();
*/

