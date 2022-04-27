const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  let strArray = str.split('');
  let resultArray = [];
  let lastcoursorItem = ''
  strArray.forEach( function( item, index, arr)  {  
    let coursorItem = item;
    let coursorItemCount = 1;
    if ( lastcoursorItem != coursorItem ) {
      let element = '';
      for (let indexArray = index + 1; indexArray < arr.length; indexArray++) {
        element = strArray[indexArray];
        if ( coursorItem == element ) {
          coursorItemCount = coursorItemCount + 1;  
        }
        else{
          break
        }
      }
      if (coursorItemCount > 1) {
        resultArray.push(coursorItemCount)  
      }
      resultArray.push(coursorItem)
    }
    lastcoursorItem = coursorItem
  });
  return resultArray.join('');
}

module.exports = {
  encodeLine
};
