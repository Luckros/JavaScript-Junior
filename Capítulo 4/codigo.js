class Calculadora {
    constructor(){
    }
sumar (num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar (num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir (num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar (num1,num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar (num1,exp){
    return num**exp;
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raziCubica(num){
    return Math.cbrt(num);
}
    
}

const calculadora = new Calculadora();

alert ("¿Que operación deseas realizar?");
operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplciación, 5: potenciación, 6: raíz cuadrada, 6: raíz cúbica")

if (operacion == 1){
    let numero1 =prompt ("Primer número para sumar");
    let numero2 =prompt ("Segundo  número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}
else if  (operacion == 2) {
    let numero1 =prompt ("Primer número para restar");
    let numero2 =prompt ("Segundo  número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 3) {
    let numero1 =prompt ("Primer número para dividir");
    let numero2 =prompt ("Segundo  número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 4) {
    let numero1 =prompt ("Primer número para multiplicar");
    let numero2 =prompt ("Segundo  número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 5) {
    let numero1 =prompt ("Numero a potenciar");
    let exp =prompt ("Exponente");
    resultado = calculadora.potenciar(numero1,exp);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 6) {
    let numero1 =prompt ("Conocer la raíz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 7) {
    let numero1 =prompt ("Conocer la raíz cúbica de:");
    resultado = calculadora.raziCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert ("No se encontro la operación")
}

