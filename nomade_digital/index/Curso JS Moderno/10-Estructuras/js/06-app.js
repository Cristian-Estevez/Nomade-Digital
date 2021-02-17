// operador && ppor si se cumplen dos condiciones

//ver si una persona es usuario y puede pagar

const usuario = true;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('si,es usuario y puede pagar')
} else if(!usuario && !puedePagar) {
    console.log('no, no sos usuario y no podes pagar')
} else if(!usuario){ //si no cumple con las dos primeras, evalua de esta manera por separado
    console.log('no eres usuario, saca una cuenta')
} else if(!puedePagar) {//importante el signo de explamacion 'si no es...'
    console.log('sos usuario, pero no podes pagar')
} 

//entonces revisa asi, si es usuario y puede pagar se ejecuta lo primero
//si no es usuario, lo tercero
//si no puede pagar lo cuarto
//si no es ninguna de las dos, la segunda
//el orden es importante, porque si pongo la segunda al final, se va a ejecutar el !usuario
//porqque se cumpliria esa condicion