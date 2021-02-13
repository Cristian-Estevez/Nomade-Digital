const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 25},
    { nombre: 'reloj', precio: 40},
    { nombre: 'pulsera', precio: 10},
    { nombre: 'celular', precio: 100},
    { nombre: 'iphone', precio: 250},
    { nombre: 'mackbook', precio: 345},
]

//.map crea un nuevo arreglo, mientras que forEach no
const nuevoArreglo = carrito.map(function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}` ;
})
console.log(nuevoArreglo);

//. map, por ahi sirve si quiero crear un nuevo arreglo con productos que cuesten mas de 300 por ej


//en este ejemplo me sale undefined, ya que uso forEach, no puedo modificar una constante
const nuevoArreglo2 = carrito.forEach(function(producto) {
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}` ;
})
console.log(nuevoArreglo2);

