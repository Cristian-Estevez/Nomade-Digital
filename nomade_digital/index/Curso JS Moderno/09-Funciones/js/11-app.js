//pasando argumentos con arrow functions

const aprendiendo = function(tecnologia) {
    console.log(`aprendiendo ${tecnologia}`);
}

aprendiendo('javascript');

const aprendiendo2 = () => console.log('aprendiendo javascript');

aprendiendo2();

const qCuliau = (nombre) => (`no entiende nada este ${nombre}`);

console.log(qCuliau('david'));

//puedo hacerlo mas corto todavia, eliminar los parentesis del parametro
const qCuliau2 = nombre => (`no entiende nada este ${nombre}`);

console.log(qCuliau2('jose'));

//cuando tengo dos parametros, es necesario tener parentesis en el parametro
const qCuliau3 = (nombre, edad) => (`no entiende nada este ${nombre}, tiene ${edad}`);

console.log(qCuliau3('jose', 18));