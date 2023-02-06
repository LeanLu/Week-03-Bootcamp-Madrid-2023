/* eslint-disable no-unused-vars */

import { ProtoTaskStructure, TaskStructure } from '../../models/task';

// Tenemos la interface del Api que luego va a ser ejecutada por la Class:
export interface TaskApiRepoStructure {
  loadTasks(): Promise<TaskStructure[]>;
  getTask(id: TaskStructure['id']): Promise<TaskStructure>;
  createTask(task: ProtoTaskStructure): Promise<TaskStructure>;
  update(task: Partial<ProtoTaskStructure>): Promise<TaskStructure>;
  delete(id: TaskStructure['id']): Promise<void>;
}

export class TaskApiRepo {
  url: string;

  constructor(public storeName: string = 'Tasks') {
    this.url = 'http://localhost:3000/tasks';
  }

  // Para GET todo el Array de datos.
  // En este caso no necesita un parámetro porque quiero que cargue toda la lista.
  // Por otro lado, al cargar las tareas, nos va a devolver el Array de tareas.
  // Para obtener los datos de la API tengo que hacer un doble await.
  // Uno por la devolución de los datos de la url con fetch.
  // Y luego del método del object Response que devuelve la url.
  // Con esto obtenemos una respuesta.
  async loadTasks(): Promise<TaskStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as TaskStructure[];
    return data;
  }

  // Para GET solo un elemento.
  // En este caso lo vamos a buscar por id.
  // Devuelve la tarea con la structure del objeto.
  async getTask(id: TaskStructure['id']): Promise<TaskStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  // Le pasamos el ProtoTaskStructure porque cuando creamos una tarea no le damos el id porque eso dejamos que lo haga solo el sistema.
  // Si no, pediría un id como argumento.
  async createTask(task: ProtoTaskStructure): Promise<TaskStructure> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  // Le colocamos el Partial para indicar que solo vamos a darle uno de los argumentos del ProtoTaskStructure.
  // Si no, tendríamos que pasarle todos los datos para que actualice.
  // De esta manera solo le damos una de las propiedades y ya la encontraría.
  async update(task: Partial<TaskStructure>): Promise<TaskStructure> {
    const url = this.url + '/' + task.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  // Para borrar también le damos el id.
  // En este caso no devuelve nada porque al borrar la tarea no mostramos nada.
  async delete(id: TaskStructure['id']): Promise<void> {
    const url = this.url + '/' + id;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
  }
}
