//crea un nuevo arreglo con parametro que es evaluado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//elementos con un precio mayor a 400
let resultado;

resultado = carrito.filter( producto => producto.precio > 400)
resultado = carrito.filter( producto => producto.precio < 600)

//eliminar un producto del arreglo
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')

//extraer solo audifonos
resultado = carrito.filter ( producto => producto.nombre === 'Audifonos')
console.log(resultado)