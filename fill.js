// Code stretch 01/17/2021
function fill(len, val) {
  // implementation # 1
  let dup = () => val;
  if (Array.isArray(val)) {
    dup = () => [...val];
  } else if (typeof val === "object") {
    dup = () => ({ ...val });
  }
  return Array.from({ length: len }, () => dup());
}

const a1 = fill(3, true);
console.log(a1); //[true, true, true];
const a2 = fill(4, 42);
console.log(a2); //[42, 42, 42, 42];

const x = { foo: "bar" };
const a3 = fill(3, x);
console.log(a3); //[ { foo: 'bar' }, { foo: 'bar' } ]
console.log(a3[0] === a3[2]); //false
