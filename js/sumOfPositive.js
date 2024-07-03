//You get an array of numbers, return the sum of all of the positives ones.





//Solution
function positiveSum(arr) {
    let s=0;
    for(i=0;i<=arr.length-1;i++){
      if(arr[i]>0){
        s+=arr[i]
      }
      else{
        s+=0
      }
    
    }
    return s
  }