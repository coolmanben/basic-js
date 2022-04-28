const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor( typeCript = false) {
    this.typeCript = typeCript;
  }
  
  crupt (message , key , type) {
    if ( !message || !key )  {
      throw new Error (`Incorrect arguments!`)
    }
    let inputMessage  = message.toUpperCase();
    let inoutKey      = key.toUpperCase();
    let outputMessage = "";
    for(let i = 0, j = 0; i < inputMessage.length; i++) {
      let inputLetter       = inputMessage[i];
      let letterCharCode    = inputLetter.charCodeAt();
      let keyLetter         = inoutKey[ j % inoutKey.length ];
      if( ( letterCharCode >= 65 && letterCharCode <= 90)){   
        let upperLetter = ''
        if ( type) {
          upperLetter = ( ( letterCharCode - 65 ) + (keyLetter.charCodeAt() - 65) ) % 26 + 65;
        }
        else {
          upperLetter = ( ( letterCharCode ) - ( keyLetter.charCodeAt() ) + 26 ) % 26 + 65;  
        }
        outputMessage += String.fromCharCode( upperLetter );
        j++;
      }
      else{
        outputMessage += inputLetter;
      }
    }
    if (this.typeCript == true) {
      return outputMessage.split('').reverse().join('');
    }
    else{
      return outputMessage;  
    }
  }

  encrypt( message , key ) {
    return this.crupt(message , key , true)   
  }

  decrypt( message , key ) {
    return this.crupt(message , key , false)   
  }
}

module.exports = {
  VigenereCipheringMachine
};
