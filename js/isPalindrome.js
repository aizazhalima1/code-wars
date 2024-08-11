//Write a function that checks if a given string (case insensitive) is a palindrome.





//Solution
function isPalindrome(x) {
    // your code here
    if(x.toLowerCase().split('').reverse().join('')==x.toLowerCase()){
      return true
    }
    else{return false}
  }