// Code stretch 3/9/2021
function peopleAndPets() {
  let peopleObj = people.reduce((acc, p) => {
    acc[p.id] = { id: p.id, name: p.name, pets: [] };
    return acc;
  }, {});
  let petsObj = pets.reduce((acc, p) => {
    acc[p.id] = { id: p.id, name: p.name };
    return acc;
  }, {});
  let pet;
  for (let i = 0; i < ownerships.length; i++) {
    pet = petsObj[ownerships[i].petId];
    peopleObj[ownerships[i].personId].pets.push(
      JSON.parse(JSON.stringify(pet))
    );
  }
  return peopleObj;
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

console.log(peopleAndPets());
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
