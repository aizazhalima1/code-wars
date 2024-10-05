//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//Division by zero should return NaN.





//Solution
function remainder(n, m){
    return n-m>0 ? n%m : n==0 ? NaN: m%n
  }