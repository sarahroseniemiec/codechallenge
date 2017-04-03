console.log("testing")

// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. A string with size 6 should return :'101010'. With size 4 should return : '1010'. With size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.
//
// var stringy = function (size) {
//   for(var i = 1; i <= size; i++){
//     if (i % 2 === 0){
//       return 0
//     } else {
//       return 1
//     }
//   }
// }

function stringy (size) {
  var sizeapart = size.split("")
  console.log(sizeapart)
  //making a new array for the numbers to be pushed into
  var numb = []
  for(var i = 1; i <= sizeapart.length; i++){
    //checking to see if i is even or odd, if it is even (divisable by 2 without a remainder) it becomes a zero, since we are starting i at 1
    if (i % 2 === 0){
       numb.push('0')
      //if i is odd i becomes a 1
    } else {
      numb.push('1')
    }
  }
  return numb
}

console.log(stringy('aspasdasd'))


// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

var reverse = function (numby) {
  //need to turn the number being passed in into a string of digits
  var stringnumby = numby + ''
  //need to split up each digit then reverse the digits
  var reversenumby = stringnumby.split("").reverse()
  return reversenumby
}
//calling the function and passing in a number and printing it out
console.log(reverse(888777632545371))

// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

var fibonacci = function () {
  for(var i = 0; i < 700; i+j){

  }

}
