// you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit 





//Solution
function findMultiples(integer, limit) {
    let multiple=[]
  for(let i=integer;i<=limit;i++){
    i%integer==0?multiple.push(i):multiple.push()
  }
    return multiple
  }