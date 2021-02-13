//eventos con los inputs

//seleciconar el elemento
const inputBusqueda = document.querySelector('.busqueda');

// inputBusqueda.addEventListener('keydown', () => {
//     console.log('escribiendo....')
// })
//INPUT es el mas usado, que envuelve a todas las que escribo menos blur

//tambien esta keyup, que es cuando escribo tambien
//cut, copy, paste, cuando hago esas cosas con el texto


//con input y esa funcion que se puede llamar de otra manera pero generalmente es asi, 
//o event o e , obtenemos informacion de lo que el usuario escribe
//el .type dice sobre que elemento se esta escribiendo
//para saber mas especifico .target y para traer literalmente lo que escribe .value
inputBusqueda.addEventListener('input', (evt) => {
    console.log(evt.target.value);
})


//validar un input
//en este caso la validacion falla cuando no hay texto en el input
inputBusqueda.addEventListener('input', (evt) => {
    if(evt.target.value === '') {
        console.log('fallo la validacion')
    }
})