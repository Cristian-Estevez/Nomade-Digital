// eliminar elementos del html, hay dos formas
//una desde el mismo elemento y otra desde el padre

//desde el mismo elemento
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

//desde el padre, hay que pasarle la referencia del elemento a eliminar
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);// para ver en que posicion esta el que queremos eliminar

navegacion.removeChild( navegacion.children[2] );