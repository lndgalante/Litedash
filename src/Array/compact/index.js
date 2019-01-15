/*
Description:
  Creates an array with all falsey values removed.
  The values false, null, 0, "", undefined, and NaN are falsey.

Arguments:
  array (Array): The array to compact.

Returns:
  (Array): Returns the new array of filtered values.

Example:
  _.compact([0, 1, false, 2, '', 3])
  // => [1, 2, 3]

Link: https://lodash.com/docs/4.17.11#compact
*/

const compact = (array = []) => {
  if (!Array.isArray(array)) throw new Error('An array should be passed as a parameter')
  if (!array.length) return array

  return array.filter(Boolean)
}

/*
What we've learned? I want to know more!!

- Arrow Functions · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Default Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Array.isArray() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- Array.prototype.filter() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

module.exports = compact
