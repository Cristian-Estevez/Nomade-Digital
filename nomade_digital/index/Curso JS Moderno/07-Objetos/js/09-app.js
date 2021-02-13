//es como ===, hace que tenga que hacer bien las cosas sino me da error
"use strict"; 

const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

//con seal se no se puede agregar ni borrar propiedades, solo modificarlas

Object.seal(producto);

//con esto agregaba o eliminaba propiedades
producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);

//saber si un objeto esta sellado
console.log(Object.isSealed(producto));

