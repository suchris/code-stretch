// const Any = (...promises) => {
//   const results = promises.map((p) => p(resolve));
//   console.log(results);
//   return results;
// };

const Any = (...promises) =>
  new Promise((res) => {
    let resolved = false;
    promises.forEach((p) => {
      p.then((data) => {
        if (!resolved) {
          resolved = true;
          res(data);
        }
      }).catch((e) => {});
    });
  });

//p takes a value, a delay, a boolean if it should reject (default is to not reject)

const p = (val, t, shouldReject = false) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldReject) {
        return rej(val);
      }
      res(val);
    }, t);
  });
};

Any(p("foo", 100, true), p("bar", 200, true)).then((result) =>
  console.log(result)
); //both of these promises reject, nothing happens

Any(
  p("foo", 500),
  p("bar", 20),
  p("bazz", 200),
  p("quq", 10, true)
).then((result) => console.log(result)); // logs 'bar'
