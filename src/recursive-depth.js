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
  
  calculateDepth( arr, maxCount = 0 ) {
    maxCount++;
    arr.forEach(function(entry) {
      
      if ( Array.isArray( entry ) ) {
        const newdepthCalc = new DepthCalculator();
        count = count + newdepthCalc.calculateDepth( entry ,maxCount);
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