console.log("Estoy en js");

function Suma(x, y){
    var x = document.getElementById("Input1").value;
    var y = document.getElementById("Input2").value;
    var result = parseInt(x,10) + parseInt(y,10);
    /*console.log(x);
    console.log(typeof x);
    console.log(y);
    console.log(typeof y);
    console.log(typeof result);*/
    var resultString = "El resultado de la suma es: " + result.toString();
    document.getElementById("resultado").innerHTML = resultString;
}

function Resta(x, y){
    var x = document.getElementById("Input1").value;
    var y = document.getElementById("Input2").value;
    var result = parseInt(x,10) - parseInt(y,10);
    var resultString = "El resultado de la resta es: " + result.toString();
    document.getElementById("resultado").innerHTML = resultString;
}

function Multiplicacion(x, y){
    var x = document.getElementById("Input1").value;
    var y = document.getElementById("Input2").value;
    var result = parseInt(x,10) * parseInt(y,10);
    var resultString = "El resultado de la multiplicación es: " + result.toString();
    document.getElementById("resultado").innerHTML = resultString;
}

function Division(x, y){
    var x = document.getElementById("Input1").value;
    var y = document.getElementById("Input2").value;
    var result = parseInt(x,10) / parseInt(y,10);
    var resultString = "El resultado de la división es: " + result.toString();
    document.getElementById("resultado").innerHTML = resultString;
}