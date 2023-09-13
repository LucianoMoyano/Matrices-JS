//OBJETO MATH: el objeto MATH no toma un array como parametro, sino una lista de numeros. Esto es alternativo al enfoque de recorrer un array.El Objeto Math contiene Propiedades y Métodos relacionados a Matemática.

Math.PI
Math.pow(9, 2) //NOS DEVUELVE EL PRIMER NUMERO MULTIPLICADO TANTAS VECES COMO INDIQUE EL SEGUNDO
Math.random() // numero aleatorio entre 0 y 1
Math.floor(7.2) // redondea el numero hacia abajo
Math.ceil(7.2) // redonde el numero hacia arriba

Math.max() // nos devuelve el valor mas grande entre los numero que le pasemos entre parentesis
Math.min() //devuelve el valor mas chico entre los numeros dados como parametros

//ejercicio con objeto Math

let numeros = [5, 10, 25, 58, 12];
let maximo = 0;
function encontrarMaximo(array) {
	for (let i = 0; i < array.length; i++) {
		if (maximo < array[i]) {
			maximo = array[i];
		}
	}
	return maximo;
}

console.log("Con ciclo for");
console.log(encontrarMaximo(numeros));

// con Math.max
console.log("Con Math.max");
console.log(Math.max(5, 10, 25, 58, 12));

("----------------MATRICES-----------")

let matrizNumeros = [
  [1, 2, 3], // primer 0
  [4, 5, 6], // segundo 1
  [7, 8, 9], // tercero 2
];

// 1 - 1
console.log(matrizNumeros[1]); // nos muestra el segundo elemento
console.log(matrizNumeros[1][0]); // nos muestra el numero 4

// como se modifica un numero

matrizNumeros[1][0] = 9;
console.table(matrizNumeros);

// recorro e imprimo en pantalla con doble for

for (let i = 0; i < matrizNumeros.length; i++) {
  for (let j = 0; j < matrizNumeros[i].length; j++) {
    console.log(matrizNumeros[i][j]);
  }
}

// volver a realizar el for anteror pero separando en variables

/* for (let i = 0; i < matrizNumeros.length; i++) {
    const filas = matrizNumeros[i]
  for (let j = 0; j < filas.length; j++) {
    const columnas = matrizNumeros[i][j]
    console.log(columnas);
  }
} */

// recorrer la mnatriz y solamente imprimir los numeros pares

for (let i = 0; i < matrizNumeros.length; i++) {
  for (let j = 0; j < matrizNumeros[i].length; j++) {
    if (matrizNumeros[i][j] % 2 === 0) {
      console.log(matrizNumeros[i][j]);
    }
  }
}


("-------------------------------------")

// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
	let array = [];
  for (let i = 0; i <= 90; i += 10) {
    //primer for hace referencia a la creacion de la filas, aumenta de 10 en 10
    let fila = []; // solo sirve para las filas qeu se van a crear
    for (let j = 1; j <= 10; j++) {
      //segundo for o for anidado sirve para nuestro incremento entre las columnas de 1 en 1
      fila.push(i + j); //por filas se le arma el numero que se va a cargar
    }
    array.push(fila);
  }
  return array;
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);