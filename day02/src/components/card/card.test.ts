import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { TaskStructure } from '../../models/task';
import { Card } from './card';
import { TASKS } from '../../mocks/tasks';

describe('Given card component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: TaskStructure = TASKS[0];
  let element: Card;

  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Card('ul', mockTask, deleteMock, updateMock);
  });

  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Card);
  });

  test('It should render in the document', () => {
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();

    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });

  test('It should call the function after click on the checkbox', () => {
    const check = screen.getByRole('checkbox');
    fireEvent.change(check);
    expect(updateMock).toHaveBeenCalled();
  });

  test('It should call the function after click on the button', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});
