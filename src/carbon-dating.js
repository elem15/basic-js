const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity/* sampleActivity */) {
  // throw new NotImplementedError('Not implemented');
  if (typeof activity !== 'string') return false;
  const ACTIVITY = +activity;
  if (isNaN(ACTIVITY)) return false;
  if (ACTIVITY >= 15) return false;
  if (ACTIVITY <= 0) return false;

  const TERM = Math.log(MODERN_ACTIVITY / ACTIVITY ) * HALF_LIFE_PERIOD / Math.log(2);
  return Math.ceil(TERM);

}

module.exports = {
  dateSample
};
