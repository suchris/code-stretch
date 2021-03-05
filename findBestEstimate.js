// Code stretch 3/5/2021
// Welcome to the antique roadshow! ...Unfortunately,
// no one can remember which antique fetched the highest estimate and
// the data from the past four days is a mess. Write a function that takes
// that data and returns the item with the highest estimate.

const flatten = (data, obj = {}) => {
  if (typeof data === "object") {
    for (let prop in data) {
      if (typeof data[prop] === "object") {
        flatten(data[prop], obj);
      } else {
        obj[prop] = data[prop];
      }
    }
  }
  return obj;
};

const findBestEstimate = (data) => {
  // code goes here
  let dataObj = flatten(data); // flatten an object data structure

  let highestEst = ["", 0];
  for (let prop in dataObj) {
    if (dataObj[prop] > highestEst[1]) {
      highestEst[0] = prop;
      highestEst[1] = dataObj[prop];
    }
  }
  return highestEst;
};

const antiqueData = {
  day1: {
    "Bruce Parker": {
      "Brock Funkhouser": {
        "Richard Dadd painting": 100000,
      },
      "Chasidy Dean": {
        "Silver Bull Head": 150000,
      },
      "Daron Sanches": {
        "Geoffrey Munn": {
          "Art Deco bracelet": 150000,
          "John Lavery painting": 1200000,
          "Gold Leica": 320000,
        },
      },
    },
    "Angela Rippon": {
      "18th Century Dolls House": 190000,
    },
  },
  day2: {
    "Arthur Negus": {
      "Merrill Burgher": {
        "bronze racehorse": 250000,
        "apothecary desk": 500000,
      },
      "Zona Cornell": {
        "Beatrix Potter paintings": 10,
        "Painting by William Orpen": 30000,
        jacket: {
          "john F Kennedy’s jacket": 275000,
        },
      },
    },
  },
  day3: {
    "Hugh Scully": {
      "18th-century sword": 20000,
      "Karly Strasburg": {},
    },
    "Michael Aspel": {
      "Alma Tadema portrait": 34000,
    },
  },
  day4: {
    "Van Dyck painting": 400000,
  },
};

console.log(findBestEstimate(antiqueData)); //==> [ 'John Lavery painting', 1200000 ]
