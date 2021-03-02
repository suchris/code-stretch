// Code stretch 02/27/2021
// Write a function that takes a function and an optional set of parameters as its arguments.
// This function can be called later to add further parameters.

// Example:
// let response = newFunc(multi, 3,4,5)
// console.log(response(2,5,6,7)) ==> 25200
// or
// console.log(newFunc(multi, 3,4,5)(2,5,6,7))==> 25200

// function multi(...args){
//   return [...args].reduce((acc,ele)=>acc*=ele)
// }
