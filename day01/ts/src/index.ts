/* eslint-disable no-unused-vars */
console.log('loaded app');
const language = 'JS';
// Localizar elementos del DOM:
const element = document.querySelector('p#p1') as HTMLParagraphElement;
const element2 = document.querySelector('p#p2');

const elementS = document.querySelectorAll('p')!;

// Si quisiera crear una estructura de HTML desde TS:
const template = `
  <p id="p1"></p>
  <p id="p2"></p>
  <div>
    <button>Pintar</button>
  </div>
  <section>
    <input>
    <button>Salvar</button>
    <output>
  </section>
  `;

document.querySelector('#root')!.innerHTML = template;

// Modificar. Escribir sobre el elemento:

// Ejemplo de mensaje de error al comprobar que "element" exista.
// if (!element) throw new Error("");

const handlerClick = () => {
  element.innerHTML = `Esto está en <strong> ${language} </strong>`;

  element2!.outerHTML = `Esto está en <strong> ${language} </strong>`;
};

// También se puede insertar elementos:
// element.insertAdjacentHTML()

// Localizar el botón:
const button = document.querySelector('div button');

// Agregarle evento al botón:
button!.addEventListener('click', handlerClick);

const section = document.querySelector('section');

const input = section!.querySelector('input');

const output = section!.querySelector('output');

const buttonSalvar = section!.querySelector('button');

buttonSalvar!.addEventListener('click', () => {
  output!.value = input!.value;
  input!.value = '';
});
