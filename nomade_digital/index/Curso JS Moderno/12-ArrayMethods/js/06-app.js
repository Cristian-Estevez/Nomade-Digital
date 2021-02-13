//EVERY, todos los elementos de un arreglo debe cumplir una condicion para que devuelva true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//si todos los elementos cumplen esa condicion te tira true, sino false
const resultado = carrito.every ( producto => producto.precio < 1000);
console.log(resultado);

//estaba la otra opcion para ver si al menos alguno lacumple
const resultado2 = carrito.some( producto => producto.precio > 300);
console.log(resultado2);