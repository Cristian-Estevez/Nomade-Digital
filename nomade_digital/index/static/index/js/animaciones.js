//APERTURA SERVICIOS CON CLICK
const primerServicio = document.querySelector('#primerServicio');
const abrirServicio = document.querySelector('.servicio-uno ul');



primerServicio.addEventListener('click', () => {
        if(abrirServicio.classList.contains('servicio-inactivo')){
            abrirServicio.classList.remove('servicio-inactivo');
            abrirServicio.classList.add('servicio-activo')

        } else{
            abrirServicio.classList.remove('servicio-activo')
            abrirServicio.classList.add('servicio-inactivo')

        }

})

const segundoServicio = document.querySelector('#segundoServicio');
const abrirSegundoServicio = document.querySelector('.servicio-dos ul');

segundoServicio.addEventListener('click', () => {
    if(abrirSegundoServicio.classList.contains('servicio-inactivo')){
        abrirSegundoServicio.classList.remove('servicio-inactivo');
        abrirSegundoServicio.classList.add('servicio-activo')

    } else{
        abrirSegundoServicio.classList.remove('servicio-activo');
        abrirSegundoServicio.classList.add('servicio-inactivo');
    }

})

const tercerServicio = document.querySelector('#tercerServicio');
const abrirTercerServicio = document.querySelector('.servicio-tres ul');

tercerServicio.addEventListener('click', () => {
    
    if(abrirTercerServicio.classList.contains('servicio-inactivo')){
        abrirTercerServicio.classList.remove('servicio-inactivo');

    } else{
        abrirTercerServicio.classList.add('servicio-inactivo');
    }

})

const cuartoServicio = document.querySelector('#cuartoServicio');
const abrirCuartoServicio = document.querySelector('.servicio-cuatro ul');

cuartoServicio.addEventListener('click', () => {
    if(abrirCuartoServicio.classList.contains('servicio-inactivo')){
        abrirCuartoServicio.classList.remove('servicio-inactivo')

    } else{
        abrirCuartoServicio.classList.add('servicio-inactivo')

    }

})




   


const barraAbrir = document.querySelector('.barra span')
const barraCerrar = document.querySelector('#cerrar') 
const barra = document.querySelector('.contenedorBarraInactivo')
const nav = document.querySelector('nav')

//MENU HAMBURGUESA FIJO

//VER ELIMINAR PREVENT DEFAULT CON EL LINK RESPONSIVE

//menu fixed responsive
window.onscroll = function() {
       let ubicacion = window.pageYOffset;
       if ( ubicacion <= 200) {
           //   console.log('apagado el boton')
             activo.classList.remove('activo')
             barraAbrir.classList.remove('activoResponsive')
           // activo.classList.add('inactivo')
           
       } else {
           //   console.log('prendido el boton')
           // insertarMenuBtn();
           
           barraAbrir.classList.add('activoResponsive')
            nav.classList.add('activoResponsive')
            activo.classList.add('activo')

            
           }
           
   }
//menu fijo pantalla grande
const activo = document.querySelector('#stickyMenu')

addEventListeners()
function addEventListeners() {


//cerrar menu responsive
barraCerrar.addEventListener('click', (e) => {
e.preventDefault()
nav.classList.remove('activoResponsive')
nav.classList.remove('contenedor-barra-activo')
nav.classList.add('contenedor-barra-inactivo')
})

//abrir menu responsive
barraAbrir.addEventListener('click', (e) => {
e.preventDefault()
   nav.classList.add('contenedor-barra-activo')
   nav.classList.remove('contenedor-barra-inactivo')
   
   
})


}
   


