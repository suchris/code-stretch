// code-stretch 02/20/2021
function sortOrder(arr, sortFieldName, selectFieldName) {
    const returnObj = arr.reduce((acc, obj) => {
        acc[obj[sortFieldName]] = obj[selectFieldName];
        return acc;
    }, {});
    return Object.keys(returnObj).sort().reduce((acc, key) => {
        acc.push(returnObj[key]);
        return acc;
    }, []);
}

const seinfeld = [
    { firstName: 'Jerry', lastName: 'Seinfeld', id: 3, },
    { firstName: 'George', lastName: 'Costanza', id: 7, },
    { firstName: 'Elaine', lastName: 'Benes', id: 2, },
    { firstName: 'Cosmo', lastName: 'Kramer', id: 9, }
];
    
console.log(sortOrder(seinfeld, 'id', 'firstName')); // ['Elaine', 'Jerry', 'George', 'Cosmo']
console.log(sortOrder(seinfeld, 'firstName', 'lastName')); // ['Kramer', 'Benes', 'Costanza', 'Seinfeld']
console.log(sortOrder(seinfeld, 'lastName', 'id')); // [2, 7, 9, 3]