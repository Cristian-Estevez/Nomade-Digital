//utilizar el valor de una funcion
//con return

function sumar(a, b){
    return a + b;
}

//return devuelve ese resultado y hay que asignarlo a una variable
const resultado = sumar( 2, 3 );

console.log(resultado)




//ejemplo mas complejo

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(250);
total = agregarCarrito(210);
total = agregarCarrito(120);

const totalPagar = calcularImpuesto(total)

console.log(`el total a pagar es de ${totalPagar}`);

console.log(total);