//Given an array of ones and zeroes, convert the equivalent binary value to an integer.





//Solution
const binaryArrayToNumber = arr => {
    arr=arr.reverse()
     return arr.reduce((acc,c,i)=> acc + c*(2**i),0)
   }