const difference = require('.')

test('Test 1', () => {
  expect(() => difference('a, b, c, d')).toThrowError('An array should be passed as a parameter')
})

test('Test 2', () => {
  expect(difference([])).toEqual([])
})

test('Test 3', () => {
  expect(difference([2, 1], [2, 3])).toEqual([1])
})
