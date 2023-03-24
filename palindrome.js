// solution 1
const isPalindrome = (num) => {
  return num < 0
    ? false
    : num === parseInt(num.toString().split("").reverse().join(""));
};

// solution 2
const palindromeString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return str === reversedString;
};

console.log(palindromeString("ara"));
