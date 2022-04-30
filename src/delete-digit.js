const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  const numbers = String(n);
  let max = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    let localMax = '';
    for (let j = 0; j < numbers.length; j += 1) {
      if (j !== i) {
        localMax += numbers[j];        
      }      
    }
    localMax = Number(localMax);
    if (max < localMax) {
      max = localMax;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
