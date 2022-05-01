function repeatSample(str, times = 1, separator = '+') {
    const output = [];
    for (let i = 0; i < times; i++) {
        output.push(str.toString());
    }
    return output.join(separator);
  }
  function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '', } = options;
    const additionPart = repeatSample(addition, additionRepeatTimes, additionSeparator);
    str = str.toString() + additionPart;
    return repeatSample(str, repeatTimes, separator);
  }

console.log(repeatSample('la', 3, 's'))
console.log(repeater('single', { repeatTimes: 2 }))
console.log(repeater('12345', { repeatTimes: 5 }))
console.log(repeater('12345', { repeatTimes: 5, separator: '3 words separator' }))
console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
// const str = objWithSpecificCoercion instanceof Object
//     ? objWithSpecificCoercion.hasOwnProperty([Symbol.toPrimitive])
//         ? objWithSpecificCoercion[Symbol.toPrimitive]()
//         : objWithSpecificCoercion.toString() 
//     : objWithSpecificCoercion.toString()
console.log(objWithSpecificCoercion + 'str')
// console.log(str)
const obj = {
    a: 3
}
console.log(obj + '')
