//Given a list of integers, determine whether the sum of its elements is odd or even.





//Solution
function oddOrEven(array) {
    let sum=array.reduce((acc,c)=> acc + c ,0,)
    if(sum%2==0){
      return 'even'
    }
     else{return 'odd'}
   }