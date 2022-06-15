// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// P: Is it always going to integers? Are we going to be given any special characters? An empty array ever?

// R: Return a new array with each value doubled

// E: If we are given [2,3,4], should return [4,6,8]
//    If we are given [4,5,6], should return [8,10,12]
//    If we are given [25,30,32], should return [50,60,64]

// P: Make a function that takes in an array. Then we want to map through the array and multiply each element by 2 and return the new number.

function maps(x){
    return x.map(e=>e*2)
  }


//Test Cases
maps([1,2,3])
console.log(maps([2,3,4]), [4,6,8])