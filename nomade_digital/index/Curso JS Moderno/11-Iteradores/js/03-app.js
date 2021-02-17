//FIZZ BUZZ

//numeros del 1 al 100
//3 6 9 12... fizz
// 5 10 15 20 ....buzz
// 15 30 45 ....fizz buzz



for(let i = 0; i < 101; i++){

    if (i % 15 === 0) {
        console.log(`${i} fizz buzz`)
    } else if(i % 5 === 0 ){
        console.log(`${i} buzz`)
    } else if(i % 3 === 0){
        console.log(`${i} fizz`)
    } 
    continue;
    
}

//este ejercicio te hace dar cuenta de lo importante que esponer el codigo condicional en orden