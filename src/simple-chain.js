const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position && this.chain[position - 1] && typeof position === 'number'){
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }

  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let rez = this.chain.join('~~')
    this.chain = []
    return rez
  }
};

module.exports = {
  chainMaker
};
