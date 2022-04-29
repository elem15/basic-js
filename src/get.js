function getEmailDomain(email) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    for (let i = 0; i < email.length; i++) {
      const idx = email.length - i - 1;
        const char = email[idx];
        console.log(char);
      if (char === '@') return email.substring(idx + 1, email.length);
    }  
  }
console.log(getEmailDomain('prettyandsimple@example.com'))  
console.log('prettyandsimple@example.com'.substring(0, 20));