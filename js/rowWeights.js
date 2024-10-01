//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.





//Solution
function rowWeights(array){
    //your code here
    let sumFirst=array.filter((x,i)=>i%2==0).reduce((acc,c)=> acc + c , 0)
    let sumSecond=array.filter((x,i)=>i%2!=0).reduce((acc,c)=> acc + c , 0)
    return[sumFirst,sumSecond]
  }