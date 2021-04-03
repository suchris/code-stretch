// Code stretch 4/2/2021
// Help modernize Dante's internal administrative systems by
// writing a function that takes Dante's internal database and
// a designated circle of hell. This function should return the
// local residents from the circle specified.

const dantesLookup = (DantesInferno, targetCircle) => {
  // CODE  HERE
  if (DantesInferno.circle === targetCircle) return DantesInferno.people;
  const { level } = DantesInferno;
  return dantesLookup(level, targetCircle);
};

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

console.log(dantesLookup(DantesInferno, "Treachery")); // ['Alex', 'Oliver']
