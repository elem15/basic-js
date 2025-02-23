const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) { 
  for (let i = 0; i < email.length; i++) {
    const idx = email.length - i - 1;
      const char = email[idx];
      console.log(char);
    if (char === '@') return email.substring(idx + 1, email.length);
  }  
}
module.exports = {
  getEmailDomain
};
