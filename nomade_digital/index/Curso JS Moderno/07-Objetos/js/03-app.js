
const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.disponible;


console.log(producto);