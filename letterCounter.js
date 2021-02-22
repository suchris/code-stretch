function letterCounter(str) {
  let obj = {};
  for (c of Array.from(str)) {
    // if obj[c] is undefined, it's false-like
    obj[c] = obj[c] + 1 || 1;
  }
  return obj;
}

console.log(letterCounter("abc"));
//{ a: 1, b: 1, c: 1 }
console.log(letterCounter("foobarbazz"));
//{ f: 1, o: 2, b: 2, a: 2, r: 1, z: 2 }
