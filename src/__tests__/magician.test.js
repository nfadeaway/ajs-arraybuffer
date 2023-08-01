import Magician from '../magician';

test('Правильно создается объект класса Magician', () => {
  const character = new Magician('Персонаж');
  const correctValues = {
    name: 'Персонаж',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
    stoned: false,
  };
  expect(character).toEqual(correctValues);
});

test('Правильно работает метод setStoned класса Magician', () => {
  const character = new Magician('Персонаж', 'Magician');
  character.setStoned(true);
  expect(character.stoned).toBe(true);
});

test('Правильно работает метод getAttackPower класса Magician', () => {
  const character = new Magician('Персонаж', 'Magician');
  expect(character.getAttackPower(2)).toBe(90);
  character.setStoned(true);
  expect(character.getAttackPower(2)).toBe(85);
});
