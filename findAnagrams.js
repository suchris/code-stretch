// Code strentch 3/14/2021
function findAnagrams(word, array) {
  let rslt = [];
  for (w of array) {
    let found = true;
    if (word.length !== w.length) {
      found = false;
      continue;
    }
    const cArray = w.split("");
    for (c of word) {
      if (cArray.indexOf(c) < 0) found = false;
    }
    if (found) rslt.push(w);
  }
  return rslt;
}

const word = "smile";
const array = [
  "limes",
  "lime",
  "lemon",
  "slimes",
  "miles",
  "kilometers",
  "slimey",
];

console.log(findAnagrams(word, array));
// [ 'limes', 'miles' ]
