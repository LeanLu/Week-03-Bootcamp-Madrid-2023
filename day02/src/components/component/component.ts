export type InsertPosition =
  | 'beforebegin'
  | 'afterbegin'
  | 'beforeend'
  | 'afterend';

export abstract class Component {
  selector!: string;
  template!: string;
  element!: HTMLElement;

  render(place: InsertPosition) {
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML(place, this.template);
  }
}
