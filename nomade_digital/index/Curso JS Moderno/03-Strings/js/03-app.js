const producto = "monitor de 20";
const precio = '30 USD';

// concatenar strings

console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));

console.log(producto + precio);

console.log(producto + (' con un precio de ') + precio);

//con comilla
console.log(`el producto ${producto} tiene un precio de $ ${precio}`)