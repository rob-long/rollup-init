import { hello } from '../src/index';

test('hello function', () => {
  expect(hello()).toBe('Hello, world!');
});
