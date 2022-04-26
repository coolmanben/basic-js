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
function repeater(str, options ) {
  let separator = options.separator;
  if ( separator == undefined ) {  separator = '+' }
  let separatorAddition = options.additionSeparator
  if ( separatorAddition == undefined ) { separatorAddition = '|' }
  let repeatTimes = options.repeatTimes;
  if ( repeatTimes  == undefined ) { repeatTimes = 1 };
  let additionRepeatTimes = options.additionRepeatTimes;
  if ( additionRepeatTimes  == undefined ) { additionRepeatTimes = 1 };
  let addition = options.addition;
  if ( addition === null ) { addition = 'null' };
  let inputSrt = str;
  if ( str === null ) { inputSrt = 'null' };

  function getRepetter( str , count, separete ){
      let resArray = [];
      for ( let i = 0 ; i < count; i++){
        resArray.push( str ) 
      }
      return resArray.join(separete);
    } 
  let attitStr = getRepetter( addition , additionRepeatTimes , separatorAddition) 
  return getRepetter( inputSrt + attitStr, repeatTimes , separator )
  }

  module.exports = {
    repeater
  };