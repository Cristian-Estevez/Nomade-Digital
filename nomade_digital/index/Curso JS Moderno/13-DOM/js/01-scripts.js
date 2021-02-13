//si ponemos document en la consola del navegador, nos sale todo el documento html seleccionado

let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0]; //como es un arreglo puedo acceder a su indice
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList; //me retorna los links en algo parecido a un arreglo
elemento = document.links[4].className; //me retorna los links en str

elemento = document.images;
elemento = document.scripts;




console.log(elemento);