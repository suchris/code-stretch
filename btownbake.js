// Code stretch 3/6/2021
// B-Town bakery over-bought the supplies to make cake and needs to
// know how many they can make all together.

const btownbake = (recipe, supplies) => {
  let numOfSupply;
  let minOverSupply = null;
  for (let key in recipe) {
    numOfSupply = Math.floor(supplies[key] / recipe[key]);
    if (minOverSupply === null) {
      minOverSupply = numOfSupply;
    } else {
      if (minOverSupply > numOfSupply) {
        minOverSupply = numOfSupply;
      }
    }
  }
  return minOverSupply;
};

console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>2
console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 3000, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>5
console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 400, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>0
