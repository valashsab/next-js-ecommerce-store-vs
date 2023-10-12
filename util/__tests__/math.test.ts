import { expect, test } from '@jest/globals';
import { multiply } from '../math';

test('multiply 2 numbers', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(100, 2)).toBe(200);
});

test('throws an error when arguments are not numbers', () => {
  // @ts-expect-error testing incorrect arguments
  expect(() => multiply(1, '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => multiply('asd', '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => multiply(1, false)).toThrow('Pass only numbers!');
});
