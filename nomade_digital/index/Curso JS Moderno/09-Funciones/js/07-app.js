// como se comunican las funciones
iniciarApp()

function iniciarApp() {
    console.log('iniciando app....');

    segundaFunction();

}

function segundaFunction(){
    console.log('desde la segunda funcion');

    usuarioAutenticado('david');
}

function usuarioAutenticado(usuario){
    console.log('autenticando usuario...espere...');
    console.log(`usuario autenticado exitosamente: ${usuario}`)
}
