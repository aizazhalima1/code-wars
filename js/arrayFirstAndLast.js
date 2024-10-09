//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.





//Solution
function array(string) {
    string=string.split(',')
   if( string.length<3){
     return null
   }
     else{
      return string.slice(1,string.length-1).join(' ')
   }
     }