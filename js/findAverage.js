//Find the mean (average) of a list of numbers in an array.





//Solution
var findAverage = function (nums) {
    let length=nums.length
    let sum=nums.reduce((acc,c)=> acc + c , 0)
    return sum/length
   }