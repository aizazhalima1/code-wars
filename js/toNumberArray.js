//Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

//You need to cast the whole array to the correct type.

//Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.





//Solution
function toNumberArray(stringarray){
    let newt=stringarray.map((x)=>Number(x))
    return newt
    
  }