const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  function calculateTurn(disksNumber) {   
    let count = 3;
    for (let i = 0; i < disksNumber - 2; i++) {
        count = count * 2 + 1;
    }
    return count;
  }
  const turnsPerSecond = 3600 / turnsSpeed;
  return { turns: calculateTurn(disksNumber), seconds: Math.floor(calculateTurn(disksNumber) * turnsPerSecond)}
}

module.exports = {
  calculateHanoi
};
