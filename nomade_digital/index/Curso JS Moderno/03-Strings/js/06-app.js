const producto = 'monitor de 20 pulgadas';

// .repetear permite repetir una cadena de texto

const texto = 'en promocion '.repeat(3)
//si le paso un numero float, el numero se redondea

console.log(texto)
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = 'Estoy aprendiendo JavaScript moderno';
console.log(actividad.split(" ")); //hay que poner en parentesis por que quiero que
//se dividan las palabras, en cada espacio, cada coma, etc


//extraer un hastagh
const tweet = "estoy es JavaScript moderno #js";
console.log(tweet.split("#"));