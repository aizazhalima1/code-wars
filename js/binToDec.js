//Complete the function which converts a binary number (given as a string) to a decimal number.





//Solution
function binToDec(bin) {
    bin=bin.split('').reverse().map((x,i)=>Number(x)*Math.pow(2,i))
    return bin.reduce((acc,c)=> acc + c, 0)
  }