// Code stretch 4/3/2021
const AllFail = (...promises) => {
  return new Promise((res) => {
    Promise.all(promises)
      .then(() => {
        res();
      })
      .catch(() => {});
  });
};

const p = (value, resolve = false) => {
  return () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (resolve) {
          return res(value);
        }
        rej(value);
      }, Math.random() * 500);
    });
  };
};

AllFail(p("foo"), p("bar"), p("bazz")).then((res) =>
  console.log("we all failed!")
);

AllFail(p("foo"), p("bar", true), p("bazz")).then((res) =>
  console.log("this will not log!")
);
