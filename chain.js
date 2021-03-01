// Code stretch 03/01/2021
function chain(num) {
  return {
    value: num,
    next: null,
    end: null,
    add: function (num) {
      if (this.end) {
        this.end.next = chain(num);
        this.end = this.end.next;
      } else {
        this.next = chain(num);
        this.end = this.next;
      }
    },
  };
}
const c = chain(3);
c.add(4);
c.add(5);
c.add(6);
console.log(c.value); //3
console.log(c.next.value); //4
console.log(c.next.next.value); //5
console.log(c.next.next.next.value); //6
console.log(c.next.next.next.next); //null
