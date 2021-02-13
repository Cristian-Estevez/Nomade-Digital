//generar html desde JS
//primero creamos el elemento

const enlace = document.createElement('a');//puede ser en mayus o minus

//le añadimos el texto
enlace.textContent = 'support';

//le añadimos atributo, ver fox developer edition
enlace.href = '/nuevo-enlace';

enlace.classList.add('alguna-clase-nueva')

console.log(enlace);

//ahora, donde lo ponemos, en este caso en la navegacion

//seleccionar la navegacion
const navegacion = document.querySelector('nav');

//agregarlo a la navegacion
navegacion.appendChild(enlace)

//si quiero insertarlo en una posicion especifica
console.log(navegacion.children); //paraver la posicion donde lopodemos poner
navegacion.insertBefore(enlace, navegacion.children[1]); //insert before requiere dos parametros, primero lo que se va a agregar
//segundo, la posicion


//añadir un click al enlace support
enlace.onclick = funcionClick;

function funcionClick() {
    alert('diste click')
}

//CREAR UN CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concurso';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


//despues crear el div
const info = document.createElement('div');
info.classList.add('info');

//agregar los parrafos al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//agregar la imagen
const imagen = document.createElement('img');
imagen.src = ('img/hacer2.jpg');
imagen.alt = ('texto prueba alt');


//crear el card
const card = document.createElement('div');
card.classList.add('card');


//agregar la imagen al card
card.appendChild(imagen);

//agregar la info
card.appendChild(info);


//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
//si quiero ponerlo en otra posicion
contenedor.insertBefore(card, contenedor.children[0]);
console.log(card);
