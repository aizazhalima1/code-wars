//mplement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.





//Solution
function addBinary(a,b) {
    let sum=a+b
    let quot=Math.floor(sum/2)
    let bin=String(sum-(quot*2))
    do{
      sum=quot
      quot=Math.floor(sum/2)
      rem=sum-(quot*2)
      bin=bin+rem                    
    }
    while(quot>0)
      return bin.split('').reverse().join('')
    }