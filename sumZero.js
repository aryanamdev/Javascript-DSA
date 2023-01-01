let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function sumZero(array) {
  const newArr = [];
  for (let number of array) {
    // console.log(number);
    for (let i = 1; i < array.length; i++) {
      if (number + array[i] == 0) {
        return [number, array[i]];
      }
    }
  }
}

console.log(sumZero(arr));
