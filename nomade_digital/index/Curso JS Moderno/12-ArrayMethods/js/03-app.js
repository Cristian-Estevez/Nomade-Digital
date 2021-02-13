//toma una cantidad de datos, los reune y entrega un resultado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach, el total a pagar
let total = 0;
carrito.forEach ( producto => total += producto.precio);

console.log(total);

//tambien con un reduce
//es mas complicado porque se le pasan dos parametros que se ponen en orden invertido
let resultado = carrito.reduce ( (total, producto) => total + producto.precio, 0); //0 es el valor inicial que se le asigna a total

console.log(resultado);