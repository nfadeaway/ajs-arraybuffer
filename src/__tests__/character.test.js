import Character from '../character';

test('Правильно создается объект класса Character', () => {
  const character = new Character('Персонаж', 'Bowman');
  const correctValues = {
    name: 'Персонаж',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(character).toEqual(correctValues);
});
