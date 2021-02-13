//los iteradores vendrian a ser recorrido de objeto o arreglo de manera manual, los array methods son para hacerlo con funciones
// .SOME Y .INCLUDES array methods


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//recorrer cada uno de los elementos

meses.forEach((mes) => {
    console.log(mes);
}) 

//comprobar si un mes esta en la lista, de manera manual

// meses.forEach( mes => {
//     if(mes == 'Marzo') {
//         console.log('marzo esta');

//     } 
// })

//comprobar si existe con array method con INCLUDES
// const resultado = meses.includes('Marzo');

// console.log(resultado);

//en un arreglo de objetos se usa SOME

const existe = carrito.some( producto => {
    
    return producto.nombre === 'Tablet';
})

console.log(existe);

//en un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero');

console.log(existe2);