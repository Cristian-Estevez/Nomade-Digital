//ejercicio con carrito
const carrito = [];

//primero definicr un producto
const producto2 = {
    nombre: 'celular',
    precio: '200',
}

const producto = {
    nombre: 'auto mercedes',
    precio: 5000,
}

//llevar un elemento al primer lugar
const producto3 = {
    nombre: 'auriculares',
    precio: 150,
}

//forma declarativa de aumentar el carrito
let resultado;

resultado = [...carrito, producto];

console.table(resultado);