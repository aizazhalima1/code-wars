//Your task is to find the first element of an array that is not consecutive.

//By not consecutive we mean not exactly 1 larger than the previous element of the array.



//Solution
function firstNonConsecutive (arr) {
    if(arr.length<=1){
      return null
    }
    else if(arr[0]+arr.length-1==arr[arr.length-1]){
      return null
    }
      else{
    let val=arr[0]+1
    for(let i=1;i<arr.length-1;i++){
      if(arr[i]==val){
        val++
      }
      else{
        return arr[i]
      }}}
    
    }