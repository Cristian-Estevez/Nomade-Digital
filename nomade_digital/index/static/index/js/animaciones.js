//-------------------------APERTURA SERVICIOS CON CLICK

const servicios = document.querySelector('.contenedor-servicios');
primerServicio = servicios.children[0];
segundoServicio = servicios.children[1];
tercerServicio = servicios.children[2];
cuartoServicio = servicios.children[3];

//ver si puedo seleccionar los UL del html de otra forma para evitar ponerle clases
const abrirServicio = document.querySelector('.servicio-uno ul');

primerServicio.addEventListener('click', () => {
    
        if(abrirServicio.classList.contains('servicio-inactivo')){
            abrirServicio.classList.remove('servicio-inactivo');
            abrirServicio.classList.add('servicio-activo');

        } else{
            abrirServicio.classList.remove('servicio-activo');
            abrirServicio.classList.add('servicio-inactivo');

        }

})

const abrirSegundoServicio = document.querySelector('.servicio-dos ul');

segundoServicio.addEventListener('click', () => {
    
    if(abrirSegundoServicio.classList.contains('servicio-inactivo')){
        abrirSegundoServicio.classList.remove('servicio-inactivo');
        abrirSegundoServicio.classList.add('servicio-activo');

    } else{
        abrirSegundoServicio.classList.remove('servicio-activo');
        abrirSegundoServicio.classList.add('servicio-inactivo');
    }

})


const abrirTercerServicio = document.querySelector('.servicio-tres ul');

tercerServicio.addEventListener('click', () => {
    
    if(abrirTercerServicio.classList.contains('servicio-inactivo')){
        abrirTercerServicio.classList.remove('servicio-inactivo');
        abrirTercerServicio.classList.add('servicio-activo');

    } else{
        abrirTercerServicio.classList.add('servicio-inactivo');
        abrirTercerServicio.classList.remove('servicio-activo');
    }

})


const abrirCuartoServicio = document.querySelector('.servicio-cuatro ul');

cuartoServicio.addEventListener('click', () => {
    if(abrirCuartoServicio.classList.contains('servicio-inactivo')){
        abrirCuartoServicio.classList.remove('servicio-inactivo');
        abrirCuartoServicio.classList.add('servicio-activo');

    } else{
        abrirCuartoServicio.classList.add('servicio-inactivo');
        abrirCuartoServicio.classList.remove('servicio-activo');


    }

})
 

//-------------------------------menu fixed responsive

const barraAbrir = document.querySelector('.barra span');
const barraCerrar = document.querySelector('#cerrar'); 
const barra = document.querySelector('.contenedorBarraInactivo');
const nav = document.querySelector('nav');
const activo = document.querySelector('#stickyMenu');

//menu fijo hamburguesa responsive

window.onscroll = function () {

    let ubicacion = window.pageYOffset;
    if (ubicacion <= 200) { //si la ubicacion es menor a 200px
        //desactiva el menu hamburguesa fixed
        barraAbrir.classList.remove('activoResponsive');
        nav.classList.remove('contenedor-barra-activo');
        nav.classList.add('contenedor-barra-inactivo');
        activo.classList.remove('activo');

        // cuando doy click en el menu hamburguesa no fixed
        barraAbrir.addEventListener('click', (e) => {
            e.preventDefault();
            if (barraAbrir.classList.contains('mobile-menu')) {
                nav.classList.remove('contenedor-barra-inactivo');
                nav.classList.add('contenedor-barra-activo');
            }

        });

    } else { //si la ubicacion es mayor a 200px
        //activa el menu hamburguesa fixed, tambien activa el menu fixed en pantalla grande
        barraAbrir.classList.add('activoResponsive');
        activo.classList.add('activo');
        barraAbrir.addEventListener('click', () => {

            if (barraAbrir.classList.contains('activoResponsive')) {
                nav.classList.add('contenedor-barra-activo');
                nav.classList.remove('contenedor-barra-inactivo');
                nav.classList.add('activoResponsive');
                activo.classList.add('activo');
            }
        });


    }

    //ciera el menu pulsando en X en el menu hamburguesa
    barraCerrar.addEventListener('click', () => {

        nav.classList.remove('activoResponsive');
        nav.classList.remove('contenedor-barra-activo');
        nav.classList.add('contenedor-barra-inactivo');

    });

    //----------------------RECURSOS ANIMACION y SERVICIOS ANIMACION
    //tengo que hacerlo dentro del onscroll

    

    const recurso = document.querySelector('.contenedor-recursos');
    primerRecurso = recurso.children[0];
    segundoRecurso = recurso.children[1];
    tercerRecurso = recurso.children[2];
    cuartoRecurso = recurso.children[3];
    quintoRecurso = recurso.children[4];

    
    let ubicacionAnimacion = window.pageYOffset;
        
        if (ubicacionAnimacion > 700) {
            primerRecurso.classList.add('recurso-activo');

        } 
        
        if (ubicacionAnimacion >= 760) {
            segundoRecurso.classList.add('recurso-activo');
        } 
        
        if (ubicacionAnimacion >= 820) {
            tercerRecurso.classList.add('recurso-activo');
        }
        if (ubicacionAnimacion >= 880) {
            cuartoRecurso.classList.add('recurso-activo');
        }
        if (ubicacionAnimacion >= 940) {
            quintoRecurso.classList.add('recurso-activo');
        }

        else if (ubicacionAnimacion < 700) {
            primerRecurso.classList.remove('recurso-activo');
            segundoRecurso.classList.remove('recurso-activo');
            tercerRecurso.classList.remove('recurso-activo');
            cuartoRecurso.classList.remove('recurso-activo');
            quintoRecurso.classList.remove('recurso-activo');

        }
        
         if(ubicacionAnimacion > 100){
             servicios.classList.add('servicio-animacion')
         } else if(ubicacionAnimacion < 100){
             servicios.classList.remove('servicio-animacion')
         }

}

