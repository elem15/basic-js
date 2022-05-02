const { VigenereCipheringMachine } = require('./vigenere-cipher.js');

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('ba ba', 'ba'))
console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) // 'AEIHQX SX DLLU!'
console.log(directMachine.encrypt('AEIHQX SX DLLU!', 'alphonse'))

