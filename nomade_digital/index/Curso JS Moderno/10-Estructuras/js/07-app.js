// operador OR
//si no se cumple, el primero, se cumle el otro? y el otro?

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;

const totalAPagar = 6000;


if( efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar ){
    console.log('si, podes pagar')
} else {
    console.log('lo siento, no llegas al monto')
}