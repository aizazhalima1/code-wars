//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.





//Solution
function between(a, b) {
    let num=[]
    for(let i=a;i<=b;i++){
      num.push(i)
    }
    return num
  }