function minesweeper(matrix) {
    let arr = Array(matrix.length).fill(Array(matrix[0].length).fill(0));
    let a = 0;
    let b = 0;

    for (let i = 0; i < matrix.length; i++) {
        const items = matrix[i];
        for (let j = 0; j < items.length; j++) {
            const item = items[j];
            if (item) {

                if (arr[i - 1]) {
                    if (arr[i - 1][j - 1] !== undefined) arr[i - 1][j - 1] += 1;
                    // if (arr[i - 1][j] !== undefined) arr[i - 1][j] += 1;
                    // if (arr[i - 1][j + 1] !== undefined) arr[i - 1][j + 1] += 1;
                    console.log(arr)
                }
                // if (arr[i][j - 1] !== undefined) arr[i][j - 1] = 1;
                // if (arr[i][j + 1] !== undefined) arr[i][j + 1] += 1;
                // if (arr[i + 1][j - 1] !== undefined) arr[i + 1][j - 1] += 1;
                // if (arr[i + 1][j] !== undefined) arr[i + 1][j] += 1;
                // if (arr[i + 1][j + 1] !== undefined) arr[i + 1][j + 1] += 1;
            }
        }
    }

    return arr;
}
  
 matrix = [
  [false, false, false],
  [false, true, false],
  [false, false, false]
]
 
console.log(minesweeper(matrix))