const producto = '        Monitor 20 pulgadas     ';

console.log(producto);
console.log(producto.length);

// eliminar del inicio el espacio
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log(producto.trimStart().trimEnd());