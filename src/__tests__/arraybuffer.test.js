import ArrayBufferConverter, { getBuffer } from '../arraybuffer';

test('Получаем правильный объект с помощью функции getBuffer', () => {
  expect(getBuffer().byteLength).toBe(106);
});

test('Правильно создается объект класса ArrayBufferConverter', () => {
  const arrayBufferConverterData = new ArrayBufferConverter();
  expect(arrayBufferConverterData.buffer).toBe(undefined);
});

test('Правильно работает метод load класса ArrayBufferConverter', () => {
  const arrayBufferConverterData = new ArrayBufferConverter();
  arrayBufferConverterData.load(getBuffer());
  expect(arrayBufferConverterData.buffer.byteLength).toBe(106);
});

test('Правильно работает метод toString класса ArrayBufferConverter', () => {
  const arrayBufferConverterData = new ArrayBufferConverter();
  arrayBufferConverterData.load(getBuffer());
  expect(arrayBufferConverterData.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
