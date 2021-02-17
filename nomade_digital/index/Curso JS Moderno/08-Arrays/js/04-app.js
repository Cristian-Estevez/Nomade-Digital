const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

//un arreglo no se puede sellar como un objeto

//modificar un elemento en un arreglo
meses[0] = 'hola';
//agrega elemento y deja los demas en blanco
meses[10] = 'octubre';
//como no existe el 10, deja los otros en blanco
console.log(meses);

