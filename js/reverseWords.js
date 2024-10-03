//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.





//Solution
function reverseWords(str) {
    str=str.split(' ')
    str=str.map((x)=> x.split('').reverse().join('')).join(' ')
      
      return str
    }