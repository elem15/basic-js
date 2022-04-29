function isMAC48Address(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof n !== 'string') return false;
  
    const arr = n.split('-');
    if (arr.length !== 6) return false;
    const reg = /[0-9A-F]/;
    for (const item of arr) {
      if (item.length !== 2) return false;
      if (!(reg.test(item[0]) && reg.test(item[1]))) return false;
    }
    return true;
}
console.log(isMAC48Address('00-1B-63-84-45-E6'))
console.log(isMAC48Address('Z1-1B-63-84-45-E6'))
