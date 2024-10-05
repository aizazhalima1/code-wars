//Your task is to sum the differences between consecutive pairs in the array in descending order.





//Solution
function sumOfDifferences(arr) {
  
    let p=[]
    arr=arr.sort((a,b)=>b-a)
   
    for(let i=1;i<arr.length;i++){
      p.push(arr[i-1]-arr[i])
    }
    
    return p.reduce((acc,c)=> acc + c, 0)
    
  }