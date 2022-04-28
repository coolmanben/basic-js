const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  mainChain: [],

  getLength() {
    return this.mainChain.length ;
  },

  addLink(value) {
    this.mainChain.push( String( value ) ) ;
    return this ;
  },

  removeLink( position ) {
    if ( position < 1 || position > this.getLength() || !Number.isInteger( position ) ) {
      this.mainChain = [] ;
      throw new Error("You can't remove incorrect link!");
    }
    this.mainChain.splice( position - 1 , 1) ; 
    return this ;
  },

  reverseChain() {
    this.mainChain.reverse() ;
    return this ;
  },
  
  finishChain() {
    let result = '( ' + this.mainChain.join( ' )~~( ' ) + ' )' ;
    this.mainChain = [] ;
    return result ;
  }
};

module.exports = {
  chainMaker
};
