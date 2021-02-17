//evitar el event bubbling con delegation

const cardDiv = document.querySelector('.card');

//con .target.classlist buscamos clases que tenga un elemento
cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
})