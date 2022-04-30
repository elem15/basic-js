const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 0;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    if (Array.isArray(arr)) {
      this.count = 1;
    }
    const calculate = (arr, localCount) => {
      let countedLevel = false; 
      let i = 0;
      while (i < arr.length) {
        if (Array.isArray(arr[i])) {
          if (countedLevel === false) {            
            localCount += 1;
          }
          calculate(arr[i], localCount);
          countedLevel = true;
        }
        i += 1;
      }
      if (localCount > this.count) {
        this.count = localCount;
      }
    }
    calculate(arr, 1);
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
