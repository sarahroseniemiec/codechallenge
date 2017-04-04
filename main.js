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
  //joining the numbers in the array into a string
  var numbstring = numb.join('')
  return numbstring
  //returning numb to the function

}

//calling the function and passing in a string and printing it out
console.log(stringy('iwantcake'))


// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

var reverse = function (numby) {
  //need to turn the number being passed in into a string of digits
  var stringnumby = numby.toString()
  //need to split up each digit using .split which splits the string into an array of digits then  using .reverse to reverse the digits then put the digits back together with .join
  var reversenumby = stringnumby.split("").reverse().join('')

  return reversenumby
}
//calling the function and passing in a number and printing it out
console.log(reverse(888777632541))

//Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

var fibonacci = function (whatever) {
  var fibs = []
  for(var i = 0; i < whatever; i++){
    if (i === 0){
      fibs.push(0)
      //pushes 0 to array called fibs
    } else if (i === 1) {
      fibs.push(1)
      //pushes 1 to the array called fibs
    }
     else if(i >= 2){
      fibs.push(fibs[i-1] + fibs[i-2])
         //gets the value of the previous index and adds it to the value of the previous previous index and pushes that to the array called fibs
    }

  }
  return fibs
  //returns array to function
}
//calling function and passing it the number of indexes I want it to log
console.log(fibonacci(20))


// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(coupdate) {
  var date = new Date(coupdate)
  //setting coupon date
  var expireday = new Date
  //setting the expiration date to today
  expireday.setHours(0,0,0,0)
  //setting the time of expiration date to midnight
  if (date >= expireday){
    //comparing date on coupon to expiration date if date on coupon is greater or equal to today' date then the coupon is good
    return true
  } else {
    //if the date on the coupon is before today's date then it is expired
    return false
  }
}
//calling the function and passing it in a date on a coupon
console.log(checkCoupon("April 4, 2017"))

// Optional Challenge:
// Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least one letter character at the beginning All characters between the first character and the @ (if any) must be letters, numbers, or underscores There must be an @ character (after the points listed just now) After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen The email must end with at least one set of a dot followed by one or more word characters. The input must NOT be case-sensitive The function should return true or false.

var email = document.querySelector('#email')
var button = document.querySelector('#button')
var checking = function (emailone) {
  var emailforreal = email.value.toLowerCase()
  var emailray = emailforreal.split('')
  console.log(emailray)
  for(var i = 0; i <= emailray.length; i++){
    var atsymbol = emailray.indexOf('@')
    if (atsymbol === -1) {
       return false
    } else if (i === 0){
      emailray[i]
    } 
  }

}

button.addEventListener("click", function () {
  console.log(checking(email.value))

})
