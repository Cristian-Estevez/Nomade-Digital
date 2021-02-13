// declaracion de funcion (function declaration)

function sumar(){
    console.log(2+2);
}

sumar();


//expresion de funcion (function expression)
const sumar2 = function() {
    console.log(3+3);
}

sumar2();

//si llamamos la funcion antes de ejecutarla, en el primer caso js la lee
//en el segudno no, debido al hoisting
