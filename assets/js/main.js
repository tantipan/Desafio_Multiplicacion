//Funcion que solicita un numero y evalua si esta en el rango de 1 a 20
var numero = () =>{
  let num = 0;//Inicializa numero
  do {
    // Solicita numero al usuario
    num = parseInt(prompt("Ingrese un numero entre 1 y 20"));
    // pregunta si el valor no es un numero
    if(Number.isNaN(num)){
        // Si no es un numero muestra mensaje al usuario
      alert("Debe ingresar un valor numerico");
      num = 0;
      // Verifica que el numero este en el rango de 1  a 20
    }else if (num < 1 || num > 20){
      // Si no, muestra mensaje al usuario
      alert("Número fuera del rango");
    }
  }while(num < 1 || num > 20);
  // Llama a la funcion de tabla de multiplicar
  tabla_multiplicar(num);
  // Llama a la funcion de factorial
  calcula_factorial(num);
}

// Funcion para calcular la tabla de multiplicar de un numerico
//  de 1 al numero ingresado
// Requiere parametro y que es el numero al que se le calcula la tabla
const tabla_multiplicar = (y)=> {
  // Se realiza ciclo de 1 a y para calcular la tabla
  for (let n = 1; n <= y; n++) {
          console.log(`${n} x ${y} = ${n*y}`);;
  }
}

// Funcion para calcular el factorial de un numerico
// requiere parametro x, que corresponde al numero al
// cual se le va a calcular el factorial

const calcula_factorial= (x) =>{
  // Se realiza ciclo de 1 a x para
  // pasar a calcular el factorial
  for (let i = 1; i <= x; i++) {
    let res = 1;
    // Ciclo anidado que calcula el factorial
    for (let j = 1; j <= i; j++) {
      res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
  }
}

// llamada  a la funcion numero
numero();
