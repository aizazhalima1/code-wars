//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.





//Solution
function persistence(num) {
    if(num.toString().split('').length>1){
      let count=0
      let prod=1
      let arr=[]
      let numArr=[]
      
      do{arr=num.toString().split('')
      numArr=arr.map((x)=>Number(x))
      count++
      for(i=0;i<=numArr.length-1;i++){
      prod=prod*numArr[i]}
      num=prod
      prod=1
       
     }while(num.toString().split('').length>1)
       return count
     }
    else{
      return 0}
  }
