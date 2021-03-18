// Code stretch 3/18/2021

const delay = (time) => {
  return (val) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(val), time);
    });
};

const d1 = delay(100);
const d2 = delay(200);

const run = async () => {
  const d = new Date();
  console.log(await d1("hello"));
  console.log(new Date() - d);
  console.log(await d1("world"));
  console.log(new Date() - d);
  console.log(await d2("!!!"));
  console.log(new Date() - d);
};
/* approximate output
hello
101
world
202
!!!
403
*/

run();
