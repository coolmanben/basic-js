const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let resArray = [];
  names.forEach( function( item ) {
    if ( !resArray.includes(item) ) {
      resArray.push(item) ;
    }
    else {
      let numberItem = 1 ;
      let newItem = item + `(${numberItem})` ;
      while( resArray.includes(newItem) ) {
        numberItem = numberItem + 1 ;
        newItem = item + `(${numberItem})` ;
      }
      resArray.push(newItem);
    }
    
  });
  return resArray;
}

module.exports = {
  renameFiles
};