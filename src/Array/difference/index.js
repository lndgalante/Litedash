/*
Description:
  Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
  The order and references of result values are determined by the first array.

Arguments:
  array (Array): The array to inspect.
  [values] (...Array): The values to exclude.

Returns:
  (Array): Returns the new array of filtered values.

Example:
  _.difference([2, 1], [2, 3])
  // => [1]

Link: https://lodash.com/docs/4.17.11#difference
*/

const difference = (array = [], values = []) => {
  if (!Array.isArray(array)) throw new Error('An array should be passed as a parameter')
  if (!array.length || !values.length) return array

  return array.filter(element => !values.includes(element))
}

/*
What we've learned? I want to know more!!

- Arrow Functions · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Default Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Array.prototype.filter() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Array.prototype.includes() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/

module.exports = difference
