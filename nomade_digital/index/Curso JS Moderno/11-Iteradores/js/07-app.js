//for in itera sobre objetos y for of sobre arreglos
//misma sintaxis

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];


const carrito = [
    { nombre: 'monitor 27 pulgadas', precio:500 },
    { nombre: 'telefono', precio:200 },
    { nombre: 'auto', precio:150 },
    { nombre: 'televisor', precio:210 },
    { nombre: 'pelota', precio:320 },
    { nombre: 'iphone', precio:412 },
]

//recorre un arreglo mas facil
//es como el for in de python

for(let pendiente of pendientes) {
    console.log(pendiente); //recorre el arreglo pendientes
}

for(let producto of carrito) {
    console.log(producto);
}