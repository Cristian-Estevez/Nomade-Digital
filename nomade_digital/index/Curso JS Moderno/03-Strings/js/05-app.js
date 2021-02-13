const producto = 'monitor de 20 pulgadas';

//reemplazar palabras
console.log(producto);
console.log(producto.replace('pulgadas', '"'));

//slice, cortar una parte de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(2));

//alternativa a slice, substring
console.log(producto.substring(0,10));


// tomar la inicial de un nombre
const usuario = "juan";

console.log(usuario.substring(0,1));
// otra forma
console.log(usuario.charAt(0));
