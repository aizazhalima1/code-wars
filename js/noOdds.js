//Write a small function that returns the values of an array that are not odd.





//Solution
function noOdds( values ){
    values=values.filter((x)=>x%2==0)
     return values
   }