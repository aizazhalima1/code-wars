//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).





//Solution
function minValue(values){
    let num=''
    let newArr=[]
    for(let i=0;i<values.length;i++){
      if(!newArr.includes(values[i])){
        newArr.push(values[i])
      }
    }
    let p=newArr.sort((a,b)=>a-b)
    for(let i=0;i<p.length;i++){
     num=num + p[i]
    }
    return Number(num)
  }