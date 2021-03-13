// Code stretch 3/12/2021
// Bob and Sally Normal have lost their kids at EVERYTHING-R-US during a black friday blow out sale!
// Help them find BILLY and REBECCA NORMAL by writing a recursive function thats takes the name of the department store and one of their names.
// The function should return directions to find the chosen kid in the form of an array starting with the department name and ending with their name.

const searchStore = (department, person) => {
  for (let key in department) {
    if (department[key] === person) {
      return [person];
    } else if (typeof department[key] === "object") {
      let rslt = [key].concat(searchStore(department[key], person));
      if (rslt[rslt.length - 1] === person) {
        return rslt;
      }
    }
  }
};

const EVERYTHINGRUS = {
  SPORT: {
    "aisle 1": {
      PERSON: "Arwinder Singh",
      BASEBALL: {
        PERSON: "Steve Hunter",
        PERSON: "BILLY NORMAL",
      },
    },
    "aisle 2": {
      BASKETBALLL: {
        PERSON: "Vanessa Lima",
        PERSON: "Vincent Kuperavage",
      },
      HOCKEY: {},
    },
    "aisle 3": {
      PERSON: "Samir Jain",
      PERSON: "Serena Jiao",
    },
  },
  COSMETICS: {
    "aisle 5": {
      PERSON: "Luisa Zhou",
      SHAMPOO: {
        PERSON: "Matthew Sze",
      },
    },
    "aisle 6": {
      PERSON: "Kestrel Gorlick",
      MOISTURIZER: {
        PERSON: "Kokko Tso",
      },
    },
  },
  ELECTRONICS: {
    "aisle 7": {
      PERSON: "karandeep multani",
      TV: {
        PERSON: "Kate Quinn",
        PERSON: "Kayla Frankum",
      },
    },
    "aisle 8": {
      PERSON: "Jason Williams",
      ROOMBA: {
        PERSON: "Taylor McKeel",
      },
    },
  },
  PRODUCE: {
    "aisle 9": {
      NUTS: {
        BRAZIL: {
          PERSON: "Jacob Goldstein",
        },
        WALNUT: {
          PERSON: "Dean Jarrett",
        },
        PECAN: {
          PERSON: "Devyani Agarwal",
        },
      },
      PERSON: "Jared Suresky",
    },
    "aisle 10": {},
  },
  CLOTHING: {
    "aisle 11": {
      PERSON: "Roman Shteynberg",
      PERSON: "Rommel Demano",
    },
    "aisle 12": {
      JEANS: {
        JNCOS: {
          PERSON: "Monil Goklani",
          PERSON: "Parth Patel",
        },
        JEGGINGS: {
          HIGHWAISTED: {
            PERSON: "Michael Rios",
          },
          HIGHWATER: {
            PERSON: "REBECCA NORMAL",
          },
        },
      },
    },
  },
};
console.log(searchStore(EVERYTHINGRUS, "REBECCA NORMAL"));
// OUTPUT: [ 'CLOTHING', 'aisle 12', 'JEANS', 'JEGGINGS', 'HIGHWATER', 'REBECCA NORMAL']
console.log(searchStore(EVERYTHINGRUS, "BILLY NORMAL"));
// OUTPUT:==> [ 'SPORT', 'aisle 1', 'BASEBALL', 'BILLY NORMAL' ]
