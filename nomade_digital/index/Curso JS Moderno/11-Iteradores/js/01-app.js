//ITERADORES

//for loop, se ejecuta hasta que se cumpla una funcion
//consta de tres partes, la variable con que iniciamos
// la condicion a cumplir
// por ultimo el incremento

// for( let i = 0; i < 10; i++ ) {
//     console.log(`Numero: ${i}`)
// } 

// for(let i = 0; i <= 20; i++ ){
//     if(i % 2 === 0){
//         console.log(`el numero ${i} es par`)
//     } 
// }


const carrito = [
    { nombre: 'monitor 27 pulgadas', precio:500 },
    { nombre: 'telefono', precio:200 },
    { nombre: 'auto', precio:150 },
    { nombre: 'televisor', precio:210 },
    { nombre: 'pelota', precio:320 },
    { nombre: 'iphone', precio:412 },
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i]);
}