// Code stretch 4/1/2021
const finicky = (val, t) => {
  return new Promise((res) => {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setTimeout(() => {
        res(val);
      }, t);
    }
    return;
  });
};

const run = async () => {
  try {
    console.log(await finicky("foo", 100));
    console.log("success"); //sometimes this will happen
  } catch (ex) {
    console.log("failure"); //sometimes this will happen
    console.log(ex);
  }
};

run();
