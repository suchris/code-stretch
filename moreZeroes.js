// Code stretch 3/11/2021

// write the function moreZeroes that takes a string
// and returns a string of only the letters whose binary value contain more zeroes than ones
// for example: 'cat' --> [ '1100011', '1100001', '1110100' ] => ['1100001'] --> 'a'
const moreZeroes = (str) => {
  const binaryChars = str.split("").map((c) => c.charCodeAt().toString(2));
  const rslt = binaryChars.reduce((acc, bstr, idx) => {
    const nStr = bstr.split("");
    let count = 0;
    for (let i = 0; i < nStr.length; i++) {
      if (nStr[i] === "0") {
        count++;
      }
    }
    if (count > nStr.length - count) {
      acc.push(str[idx]);
    }
    return acc;
  }, []);
  return rslt.join("");
};

console.log(moreZeroes("banana"));
// => 'baaa'
console.log(moreZeroes("raspberry"));
// => 'apb'
console.log(moreZeroes("apple"));
// => 'app'
