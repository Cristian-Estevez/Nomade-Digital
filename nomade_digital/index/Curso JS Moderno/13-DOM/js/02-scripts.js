//getElementsByClassName,no se usa tanto pero es bueno conocerla
//selleciona elementospor su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//si las clases existen mas de una vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si la clase no existe 

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); //me arroja un arreglo vacio