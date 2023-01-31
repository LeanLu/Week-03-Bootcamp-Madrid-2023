import { add } from './sample';

describe('Given function add', () => {
  test('Then a=2 and b=3, the result should be 5.', () => {
    expect(add(2, 3)).toBe(5);
  });
});
