//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.





//Solution
function findAverage(array) {
    // your code here
    if(array.length!==0){
    let sum=array.reduce((acc,c)=> acc += c, 0)
    return sum/array.length;
  }
    else{return 0}
  }
