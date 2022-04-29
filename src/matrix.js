function getMatrixElementsSum(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = 0;
    let zeros = {
        current: [],
        next: []
    };
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const n = row[j];
            if (!zeros.current.includes(j)) {
                sum += n;
            }
            if (n === 0) {
                zeros.next.push(j);
            }
        }
        zeros.current = zeros.next;
        zeros.next = [];
    }
    return sum;
}
console.log(getMatrixElementsSum([[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3],]))

    //   console.log([0, 5, 0, 0].includes(1))