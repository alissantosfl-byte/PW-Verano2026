function Ejercicio1(){
    let a = Math.floor(Math.random()*100)+1;
    let b = Math.floor(Math.random()*100)+1

    console.log(a);
    console.log(b);

    if(a==b){
        console.log("Los números son iguales");
    } else if(a>b){
        console.log(a +" es mayor");
    } else if(b>a){
        console.log(b+" es mayor");
    }

}

function Ejercicio2(){
    let a;

        while (true) {
            a = Math.floor(Math.random()*(5+1)); 
            console.log(a);

            if (a == 0) {
                break; 
            }
        }
    
}

function Ejercicio3(){
    let a = Math.floor(Math.random()*(10-2+1))+2;
    console.log(a);

    let tabla = a;
        for (let i = 1; i<= 10; i++){
            console.log(`${tabla} x ${i} = ${tabla*i}`);
        }
}

function Ejercicio4(){
    let par = 0;
    let impar = 0;
    for(let i=0;i<10; i++ ){
        let numeros = parseInt(prompt("Ingresa un número"));
        if (numeros>=1 && numeros<=100){
            if (numeros%2==0){
                console.log("es par");
                par++;

            }else{
                console.log("es impar");
                impar++
            }
        }else{
            console.log("el numero debe ser del 1 al 100")
            i--
        }          

        }
        console.log("Hay "+par+" números pares")
        console.log("Hay "+impar+" números impares")
        }

function Ejercicio5() {
    let x;

    do {
        x = parseFloat(prompt("Se hizo venta de: entre $5,000 y $30,000"));
    } while (x < 5000 || x > 30000);

    let y;

    if (x < 10000) {
        y = x * 0.10;
    } else {
        y = x * 0.15;
    }

    console.log("En una venta de $"+x+" se obtuvo una comisión de $" + y);
}

Ejercicio5();
