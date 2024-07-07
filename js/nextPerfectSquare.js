//You might know some pretty large perfect squares. But what about the NEXT one?

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.





//Solution
function findNextSquare(sq) {
    if(Number.isInteger(Math.sqrt(sq))){
      let i=sq
      let num=[]
      do{
        i +=1;
        num.push(i);}
      while(Number.isInteger(Math.sqrt(i))==false)
      
      
      return num[num.length-1]}
    
    else{
      return -1
    }
      }