/*
Description:
  This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.
  The order and references of result values are determined by the first array.
  The iteratee is invoked with one argument: (value).

Arguments:
  array (Array): The array to inspect.
  [values] (...Array): The values to exclude.
  [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns:
  (Array): Returns the new array of filtered values.

Example:
  _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  // => [1.2]

Link: https://lodash.com/docs/4.17.11#differenceBy
*/

const differenceBy = (array = [], values = [], iteratee) => {
  if (!Array.isArray(array)) throw new Error('An array should be passed as a parameter')
  if (!array.length || !values.length) return array

  return array.filter((element, index) => iteratee(element) !== iteratee(values[index]))
}

/*
What we've learned? I want to know more!!

- Arrow Functions · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Default Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Array.prototype.filter() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

module.exports = differenceBy
