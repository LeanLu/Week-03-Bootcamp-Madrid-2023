/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let foo = 9;

// Tipado estático
// foo = 'Pepe';
// Avisa que foo no puede cambiar a String porque fue asignado a Number.

// Tipado fuerte mediante notación de tipos:
let bar: string;

// Daría un error ba
// bar = 23

let zoo: boolean = true;

const s: number = 62;

let tipos: boolean | null = null;

const aData: Array<number> = [];

// Otra alternativa de escritura de Array:
// const aData: number[] = [];

// Error porque no puede aceptar String:
// aData.push('String');

// Para escribir más de un tipo:
const aDataNyS: (number | string)[] = [];
const aDataSyN: Array<number | string> = [];

aDataSyN[0] = 1;
aDataSyN[1] = 'Pepe';
// Un Boolean no lo toma:
// aDataSyN[3] = true;

console.log(aData);

console.log('Hola prueba');

export function add(a: number, b: number) {
  return a + b;
}
