// class DepthCalculator {
//     constructor() {
//       this.count = 0;
//     }
//     calculateDepth(arr) {
//       // if (Array.isArray(arr)) {
//       //   this.count = 1;
//       // }
//       const calculate = (arr, localCount) => {
//         let countedLevel = false;
//         let i = 0;
//         while (i < arr.length) {
//           if (Array.isArray(arr[i])) {
//             if (countedLevel === false) {
//               localCount += 1;
//             }
//             calculate(arr[i], localCount);
//             countedLevel = true;
//           }
//           i += 1;
//         }
//         if (localCount > this.count) {
//           this.count = localCount;
//         }
//       }
//       calculate(arr, 1);
//       return this.count;
//     }
// }


class DepthCalculator {
  constructor() {
    this.count = 0;
  }
  calculateDepth(arr, localCount = 1) {
    let countedLevel = false;
    let i = 0;
    while (i < arr.length) {
      if (Array.isArray(arr[i])) {
        if (countedLevel === false) {
          localCount += 1;
        }
        this.calculateDepth(arr[i], localCount);
        countedLevel = true;
      }
      i += 1;
    }
    if (localCount > this.count) {
      this.count = localCount;
    }
    localCount = 1;
    return this.count;
  }
}
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
// console.log(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))
console.log(calculateDepth([[[[[[[[[[]]]]]]]]]]), 10)