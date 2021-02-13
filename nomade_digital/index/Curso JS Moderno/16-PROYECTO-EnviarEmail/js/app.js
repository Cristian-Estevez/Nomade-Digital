//usa el framework de css tailwind

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('form');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//variable validacion mail
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



eventListeners();
function eventListeners() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //seleccionando los campos
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}


//funciones
function iniciarApp() {
    console.log('hola')
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

//validando formulario
function validarFormulario(e) {
    

    if(e.target.value.length > 0) {

        // elimina el "todos los elementos son obligatorios"
        const error = document.querySelector('p.error');
        if(error) {
            error.remove();
        }
        

        e.target.classList.remove('border', 'border-red-500' );//primero se borra la clase que esta antes por si alguien escribio algo incorrecto
        e.target.classList.add('border', 'border-green-500' );

        // console.log('si hay algo')
    } else {
        e.target.classList.remove('border', 'border-green-500' );//primero se borra la clase que esta antes por si alguien escribio algo incorrecto
        //cambiando estilo agregando clase cuando hay error en el mail
        e.target.classList.add('border', 'border-red-500' );
        
        mostrarError('Todos los campos son obligatorios');

        // console.log(e.target.type); //para saber que tipo es lo que estoy dando click

        //cambiando estilo desde js
        // e.target.style.borderBottomColor = 'red'; 
    }
    
    // console.log(e.target.value); //para saber que esta escribiendo
    // console.log('validando formulario')

    if(e.target.type === 'email') {


        //la forma siguiente es para hacerlo 'a la antigua' ahora es con email regex.com
       // const resultado = e.target.value.indexOf('@'); //con numerios me indica la posicion si es que hay un @, si no hay me marca -1
       // if(resultado < 0) {
         if( er.test(e.target.value)) {
            // elimina el "todos los elementos son obligatorios"
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }
            

            e.target.classList.remove('border', 'border-red-500' );//primero se borra la clase que esta antes por si alguien escribio algo incorrecto
            e.target.classList.add('border', 'border-green-500' );

        } else {
            e.target.classList.remove('border', 'border-green-500' );//primero se borra la clase que esta antes por si alguien escribio algo incorrecto
            e.target.classList.add('border', 'border-red-500' );

            mostrarError('email no valido');
        }
    }

    if( er.test(email.value) && asunto.value !== '' && mensaje.value !== '') { //el if para que si se valida, se elimine el disable del boton enviar
        btnEnviar.disabled = true;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
    
}