// you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.





//Solution
function tribonacci(signature,n){
    if(n==0){
      return []
    }
      else{
          if(n<signature.length)
            {return signature.slice(0,n)}
          else{
        for(let i=signature.length;i<n;i++){
          signature.push(signature[i-1]+signature[i-2]+signature[i-3])
        }
        return signature
      }
        }
      
    }