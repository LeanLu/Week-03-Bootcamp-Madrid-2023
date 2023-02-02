/* eslint-disable no-unused-vars */
import { Task, TaskStructure } from '../../models/task';
import { Component } from '../component/component';

export class Add extends Component {
  constructor(
    public selector: string,
    public addTask: (task: TaskStructure) => void
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement; // El target sería el <form>. Le agregamos el "as" para que no se queje por falta de tipo.

    // El form en posición 0 es un input.
    // const input1 = form[0] as HTMLInputElement
    // Luego el input1.value debería ser el valor que indica el usuario.

    // También puedo tomar los inputs a través de un querySelectorAll.
    const inputs = form.querySelectorAll('input'); // El querySelectorAll devuelve un array de los inputs.
    // Y luego llegar a su value: inputs[0].value;

    const newTask = new Task(inputs[0].value, inputs[1].value);

    this.addTask(newTask);
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector('form.add')
      ?.addEventListener('submit', this.handleSubmit.bind(this));
  }

  createTemplate() {
    return `
    <form class="add">
      <input type="text" placeholder="Describe la tarea" required>
      <input type="text" placeholder="Responsable de la tarea">
      <button type="submit">Añadir</button>
    </form>
    `;
  }
}
