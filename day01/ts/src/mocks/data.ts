// CHARACTERS_MOCK --> Le podemos poner este nombre porque va a ser una variable que no va a mutar.
// Es una variable de afuera que vamos a utilizar para pruebas/test.
import { TasksStructure } from '../models/task';

export const mockTasks: TasksStructure[] = [
  { id: 1, title: 'Algo', responsible: 'Pepe', isCompleted: false },
  { id: 2, title: 'Algo más', responsible: 'Luisa', isCompleted: false },
];

/*
// Creamos los objetos de cada uno de los personajes (en este caso no toma las Class porque tendría que importarlas):
export const mockCharacters: Character = [
  // Le indico que este Array es de objetos instanciados por Character.
  new King('Joffrey Barathon', 23, 2),
  new Fighter('Jaime Lannister', 22, 'sword', 7.8),
];

// Como en este objeto debo colocarle el jefe y es parte del Array anterior, primero lo creo y ahora fuera le puedo asignar con la posición del Array:
mockCharacters.push(new Counselor('Tyrion Lannister', 34, mockCharacters[0]));
*/
