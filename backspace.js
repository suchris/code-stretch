// Code stretch 3/3/2021
// Write a function that takes a string and returns a string.
// The character '#' represents a backspace.  The returned string should handle these backspaces.
// For example:
const backspace = (str) => {
  const cArray = str.split("").reduce((acc, char) => {
    if (char === "#") {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);
  return cArray.join("");
};

console.log(backspace("abc#d##c"));
// 'ac'
console.log(backspace("fueoc###ll#lsoi##tac##ackwl##"));
// 'fullstack'
console.log(backspace("aca##demy#####"));
// ''
