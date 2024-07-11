//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.





//Solution
function sumArray(array) {
    if(array==null){
      return 0
    }
    else{
  let newArr=array.sort(function(a, b) {
    return a - b;
  })
  let newArr1=newArr.slice(1,array.length-1)
  
  
  
  return(newArr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,))
  }
  }