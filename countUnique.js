// Method 1, spreading array by creating a set of values inside array
function countUnique(arr) {
  return [...new Set(arr)];
}
console.log(countUnique([2, 2, 3, 4, 1, 3, 2, 3, 2, 2, 34, 343]));

//Method 2, filtering if the array.indexof() value is equals to the index.
const arr = [1, 2, 2, 1, 2, 3, 4, 3, 3, 4, 3];
let newArr = arr.filter((value, index, array) => {
  return arr.indexOf(value) == index;
});
console.log(newArr);
