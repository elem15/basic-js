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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if (message === undefined || key === undefined ) {
      throw new Error('Incorrect arguments!')
    }
    let string = '';
    key = key.toLowerCase();
    const keyLength = Math.ceil(message.length / key.length);
    let tempKey = key;
    for (let i = 0; i < keyLength; i += 1) {
      key += tempKey;
    }
    message = message.toLowerCase();
    let corr = 0;
    for (let i = 0; i < message.length; i += 1) {
      let messIdx = this.alphabet.indexOf(message[i]);
      if (messIdx === -1) {
        string += message[i];
        corr += 1;
      } else {
        let keyIdx = this.alphabet.indexOf(key[i - corr]);
        let codedIdx = messIdx + keyIdx;
        if (codedIdx > this.alphabet.length - 1) {
          codedIdx = codedIdx - this.alphabet.length;
        }
        let codedChar = this.alphabet[codedIdx];
        string += codedChar.toUpperCase();
      }
    }
    if (this.direct) return string;
    return string.split('').reverse().join('');
  }
  decrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    if (string === undefined || key === undefined ) {
      throw new Error('Incorrect arguments!')
    }
    let message = '';
    key = key.toLowerCase();
    const keyLength = Math.ceil(string.length / key.length);
    let tempKey = key;
    for (let i = 0; i < keyLength; i += 1) {
      key += tempKey;
    }
    // console.log(key)
    string = string.toLowerCase();
    let corr = 0;
    for (let i = 0; i < string.length; i += 1) {
      let strIdx = this.alphabet.indexOf(string[i]);
      if (strIdx === -1) {
        message += string[i];
        corr += 1;
      } else {
        let keyIdx = this.alphabet.indexOf(key[i - corr]);
        let codedIdx = strIdx - keyIdx;
        if (codedIdx < 0) {
          codedIdx = this.alphabet.length + codedIdx;
        }
        let codedChar = this.alphabet[codedIdx];
        message += codedChar.toUpperCase();
      }
    }
    if (this.direct) return message;
    return message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
