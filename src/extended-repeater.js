const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeatSample(str, times = 1, separator = '+') {
  const output = [];
  str = str === null ? 'null' : str;
  for (let i = 0; i < times; i++) {
    output.push(str + '');
  }
  return output.join(separator);
}
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|', } = options;
  const additionPart = repeatSample(addition, additionRepeatTimes, additionSeparator);
  str = str === null ? 'null' : str;
  str = str + additionPart;
  return repeatSample(str, repeatTimes, separator);
}

module.exports = {
  repeater
};
