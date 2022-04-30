const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  const result = {};
  for (const domain of domains) {
    const words = domain.split('.').reverse();
    let acc = '';
    for (let word of words) {
      word = '.' + word;
      acc += word;
      if (result[acc]) {
        result[acc] += 1;
      } else {
        result[acc] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
