// Code stretch 3/25/2021
// replace the code below so that you are no longer using async or await
// you should be able to accomplish the same results using .then.

const p1 = (y) => Promise.resolve(y);
const p2 = (x) => Promise.resolve(3 * x);
const run = () => {
  p1(10)
    .then((data) => p2(data))
    .then((data) => console.log(data));
};

run();
