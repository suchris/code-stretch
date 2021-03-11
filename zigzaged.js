// Code stretch 3/10/2021
const zigzaged = (str, num) => {
  let grid = [];
  let count = 0;
  let isReverse = false;

  while (count < num) {
    grid.push(Array(str.length).fill(" "));
    count++;
  }

  let lineIdx = 0;
  for (let j = 0; j < str.length; j++) {
    grid[lineIdx][j] = str[j];

    lineIdx = isReverse ? lineIdx - 1 : lineIdx + 1;

    if (lineIdx === 0 || lineIdx === num - 1) {
      isReverse = !isReverse;
    }
  }

  return grid.reduce((acc, l) => {
    acc += l.join("") + "\n";
    return acc;
  }, "");
};

console.log(zigzaged("DynamiteJack", 5));
