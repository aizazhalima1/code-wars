//Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

//Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.



//Solution
function squeakyClean(arr) {
    for(let i=0;i<=arr.length-1;i++){
      arr=arr.filter((x,i)=>(x!=null)&&(x!=0))
      
    }
  return arr
  }