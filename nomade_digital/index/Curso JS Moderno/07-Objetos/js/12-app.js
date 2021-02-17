
//Object literal
const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,
       
}

//object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}

const producto2 = new Producto('monitor 20 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('auto mercedes', '300' );
console.log(producto3)