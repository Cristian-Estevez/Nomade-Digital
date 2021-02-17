const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

//si bien un const no se puede cambiar, cuando tiene propiedades
//esas propiedades si se pueden cambiar

producto.disponible = false;
console.log(producto);

