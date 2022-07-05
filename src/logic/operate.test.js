import operate from './operate';

test('Add two numbers', () => {
  const num1 = 2;
  const num2 = 2;
  const operation = '+';
  expect(operate(num1, num2, operation)).toBe('4');
});

test('Multiply two numbers', () => {
  const num1 = 2;
  const num2 = 2;
  const operation = 'x';
  expect(operate(num1, num2, operation)).toBe('4');
});

test('Divide two numbers', () => {
  const num1 = 2;
  const num2 = 2;
  const operation = '÷';
  expect(operate(num1, num2, operation)).toBe('1');
});

test('Subtract two numbers', () => {
  const num1 = 2;
  const num2 = 2;
  const operation = '-';
  expect(operate(num1, num2, operation)).toBe('0');
});
