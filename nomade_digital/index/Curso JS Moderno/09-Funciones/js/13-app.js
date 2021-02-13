// pasar a arrow las funciones

const reproductor = {

    cancion: '',

    reproducir: id => console.log(`reproduciendo cancion con el id ${id}`),

    pausar: () => console.log(`pausando...`),

    borrar: id => console.log(`borrando cancion... ${id}`),

    crearPlaylist: nombre => console.log(`creando la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'eia';
reproductor.obtenerCancion;

reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar('melendi');
reproductor.crearPlaylist('fonsi');