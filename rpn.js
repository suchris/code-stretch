const assert = require("assert");

const ops = {
  "+": (l, r) => l + r,
  "-": (l, r) => l - r,
  "*": (l, r) => l * r,
  "/": (l, r) => {
    if (r === 0) throw "division by zero";
    return l / r;
  },
};

function rpn(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (!isNaN(t)) {
      stack.push(t);
    } else {
      const r = stack.pop();
      const l = stack.pop();
      if (l === undefined) throw "Incorrect RPN";
      stack.push(ops[t](l, r));
    }
  }
  if (stack.length > 1) throw "Incorrect RPN";
  return stack.pop();
}

let tests = [
  { input: [1, 3, "+"], expected: 4 },
  { input: [1, 3, 5, "*", "+"], expected: 16 },
  { input: [1, 3, 5, "+", "*"], expected: 8 },
  { input: [1, 3, 5, "+", "/"], expected: 0.125 },
];

for (t of tests) {
  assert.equal(rpn(t.input), t.expected);
}

const fn = () => rpn([1, 5, 4, "-", 1, "-", "/"]);
assert.throws(fn, /^division by zero/);

const fn2 = () => rpn([11, 4, "-", 1, "-", "/"]);
assert.throws(fn2, /^Incorrect RPN/);
