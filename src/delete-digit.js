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
function deleteDigit( n ) {
  let value = String( n )
  let valueArray = value.split('');
  let max = 0;
  valueArray.forEach( function( item, index, arr)  {
    let tempvalueArray = value.split('');   
    tempvalueArray.splice( index - 1, 1);
    newN = tempvalueArray.join('')
    if ( Number(newN) > max) {
      max = newN;
    }
  });
return Number(max)
}

module.exports = {
  deleteDigit
};