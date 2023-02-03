/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { TaskStructure } from '../../models/task';
import { TaskApiRepo } from '../../services/repository/task.api.repo';
// Repo Local anterior: import { TaskStorageRepo } from '../../services/repository/task.storage.repo';
import { Add } from '../add/add';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './tasks.scss';

export class Tasks extends Component {
  public tasks: TaskStructure[];

  constructor(public selector: string, public repo: TaskApiRepo) {
    super();
    this.tasks = []; // Al ser Promise tenemos que cambiarlo. Antes: this.repo.getTasks();
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.load();
  }

  // CRUD:

  // Create
  async addTask(task: TaskStructure) {
    // El método push muta el array existente:
    // this.tasks.push(task);
    // Para no mutarlo:
    const finalTask = await this.repo.createTask(task);
    this.tasks = [...this.tasks, finalTask];
    this.render('afterbegin');
    // TEMP this.repo.setTasks(this.tasks);
  }

  // Read:
  async load() {
    this.tasks = await this.repo.loadTasks();
    this.render('afterbegin');
  }

  // Update:
  async updateTask(task: TaskStructure) {
    const finalTask = await this.repo.update(task);
    this.tasks = this.tasks.map((item) =>
      item.id === task.id ? finalTask : item
    );
    this.render('afterbegin');
    // TEMP this.repo.setTasks(this.tasks);
  }

  // Delete:
  async deleteTask(id: TaskStructure['id']) {
    await this.repo.delete(id);
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.render('afterbegin');
    // TEMP this.repo.setTasks(this.tasks);
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    new Add('.tasks', this.addTask.bind(this));
    this.tasks.forEach((item) => {
      new Card(
        '.tasks>ul',
        item,
        this.deleteTask.bind(this),
        this.updateTask.bind(this)
      );
    });
  }

  createTemplate() {
    return `
    <section class="tasks">
      <ul></ul>
    </section>
    `;
  }
}
