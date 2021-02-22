// Code stretch 01/21/2021
// isMatch returns true if the first object
// has all the same keys and values of second object
// note the first object can have extra properties, yet still return true

function isMatch(obj1, obj2) {
  return Object.keys(obj2).every((k) => obj1[k] === obj2[k]);
}

console.log(isMatch({}, { x: 1 })); //false
console.log(isMatch({ x: 1, y: 2 }, { x: 1 })); //true
console.log(isMatch({ x: 1, y: 2, z: 3 }, { x: 1, y: 2 })); //true
console.log(isMatch({ x: 1, y: 2, z: 3 }, { x: 1, y: 1 })); //false
