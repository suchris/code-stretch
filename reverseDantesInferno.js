// Code-stretch 4/4/21
function ReverseDantesInferno(DantesInferno) {
  //CODE HERE
  let objArray = [];
  let obj = DantesInferno;
  while (obj.hasOwnProperty("level")) {
    const { circle, people } = obj;
    objArray.push({ circle, people });
    obj = obj.level;
  }
  let rslt = obj;
  let count = objArray.length - 1;
  while (count >= 0) {
    obj["level"] = { ...objArray[count] };
    obj = obj.level;
    count--;
  }

  return rslt;
}

function ReverseDantesInferno2(DantesInferno) {
  let prev = undefined;
  let current = DantesInferno;
  while (current) {
    let tmp = current.level;
    current.level = prev;
    prev = current;
    current = tmp;
  }
  return prev;
}

const DantesInferno = {
  circle: "Limbo",
  people: ["Sally"],
  level: {
    circle: "Lust",
    people: ["Jeffery", "Megan"],
    level: {
      circle: "Gluttony",
      people: ["Marty"],
      level: {
        circle: "Avarice",
        people: ["Rebecca"],
        level: {
          circle: "Wraith",
          people: ["Steven", "Rick"],
          level: {
            circle: "Heresy",
            people: ["Morgan", "Sarah", "Rachel"],
            level: {
              circle: "Violence",
              people: ["Timothy"],
              level: {
                circle: "Fraud",
                people: ["Tod"],
                level: {
                  circle: "Treachery",
                  people: ["Alex", "Oliver"],
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(JSON.stringify(ReverseDantesInferno2(DantesInferno)));
console.log("\n");

// console.log(JSON.stringify(ReverseDantesInferno(DantesInferno)));
