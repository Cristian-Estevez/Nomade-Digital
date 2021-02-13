//for in itera sobre objetos y for of sobre arreglos
//misma sintaxis


const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];


const automoviles = {
    nombre : 'mustang',
    año : '1998',
    color : 'azul'
}
// for( automovil in automoviles) {
//     console.log(`${automoviles[automovil]}`)
// }

//otra opcion en ecm7

for( let [llave, valor] of Object.entries(automoviles) ) {
    console.log(valor);
    console.log(llave);
}