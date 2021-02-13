//EJERCICIO MAS AVANZADO
//importante seleccionar el elemento con el que vamos a trabajar y darle una referencia

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//si es un evento, el primer parametro que se pasa es el de lo que va a hacer ese evento
//el segundo, su funcion
btnFlotante.addEventListener('click', () => {
    console.log('diste click enel boton')
})

//tambien se puede hacer asi, con la funcion por otro lado
btnFlotante.addEventListener('click', mostrarOcultarFooter);//en este caso la funcion no requiere parentesis

// function mostrarOcultarFooter() {
//     console.log('diste click en el boton');
// }

//el footer tiene una class activo que esta en el style, hace que se muestre, 
//con el mismo codigo la agrego al html
//en ese caso JS agrega y elimina la clase activo para que aparezca y desaparexca el footer
function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Abrir menu';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
    }
}

//con el if si esta con la clase activo y le damos click, se borra el activo
//con el else cae por defecto que todavia no le dimos click y no esta la clase activo
//circulo vicioso
//el btn flotante hace que cambie el color del boton


//tambien se puedeponer this en btn flotante, porque se refiere a ese mismo que ejecuta el event
// function mostrarOcultarFooter() {
//     if( footer.classList.contains('activo') ) {
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
            // this.textContent = 'abrir menu';
//     } else {
//         footer.classList.add('activo');
//         this.classList.add('activo');
            // this.textContent = 'X cerrar';
//     }
// }

