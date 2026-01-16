function mostrarAlerta(){
    alert("Hola bienvenido al sitio WEB");
    console.info("ejemplo de funcion ");
}
function suma(){
    let valr1=5;
    let valor2=10;
    let resultado=valor2+valr1;
    console.info("El resultado de la suma: "+ resultado);
}
function sumaparam(valr1,valor2){
    console.info("El valor 1: "+valr1);
    console.info("El valor 2: "+valor2);
}
function sumarInput(){
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    let res = parseFloat(val1) + parseFloat(val2);

    console.log("El valor de la suma es: " + res);

    if(res > 10){
        document.getElementById("mensaje").value = "numero mayor a 10";
    } else {
        document.getElementById("mensaje").value = "numero menor";
    }
}
