//Write a function that given a floor in the american system returns the floor in the european system





//Solution
function getRealFloor(n) {
    if(n<=0){
      return n
    }
    else if(n>13){
      return n-2
    }
    else{
      return n-1
    } 
  }