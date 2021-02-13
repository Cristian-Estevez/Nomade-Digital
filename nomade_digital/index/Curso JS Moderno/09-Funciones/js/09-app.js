//metodos de propiedad
//es una funcion que se aplica a una propiedad de un objeto

const reproducir = {
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id ${id}`)
    },

    pausar: function() {
        console.log(`pausando...`)
    },

    borrar: function(id) {
        console.log(`borrando cancion... ${id}`)
    },

    crearPlaylist: function(nombre) {
        console.log(`creando la playlist ${nombre}`)
    }
}

//sintaxis de punto para los objetos
reproducir.reproducir(30);
reproducir.reproducir(30);

reproducir.pausar();

//borrar cancion

// reproducir.borrar = function(id) {
//     console.log(`borrando cancion... ${id}`)
// }

reproducir.borrar(30);


reproducir.crearPlaylist('bee gees');