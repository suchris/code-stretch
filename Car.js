// Code stretch 3/21/2021
class Car {
  constructor(maker, model, year, mpg, topSpeed, currentSpeed = 0) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.mpg = mpg;
    this.topSpeed = topSpeed;
    this.currentSpeed = currentSpeed > 0 ? currentSpeed : 0;
  }
  accelerate(num) {
    this.currentSpeed += num;
  }
  decelerate(num) {
    if (this.currentSpeed - num >= 0) {
      this.currentSpeed -= num;
    } else {
      this.currentSpeed = 0;
    }
  }
}

const tundra = new Car("Toyota", "Tundra", 2004, 14, 120);

console.log(tundra.currentSpeed); // 0
tundra.accelerate(20);
console.log(tundra.currentSpeed); // 20
tundra.decelerate(30);
console.log(tundra.currentSpeed); // 0

console.log(Object.getPrototypeOf(tundra).hasOwnProperty("accelerate")); // true
console.log(Object.getPrototypeOf(tundra).hasOwnProperty("decelerate")); // true
