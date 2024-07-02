//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.





//Solution
function getCount(str) {
    let count=0
    let apr=str.split('')
    let newp=[]
    for(i=0;i<=apr.length-1;i++){
      if(['a','e','i','o','u'].includes(apr[i])){
        newp.push(apr[i])
      }
      
    }
    
   return(newp.length)
    }