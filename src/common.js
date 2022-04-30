function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');
    s2 = s2.split('');
    let sum = 0;
    for (const char of s1) {
        const idx = s2.indexOf(char);
        if (idx > -1) {            
            s2.splice(idx, 1);
            sum += 1;
        }
    }
    return sum;
}
  console.log(getCommonCharacterCount('aabcc', 'adcaa'))