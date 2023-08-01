import Daemon from '../daemon';

test('Правильно создается объект класса Daemon', () => {
  const character = new Daemon('Персонаж');
  const correctValues = {
    name: 'Персонаж',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
    stoned: false,
  };
  expect(character).toEqual(correctValues);
});

test('Правильно работает метод setStoned класса Daemon', () => {
  const character = new Daemon('Персонаж', 'Daemon');
  character.setStoned(true);
  expect(character.stoned).toBe(true);
});

test('Правильно работает метод getAttackPower класса Daemon', () => {
  const character = new Daemon('Персонаж', 'Daemon');
  expect(character.getAttackPower(2)).toBe(90);
  character.setStoned(true);
  expect(character.getAttackPower(2)).toBe(85);
});
