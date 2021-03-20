// Code stretch 3/19/2021
const All = (...args) => {
  return new Promise((res) => {
    let count = 0;
    const results = [];
    [...args].forEach(async (p, idx) => {
      results[idx] = await p;
      if (++count === args.length) {
        res(results);
      }
    });
  });
};

const delay = (t) => {
  return (word) => {
    return new Promise((res) => {
      setTimeout(() => res(word), t);
    });
  };
};

const d100 = delay(100);
const d150 = delay(150);
const d200 = delay(200);

const run = async () => {
  const d = new Date();
  const [foo, bar, bazz] = await All(d100("foo"), d150("bar"), d200("bazz"));
  console.log(foo, bar, bazz); //should print foo, bar, bazz
  console.log(new Date() - d); //should print approx 200
};
run();
