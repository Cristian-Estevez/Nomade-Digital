const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const {nombre} = producto;

console.log(nombre);

//destructuring con arreglos
const numeros = [10,20,30,40,50];

//es como con los objetos, solo que los elementos no estan definidos por un nombre como 
//en el objeto. Tengo que ponerle yo el nombre en el momento que llamo al elemento
//los elementos se llaman por su posicion

// const [a, b, c] = numeros;

// console.log(c);

//si quiero llamar solo al tercer valor...
 const [ , , c] = numeros;
 console.log(c);
