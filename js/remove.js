//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.





//Solution
function remove (string) {
    let n=''
   if(string.endsWith('!')){
    return string.slice(0,string.length-1)
     
   }
    else{
      return string
    }
  }