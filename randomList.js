// Code stretch 01/16/2021
function* randomGenerator(arr) {
  let copyOfArray = [...arr];
  let randomIdx;
  let result;

  while (true) {
    randomIdx = Math.floor(Math.random() * copyOfArray.length);
    result = copyOfArray[randomIdx];
    copyOfArray.splice(randomIdx, 1);
    yield result;
  }
}

function randomList(arr, num) {
  let gen = randomGenerator(arr);
  let count = 0;
  let returnArr = [];
  while (count < num) {
    returnArr.push(gen.next().value);
    count++;
  }
  return returnArr;
}

console.log(randomList([1, 2, 3], 2)); //[1, 2] or [2, 1] or [1, 3] etc.
console.log(randomList(["foo", "bar", "bazz", "quq"], 2)); //a random choice of 2 out of 4, with no repeats
