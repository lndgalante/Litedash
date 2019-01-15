/*
Description:
  Creates a new array concatenating array with any additional arrays and/or values.

Arguments:
  array (Array): The array to concatenate.
  [values] (...*): The values to concatenate.

Returns:
  (Array): Returns the new concatenated array.

Example:
  const array = [1]
  const other = _.concat(array, 2, [3], [[4]])

  console.log(other)
  // => [1, 2, 3, [4]]

Link: https://lodash.com/docs/4.17.11#concat
*/

const concat = (array = [], ...values) => {
  if (!Array.isArray(array)) throw new Error('An array should be passed as a parameter')
  if (!array.length || !values.length) return array

  const flattenValues = values.flat(1)
  return [...array, ...flattenValues]
}

/*
What we've learned? I want to know more!!

- Arrow Functions · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Default Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Rest Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- Array.prototype.flat() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
- Spread Syntax · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

*/

module.exports = concat
