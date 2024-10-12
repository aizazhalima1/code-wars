//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.





//Solution
function isIsogram(str){
    if(str.length==0){
      return true
    }
    else{
   str=str.toLowerCase().split('')
    str=str.filter((x)=>str.indexOf(x)!=str.lastIndexOf(x))
      return str.length>0? false : true
  }
  }