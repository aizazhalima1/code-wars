//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).





//Solution
function solution(str, ending){
    let len=ending.length
    return str.substr(str.length-len,len)==ending? true : false
  }