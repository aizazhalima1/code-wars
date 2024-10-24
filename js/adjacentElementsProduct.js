//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.





//Solution
function adjacentElementsProduct(array) {
    let prod=[array[0]*array[1]]
    for(let i=2;i<array.length;i++){
      if(array[i]*array[i-1]>prod[0]){
        prod[0]=array[i]*array[i-1]
      }
    }
     return prod[0]
   }