// Code stretch 02/21/2021
const offsetDirection = {
  WEST: "EAST",
  EAST: "WEST",
  NORTH: "SOUTH",
  SOUTH: "NORTH",
};

function directionReducer(dirArray) {
  return dirArray.reduce((acc, dir) => {
    let idx = acc.indexOf(offsetDirection[dir]);
    idx > -1 ? acc.splice(idx, 1) : acc.push(dir);
    return acc;
  }, []);
}

const directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
console.log(directionReducer(directions)); //['WEST']

console.log(
  directionReducer(["SOUTH", "EAST", "EAST", "NORTH", "NORTH", "WEST"])
); //['EAST', NORTH']
