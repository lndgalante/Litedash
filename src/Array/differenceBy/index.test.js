const differenceBy = require('.')

test('Test 1', () => {
  expect(() => differenceBy('a, b, c, d')).toThrowError('An array should be passed as a parameter')
})

test('Test 2', () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2])
})
