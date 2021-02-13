
//legar hasta el numero 5
// for(let i = 0; i < 10; i++ ){
    
//     if(i=== 5){
//         console.log('este es el numero 5');
//         break;
//     }

//     console.log(`numero ${i}`);
// }

// //que el numero 5 se cambie por 'cinco'

// for(let i = 0; i < 10; i++ ){
    
//     if(i=== 5){
//         console.log('cinco');
//         continue;
//     }

//     console.log(`numero ${i}`);
// }

//aplicar descuento a un elemento con un for loop
const carrito = [
    { nombre: 'monitor 27 pulgadas', precio:500 },
    { nombre: 'telefono', precio:20, descuento: true },
    { nombre: 'auto', precio:150 },
    { nombre: 'televisor', precio:210 },
    { nombre: 'pelota', precio:320 },
    { nombre: 'iphone', precio:412 },
]

for(let i = 0; i < carrito.length; i ++){
    
    if(carrito[i].descuento) {
        console.log(`el articulo ${carrito[i].nombre} tiene un descuento`)
        continue;
    }
    console.log(carrito[i].nombre)
}