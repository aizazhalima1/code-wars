//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)





//Solution
function rowSumOddNumbers(n) {
    let numOfTerm=0
    let numOfTerp=0
    for(let i=1;i<=n-1;i++){
      numOfTerm+=i
    }
     for(let i=1;i<=n;i++){
      numOfTerp+=i
    }
     let term=numOfTerm
     let terp=numOfTerp
     let firstVal=1+2*(numOfTerm)
     let lastVal=1+2*(numOfTerp-1)
     let sum=0
     for(let p=firstVal;p<=lastVal;p+=2){
       sum+=p 
     }
     return sum
   
   }