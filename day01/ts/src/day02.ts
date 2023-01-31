import { mockTasks } from './mocks/data';
import { TasksStructure } from './models/task';

console.log('day 02');

const root = document.querySelector('#root') as HTMLDivElement; // Especifíco que es un element HTML Div

const headerTemplate = `
  <header class="header">
    <h1>Learning DOM</h1>
    <p>Segundo día</p>
  </header>
  `;

root.insertAdjacentHTML('afterbegin', headerTemplate);

const renderList = (data: TasksStructure[]) => {
  let tasksTemplate = '<div class="lista">';

  data.forEach((item) => {
    tasksTemplate += `<p>
  id: ${item.id}, title: ${item.title}, responsible: ${item.responsible}, isCompleted: ${item.isCompleted}
  <button data-id="${item.id}"> Borrar ${item.id} </button> </p>`;
  });

  tasksTemplate += `</div>`;
  root.insertAdjacentHTML('beforebegin', tasksTemplate);
};

renderList(mockTasks);

const buttons = document.querySelectorAll('button');

const handlerDelete = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  const id = Number(element.dataset.id);
  console.log('Click', id);
  const data = mockTasks.filter((item) => item.id !== id);
  console.log(data);
  document.querySelector('.lista')!.innerHTML = '';
  renderList(data);
};

buttons.forEach((item) => {
  item.addEventListener('click', handlerDelete);
});
