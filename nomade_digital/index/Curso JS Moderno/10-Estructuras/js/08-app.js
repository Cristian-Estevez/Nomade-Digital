// algunas buenas practicas para no poner codigo de mas

const autenticado = true;

if(autenticado) { //se podria poner == true) pero se supone que autenticado ya esta como true
    console.log('el usuario esta autenticado')
}

//otra cosa importante, ver bien la logica

const puntaje = 410;

if(puntaje > 400) {
    console.log('excelente, tenes muy buen puntaje')
} else if (puntaje > 300) {
    console.log(`muy buen trabajo tu puntaje es ${puntaje}`)
}


//no se suele usar mucho else if, asi que se hace asi
//de esta manera solo funciona dentro de una funcion

function revisarPuntaje() {
    if (puntaje > 400)  {
        console.log('excelente, tenes muy buen puntaje');
        return; //para que no se siga ejecutando el codigo si se cumplio
    }

    if (puntaje > 300) {
        console.log(`muy buen trabajo tu puntaje es ${puntaje}`);
        return;
    }
}

revisarPuntaje();