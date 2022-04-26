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
  
  calculateDepth( arr ) {
      let maxCount = 1;
      arr.forEach(function(entry) {
        let count = 1;
        if ( typeof entry == 'object') {
          const newdepthCalc = new DepthCalculator();
          count = count + newdepthCalc.calculateDepth( entry );
        }
        if ( count > maxCount){
          maxCount = count; 
        }
      });
    return maxCount;
  }
} 

module.exports = {
  DepthCalculator
};