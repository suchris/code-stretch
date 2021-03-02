// Code stretch 3/2/2021
const palindromeCheck = (str) => {
  // code in here
  let cArray = str.split("");
  cArray = cArray.filter((char) => char !== " ");

  let reverseArray = [];
  for (let i = cArray.length - 1; i > -1; i--) {
    reverseArray.push(cArray[i]);
  }
  return cArray.join("") === reverseArray.join("");
};

console.log(palindromeCheck("abba")); //==> true
console.log(palindromeCheck("abcdcba")); //==> true
console.log(palindromeCheck("w ert yt rew")); //==> true
console.log(palindromeCheck("abcde")); //==> false
console.log(palindromeCheck("123653453524")); //==> false
