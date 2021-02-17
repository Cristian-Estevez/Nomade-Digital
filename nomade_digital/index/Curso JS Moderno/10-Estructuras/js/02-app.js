const puntaje = 1000;

// if(puntaje != 1000) { //!= es diferente, == igual a
//     console.log(`si, es diferente`)
// }

if(puntaje == '1000') {
    console.log('si , es igual')
}

//con el operador estricto, evalua los tipos de datos tambien y en este caso da que no es igual

if(puntaje === '1000') {
    console.log('si , es igual')
}
