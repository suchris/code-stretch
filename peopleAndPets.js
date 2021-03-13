// Code stretch 3/9/2021
function peopleAndPets() {
  const peopleObj = people.reduce((acc, p) => {
    acc[p.id] = { id: p.id, name: p.name, pets: [] };
    return acc;
  }, {});
  const petsObj = pets.reduce((acc, p) => {
    acc[p.id] = { id: p.id, name: p.name };
    return acc;
  }, {});
  for (let i = 0; i < ownerships.length; i++) {
    peopleObj[ownerships[i].personId].pets.push(petsObj[ownerships[i].petId]);
  }
  let rslt = [];
  for (const pId in peopleObj) {
    rslt.push(peopleObj[pId]);
  }
  return rslt;
}

const pets = [
  { id: 1, name: "Fido" },
  { id: 2, name: "Rex" },
  { id: 3, name: "Fluffy" },
];

const people = [
  { id: 1, name: "Prof" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "Ben" },
];

const ownerships = [
  { personId: 2, petId: 2 },
  { personId: 3, petId: 2 },
  { personId: 3, petId: 3 },
];

console.log(JSON.stringify(peopleAndPets()));
/*
  [
    {
      "id": 1,
      "name": "Prof",
      "pets": []
    },
    {
      "id": 2,
      "name": "Pete",
      "pets": [
        {
          "id": 2,
          "name": "Rex"
        }
      ]
    },
    {
      "id": 3,
      "name": "Stanley",
      "pets": [
        {
          "id": 2,
          "name": "Rex"
        },
        {
          "id": 3,
          "name": "Fluffy"
        }
      ]
    },
    {
      "id": 4,
      "name": "Ben",
      "pets": []
    }
  ] */
