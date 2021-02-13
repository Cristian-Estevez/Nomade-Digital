//usando arrow function en arrays

const carrito = [
    { nombre: 'monitor 27 pulgadas', precio:500 },
    { nombre: 'telefono', precio:200 },
    { nombre: 'auto', precio:150 },
    { nombre: 'televisor', precio:210 },
    { nombre: 'pelota', precio:320 },
    { nombre: 'iphone', precio:412 },
]

// const nuevoArreglo = carrito.map( (producto) => {
//     return `producto: ${producto.nombre} - precio: ${producto.precio }`;
// })

//mas corto que el anterior
const nuevoArreglo = carrito.map( producto => `producto: ${producto.nombre} - precio: ${producto.precio }`)

// const nuevoArreglo2 = carrito.forEach ( (producto) => {
//     console.log(`producto: ${producto.nombre} - precio: ${producto.precio }`);
// })

const nuevoArreglo2 = carrito.forEach (producto => console.log(`producto: ${producto.nombre} - precio: ${producto.precio }`))


//con dos lineas de codigo hicimos dos iteradores
console.log(nuevoArreglo);

