const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 25},
    { nombre: 'reloj', precio: 40},
    { nombre: 'pulsera', precio: 10},
    { nombre: 'celular', precio: 100},
    { nombre: 'iphone', precio: 250},
    { nombre: 'mackbook', precio: 345},
]




//asi se llega con for
// for(let i = 0; i < carrito.length; i++ ) {
//     console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
// }

//js tiene su metodo para recorrer este arreglo con objeto
//es como que producto es el plural y nombre y precio el singular
carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
} )