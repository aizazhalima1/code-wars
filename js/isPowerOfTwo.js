//Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.





//Solution
function isPowerOfTwo(n){
    let an= (Math.log(n))/Math.log(2)
    if(n==0){
      return false
    }
    else if(2**(Math.floor(an))==n){
      return true
    }
     else{
       return false
     }
   }
   