//Complete the square sum function so that it squares each number passed into it and then sums the results together.





//Solution
function squareSum(numbers){
    return numbers.map((x)=>x*x).reduce((acc,c)=> acc + c, 0)
  
  }