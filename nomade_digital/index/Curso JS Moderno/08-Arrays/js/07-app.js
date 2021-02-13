//con push y unshift se crea de forma imperativa

// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

 //agregar al final del arreglo sin conocer la posicion 
// meses.push('agosto');
// console.log(meses);

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
const producto4 = {
    nombre: 'moto',
    precio: 150,
}
const producto5 = {
    nombre: 'corazon',
    precio: 150,
}

//llevar un elemento al primer lugar
const producto3 = {
    nombre: 'auriculares',
    precio: 150,
}


carrito.push(producto);
carrito.push(producto4);
carrito.push(producto5);
carrito.push(producto2);
//unshift para llevar al primer lugar
carrito.unshift(producto3);

// console.table(carrito);

//eliminar ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

//eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// para eliminar un elemento del medio
carrito.splice(2, 1); //primer parametro en que posicion se encuentra el elemento
//segudno parametro, cuantos queremos cortar a partir de donde empezo
console.table(carrito);