//en los if se cumple la primer condicion que sea verdadera

const dinero = 100;
const totalAPagar = 150;
const tarjeta = true;

if(dinero >= totalAPagar) { //de esta manera, con el igual podemos permitir que evalue si llegamos a pagar, en el caso de que la plata y el costo sean el mismo
    console.log('si puede pagar')
} else if(tarjeta) {
    console.log('si, puedo pagar porque tengo tarjeta')
} else {
    console.log('no, no puede pagar')
}