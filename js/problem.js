//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error"





//Solution
function problem(x){
    //your code here
    return typeof(x)=='string'?'Error':x*50+6
  }