//es como ===, hace que tenga que hacer bien las cosas sino me da error
"use strict"; 

const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

//habilitar un metodo para que no se modifiquen los
//const cuando tienen propiedades

 Object.freeze(producto);

//con esto agregaba o eliminaba propiedades
// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);

//como saber si un objeto esta o no congelado
console.log(Object.isFrozen(producto));