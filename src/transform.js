
console.log(transform(['--double-prev', 1, 2, 3]))// => [1, 2, 3]
console.log(transform([1, 2, 3, '--double-next']))// => [1, 2, 3]
console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))// => [1, 2, 4, 5]
console.log(transform({ 'foo': 'bar' }))// => [1, 2, 4, 5]
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))// => [1, 2, 4, 5]
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))// => [1, 2, 3, 4, 5]
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))// => [1, 2, 3, 4, 5]


function transform(arr) {
    if (!Array.isArray(arr)) return "'arr' parameter must be an instance of the Array!";
    const commands = {
        doubleN: '--double-next',
        doubleP: '--double-prev',
        discN: '--discard-next',
        discP: '--discard-prev',
    }
    let prevDeleted = false;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el === commands.doubleN && i < arr.length - 1) {
            result.push(arr[i + 1]);
            prevDeleted = false;
        } else if (el === commands.doubleP) {
            if (!prevDeleted && i > 0) result.push(arr[i - 1]);
            prevDeleted = false;
        } else if (el === commands.discN) {
            i += 1;
            prevDeleted = true;
        } else if (el === commands.discP) {
            if (!prevDeleted) result.pop();
            prevDeleted = false;
        }  else if (!Object.values(commands).includes(el)) {
            result.push(el);
            prevDeleted = false;
        }
    }
    return result
}