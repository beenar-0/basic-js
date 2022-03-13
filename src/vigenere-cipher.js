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
  constructor(isDirect = true) {
    this.isDirect = isDirect
    this.alphabet = []
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCharCode(i))
    }
  }

  reg = /[A-Z]/g

  genereteKey(message, key) {
    let count = 0
    return message.replace(this.reg, (item) => {
      let rez = key[count++]
      if (count === key.length) count = 0
      return rez.toUpperCase()
    })
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== "string") throw new Error('Incorrect arguments!')
    let reg = /[A-Z]/g
    message = message.toUpperCase()
    key = this.genereteKey(message, key)
    message = message.replace(reg, (item, index) => {
      let newAlphabet = this.alphabet.slice(this.alphabet.indexOf(key[index])).concat(this.alphabet).slice(0, 26)
      return newAlphabet[this.alphabet.indexOf(item)]
    })
    if (this.isDirect) return message
    else return message.split('').reverse().join('')
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== "string") throw new Error('Incorrect arguments!')
    encryptedMessage = encryptedMessage.toUpperCase()
    key = this.genereteKey(encryptedMessage, key)
    encryptedMessage = encryptedMessage.replace(this.reg, (item,index)=>{
      let newAlphabet = this.alphabet.slice(this.alphabet.indexOf(key[index])).concat(this.alphabet).slice(0, 26)
      return this.alphabet[newAlphabet.indexOf(item)]
    })
    if (this.isDirect) return encryptedMessage
    else return encryptedMessage.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
