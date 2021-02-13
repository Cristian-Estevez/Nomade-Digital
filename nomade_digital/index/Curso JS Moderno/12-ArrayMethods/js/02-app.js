//FINDINDEX para encontrar el indice de un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if( mes === 'Marzo') {
        console.log(`Marzo fue encontrado en el indice ${i}`)
    }
})

//encontrar el indice de abril

// const indice = meses.findIndex( mes => {
//     return mes === ('Abril');
// })

//despues de la function, se asume que es un return, por eso se puede sacar
const indice = meses.findIndex( mes => mes === ('Abril'))

console.log(indice)

//si arroja un resultado de -1, es que no encontro el elemento


//encontrar un indice de un arreglo de objetos
//con findindex solo va a encontrar el primer elemento que coincida
//si hay dos elementos que se llaman tablet, solo busca el primero
const indice2 = carrito.findIndex( producto => producto.nombre === 'Tablet')

console.log(indice2)