//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//You can assume all values in the array are numbers.





//Solution
function smallEnough(a, limit){
    let newarr=a.filter((x)=>x<=limit)
    return newarr.length==a.length ? true :false;
  }