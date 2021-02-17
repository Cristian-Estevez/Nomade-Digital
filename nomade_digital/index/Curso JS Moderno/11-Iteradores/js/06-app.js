// forEach y map
//itera sobre los elementos de un array
//for each recorre el arreglo creado, map crea un arreglo nuevo

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];

// pendientes.forEach( (pendiente) => {
//     console.log(pendiente)
// })

//la siguiente sintaxis se puede resumir en el arrow function de abajo

// pendientes.forEach( pendiente => console.log(pendiente))

// pendientes.forEach( (pendiente, indice) => {
//     console.log(`${indice} : ${pendiente}`)}) //de esta manera le damos el parametro indice, que es un conteo que va al lado de la pendiente

const carrito = [
    { nombre: 'monitor 27 pulgadas', precio:500 },
    { nombre: 'telefono', precio:200 },
    { nombre: 'auto', precio:150 },
    { nombre: 'televisor', precio:210 },
    { nombre: 'pelota', precio:320 },
    { nombre: 'iphone', precio:412 },
]

carrito.forEach( producto => console.log(producto.precio));

carrito.map( producto => console.log(producto.precio));