import calculate from './calculate';

test('return empty array if button name is 0 and obj.next is 0 ', () => {
  const buttonName = '0';
  const obj = { total: null, next: '0', operation: null };
  const answer = {};
  expect(calculate(obj, buttonName)).toEqual(answer);
});

test('If user click AC return empty array ', () => {
  const buttonName = 'AC';
  const obj = { total: null, next: '0', operation: null };
  const answer = { total: null, next: null, operation: null };
  expect(calculate(obj, buttonName)).toEqual(answer);
});

test('If the next include a . return the  same input', () => {
  const buttonName = '.';
  const obj = { total: null, next: '0.7', operation: null };

  expect(calculate(obj, buttonName)).toEqual(obj);
});

test('If the next include a . return the  same input', () => {
  const buttonName = '.';
  const obj = { total: null, next: '9', operation: '+' };
  const answer = {
    total: null,
    next: '9.',
    operation: '+',
  };
  expect(calculate(obj, buttonName)).toEqual(answer);
});
