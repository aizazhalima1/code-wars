//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.







//Solution
function sum (numbers) {
    return numbers.length==0? 0 : numbers.reduce((acc,c)=>acc + c,0)   
   };