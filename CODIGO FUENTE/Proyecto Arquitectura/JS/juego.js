var numero1;
var numero2;
var resultado;
var valor;

function suma(){
  numero1 = prompt('Introduce el primer numero entero');
  numero2 = prompt('Introduce el segundo numero entero');
  resultado = suma2(numero1,numero2);
  alert(resultado);
}
function suma2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 + num2;
  return(valor);
}

function resta(){
  numero1 = prompt('Introduce el primer numero entero');
  numero2 = prompt('Introduce el segundo numero entero');
  resultado = resta2(numero1,numero2);
  alert(resultado);
}
function resta2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 - num2;
  return(valor);
}
function multiplicacion(){
  numero1 = prompt('Introduce el primer numero entero');
  numero2 = prompt('Introduce el segundo numero entero');
  resultado = multiplicacion2(numero1,numero2);
  alert(resultado);
}
function multiplicacion2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 * num2;
  return(valor);
}
function division(){
  numero1 = prompt('Introduce el primer numero entero');
  numero2 = prompt('Introduce el segundo numero entero');
  resultado = division2(numero1,numero2);
  alert(resultado);
}
function division2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  valor = num1 / num2;
  return(valor);
}
function potencia(){
  numero1 = prompt('Introduce la base de la potencia');
  numero2 = prompt('Introduce el exponente');
  resultado = potencia2(numero1,numero2);
  alert(resultado);
}
function potencia2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
//for(let i= num2; i!=num3; i++){
  //num3 = num3 * num1;
  valor = Math.pow(num1 , num2);
  return(valor)
  //}
 }
function raiz(){
  numero1 = prompt('Introduce el numero');
  resultado = raiz2(numero1,numero2);
  alert(resultado);
}
function raiz2(num1, num2){
  var valor;
  num1 = parseInt(num1);
  valor = Math.sqrt(num1);
  return(valor);
}
