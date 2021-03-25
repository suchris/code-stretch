// 3/20/2021 All with rejectMe
const All = (...args) => {
  return new Promise((res) => {
    let count = 0;
    const results = [];
    args.forEach(async (p, idx) => {
      results[idx] = await p;
      if (++count === args.length) {
        res(results);
      }
    });
  });
};

//allows user to set up delays
//which can resolve or reject
const delay = (t) => {
  return (word, rejectMe) => {
    return new Promise((res, rej) => {
      setTimeout(() => (rejectMe ? rej(word) : res(word)), t);
    });
  };
};

const d100 = delay(100);
const d150 = delay(150);
const d200 = delay(200);

const run = async () => {
  try {
    await All(d100("foo"), d200("bar", true), d150("bazz"));
  } catch (ex) {
    console.log(ex); //bar
  }
};
run();
