const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let cortArray   = arr.filter( item => item > 0).sort(( a, b) => a - b);
  let index       = 0
  let resArray    = arr.map( imep => {
    if (imep > 0) {
      let temp = cortArray[index]
      index++;
      return temp;
    }
    return imep;
  })
  return resArray;
}

module.exports = {
  sortByHeight
};

