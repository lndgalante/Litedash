const chunk = require('.')

test('Test 1', () => {
  expect(() => chunk('a, b, c, d')).toThrowError('An array should be passed as a parameter')
})

test('Test 2', () => {
  expect(chunk([])).toEqual([])
})

test('Test 3', () => {
  expect(chunk(['a', 'b', 'c', 'd'], -2)).toEqual(['a', 'b', 'c', 'd'])
})

test('Test 4', () => {
  expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']])
})

test('Test 5', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
})

test('Test 6', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
})
