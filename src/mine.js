function minesweeper(matrix) {
    // const arr = [...Array(matrix.length).fill(Array(matrix[0].length).fill(0))];
    // const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    const arr = [];
    for (const items of matrix) {
        const inner = []
        for (const item of items) {
            inner.push(0);
        }
        arr.push(inner);
    }    

    for (let i = 0; i < matrix.length; i++) {
        const items = matrix[i];
        for (let j = 0; j < items.length; j++) {
            const item = items[j];
            if (item) {
                if (matrix[i - 1]) {
                    if (matrix[i - 1][j - 1] !== undefined) arr[i - 1][j - 1] += 1;
                    if (matrix[i - 1][j] !== undefined) arr[i - 1][j] += 1;
                    if (matrix[i - 1][j + 1] !== undefined) arr[i - 1][j + 1] += 1;
                }
                if (matrix[i][j - 1] !== undefined) arr[i][j - 1] += 1;
                if (matrix[i][j + 1] !== undefined) arr[i][j + 1] += 1;
                if (matrix[i + 1]) {
                    if (matrix[i + 1][j - 1] !== undefined) arr[i + 1][j - 1] += 1;
                    if (matrix[i + 1][j] !== undefined) arr[i + 1][j] += 1;
                    if (matrix[i + 1][j + 1] !== undefined) arr[i + 1][j + 1] += 1;
                }
            }
        }
    }
    return arr;
}

matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, true]
]

console.log(minesweeper(matrix))