function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    //console.log(`Str is not Anagram`);
  }
  let counter = {};
  for (let letter of str1) {
    // console.log(letter);
    //console.log(counter);
    counter[letter] = (counter[letter] || 0) + 1;
    //console.log(counter[letter]);
  }
  //console.log(counter);
  for (let item of str2) {
    // console.log(item);
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

isAnagram("hello", "llheo");

//Linear Time Complexity
