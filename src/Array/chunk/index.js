/*
Description:
  Creates an array of elements split into groups the length of size.
  If array can't be split evenly, the final chunk will be the remaining elements.

Arguments:
  array (Array): The array to process.
  [size=1] (number): The length of each chunk

Returns:
  (Array): Returns the new array of chunks.

Example:
  _.chunk(['a', 'b', 'c', 'd'], 2);
  // => [['a', 'b'], ['c', 'd']]

  _.chunk(['a', 'b', 'c', 'd'], 3);
  // => [['a', 'b', 'c'], ['d']]
*/

const chunk = (array = [], size = 1) => {
  if (!Array.isArray(array)) throw new Error('An array should be passed as a parameter')
  if (!array.length || size < 1) return array

  let lastIndex = 0

  const chunks = Array.from({ length: Math.ceil(array.length / size) }, () => {
    const endIndex = lastIndex + size
    const chunk = array.slice(lastIndex, endIndex)
    lastIndex = endIndex

    return chunk
  })

  return chunks
}

/*
What we've learned? I want to know more!!

- Arrow Functions · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Default Parameters · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Array.isArray() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- Array.from() · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

*/

module.exports = chunk
