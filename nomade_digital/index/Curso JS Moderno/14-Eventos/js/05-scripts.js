//eventos con el scroll
//window es la funcion principal, si ponemos en la consola vemos a que podemos acceder

// window.addEventListener('scroll', () => {
//     console.log('scrolling')
// })

//cuando hago scroll, si scroll para abajo, se resta, si subo se suma
//sirve para saber si estoy haciendo para arriba o para abajo
// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY;
//     console.log(scrollPX)
// })


//jugar con el scroll
window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();//te dice en que lugar se encuentra un elemento
//cuando llegue al .premium, me avisa y podemos añadirle alguna animacion
    
    if(ubicacion.top < 784) {
        console.log('el elemento ya esta visible')
    } else {
        console.log('aun no, da mas scroll')
    }
})
