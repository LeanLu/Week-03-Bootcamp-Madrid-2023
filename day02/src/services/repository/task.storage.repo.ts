/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import { TASKS } from '../../mocks/tasks';
import { TaskStructure } from '../../models/task';

// Formas de operar con localStorage:
// localStorage.getItem('key');
// localStorage.setItem('key', 'value');
// localStorage.removeItem('key');

export class TaskStorageRepo {
  constructor(public storeName: string = 'Tasks') {}

  async getTasks(): Promise<TaskStructure[]> {
    const data = localStorage.getItem(this.storeName);
    if (!data) {
      this.setTasks(TASKS);
      return TASKS;
    }

    return JSON.parse(data);
  }

  setTasks(tasks: TaskStructure[]) {
    const data = JSON.stringify(tasks);
    localStorage.setItem(this.storeName, data);
  }

  removeStorage() {
    localStorage.removeItem(this.storeName);
  }
}
