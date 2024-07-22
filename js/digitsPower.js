//Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.





//Solution
function digPow(n, p){
    // ...
    let str=n.toString().split('')
    let sum=0
        for(i=0;i<=str.length-1;i++){
      str[i]=Number(str[i])
        sum+=Math.pow(str[i],p)
      p++
      }
   if(sum%Number(str.join(''))==0){
     return sum/Number(str.join(''))
   }
    else{
      return -1
    }
      }