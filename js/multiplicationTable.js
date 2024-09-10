//Your task, is to create N×N multiplication table, of size provided in parameter.





//Solution
multiplicationTable = function(size) {
    let final=[]
    for(let i=1;i<=size;i++){
      let arr=[]
      for(let j=1;j<=size;j++){
        arr.push(i*j)
      }
      final.push(arr)
    }
    return final
  }