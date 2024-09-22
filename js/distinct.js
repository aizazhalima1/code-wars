//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

//The order of the sequence has to stay the same.





//Solution
function distinct(a) {
    let arr=[a[0]]
    a.forEach((x)=> arr.includes(x)? arr=arr : arr.push(x))
    return arr
  }