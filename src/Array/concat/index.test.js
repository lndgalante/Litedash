const concat = require('.')

test('Test 1', () => {
  expect(() => concat('a, b, c, d')).toThrowError('An array should be passed as a parameter')
})

test('Test 2', () => {
  expect(concat([])).toEqual([])
})

test('Test 3', () => {
  const array = [1]
  expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]])
})
