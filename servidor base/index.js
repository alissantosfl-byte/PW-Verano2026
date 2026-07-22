const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express")
})



app.get("/pagina", (req, res) =>{
    res.send(`
        <style>
            h1{color: red}
        </style>
            <h1> Mi página</h1>
            <p>creada con express</p>
        `
        );
});

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre); 
});

//ejercicio 1 numero par o impar
app.get("/par/:numero", (req, res) => {
    const numero = req.params.numero;
    if(numero%2==0){
        res.send(numero+" es numero par")
    }else{
        res.send(numero+" es numero impar")    
    }
    
})

//ejercicio 2 Mayor de edad
app.get("/edad/:edad", (req, res) => {
    const edad = req.params.edad;

    if (edad>=18){
        res.send("Eres mayor de edad")
    }else{
        res.send("Eres menor de edad")
    }
}) 

//Ejercicio 3 calculadora
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const operacion = req.params.operacion;
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    let Resultado;

    switch(operacion){
        case "*": resultado = a*b
        break;
        case "+": resultado =  a+b
        break;
        case "-": resultado =  a-b
        break;
        case "division": resultado =  a/b 
        break;
    }

    res.send("Resultado: "+resultado)
})

//Ejercicio 4 calculadora
app.get("/tabla/:numero", (req,res) => {
    const numero = Number(req.params.numero)

    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    res.send(resultado);
})

//Ejercicio 5
app.get("/calificacion/:nota", (req, res) => {
    const nota = req.params.nota
    let respuesta;

    if (nota<70){
        res.send("Reprobado")
    }else if(nota>=90){
        res.send("Excelente")
    }else if(nota>=80){
        res.send("Muy bien")
    }else if (nota>=70){
        res.send("Aprobado")
    }
})


app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
})

