/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component, InsertPosition } from '../component/component';
// En caso que utilicemos la instancia de menu dentro de header habría que importar:
// import { Menu } from '../menu/menu';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    // Es private porque es un método de uso interno de la Class
    return `
  <header class="header">
    <h1>${this.title}</h1>
    <p role="note" aria-label="info">Segundo día</p>
  </header>
  `;
  }

  // Esto no haría falta. Es un ejemplo de sobreescritura del método.
  // En caso que necesite cambiar el método original.
  // En este caso, como no cambiamos nada, podríamos no ponerlo.
  render(place: InsertPosition) {
    super.render(place); // Herada del padre este método y luego puedo agregarle cosas antes o después.

    // Acá podría instanciar a Menu. Se utiliza cuando el padre debería hacer algo sobre el hijo. Sino puedo hacerlo directamente en el index.ts
    // new Menu('.header');
  }
}
