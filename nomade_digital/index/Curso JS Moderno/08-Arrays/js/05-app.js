//con push y unshift se crea de forma imperativa

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

//agregar al final del arreglo sin conocer la posicion 
meses.push('agosto');
console.log(meses);

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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);