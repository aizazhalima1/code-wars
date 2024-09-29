//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!





//Solution
function queueTime(customers, n) {
    let til=[]
    for(let p=0;p<n;p++){
      til.push(0)
    }
    for(let i=0;i<customers.length;i++){
      let min=Math.min(...til)
      let minInd=til.indexOf(min)
      til[minInd]=til[minInd]+customers[i]
    }
    return Math.max(...til) 
    }