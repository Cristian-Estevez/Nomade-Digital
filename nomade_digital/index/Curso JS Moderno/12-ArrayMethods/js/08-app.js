const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//agregar un mes mas modificandoel arreglo inicial

// meses.push('Agosto');
// console.log(meses);

//de esta manera no modificamos el arreglo original, es una de las bases de la programacion funcional
const meses2 = [...meses, 'Agosto'];
console.log(meses2);


//agregar un elemento al carrito
const producto = {nombre: 'disco duro', precio: 300};

const carrito2 = [...carrito, producto];

console.log(carrito2);