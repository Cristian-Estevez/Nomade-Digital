const autenticado = true;

//esta de mas poner === true, es obvio que si pongo true, tira puedo ver netflix, si pongo false, no puedo
if(autenticado === true) {
    console.log('si puedes ver netflix')
} else {
    console.log('no puedes ver netflix')
}

//forma correcta de lo anterior
if(autenticado) {
    console.log('si puedes ver netflix')
} else {
    console.log('no puedes ver netflix')
}

//operador ternario
console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');