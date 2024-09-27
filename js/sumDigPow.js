//We need a function to collect these numbers, that may receive two integers  and outputs a list of the sorted numbers in the range that fulfills the property described above.





//Solution
function sumDigPow(a, b) {
    let arr=[]
    for(let i=a;i<=b;i++){
      if(i<10){
        arr.push(i)
      }
      else{
        let count=0
        let narr=(i).toString().split('')
        
        //console.log(narr)
        narr.forEach((x,p)=>
        {count= count + Math.pow(Number(x),p+1)
        return count==i? arr.push(i) : arr=arr})
      }
    }
      return arr
        
      
    }