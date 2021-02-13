
const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

//extraer una propiedad de un objeto
//antes se hacia asi

// const nombre = producto.nombre;
// console.log(nombre);

//ahora con ecma script
//destucturing

// const { nombre } = producto;
// const{precio} = producto;
// console.log(precio);
// console.log(nombre);

//para destructuring propuedades de un mismo objeto en una linea
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);
