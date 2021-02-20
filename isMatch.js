// code-stretch 01/21/2021
function isMatch(obj1, obj2) {
    if ((Object.keys(obj1).length === 0 && Object.keys(obj2).length > 0) || 
        (Object.keys(obj1).length > 0 && Object.keys(obj2).length === 0)) return false;
    let isFirst = Object.keys(obj1).length < Object.keys(obj2).length ? true : false;
    
    if (isFirst) { 
        objA = obj1; 
        objB = obj2; 
    } else { 
        objA = obj2; 
        objB = obj1; 
    }
    
    for (k in objA) {
      if (objB.hasOwnProperty(k)) {
        if (objB[k] !== objA[k]) {
          return false;
        }
      } else {
          return false;
      }
    }
    return true;
  }
  
  console.log(isMatch({}, {x: 1}));//false
  console.log(isMatch({x: 1, y: 2}, {x: 1}));//true
  console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 2}));//true
  console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 1}));//false