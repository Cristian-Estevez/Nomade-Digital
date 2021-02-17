const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

console.table(meses);


//recorrer un array
//pimero necesitamos saber cuantos elementos tiene el arreglo
console.log(meses.length);

//despues iterar el array
// el for esta compuesto por tres partes, la primera es indicar desde donde quiero arrancar
//despues, hasta cuanto quiero que recorra
//por ultimo, como quiero que corra
//pongo var let porque i va cambiando
for(let i = 0; i < meses.length; i++ ) {
    console.log(meses[i]);
}