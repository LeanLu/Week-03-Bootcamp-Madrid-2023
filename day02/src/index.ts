/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Tasks } from './components/tasks/tasks';
import { TASK } from './mocks/tasks';
import './index.scss';

// Declaramos el tipo de array del menuOptions:
export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tarea', path: '/tasks' },
  { label: 'Acerca de', path: '/about' },
];

// En este caso, se declararía primero el objeto y luego extraigo su tipo:
// type MenuOption = typeof menuOptions;

new Header('#root');

// Si quisiera ponerle otro título, puedo asignarle al parámetro opcional "title":
// new Header('#root', 'Otro título');

new Menu('.header', menuOptions);
new Tasks('main', TASK);
new Footer('#root');
