const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr  ) {
  if ( !Array.isArray(arr) ) { 
    throw new Error(`'arr' parameter must be an instance of the Array!`)  
  }
  let resArray = [];
  let addElNextel = true;
  let arrLength = arr.length;
  let ignoreFunc = false;
  arr.forEach( function(entry, index, array) {
    let addEl = true;
    // исключает следующий за ней элемент исходного массива из преобразованного массива.
    if ( ignoreFunc ) {
      entry = '';
      ignoreFunc = false; 
      addEl = false;
    }

    if ( !addElNextel ) {
      addElNextel = true; 
      addEl = false;
      ignoreFunc = true;
    };
    if ( entry == `--discard-next`) { 
      addElNextel = false;
      addEl = false;
    };
    //исключает предшествующий ей элемент исходного массива из преобразованного массива.
    if ( entry == `--discard-prev` ) {  
      resArray.splice( index - 1 , 1);
      addEl = false; 
    };
    // удваивает следующий за ней элемент исходного массива в преобразованном массиве.
    if ( entry == `--double-next`) {
      if ( ( arrLength > index) & ( arrLength > index + 1 ) ) {
        resArray.push( arr[ index + 1 ] ); 
        addEl = false 
      }
      else  {
        addEl = false
      };
    };
    //удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
    if ( entry == `--double-prev`) { 
      if ( index > 1) {
        resArray.push( resArray[ index - 1] ) ; 
          addEl = false 
        } 
      else  {
        addEl = false
    } };
    
    if ( addEl ) { 
        resArray.push(entry);
    };
  });

  return resArray;

}

module.exports = {
  transform
};
