// Code stretch 01/23/2021
const foo = {
  bar() {
    console.log(this.bazz);
  },

  bazz: "quq",
};

foo.bar(); //quq
