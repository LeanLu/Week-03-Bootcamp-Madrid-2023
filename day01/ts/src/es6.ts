/* eslint-disable no-unused-vars */
export class PersonClass {
  // No lo coloco aquí si aclaro que es "public" dentro de los parámetros del constructor
  // name;
  // age;
  private isAlive: boolean;

  constructor(public name: string, public age: number) {
    // Acá no se coloca con el "this" porque lo coloco en el parámetro de la función. this.name = name;
    // this.age = age;
    this.isAlive = true;
  }

  greeting() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.isAlive = false;
  }
}

export class Student extends PersonClass {
  constructor(name: string, age: number, public course: string) {
    super(name, age);
  }

  greeting() {
    super.greeting();
    console.log(`Estudio ${this.course}`);
  }
}

const p5 = new PersonClass('Luisa', 34);
const p6 = new PersonClass('Rosa', 64);

// En este caso nos marca en Typescript que estoy generando una propiedad nueva.
// p6.foo = 45;
// No me deja borrar esta propiedad en TS porque en el constructor es obligatoria. Esto permite el TypeScript.
// delete p6.age;

console.log(p5, p6);

p6.kill();

console.log(p6);

const s1 = new Student('Ramón', 54, 'Angular');
s1.greeting();

interface Live {
  name: string;
  species: string;
}

export class Person implements Live {
  private isAlive: boolean;
  species: string;
  foo: any;

  constructor(public name: string, public age: number) {
    this.isAlive = true;
    this.species = 'humans';

    // NO SE USA COLOCAR LA FUNCIÓN AQUÍ:
    // this.foo: function() {
    // ACCION DE LA FUNCIÓN.
  }

  greeting() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.isAlive = false;
  }
}

class Dog implements Live {
  private isAlive: boolean;

  constructor(public name: string, public species: string) {
    this.isAlive = true;
  }
}

const x: Live = { name: 'Sofia', species: 'Perro' };
const z: Dog = { name: 'Sofia', species: 'Perro' };

type Live2 = {
  name: string;
  species: string;
};

// DAY 02 - WEEK3:
const s2 = new Student('Ramón', 54, 'Angular');
