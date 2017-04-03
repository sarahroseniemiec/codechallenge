console.log("testing")

// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. A string with size 6 should return :'101010'. With size 4 should return : '1010'. With size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.


function stringy (size) {
  //making a new array for the numbers to be pushed into
  var numb = []
  for(var i = 1; i <= size.length; i++){
    //checking to see if i is even or odd, if it is even (divisable by 2 without a remainder) it becomes a zero, since we are starting i at 1
    if (i % 2 === 0){
      //pushing '0' to the array called numb
       numb.push('0')
      //if i is odd i becomes a 1
    } else {
      //pushing '1' to the array called numb
      numb.push('1')
    }
  }
  //returning numb to the function
  var numbstring = numb.join('')
  return numbstring

}

//calling the function and passing in a string and printing it out
console.log(stringy('iwantcake'))


// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

var reverse = function (numby) {
  //need to turn the number being passed in into a string of digits
  var stringnumby = numby.toString()
  //need to split up each digit then reverse the digits
  var reversenumby = stringnumby.split("").reverse().join('')
  return reversenumby
}
//calling the function and passing in a number and printing it out
console.log(reverse(888777632541))

//Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

var fibonacci = function () {
  var fibs = []
  for(var i = 0; i < 10; i++){
    if (i === 0){
      fibs.push(0)
    } else if (i === 1) {
      fibs.push(1)
    }
     else if(i >= 2){
      fibs.push(fibs[i-1] + fibs[i])
    }

  }
  return fibs
}

console.log(fibonacci())
