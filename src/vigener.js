const { VigenereCipheringMachine } = require('./vigenere-cipher.js');

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('g g', 'c'))
console.log(directMachine.decrypt('i i', 'c'))
console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) // 'AEIHQX SX DLLU!'
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))

