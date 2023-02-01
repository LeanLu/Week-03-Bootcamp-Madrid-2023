import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Component } from '../component/component';
import { Header } from './header';

describe('Given Header component', () => {
  test('should ', () => {
    document.body.innerHTML = '<slot></slot>';

    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);

    // Para verificar que el element fue instanciado por Header y por Component.
    expect(element).toBeInstanceOf(Header);
    expect(element).toBeInstanceOf(Component);

    // Para verificar que el element esté en el document:
    // expect(element).toBeInTheDocument();

    // El Test donde verificamos que se renderice en el DOM "falso":
    const h1 = screen.getByText(mockTitle);

    expect(h1).toBeInTheDocument();
  });

  test('should ', () => {
    document.body.innerHTML = '<slot></slot>';

    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
    // Ivento un rol 'Pepe' para que el test de fail pero me indiquen los roles utilizados:
    // const h1 = screen.getByRole('heading', { name: 'Pepe'});
    const h1 = screen.getByRole('heading', { name: mockTitle });
    expect(h1).toBeInTheDocument();

    // Si quiero testear un <p> hay que crear un role que hay que asignarselo en el HTML.
    const p = screen.getByRole('note', { hidden: true });
    expect(p).toBeInTheDocument();
  });
});
