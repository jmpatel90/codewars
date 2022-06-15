// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
<<<<<<< HEAD
// 0 => [0]

// P: Are you always given digits?
// R: Whatever number is given, it's now split up into an array and the order of the numbers is reversed
// E: If given 348597 => [7,9,5,8,4,3]
//    If given 123456 => [6,5,4,3,2,1]
//    If given 494096 => [6,9,0,4,9,4]
// P: Make a function that takes in a number. 
function  reverseArray(num){
    // make number a string and split it and reverse array
    let numArray = num.toString().split('').reverse()
    // return 
    return Number(...numArray)
}

//Test cases
reverseArray(123)
console.log(reverseArray(456), [6,5,4])
// This doesn't work. Will have to use map.
=======
// 0 => [0]
>>>>>>> a7ca2c94a38db0a8a14deb393ef2d91f650777dd
