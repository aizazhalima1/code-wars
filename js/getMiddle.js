//You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.





//Solution
function getMiddle(s)
{let len=s.length
if(len%2!==0){
  return s[((len+1)/2)-1]
}
 else{
   return s[((len)/2)-1]+s[(len/2)]
 }
  //Code goes here!
}