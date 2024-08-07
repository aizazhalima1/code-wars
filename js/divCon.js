//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

//Return as a number.





//Solution
function divCon(x){
    let sum=0
    x.forEach((y)=>{
      if(typeof(y)=='number'){
        sum += y
      }
      else{
        y=Number(y)
        sum -= y
      }
    })
    return sum
  
  }