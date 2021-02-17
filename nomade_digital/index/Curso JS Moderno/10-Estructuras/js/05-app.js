// switch case, ventaja, es mas facil de leer

const metodoPago = 'moneda extranjera';

switch(metodoPago) {
    case 'efectivo': //con case se evaluan las comprobaciones
        console.log(`pagaste con ${metodoPago}`);
        break; //importante siempre el break
    case 'cheque': 
        console.log(`pagaste con ${metodoPago}`);
        break; 
    case 'moneda extranjera': 
        monedaExtranjera('euros');
        break; 
    default:
        console.log(`aun no has seleccionado un metodo de pago`)//es parecido al else
        break; //tambien importante el break
}

//tambien con switch se pueden hacer funciones

function monedaExtranjera(moneda) {
    console.log(`pagando con ${moneda}`)
}