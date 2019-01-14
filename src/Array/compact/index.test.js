const compact = require('.')

test('Test 1', () => {
  expect(() => compact('a, b, c, d')).toThrowError('An array should be passed as a parameter')
})

test('Test 2', () => {
  expect(compact([])).toEqual([])
})

test('Test 3', () => {
  expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
})
