//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.





//Solution
function replace(s){
    s=s.replaceAll(/[aeiou]/gi,'!')
    return s
    
  }