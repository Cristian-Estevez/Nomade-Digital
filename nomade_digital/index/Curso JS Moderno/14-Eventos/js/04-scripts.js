//eventos en el formulario
//seleccionar el formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
   e.preventDefault();//por defecto un submit manda lo que se puso en el input a otro lugar, con este metodo
   //lo que se hace es evitar eso, para probar lo que necesitemos hacer
   //en un enlace evita que se vaya a otra pagina
   
   console.log(e.target.method);
})


//esto es lo mismo pero creando la funcion por afuera
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    console.log(e.target.method);

}
