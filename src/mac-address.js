const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n !== 'string') return false;

  const reg = /[0-9A-F]/;

  const arr = n.split('-');

  if (arr.length !== 6) return false;
  
  for (const item of arr) {
    if (item.length !== 2) return false;
    if (!(reg.test(item[0]) && reg.test(item[1]))) return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
