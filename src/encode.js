function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    let result = '';
    let count = 1;
    let isCounting = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1] && !isCounting) {
        result += str[i];
      }
      else if (str[i] === str[i + 1]) {
        count += 1;
        isCounting = true;
        } 
      else if (str[i] !== str[i + 1] && isCounting) {
          result += +count + str[i];
          count = 1;
          isCounting = false;
      }
    }
    return result;
}
  
console.log(encodeLine('aaaatttt'))