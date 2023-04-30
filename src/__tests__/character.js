import Character from '../character';

test('Testing wrong type of character', () => {
  expect(() => new Character('Wrong type', 100)).toThrow('Character type not allowed!');
});
