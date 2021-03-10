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

   

}

